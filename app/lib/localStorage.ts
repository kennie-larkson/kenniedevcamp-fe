"use client";

const STORAGE_KEYS = {
  CAMPER_ID: "kenniedevcamp_camper_id",
  //AUTH_TOKEN: "kenniedevcamp_auth_token",
} as const;

export const storage = {
  setCamperId: (camperId: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.CAMPER_ID, camperId);
    }
  },
  getCamperId: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEYS.CAMPER_ID);
    }
    return null;
  },
  /* setAuthToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    }
  }, */
  clearStorage: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEYS.CAMPER_ID);
      //localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    }
  },
};
