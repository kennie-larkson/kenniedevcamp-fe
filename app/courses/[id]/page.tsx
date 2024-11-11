"use client";
import { usePathname } from "next/navigation";
import { courses } from "../courses"; // Adjust the import path accordingly
import CourseNavbar from "@/app/ui/courses/navbar";

const CoursePage = () => {
  const pathName = usePathname();

  const id = pathName.split("/").pop(); // Get the dynamic route

  // Find the course based on the ID
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found</div>; // Handle case where course does not exist
  }

  return (
    <div className="flex flex-col ">
      <CourseNavbar />
      <div className="flex flex-col  p-6 w-full min-h-screen bg-slate-300">
        <div className="flex justify-center items-center">
          <div className="flex text-center">
            <h1 className="text-3xl">{course.title}</h1>
          </div>
        </div>

        <div className="flex flex-col mt-6 p-3 border rounded-md ">
          <div className=" text-white text-lg space-y-4 p-4 leading-relaxed">
            <p>Description: {course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
            <p>Prerequisites: {course.prerequisites}</p>
            {/* <p>Instructor: {course.instructor}</p> */}
            {/* Add more course details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
