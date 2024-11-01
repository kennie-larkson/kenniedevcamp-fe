import HomeLogo from "./logo";
import NavLinks from "./navlinks";
import Button from "./button";
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";
import Image from "next/image";

export type LinkType = {
  linkText: string;
  href: string;
  linkIcon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  id: string;
};

export const links: LinkType[] = [
  { linkText: "Home", href: "#home", linkIcon: HomeIcon, id: "#home" },
  {
    linkText: "Articles",
    href: "#articles",
    linkIcon: BookOpenIcon,
    id: "#articles",
  },
  {
    linkText: "Tutorials",
    href: "#tutorials",
    linkIcon: UserGroupIcon,
    id: "#tutorials",
  },
  {
    linkText: "Meet Kennie",
    href: "/profile",
    linkIcon: HandRaisedIcon,
    id: "#profile",
  },
];

export default function Header() {
  return (
    <div
      className={`flex flex-col border-b-4 space-y-2 md:space-y-0 md:flex-row mt-0 mb-6 h-10 border-0 sticky top-0 z-50 rounded-lg md:rounded-none items-start md:items-end justify-start md:justify-between md:px-3 md:h-28 md:text-xl bg-slate-200 `}
    >
      <HomeLogo />
      <div className="flex w-full justify-center py-3 md:py-0 md:justify-between space-x-0 md:space-x-3  bg-gradient-to-r from-cyan-600 via-cyan-300 to-indigo-400  ">
        <NavLinks links={links} />
        <Button type="SIGN IN" />
      </div>
    </div>
  );
}

// bg-gradient-to-r from-cyan-600 via-cyan-300 to-indigo-400
