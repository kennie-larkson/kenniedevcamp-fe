"use client";

import { useEffect, useState } from "react";
import { getUserDashboardRecords } from "../db_operations/userdashboard_records";
import type { QueryResultRow } from "@vercel/postgres";
import { storage } from "../lib/localStorage";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [enrolledCourses, setEnrolledCourses] = useState<
    QueryResultRow[] | undefined
  >(undefined);
  const [activities, setActivities] = useState<QueryResultRow[] | undefined>(
    undefined
  );
  const [camperId, setCamperId] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function getRecords() {
      const camperId = storage.getCamperId();

      if (!camperId) {
        router.push("/signin");
        return;
      }
      const result = await getUserDashboardRecords(camperId);
      if (!result) return;

      setCamperId(camperId);
      const { enrollments, activities } = result;
      setEnrolledCourses(enrollments);
      setActivities(activities);
    }

    getRecords();
  }, [router]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full flex-col space-y-4">
        <div>
          <p>
            Welcome, camper <strong>{camperId}</strong> !!! This is your
            personal area where you keep track of your activities and course
            progress.
          </p>
        </div>
        <div className="bg-yellow-400 grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-lg md:p-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">My Courses</h2>
            <div className="grid gap-4">
              {enrolledCourses?.map((course) => (
                <div key={course.course_id} className="flex">
                  <div className="text-white">{course.course_id}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Activity</h2>

            {activities?.map((activity) => (
              <div key={activity.id} className="flex">
                <div className="text-white">{activity.activity_type}</div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

//    {/* <CourseCard key={course.id} course={course} /> */}

//    <ActivityFeed activities={activities} />
