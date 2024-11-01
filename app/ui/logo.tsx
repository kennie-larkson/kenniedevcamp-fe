import { HomeModernIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <div className="flex">
      <Link
        href="/"
        className="flex items-end justify-end md:justify-start md:items-end md:pb-2 md:px-4 leading-none text-purple-600"
      >
        <HomeModernIcon className="h-8 w-8 md:h-16 md:w-16  " />

        <div className="flex">
          <p className="font-normal md:font-semibold">KennieDevCamp</p>
        </div>
      </Link>
    </div>
  );
}
