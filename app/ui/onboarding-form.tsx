"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { signupCamper } from "../authentication/camper-signup";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useOnboardContext } from "../error/errorcontext";
import { useRouter } from "next/navigation";
import { storage } from "../lib/localStorage";

export function OnboardingForm() {
  const { setError, setSuccess, setToken } = useOnboardContext();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleEmail = useDebouncedCallback((value: string) => {
    setEmail(value);
  }, 1000);
  async function handleFormSubmission(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    try {
      if (!email || email.length === 0 || email === "") {
        setError("Kindly enter a valid email");
        setTimeout(() => setError(""), 10000);
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      const response = await signupCamper({ success: false }, formData);

      if (response.error) {
        setError(response.error);
        return;
      }

      if (response.success && response.access_token) {
        setSuccess("Welcome to KennieDevCamp!");
        setToken(response.access_token);
        storage.setCamperId(response.camper_id);
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An unexpected error occured.");
    }
  }
  return (
    <form className="flex flex-col w-4/5 justify-center items-center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email here"
        onChange={(e) => handleEmail(e.target.value)}
        className="w-4/5 md:w-3/5 py-2 px-2 rounded-2xl border-2 border-gray-400 focus:border-black transition-colors duration-200"
      />

      <button
        type="submit"
        onClick={handleFormSubmission}
        className="bg-slate-800 h-8 hover:bg-purple-500 flex items-center justify-center mt-4 md:mt-6 text-white w-4/5 md:w-3/5 md:h-12 rounded-md"
      >
        <span className="text-sm md:text-base font-bold">Become a camper</span>
        <ArrowRightIcon className="hidden md:block md:w-6 ml-4" />
      </button>
    </form>
  );
}
