import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/usedarkMode";
import { GrReactjs } from "react-icons/gr";
import me from "../../assets/me.jpg";
import Search from "./Search";
import { RiMenu2Fill, RiCloseLargeLine } from "react-icons/ri";
import { PiSun, PiMoonStars, PiMagnifyingGlass } from "react-icons/pi";
import {
  PiSquaresFour,
  PiSquaresFourDuotone,
  PiBook,
  PiBookDuotone,
  PiUsers,
  PiUsersDuotone,
  PiHeart,
  PiHeartDuotone,
  PiMagicWand,
  PiMagicWandDuotone,
  PiBookmarkSimple,
  PiBookmarkSimpleDuotone,
} from "react-icons/pi";

const Header = () => {
  const mobMenuIcons = [
    {
      id: 1,
      icon: <PiSquaresFour />,
      activeIcon: <PiSquaresFourDuotone />,
      iconText: "Genres",
      path: "/genres",
      active: false,
    },
    {
      id: 2,
      icon: <PiBook />,
      activeIcon: <PiBookDuotone />,
      iconText: "Library",
      path: "/library",
      active: false,
    },
    {
      id: 4,
      icon: <PiUsers />,
      activeIcon: <PiUsersDuotone />,
      iconText: "Friends",
      path: "/friends",
      active: false,
    },
    {
      id: 6,
      icon: <PiHeart />,
      activeIcon: <PiHeartDuotone />,
      iconText: "Favourites",
      path: "/favourites",
      active: false,
    },
    {
      id: 7,
      icon: <PiMagicWand />,
      activeIcon: <PiMagicWandDuotone />,
      iconText: "Wishlist",
      path: "/wishlist",
      active: false,
    },
    {
      id: 8,
      icon: <PiBookmarkSimple />,
      activeIcon: <PiBookmarkSimpleDuotone />,
      iconText: "Collections",
      path: "/collections",
      active: false,
    },
  ];

  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [mobMenu, setMobMenu] = useState(mobMenuIcons);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  const searchMobContainer = useRef(null);

  const handleClickMobSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

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

  const handleClickIcon = (clickedIconID) => {
    setMobMenu((prevState) =>
      prevState.map((icon) =>
        icon.id === clickedIconID
          ? { ...icon, active: true }
          : { ...icon, active: false },
      ),
    );
    setTimeout(() => {
      setIsMobMenuOpen(false);
    }, 275);
  };

  return (
    <header
      id="mainHeader"
      className="fixed right-0 top-0 h-[80px] w-full border-b bg-white py-5 pl-[12px] pr-5 lg:w-[calc(100%_-_20vw)] lg:p-5 xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol"
    >
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
                className="relative cursor-pointer rounded-full bg-transparent p-2 text-2xl hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
              >
                <RiCloseLargeLine className="z-50" />
              </div>
            ) : (
              <div
                onClick={() => setIsMobMenuOpen((prevState) => !prevState)}
                className="relative cursor-pointer rounded-full bg-transparent p-2 text-2xl hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
              >
                <RiMenu2Fill className="z-50" />
              </div>
            )}
          </div>
          <div className="flex-shrink-0 lg:hidden">
            <Link to={`/`}>
              <div className="flex items-center gap-4">
                <div className="flex h-[35px] w-[35px] items-center justify-center rounded-md bg-gradient-to-r from-gradPink to-gradOrange">
                  <GrReactjs className="text-2xl text-white" />
                </div>
              </div>
            </Link>
          </div>
          <div id="desktop-search" className="w-[60%]">
            <Search />
          </div>
        </div>
        <div
          id="right-box"
          className="flex basis-auto items-center justify-between gap-3"
        >
          <div
            className="relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] hover:bg-hvrcol lg:hidden dark:text-drkcol dark:hover:bg-drkhvrcol"
            onClick={handleClickMobSearch}
          >
            <PiMagnifyingGlass />
          </div>
          <div data-testid="darkMode-icon">
            <div className="flex items-center gap-3 lg:hidden">
              {theme === "dark" ? (
                <button
                  onClick={toggleTheme}
                  className="relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
                >
                  <PiSun />
                </button>
              ) : (
                <button
                  onClick={toggleTheme}
                  className="relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
                >
                  <PiMoonStars />
                </button>
              )}
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              {theme === "dark" ? (
                <button
                  onClick={toggleTheme}
                  className="relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
                >
                  <PiSun />
                </button>
              ) : (
                <button
                  onClick={toggleTheme}
                  className="relative cursor-pointer rounded-full bg-transparent p-2 text-[25px] hover:bg-hvrcol dark:text-drkcol dark:hover:bg-drkhvrcol"
                >
                  <PiMoonStars />
                </button>
              )}
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <div
              className="h-8 w-8 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${me})` }}
            />
          </div>
        </div>
      </div>

      {/* Mob menu */}
      {isMobMenuOpen && (
        <div className="no-scrollbar absolute left-0 top-[80px] z-[-1] flex h-[calc(100vh_-_80px)] w-[100vw] flex-col gap-[50px] overflow-y-scroll bg-[#f7f7f7] p-6 lg:hidden dark:bg-drkbg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <img src={me} alt="profilepic" />
              </div>
              <p>Amit Kadara</p>
            </div>
          </div>
          <nav className="flex flex-col gap-7">
            {mobMenu.map((item) => (
              <div key={item.id} className="dark:text-drkcol">
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 ${item.active && `pl-2`} duration-400 transition-all ease-in-out`}
                  onClick={() => handleClickIcon(item.id)}
                >
                  <div
                    className={`${item.active && `rounded-full bg-gradient-to-r from-gradPink to-gradOrange p-1.5 text-white`} text-2xl`}
                  >
                    {item.active ? item.activeIcon : item.icon}
                  </div>
                  <p className="text-xl xl:text-xl">{item.iconText}</p>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
