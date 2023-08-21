import Link from "next/link";
import { usePathname } from "next/navigation";


// ICON
import { GoGoal } from "react-icons/go";
import { BiStats } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

// COMPONENT / UTIL
import { clsx } from "clsx";
import { isActivePath } from "@/dashboard/_lib";

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
    const pathname = usePathname()
    return (
      <nav className="min-w-fit mt-16 w-64 fixed top-0 bottom-0 py-4 flex flex-col gap-12">
    <ul className="flex flex-col gap-4 mx-2">
      {links.map((link: any) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={clsx(
              "flex items-center pl-4 gap-2 hover:bg-app-light-gray rounded-full cursor-pointer w-full py-2.5",
              isActivePath(pathname, link.href) && "bg-red-500"
            )}
          >
            <link.icon className="text-2xl" />
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  )
};
