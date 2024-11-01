import { LinkType } from "./header";
import NavLink from "./navlink";

export default function NavLinks({ links }: { links: LinkType[] }) {
  return (
    <div className="flex items-center text-slate-500 justify-start md:justify-around px-0 md:px-2 md:mt-6 w-full md:w-4/5  ">
      {links.map((link) => (
        <div className="w-full " key={link.id}>
          {" "}
          <NavLink link={link} />
        </div>
      ))}
    </div>
  );
}
