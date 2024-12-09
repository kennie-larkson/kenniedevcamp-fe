"use server";

import { db } from "@vercel/postgres";
import { z } from "zod";
import { trackActivity } from "./track_activities";

const enrollmentSchema = z.object({
  camperId: z.string(),
  courseId: z.string(),
});

export async function enrollInCourse(formData: FormData) {
  const client = await db.connect();

  try {
    const { camperId, courseId } = enrollmentSchema.parse({
      camperId: formData.get("camperId"),
      courseId: formData.get("courseId"),
    });

    /*   await client.sql`
        CREATE TABLE IF NOT EXISTS enrollments (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        camper_id TEXT REFERENCES kdcampers(camper_id),
        course_id TEXT REFERENCES courses(course_id),
        enrollment_status TEXT NOT NULL,
        progress_percentage INTEGER DEFAULT 0,
        enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(camper_id, course_id)
    );
    `; */

    // Check if the enrollment already exists
    const existingEnrollment = await client.sql`
      SELECT * FROM enrollments WHERE camper_id = ${camperId} AND course_id = ${courseId}
    `;

    if (existingEnrollment.rowCount! > 0) {
      return {
        success: false,
        error: "You are already enrolled in this course.",
      };
    }

    await client.sql`
      INSERT INTO enrollments (camper_id, course_id, enrollment_status)
      VALUES (${camperId}, ${courseId}, 'course_enrollement')
    `;

    // Track this activity
    await trackActivity({
      camperId,
      type: "course_enrollment",
      description: `Enrolled in course ${courseId}`,
    });

    return { success: true };
  } catch (error) {
    // Error handling
    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
    };
  }
}
