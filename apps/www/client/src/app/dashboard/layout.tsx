import React, { ReactNode } from "react";
import { NavigationWidget } from "./_components/widgets";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className=" min-h-screen bg-zinc-900 text-white">
      <NavigationWidget />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
