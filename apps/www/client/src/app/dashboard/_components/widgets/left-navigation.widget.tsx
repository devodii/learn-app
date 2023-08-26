import Link from "next/link";
import { usePathname } from "next/navigation";

// ICON
import { GoGoal } from "react-icons/go";
import { BiStats } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

// COMPONENT / UTIL
import { clsx } from "clsx";
import { isActivePath } from "@/dashboard/_lib";
import { UserEmailWidget } from "./email.widget";

const links: any = [
  { icon: GoGoal, text: "Study goals", href: "/dashboard/goals" },
  { icon: BiStats, text: "Study stats", href: "/dashboard/study" },
  {
    icon: MdWorkspacePremium,
    text: "Upgrade now",
    href: "/dashboard/upgrade",
  },
];

export const LeftNavigationWidget = () => {
  const pathname = usePathname();
  return (
    <nav className="min-w-fit mt-14 w-64 fixed top-0 bottom-0 py-4 border-r-[1.7px] border-r-[#2c2c2c]">
      <UserEmailWidget />
      <ul className="flex flex-col gap-4 ml-4 mt-12">
        {links.map((link: any) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex items-center pl-4 gap-2 rounded-s-full rounded-l-full cursor-pointer w-full py-2.5",
                isActivePath(pathname, link.href) &&
                  "bg-app-light-gray hover:bg-app-light-gray",
                isActivePath(pathname, link.href)
                  ? "hover:bg-app-light-gray"
                  : "hover:bg-[#2c2c2c70]"
              )}
            >
              <link.icon className="text-2xl" />
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* TODO: Move this to another component */}
      <button className="fixed w-64 bottom-0 border-t-[1.7px] border-t-[#2c2c2c] py-2">
        Collapse sidebar
      </button>
    </nav>
  );
};
