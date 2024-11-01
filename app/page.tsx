"use client";

import "@/app/ui/globals.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import Header from "./ui/header";

export default function Page() {
  async function handleSubmission() {
    console.log("form submitted");
  }
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

            <div className="flex flex-col items-center justify-center mt-10 md:mt-0 w-full">
              <input
                type="email"
                name=""
                id=""
                placeholder="enter your email here"
                className="w-4/5 md:w-3/5 py-2 px-2 rounded-2xl border-2 border-gray-400 focus:border-black transition-colors duration-200"
              />

              <button
                type="submit"
                onClick={handleSubmission}
                className="bg-slate-800 h-8 hover:bg-purple-500 flex items-center justify-center mt-4 md:mt-6 text-white w-4/5 md:w-3/5 md:h-12 rounded-md"
              >
                <span className="text-sm md:text-base font-bold">
                  Become a camper
                </span>
                <ArrowRightIcon className="hidden md:block md:w-6 ml-4" />
              </button>
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
