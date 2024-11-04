"use server";

import { db } from "@vercel/postgres";
import { data } from "autoprefixer";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  //camperId: z.string(),
  email: z.string().email({ message: "Please, enter a valid email." }),
  date: z.string().date(),
});

type FormState = {
  success: boolean;
  error?: string;
};

const client = await db.connect();

const CreateCamper = formSchema.omit({ id: true, date: true });
export async function OnboardingFormAction(
  prevState: FormState,
  formData: FormData
) {
  const { email } = CreateCamper.parse({
    //camperId: formData.get("camperId"),
    email: formData.get("email"),
  });

  console.log("FornData: ", email);

  //const date = new Date().toISOString().split("T")[0];
  const camperId = "kdc_001";

  try {
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
    /* if (queryResponse.rowCount) {
      return redirect("/dashboard");
    } */
    //return queryResponse.rows[0];
    console.log(queryResponse.rows[0]);

    return { success: true };
  } catch (error: any) {
    if (error.code === "23505") {
      console.log("Database Error: ", error.code);
      return { success: false, error: "Kindly choose a different email." };
    }

    return {
      success: false,
      error: "Oops!!! Something went wrong. Kindly try again.",
    };
    throw new Error("Failed to record camper");

    //return redirect("/error");
  }
}
