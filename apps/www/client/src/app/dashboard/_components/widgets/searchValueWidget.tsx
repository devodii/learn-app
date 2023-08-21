import { useQuery } from "react-query";
import { searchUser } from "../../_lib/searcher";
import { Modal } from "../modal/modal";
import Link from "next/link";

interface SearchModalProps {
  searchValue: string;
  onClose: () => void;
}

export const SearchValueContainer = ({
  searchValue,
  onClose,
}: SearchModalProps) => {
  return (
    <Modal className="border-[1px] border-gray-500 drop-shadow-md break-words animate-pop-out py-2">
      <h2>Search Results for: {searchValue}</h2>

      {/**
       * TODO: Make searchValue flexible so that it fetches other info apart from username
       */}
      <SearchList searchValue={searchValue} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

const SearchList = ({ searchValue }: { searchValue: string }) => {
  const userId = searchValue; // TODO: Make the user.controller in backend accept username instead of userId
  const { data, isLoading, isError } = useQuery(
    ["userId", userId],
    async () => {
      return await searchUser(userId as string);
    }
  );

  if (isLoading) {
    return <p>Searching..</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <ul className="grod grid-cols-1 gap-2 mt-6 divide-y divide-gray-400">
      {data && data.length > 0 ? (
        data.map((user: any, index: number) => (
          <li key={index} className="group hover:bg-app-light-gray px-4 py-2">
            <Link href={`friends/${user.email}`} className="w-full">
              {user.email}
            </Link>
          </li>
        ))
      ) : (
        <p>No data for that search</p>
      )}
    </ul>
  );
};
