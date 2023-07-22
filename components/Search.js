"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery !== "") {
      router.push(
        `/searchResults?location=${encodeURIComponent(trimmedQuery)}`
      );
    }
    console.log(trimmedQuery);
    event.preventDefault();
    setSearchQuery("");
  };

  return (
    <div>
      <form className="mx-8 my-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            autoComplete="off"
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-zinc-800 dark:placeholder-zinc-400 dark:text-red-400 text-center"
            placeholder="Example, AB USA"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // updates search query to user input
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            // when clicked runs the handle search function
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-400 hover:bg-red-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
