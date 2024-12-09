"use server";

import { db } from "@vercel/postgres";
import { z } from "zod";
import { setAuthCookie } from "./auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signinSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

type FormState = {
  success: boolean;
  error?: string;
};

export default async function camperSignin(
  prevState: FormState,
  formData: FormData
) {
  const client = await db.connect();
  try {
    const { email, password } = signinSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const result = await client.sql`
    SELECT * FROM kdcampers WHERE email=${email}
    `;
    if (result.rowCount === 0) {
      console.log("no data");

      return { success: false, error: "User not found. Kindly sign up." };
    }

    const user = result.rows[0];

    if (!user.password) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update the user's password in the database
      await client.sql`
        UPDATE kdcampers SET password = ${hashedPassword} WHERE email = ${email}
      `;

      // Generate JWT token
      const access_token = jwt.sign(
        { email, camperId: user.camper_id },
        process.env.JWT_SECRET as string,
        { expiresIn: "20m" }
      );

      // Set the auth cookie
      await setAuthCookie(access_token);

      return {
        success: true,
        error: "",
        //access_token,
        camper_id: user.camper_id,
      };
    } else {
      // Verify the supplied password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        // Generate JWT token
        const access_token = jwt.sign(
          { email, camperId: user.camper_id },
          process.env.JWT_SECRET as string,
          { expiresIn: "20m" }
        );

        // Set the auth cookie
        await setAuthCookie(access_token);

        return {
          success: true,
          error: "",
          //access_token,
          camper_id: user.camper_id,
        };
      } else {
        return {
          success: false,
          error: "Incorrect password. Please try again.",
        };
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors

      const errorMessages = error.errors.map((err) => err.message).join(", ");
      return { success: false, error: errorMessages };
    }

    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
    };
  }
}
