"use server";

import { db } from "@vercel/postgres";

export async function getUserEnrollmentRecords(camper_id: string) {
  const client = await db.connect();

  try {
    const enrollmentResult = await client.sql`
        SELECT * FROM enrollments WHERE camper_id = ${camper_id}
        `;

    if (enrollmentResult.rowCount === 0) {
      return { success: false, error: "You have no course enrollments." };
    }

    const enrollments = enrollmentResult.rows;

    return { success: true, enrollments };
  } catch (error) {
    return { success: false, error };
  }
}

export async function getUserActivityRecords(camper_id: string) {
  const client = await db.connect();
  try {
    const activitiesResult = await client.sql`
        SELECT * FROM activities WHERE camper_id = ${camper_id}

        `;

    if (activitiesResult.rowCount === 0) {
      return {
        success: false,
        message: "You have no record of activities.",
      };
    }

    const activities = activitiesResult.rows;

    return { success: true, activities };
  } catch (error) {
    return { success: false, error };
  }
}

interface DashboardData {
  camper_id: string;
}

export async function getUserDashboardRecords(data: string) {
  try {
    //const { camper_id } = data;
    const { enrollments } = await getUserEnrollmentRecords(data);
    const { activities } = await getUserActivityRecords(data);

    return { enrollments, activities };
  } catch (error) {}
}
