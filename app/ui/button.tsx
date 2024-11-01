import Link from "next/link";

export default function Button({ type }: { type: string }) {
  return (
    <div className="flex w-2/4 justify-center md:w-1/4 items-end">
      <Link
        href="/signin"
        className=" text-black hover:text-white md:mt-4 md:px-4 md:py-2 "
      >
        <p className="text-xs md:text-sm font-normal md:font-semibold">
          {type}
        </p>
      </Link>
    </div>
  );
}
