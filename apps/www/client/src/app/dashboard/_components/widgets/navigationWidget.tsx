"use client";

// COMPONENT / UTIL
import { LeftNavigationWidget } from "./leftNavigationWidget";
import { TopNavigationWidget } from "./topNavigationWidget";

export const NavigationWidget = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <TopNavigationWidget />
      <LeftNavigationWidget />
    </div>
  );
};
