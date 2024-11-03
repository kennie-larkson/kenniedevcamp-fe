import Link from "next/link";

export default function OnboardError() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <p className="text-center text-2xl ">Oops!!! Something went wrong</p>
      <Link href="/">
        <p className="text-center text-white text-2xl rounded-lg border bg-purple-600/55 p-3 mt-2 ">
          Go back home
        </p>
      </Link>
    </div>
  );
}
