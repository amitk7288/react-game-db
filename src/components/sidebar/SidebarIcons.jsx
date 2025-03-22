import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
import { GrReactjs } from "react-icons/gr";

const sidebarIcons = [
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

export default function SidebarIcons() {
  const location = useLocation();
  const [icons, setIcons] = useState(sidebarIcons);

  useEffect(() => {
    setIcons((prevState) =>
      prevState.map((icon) => {
        const isActive = icon.path === location.pathname;
        return { ...icon, active: isActive };
      }),
    );
  }, [location.pathname]);

  function handleClickIcon(clickedIconID) {
    setIcons((prevState) =>
      prevState.map((icon) =>
        icon.id === clickedIconID
          ? { ...icon, active: true }
          : { ...icon, active: false },
      ),
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-between border-r pb-10 pt-5 dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex w-full flex-col items-start gap-[5vh] px-5">
        <div className="w-full">
          <Link to={`/`}>
            <div className="flex items-center gap-4">
              <div className="from-gradPink to-gradOrange flex h-[35px] w-[35px] items-center justify-center rounded-md bg-gradient-to-r">
                <GrReactjs className="text-2xl text-white" />
              </div>
              <p className="text-2xl font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
                React <span className="font-extralight">Games</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="flex w-full flex-col items-center gap-[4vh] text-2xl text-black dark:text-drkcol">
          {icons.map((icon) => (
            <Link
              to={icon.path}
              key={icon.id}
              alt={icon.iconText}
              title={icon.iconText}
              className={`${
                icon.active ? `pl-2` : ""
              } duration-400 flex h-[50px] w-full cursor-pointer items-center justify-start transition-all ease-in-out`}
              onClick={() => handleClickIcon(icon.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${icon.active && `from-gradPink to-gradOrange rounded-full bg-gradient-to-r p-1.5 text-white`}`}
                >
                  {icon.active ? icon.activeIcon : icon.icon}
                </div>
                <span
                  className={`text-lg text-black xl:text-xl dark:text-drkcol ${icon.active && `font-medium dark:text-white`}`}
                >
                  {icon.iconText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
