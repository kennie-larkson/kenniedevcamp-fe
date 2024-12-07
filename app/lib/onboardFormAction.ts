"use server";

import { db } from "@vercel/postgres";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: "Please, enter a valid email." }),
  date: z.string().date(),
});

type FormState = {
  success: boolean;
  error?: string;
};

interface DatabaseError extends Error {
  code?: string; // Optional, as not all errors may have a code
}

const client = await db.connect();

const CreateCamper = formSchema.omit({ id: true, date: true });
export async function OnboardingFormAction(
  prevState: FormState,
  formData: FormData
) {
  try {
    const { email } = CreateCamper.parse({
      email: formData.get("email"),
    });

    const camperId = "kdc_001";

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS kdcampers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      camper_id TEXT NOT NULL
    );
  `;
    const queryResponse = await client.sql`
  INSERT INTO kdcampers ( email, camper_id) VALUES ( ${email}, ${camperId}) RETURNING *`;

    console.log("Onboard Query Response: ", queryResponse.rowCount);

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors

      const errorMessages = error.errors.map((err) => err.message).join(", ");
      return { success: false, error: errorMessages };
    }
    const dbError = error as DatabaseError; // Type assertion
    if (dbError.code === "23505") {
      return { success: false, error: "Kindly choose a different email." };
    }

    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
    };
  }
}
