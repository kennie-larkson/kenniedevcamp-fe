"use server";

import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function verifyAuth() {
  const token = cookies().get("camper_token")?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, SECRET_KEY);
    return verified.payload;
  } catch (err) {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  cookies().set("camper_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600, // 1 hour
  });
}
