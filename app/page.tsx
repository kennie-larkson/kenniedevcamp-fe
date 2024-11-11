"use client";

import "@/app/ui/globals.css";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import Header from "./ui/header";
import { OnboardingForm } from "./ui/onboarding-form";
import { useOnboardErrorContext } from "./error/errorcontext";
import { useEffect, useState } from "react";
import AlertModal from "./ui/alert-modal";
import Link from "next/link";
import { courses } from "./courses/courses";
import { resources } from "./resources/resources";

export default function Page() {
  const { error, success } = useOnboardErrorContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"error" | "success">("error");

  // Effect to open the modal when there's an error or success
  useEffect(() => {
    if (error) {
      setModalMessage(error);
      setModalType("error");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 10000);
    } else if (success) {
      setModalMessage(success);
      setModalType("success");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 10000);
    }
  }, [error, success]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col md:p-6 md:pt-0 bg-slate-200 ">
      <Header />
      {isModalOpen && (
        <AlertModal
          message={modalMessage}
          type={modalType}
          onClose={handleCloseModal}
        />
      )}
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

            <div className="flex flex-col items-center justify-center mt-10 md:mt-0 w-full ">
              <OnboardingForm />
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <hr className="border-t-4 rounded-md border-cyan-400 font-extrabold w-full " />
        </div>
        <section id="courses" className="p-6 mt-12 ">
          <h2 className="text-2xl font-bold mt-12 ">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4">
                <h3 className="font-semibold">{course.title}</h3>
                <p>{course.description}</p>
                <Link href={`/courses/${course.id}`} className="text-blue-500">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="flex mt-6">
          <hr className="border-t-4 rounded-md border-indigo-400 font-extrabold w-full " />
        </div>
        <section id="resources" className="p-6">
          <h2 className="text-2xl font-bold">Learning Resources</h2>
          <input
            type="text"
            placeholder="Search resources..."
            className="border p-2 rounded w-full md:w-3/4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="border rounded-lg p-4">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href={resource.link} className="text-blue-500">
                  View Resource
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

//    bg-gradient-to-r from-cyan-600 via-cyan-300 to-indigo-400
