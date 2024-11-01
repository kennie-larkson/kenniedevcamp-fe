import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "KennieDevCamp",
  description: "Welcome to KennieDevCamp -- the developer camp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
