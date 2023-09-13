"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
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
        <Link href='/' className="mr-10 text-3xl font-bold text-white md:mr-0">MovieBox</Link>
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
        {/* <input type="text" placeholder="What do you want to watch?" className="border-4 rounded-2xl"/>
          <Image
            src="/search-icon.svg"
            alt="search icon"
            width={20}
            height={20}
            className="absolute bg-black right-3 top-2"
          /> */}
        
            <div class="relative mt-6 md:mt-0">
              <input
                type="search"
                name="q"
                className="py-2 pl-4 pr-10 text-sm border rounded-md bg-none"
                placeholder="What do you want to watch?"
                autocomplete="off"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="p-1 focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
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
