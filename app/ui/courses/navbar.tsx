import Link from "next/link";

export default function CourseNavbar() {
  return (
    <div className="flex w-full">
      <div className="flex w-full space-x-3 p-4 bg-indigo-400">
        <ul>
          <Link href="/">Home</Link>
        </ul>
      </div>
    </div>
  );
}
