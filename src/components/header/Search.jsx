import { useState, useEffect, useRef } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Search({ isSearchOpen }) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen && searchInputRef) {
      searchInputRef.current.focus();
    }
    {
      !isSearchOpen && setSearchQuery("");
    }
  }, [isSearchOpen]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    const normalisedQuery = searchQuery.trim().replace(/\s+/g, " ");
    if (normalisedQuery !== "") {
      navigate(`/search/${normalisedQuery}`);
    }
    isSearchOpen = false;
    setSearchQuery("");
  }

  return (
    <div
      id="xyz"
      className={`${!isSearchOpen ? `hidden` : `flex lg:hidden`} relative h-[40px] w-full items-center gap-2 rounded-md bg-[#f7f7f7] px-5 py-2.5 lg:flex dark:bg-drkbg2 dark:text-drkcol`}
    >
      <PiMagnifyingGlassBold className="text-lg" />
      <form onSubmit={(e) => handleSearchSubmit(e)} className="w-[100%]">
        <input
          data-cy="search-field"
          className="w-[100%] border-none bg-[transparent] p-0 text-sm font-medium text-black outline-none focus:ring-0 xl:text-base dark:text-drkcol"
          type="search"
          name="searchgames"
          id="searchgames"
          placeholder="Search 874, 833 games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={searchInputRef}
        />
      </form>

      <div className="absolute left-[-81px] top-[55px] w-[100vw] rounded-b-md bg-[#f7f7f7] sm:left-0 sm:top-[35px] sm:w-full dark:bg-drkbg2 dark:text-drkcol"></div>
    </div>
  );
}
