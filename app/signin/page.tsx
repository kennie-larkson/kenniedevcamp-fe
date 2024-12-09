"use client";

import Image from "next/image";
import Link from "next/link";
import { lusitana } from "../ui/fonts";
import { useOnboardContext } from "../error/errorcontext";
import { useRouter } from "next/navigation";
import camperSignin from "../authentication/camper-signin";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { storage } from "../lib/localStorage";

export default function SignInPage() {
  const { setError, setSuccess, error, success } = useOnboardContext();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = useDebouncedCallback((value: string) => {
    setEmail(value);
  }, 1000);
  const handlePassword = useDebouncedCallback((value: string) => {
    setPassword(value);
  }, 1000);

  async function handleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    // TODO: Implement sign-in logic
    // For now, just showing the structure
    event.preventDefault();
    try {
      if (!email || email.length === 0 || email === "") {
        setError("Kindly enter a valid email");
        setTimeout(() => setError(""), 10000);
        return;
      }
      if (!password || password.length === 0 || password === "") {
        setError("Kindly enter a valid password");
        setTimeout(() => setError(""), 10000);
        return;
      }
      // Add sign-in logic here
      console.log("form data sent");
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await camperSignin({ success: false }, formData);

      if (response?.error) {
        setError(response.error);
        return;
      }

      if (response?.success && response.camper_id) {
        storage.setCamperId(response.camper_id);
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Failed to sign in. Please try again.");
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-200">
      {/* Background container */}
      <div className="flex min-h-screen items-center justify-center p-6 md:p-24">
        <div className="relative flex w-full max-w-[850px] items-center justify-center overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
          {/* Left side - Image */}
          <div className="relative hidden md:block md:w-1/2 h-[600px]">
            <Image
              src="/rockstar_techie.jpeg" // Update this path to match your image location
              alt="KennieDevCamp"
              fill
              priority
              className=" object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Right side - Sign In Form */}
          <div className="w-full p-8 md:w-1/2 md:p-12">
            <div
              className={`${
                !error ? "hidden" : "bg-slate-200 text-red-500 p-4 text-sm"
              } `}
            >
              {error}
            </div>
            <div className="mb-8">
              <h1
                className={`${lusitana.className} text-3xl font-bold text-slate-100 mb-2`}
              >
                Welcome back!
              </h1>
              <p className="text-slate-400">
                Sign in to continue your learning journey
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => handleEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => handlePassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                onClick={handleSignIn}
                className="w-full rounded-lg bg-purple-500 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors duration-200"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/"
                className="text-purple-500 hover:text-purple-400 font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
