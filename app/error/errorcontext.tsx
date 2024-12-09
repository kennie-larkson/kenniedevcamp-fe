"use client";

import { createContext, useContext, useState } from "react";

interface OnboardContextType {
  error: string;
  setError: (error: string) => void;
  success: string;
  setSuccess: (success: string) => void;
  access_token: string | undefined;
  setToken: (token: string) => void;
}
const OnboardContext = createContext<OnboardContextType | undefined>(undefined);

export const OnboardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [access_token, setToken] = useState<string | undefined>(undefined);
  return (
    <OnboardContext.Provider
      value={{ error, success, access_token, setError, setSuccess, setToken }}
    >
      {children}
    </OnboardContext.Provider>
  );
};

export const useOnboardContext = () => {
  const context = useContext(OnboardContext);
  if (!context) {
    throw new Error(
      "useOnboardErrorContext must be within an useOnboardErrorContextProvider"
    );
  }
  return context;
};
