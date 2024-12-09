"use server";

import { db } from "@vercel/postgres";

export async function getCourseById(courseId: string) {
  const client = await db.connect();

  try {
    const result = await client.sql`
      SELECT * FROM courses WHERE course_id = ${courseId}
    `;

    if (result.rowCount === 0) {
      throw new Error("Course not found");
    }

    return result.rows[0];
  } catch (error) {
    console.error("Error fetching course:", error);
    throw new Error("Failed to fetch course");
  }
}
