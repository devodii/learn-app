"use client";

// COMPONENT / UTIL
import { LeftNavigationWidget } from "./left-navigation.widget";
import { TopNavigationWidget } from "./top-navigation-widget";

export const NavigationWidget = () => {
  return (
    <div className="w-full flex flex-col">
      <TopNavigationWidget />
      <LeftNavigationWidget />
    </div>
  );
};
