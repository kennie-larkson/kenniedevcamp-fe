import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { LinkType } from "./header";

export default function NavLink({ link }: { link: LinkType }) {
  return (
    <>
      <div id={link.id} className="flex items-end">
        <Link
          href={link.href}
          className="flex items-center space-x-3 md:space-x-1 justify-center hover:text-white"
        >
          <link.linkIcon className="hidden md:flex items-center justify-center  h-4 w-4" />

          <p className="text-xs md:text-lg font-normal md:font-semibold">
            {link.linkText}
          </p>
        </Link>
      </div>
    </>
  );
}
