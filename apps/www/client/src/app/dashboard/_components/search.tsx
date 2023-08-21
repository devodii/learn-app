"use client";

import { forwardRef, memo } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import clsx from "clsx";

interface SearchProps {
  handleSearchChange: (query: string) => void; // used by parent to determine whether to show modal containing search results
  ref?: any;
  className?: string;
}

export const Search = memo(
  forwardRef<HTMLInputElement, SearchProps>(
    ({ handleSearchChange, className, ...rest }, ref) => {
      return (
        <div
          className={clsx(
            "flex w-full gap-1.5 items-center border border-gray-500 rounded-md focus-within:outline focus-within:outline-[#3d6dff] focus-within:outline-offset-[2px] transition-all duration-100 focus-within:outline-2 py-2 px-4",
            className
          )}
        >
          <LiaSearchSolid className="text-2xl" />
          <form action="" className="flex-1">
            <input
              className={clsx(
                "w-full focus:border-none focus:outline-none  text-slate-100 bg-inherit"
              )}
              placeholder="Search for topic, or study buddy"
              type="search"
              ref={ref}
              onChange={(e) => handleSearchChange(e.target.value)}
              {...rest}
            />
          </form>
        </div>
      );
    }
  )
);

// declare: displayNames (for debugging)
Search.displayName = "Search";
