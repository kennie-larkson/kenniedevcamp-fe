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
  //const backgroundImage = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgMzI1IDEwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJzc3NwaWxsLWdyYWQiPjxzdG9wIHN0b3AtY29sb3I9ImhzbCgyNjUsIDU1JSwgMzAlKSIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjQ1JSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImhzbCgyNjUsIDU1JSwgNjAlKSIgc3RvcC1vcGFjaXR5PSIxIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJoc2woMjkyLCAxMDAlLCAyMiUpIj48L3JlY3Q+PGcgZmlsbD0idXJsKCNzc3NwaWxsLWdyYWQpIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjQwIiBmaWxsPSJoc2woMjY1LCA1NSUsIDMwJSkiPjwvcmVjdD4KCiAgICA8cmVjdCB4PSIwIiB3aWR0aD0iNy42OSUiIGhlaWdodD0iNjMuMjU4ODkxMzY4NzkwNjE0IiByeD0iMTUiPjwvcmVjdD4KICAgICAgPHJlY3QgeD0iNTAiIHdpZHRoPSI3LjY5JSIgaGVpZ2h0PSI3Ni4zMjY5Mjg0NzA3MTQwNyIgcng9IjE1Ij48L3JlY3Q+CiAgICAgIDxyZWN0IHg9IjEwMCIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjU2Ljg0NjI4ODIzMTc5NTEzNSIgcng9IjE1Ij48L3JlY3Q+CiAgICAgIDxyZWN0IHg9IjE1MCIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjU5Ljc4NDUxMzA0NTU5MTIyIiByeD0iMTUiPjwvcmVjdD4KICAgICAgPHJlY3QgeD0iMjAwIiB3aWR0aD0iNy42OSUiIGhlaWdodD0iODUuMDQ0MTEzOTQzMDIyMiIgcng9IjE1Ij48L3JlY3Q+CiAgICAgIDxyZWN0IHg9IjI1MCIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjgxLjEwNjExMDgyNDMyNjEyIiByeD0iMTUiPjwvcmVjdD4KICAgICAgPHJlY3QgeD0iMzAwIiB3aWR0aD0iNy42OSUiIGhlaWdodD0iNjEuODMzNDYwNDk1NTgzMTEiIHJ4PSIxNSI+PC9yZWN0PgogIDwvZz48ZyBmaWxsPSJoc2woMjkyLCAxMDAlLCAyMiUpIj4KICAgIDxyZWN0IHg9IjI1IiB5PSIyNi41NTM0MzA0ODg1MzYxNyIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjYwIiByeD0iMTUiPjwvcmVjdD4KICAgICAgPHJlY3QgeD0iNzUiIHk9IjE2LjU2MDg1MTY5MjkzMjUwMiIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjYwIiByeD0iMTUiPjwvcmVjdD4KICAgICAgPHJlY3QgeD0iMTI1IiB5PSIyMi41NzM2MDYzMjYzNDYyMjMiIHdpZHRoPSI3LjY5JSIgaGVpZ2h0PSI2MCIgcng9IjE1Ij48L3JlY3Q+CiAgICAgIDxyZWN0IHg9IjE3NSIgeT0iMjAuMjcyNTUzMzE3MjMxMTk2IiB3aWR0aD0iNy42OSUiIGhlaWdodD0iNjAiIHJ4PSIxNSI+PC9yZWN0PgogICAgICA8cmVjdCB4PSIyMjUiIHk9IjIwLjUzMzg4NDkxMzM5OTg1IiB3aWR0aD0iNy42OSUiIGhlaWdodD0iNjAiIHJ4PSIxNSI+PC9yZWN0PgogICAgICA8cmVjdCB4PSIyNzUiIHk9IjI2LjgzNzgxNzgwNDAyODcyNCIgd2lkdGg9IjcuNjklIiBoZWlnaHQ9IjYwIiByeD0iMTUiPjwvcmVjdD4KICA8L2c+PC9zdmc+")`;
  const backgroundImage = `url("")`;

  return (
    <div
      className={`flex flex-col border-b-4 space-y-2 md:space-y-0 md:flex-row mt-0 mb-6 h-10 border-0 sticky top-0 z-50 rounded-lg md:rounded-none items-start md:items-end justify-start md:justify-between md:px-3 md:h-28 md:text-xl bg-slate-200 `}
      //style={{ backgroundImage: `${backgroundImage}` }}
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
