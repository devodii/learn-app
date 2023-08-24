"use client";
import { Search } from "../search";
import { H1 } from "../typography";
import { useCallback, useRef, useState, useEffect } from "react";
import { SearchValueContainer } from "./searchValueWidget";

interface Props {
  username: string;
}

export const UserGreetingWidget = ({ username }: Props) => {
  const ref = useRef<HTMLInputElement>(null); // Create a ref to the search field.
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setShowModal(value.trim() !== ""); // Show modal if search value is not ""
  }, []);

  const handleCloseModal = () => {
    setSearchValue(""); // Clear search value
    setShowModal(false);
  };

  return (
    <section className="flex gap-8 flex-col flex-1 max-w-xl">
      <H1 value={`Student Dashbord`} />
      {username}
      <div className="relative w-full ">
        <Search ref={ref} handleSearchChange={handleSearchChange} />
        <div className="mt-4 absolute right-0 left-0 bg-zinc-900">
          {showModal && (
            <SearchValueContainer
              searchValue={searchValue}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </div>{" "}
    </section>
  );
};
