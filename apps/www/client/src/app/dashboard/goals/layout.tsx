import { ReactNode } from "react";
import { H1 } from "@/dashboard/component";
import { GoalSideNavigationWidget } from "./_components";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="ml-2 flex flex-col gap-6">
      <H1 value="My Goals" />

      <div className="flex gap-12 w-full">
        <GoalSideNavigationWidget />
        <div className="w-full lg:w-4/5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
