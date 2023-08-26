import Link from "next/link";
import React from "react";

export const TopNavigationWidget = () => {
  return (
    <div className="w-full bg-zinc-900 z-10 fixed right-0 left-0 top-0 flex justify-between items-center pr-8 py-2 border-b-[1.7px] border-b-[#2c2c2c]">
      <Link href="/dashboard" className="text-2xl mx-8 font-bold">
        LearnApp
      </Link>
      <div className="w-full bg-zinc-900 flex justify-end gap-4 items-center sticky top-4 py-3 z-10">
        <div className="self-end">Notfication</div>
        <div>User</div>
      </div>
    </div>
  );
};

export {};
