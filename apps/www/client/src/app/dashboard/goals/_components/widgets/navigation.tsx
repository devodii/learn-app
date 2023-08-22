import Link from "next/link";

export const GoalSideNavigationWidget = () => {
  // TODO: carry out   a fetch to get user's naviations
  return (
    <nav className=" max-w-max h-screen">
      <div className="text-gray-200 mb-2 text-lg">Navigation</div>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            href={"/dashboard/goals/study"}
            className="underline underline-offset-2 text-gray-100"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/goals/projects"}
            className="underline underline-offset-2 text-gray-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/goals/todo"}
            className="underline underline-offset-2 text-gray-100"
          >
            To-do
          </Link>
        </li>
      </ul>
    </nav>
  );
};
