"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { createCamper } from "../lib/actions";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function OnboardingForm() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  const handleEmail = useDebouncedCallback((value: string) => {
    setEmail(value);
  }, 3000);

  function handleFormSubmission(event: React.MouseEvent<HTMLButtonElement>) {
    if (email.length === 0 || email === "") {
      event.preventDefault();
      setFormError("Kindly enter a valid email");
      setInterval(() => setFormError(""), 10000);
    }
    return;
  }
  return (
    <form
      action={createCamper}
      className="flex flex-col w-4/5 justify-center items-center"
    >
      <div
        className={`${
          formError.length > 1
        }? flex w-4/5 bg-slate-100 rounded-lg p-2:hidden `}
      >
        <p className="text-sm text-center text-red-500">{formError}</p>
      </div>
      <input
        //value={email}
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
