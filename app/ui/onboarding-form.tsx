"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { OnboardingFormAction } from "../lib/onboardFormAction";
import { useActionState, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useOnboardErrorContext } from "../error/errorcontext";

export function OnboardingForm() {
  const { setError, setSuccess } = useOnboardErrorContext();
  const [state, formAction] = useActionState(OnboardingFormAction, {
    success: false,
    error: "",
  });
  const [email, setEmail] = useState("");
  //const [formError, setFormError] = useState("");
  // Check for errors in the state and set them in the context
  useEffect(() => {
    if (state.error) {
      setError(state.error); // Set the error from the state
    }
    // Clear error after 20 seconds or when success is true
    const timeoutId = setTimeout(() => {
      setError("");
    }, 20000);

    // Clear the timeout if success becomes true
    if (state.success) {
      setError("");
      clearTimeout(timeoutId);
    }

    if (state.success) {
      setSuccess(
        "Congratulations!!! You are now a KennieDevCamp camper. Kindly check your email for the verification code."
      );
      setInterval(() => {
        setSuccess("");
      }, 30000);
    }

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [state.error, state.success, setError, setSuccess]); // Dependency array includes setError to avoid linting issues

  const handleEmail = useDebouncedCallback((value: string) => {
    setEmail(value);
  }, 1000);

  function handleFormSubmission(event: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (email.length === 0 || email === "") {
        event.preventDefault();
        setError("Kindly enter a valid email");
        setTimeout(() => setError(""), 10000);
      }

      return;
    } catch (error) {
      setError("An unexpected error occured.");
    }
  }
  return (
    <form
      action={formAction}
      className="flex flex-col w-4/5 justify-center items-center"
    >
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
