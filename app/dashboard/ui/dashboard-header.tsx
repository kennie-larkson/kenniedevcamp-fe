import {
  HomeIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import HomeLogo from "../../ui/logo";

export default function DashboardHeader() {
  return (
    <div className="flex bg-slate-800">
      <div className="flex items-end">
        <HomeLogo />
        <nav className="flex md:hidden space-x-1">
          <Link
            href="/dashboard"
            className="flex items-center  hover:bg-slate-700 rounded"
          >
            {/* <HomeIcon className="w-5 h-5" /> */}
            <span>Overview</span>
          </Link>
          <Link
            href="/dashboard/courses"
            className="flex items-center hover:bg-slate-700 rounded"
          >
            {/* <BookOpenIcon className="w-5 h-5" /> */}
            <span>My Courses</span>
          </Link>
          <Link
            href="/dashboard/progress"
            className="flex items-center  hover:bg-slate-700 rounded"
          >
            {/* <ChartBarIcon className="w-5 h-5" /> */}
            <span>Progress</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
