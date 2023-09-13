"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performSearch } from "@/redux/searchMovies";
import { useRouter } from "next/navigation";
import SearchResults from "./SearchResults";

function NavBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  // const searchResults = useSelector((state) => state.searchMovies.searchResults);
  // console.log('here is the search result', searchResults)
  const handleSearch = async () => {
    try {
      dispatch(performSearch(searchQuery));
      // if (searchResults?.length > 0) {
        router.push("/search-results");
      // }
    } catch (error) {
      throw error;
    }
  };

  return (
    <ul className="flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
      <li className="flex items-center justify-between">
        <Image
          src="/tv.svg"
          alt="tv logo"
          width={40}
          height={40}
          className="mr-4"
        />
        <Link href="/" className="mr-10 text-3xl font-bold text-white md:mr-0">
          MovieBox
        </Link>
        <div className="flex items-center justify-between w-full md:hidden">
          <span className="text-xl font-bold">Sign In</span>
          <Image
            src="/Menu.svg"
            alt="jsbits logo"
            width={40}
            height={40}
            className="ml-4"
          />
        </div>
      </li>
      <li className="relative">
        <div class="relative mt-6 md:mt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="search"
              name="search"
              className="py-2 pl-4 pr-10 text-sm text-white bg-transparent border rounded-md"
              placeholder="What do you want to watch?"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button type="submit" className="p-1 focus:shadow-outline">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
          </form>
        </div>
      </li>
      <li className="items-center justify-between hidden md:flex">
        <span className="text-xl font-bold text-white">Sign In</span>
        <Image
          src="/Menu.svg"
          alt="jsbits logo"
          width={40}
          height={40}
          className="ml-4"
        />
      </li>
    </ul>
  );
}

export default NavBar;
