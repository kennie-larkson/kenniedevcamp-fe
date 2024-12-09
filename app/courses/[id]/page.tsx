"use client";

import { useState, useEffect } from "react";
import { getCourseById } from "../getcourse";
import { usePathname, useRouter } from "next/navigation";
import CourseNavbar from "../../ui/courses/navbar";
import { CourseSkeleton } from "@/app/dashboard/ui/skeletons";
import { verifyAuth } from "@/app/authentication/auth";
import { QueryResultRow } from "@vercel/postgres";

interface ICourse {
  course_id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  prerequisites: string;
}

const CourseContent = ({
  course,
  handleEnroll,
}: {
  course: QueryResultRow;
  handleEnroll: () => void;
}) => {
  return (
    <div className="flex flex-col">
      <CourseNavbar />
      <div className="flex flex-col p-6 w-full min-h-screen bg-slate-100">
        <div className="flex justify-center items-center">
          <div className="flex text-center">
            <h1 className="text-3xl">{course.title}</h1>
          </div>
        </div>
        <div className="flex flex-col mt-6 p-3 border justify-center rounded-md">
          <div className="text-lg space-y-4 p-4 leading-relaxed">
            <p>Description: {course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
            <p>Prerequisites: {course.prerequisites}</p>
          </div>
          <div className="flex p-2 ml-4 bg-blue-500 rounded-lg md:w-1/4 justify-center cursor-pointer hover:bg-blue-600">
            <div className="flex text-white font-medium" onClick={handleEnroll}>
              Enroll now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursePage = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [course, setCourse] = useState<QueryResultRow>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const id = pathName.split("/").pop(); // Get the dynamic route
      if (!id) return;

      try {
        setIsLoading(true);
        const courseData = await getCourseById(id);
        setCourse(courseData);
      } catch (error) {
        setError("Failed to fetch course data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [pathName]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 bg-red-100 text-red-700 rounded-md">{error}</div>
      </div>
    );
  }

  if (isLoading) {
    return <CourseSkeleton />;
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 bg-yellow-100 text-yellow-700 rounded-md">
          Course not found
        </div>
      </div>
    );
  }

  async function handleEnroll() {
    const auth = await verifyAuth();

    if (!auth) {
      console.log("failed auth");

      router.push("/");
      return;
    }
    console.log("passed auth");
    router.push("/dashboard");
  }

  return <CourseContent course={course} handleEnroll={handleEnroll} />;
};

export default CoursePage;
