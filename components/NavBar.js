import Image from "next/image";

function NavBar() {
  return (
    <ul className="flex items-center justify-between pt-8">
      <li className="flex items-center justify-between">
        <Image
          src="/tv.svg"
          alt="jsbits logo"
          width={40}
          height={40}
          className="mr-4"
        />
        <span className="text-3xl font-bold">MovieBox</span>
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
        <div>
          <>
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <input
                type="search"
                name="q"
                className="py-2 pl-4 pr-10 text-sm text-white border-4 rounded-md focus:outline-none"
                placeholder="What do you want to watch?"
                autocomplete="off"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
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
          </>
        </div>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-xl font-bold">Sign In</span>
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
