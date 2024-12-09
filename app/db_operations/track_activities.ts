"use server";

import { db, QueryResultRow } from "@vercel/postgres";

export type ActivityType =
  | "course_enrollment"
  | "course_progress"
  | "course_completion";

interface ActivityData {
  camperId: string;
  type: ActivityType;
  description: string;
  metadata?: Record<string, QueryResultRow>;
}

export async function trackActivity(data: ActivityData) {
  const client = await db.connect();

  try {
    const { camperId, type, description, metadata } = data;
    const metadataString = metadata ? JSON.stringify(metadata) : null;

    /*   await client.sql`
        CREATE TABLE IF NOT EXISTS activities (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        camper_id TEXT REFERENCES kdcampers(camper_id),
        activity_type TEXT NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        metadata JSONB
    );
    `; */

    await client.sql`
      INSERT INTO activities (camper_id, activity_type, description, metadata)
      VALUES (${camperId}, ${type}, ${description}, ${metadataString || null})
    `;

    return { success: true };
  } catch (error) {
    // Error handling
    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
    };
  }
}
