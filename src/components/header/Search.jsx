import { useState,  useEffect, useRef } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function Search({ isSearchOpen }) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef) {
      searchInputRef.current.focus();
    }
    {!isSearchOpen && setSearchQuery("")}
  }, [isSearchOpen]);

  return (
    <div
      id="xyz"
      className={`${!isSearchOpen ? `hidden` : `flex lg:hidden`} dark:bg-drkbg2 dark:text-drkcol relative h-[40px] w-full items-center gap-2 rounded-md bg-[#f7f7f7] px-5 py-2.5 lg:flex`}
    >
      <PiMagnifyingGlassBold className="text-lg" />
      <input
        className="dark:text-drkcol w-[100%] border-none bg-[transparent] p-0 text-sm xl:text-base font-medium text-black outline-none focus:ring-0"
        type="search"
        name="searchgames"
        id="searchgames"
        placeholder="Search 18,347 games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={searchInputRef}
      />
      <div className="dark:bg-drkbg2 dark:text-drkcol absolute left-[-81px] top-[55px] w-[100vw] rounded-b-md bg-[#f7f7f7] sm:left-0 sm:top-[35px] sm:w-full">
        {/* search results */}
      </div>
    </div>
  );
}