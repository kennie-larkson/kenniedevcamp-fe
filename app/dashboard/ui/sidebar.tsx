import {
  BookOpenIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <div className="hidden md:flex w-64 bg-slate-800 text-white p-6">
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center space-x-2 p-2 hover:bg-slate-700 rounded"
        >
          <HomeIcon className="w-5 h-5" />
          <span>Overview</span>
        </Link>
        <Link
          href="/dashboard/courses"
          className="flex items-center space-x-2 p-2 hover:bg-slate-700 rounded"
        >
          <BookOpenIcon className="w-5 h-5" />
          <span>My Courses</span>
        </Link>
        <Link
          href="/dashboard/progress"
          className="flex items-center space-x-2 p-2 hover:bg-slate-700 rounded"
        >
          <ChartBarIcon className="w-5 h-5" />
          <span>Progress</span>
        </Link>
      </nav>
    </div>
  );
}
