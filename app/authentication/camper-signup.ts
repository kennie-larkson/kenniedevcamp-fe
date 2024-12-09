"use server";

import { db } from "@vercel/postgres";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { setAuthCookie } from "./auth";

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  name: z.string().optional(),
});

interface DatabaseError extends Error {
  code?: string; // Optional, as not all errors may have a code
}
type FormState = {
  success: boolean;
  error?: string;
};

export async function signupCamper(prevState: FormState, formData: FormData) {
  const client = await db.connect();

  try {
    const { email } = signupSchema.parse({ email: formData.get("email") });
    const camperId = `kdc_${Date.now()}`;

    const result = await client.sql`
    INSERT INTO kdcampers (email, camper_id) VALUES (${email}, ${camperId}) RETURNING *`;

    const camper = result.rows[0];
    // Generate JWT token

    const access_token = jwt.sign(
      { email, camperId },
      process.env.JWT_SECRET as string,
      { expiresIn: "20m" }
    );

    await setAuthCookie(access_token);

    return {
      success: true,
      error: "",
      access_token,
      camper_id: camper.camper_id,
    };
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
    console.log("Signup error:", error);

    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
      access_token: undefined,
    };
  }
}
