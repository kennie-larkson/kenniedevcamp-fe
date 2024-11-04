"use client";

import { createContext, useContext, useState } from "react";

interface ErrorContextType {
  error: string | null;
  success: string | null;
  setError: (error: string | null) => void;
  setSuccess: (success: string) => void;
}
const OnboardErrorContext = createContext<ErrorContextType | undefined>(
  undefined
);

export const OnboardErrorContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  return (
    <OnboardErrorContext.Provider
      value={{ error, success, setError, setSuccess }}
    >
      {children}
    </OnboardErrorContext.Provider>
  );
};

export const useOnboardErrorContext = () => {
  const context = useContext(OnboardErrorContext);
  if (!context) {
    throw new Error(
      "useOnboardErrorContext must be within an useOnboardErrorContextProvider"
    );
  }
  return context;
};
