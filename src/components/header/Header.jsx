import { useState, useEffect, useRef } from "react";
import useDarkMode from "../../hooks/usedarkMode";
import logo from "../../assets/temp-logo.png";
import me from "../../assets/me.jpg"
import Search from "./Search";
import {
  RiMenu2Fill,
  RiCloseLargeLine,
} from "react-icons/ri";
import { PiSun, PiMoonStars, PiMagnifyingGlass} from "react-icons/pi";

const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  const searchMobContainer = useRef(null);

  const handleClickMobSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchMobContainer.current &&
        !searchMobContainer.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchMobContainer, setIsSearchOpen]);
  

  return (
    <header className="dark:bg-drkbg dark:text-drkcol fixed right-0 top-0 h-[80px] w-full bg-white py-5 pl-[12px] pr-5 lg:w-[calc(100%_-_20vw)] lg:p-5 2xl:w-[calc(100%_-_20vw)] border-b dark:border-drkbrd">
      <div
        id="mobile search"
        className={`absolute left-0 ${isSearchOpen ? `top-0 flex flex-col justify-center` : `top-[-80px]`} duration-400 z-10 h-[inherit] w-full bg-[#f7f7f7] transition-all ease-in-out lg:hidden dark:bg-drkbg2`}
        ref={searchMobContainer}
      >
        <Search isSearchOpen={isSearchOpen} />
      </div>
      <div className="z-0 flex items-center justify-between gap-4">
        <div
          id="left-box"
          className="flex items-center justify-between gap-3 lg:basis-[100%]"
        >
          <div className="lg:hidden">
            {isMobMenuOpen ? (
              <div
                onClick={() => setIsMobMenuOpen((prevState) => !prevState)}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-2xl"
              >
                <RiCloseLargeLine className="z-50" />
              </div>
            ) : (
              <div
                onClick={() => setIsMobMenuOpen((prevState) => !prevState)}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-2xl"
              >
                <RiMenu2Fill className="z-50" />
              </div>
            )}
          </div>
          <div className="flex-shrink-0 lg:hidden">
            <img
              src={logo}
              alt="Gaming Logo"
              className="h-auto w-[35px] rounded-md"
            />
          </div>
          <div className="w-[60%]">
            <Search />
          </div>
        </div>
        <div
          id="right-box"
          className="flex basis-auto items-center justify-between gap-3"
        >
          <div
            className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] lg:hidden"
            onClick={handleClickMobSearch}
          >
            <PiMagnifyingGlass />
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            {theme === "dark" ? (
              <div
                onClick={toggleTheme}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-[25px]"
              >
                <PiSun />
              </div>
            ) : (
              <div
                onClick={toggleTheme}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-[25px]"
              >
                <PiMoonStars />
              </div>
            )}
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {theme === "dark" ? (
              <div
                onClick={toggleTheme}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-[25px]"
              >
                <PiSun />
              </div>
            ) : (
              <div
                onClick={toggleTheme}
                className="hover:bg-hvrcol dark:hover:bg-drkhvrcol dark:text-drkcol relative cursor-pointer rounded-full bg-transparent p-2 text-[25px]"
              >
                <PiMoonStars />
              </div>
            )}
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <img src={me} alt="profilepic" />
            </div>
          </div>
        </div>
      </div>

      {/* Mob menu */}
      {isMobMenuOpen && (
        <div className="no-scrollbar dark:bg-drkbg absolute left-0 top-[80px] z-[-1] flex h-[calc(100vh_-_80px)] w-[100vw] flex-col gap-[50px] overflow-y-scroll bg-[#f7f7f7] p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <img src={me} alt="profilepic" />
              </div>
              <p>Me</p>
            </div>
          </div>
          <nav className="flex flex-col gap-7">
            <div className="dark:text-drkcol">
              <div className="mb-2 flex items-center gap-3">
                <div
                  className={`duration-400 flex items-center gap-3 transition-all ease-in-out`}
                >
                  
                </div>
                Mobile menu
              </div>
              <div
                className=" flex flex-wrap items-center gap-5 rounded-md border p-3"
              >
              </div>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
