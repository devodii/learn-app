"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="bg-red-500 min-h-screen">Hello from Slug - {pathname}</div>
  );
};

export default Page;
