"use client";

import "@/app/ui/globals.css";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import Header from "./ui/header";
import { OnboardingForm } from "./ui/onboarding-form";
import { useOnboardErrorContext } from "./error/errorcontext";

export default function Page() {
  const { error, success } = useOnboardErrorContext();
  return (
    <main className="flex min-h-screen flex-col md:p-6 md:pt-0 bg-slate-200 ">
      <Header />

      <div className="flex flex-col mt-4 md:mt-0 md:p-6 md:pt-0 ">
        <div
          id="#home"
          className="flex flex-col space-y-12 items-start md:items-center justify-start md:justify-center rounded-md md:rounded-none md:rounded-t-md p-6 md:p-20 "
        >
          {/* Background Image */}
          <Image
            src="/rockstar_techie.jpeg"
            alt="Background"
            fill
            priority
            className="object-cover rounded-md md:rounded-none md:rounded-t-md"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50 rounded-md md:rounded-none md:rounded-t-md"></div>

          {/* Content container with relative positioning to appear above the overlay */}
          <div className="relative z-10 flex flex-col md:space-y-6 md:items-center md:justify-center">
            {error && (
              <div className="bg-red-500 text-white p-4 rounded-md mb-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500 text-white p-4 rounded-md mb-4">
                {success}
              </div>
            )}
            <div className="flex flex-col items-center justify-center mt-56 md:mt-24">
              <p
                className={`${lusitana} text-slate-100 antialiased text-3xl md:text-4xl md:leading-relaxed md:text-center`}
              >
                Welcome to{" "}
                <strong className="text-purple-500 bg-black/50 p-2 rounded-md">
                  KennieDevCamp
                </strong>
                ,
                <br /> the web developer and general career development camp.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
              <p
                className={`${lusitana} text-slate-50 antialiased text-base md:text-2xl md:leading-loose text-center `}
              >
                We are driven by a strong passion to assist you in your web
                development learning and general career accomplishments...
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 md:mt-0 w-full ">
              <OnboardingForm />
            </div>
          </div>
        </div>

        {/* <div id="#articles" className={`w-full ${lusitana} antialiased`}>
          <ArticlesComponent />
        </div> */}
      </div>
    </main>
  );
}

//    bg-gradient-to-r from-cyan-600 via-cyan-300 to-indigo-400
