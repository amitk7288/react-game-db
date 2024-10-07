import { useState } from "react";
import GameTag from "./GameTag";
import game from "../../../assets/hogwarts-legacy.jpg";
import {
  RiHeart3Line,
  RiHeart3Fill,
} from "react-icons/ri";

export default function FeaturedGame() {
  const [like, setLike] = useState(false);
  return (
    <div className="grid gap-3 md:grid-cols-[60%_auto] md:gap-4 ">
      <div className="relative">
        <div className="absolute m-3 flex items-center gap-2">
          <GameTag />
          <GameTag />
          <GameTag />
        </div>
        <div className="absolute bottom-0 right-0 z-10 m-3 flex items-center gap-2">
          <button className="dark:border-drkbrd dark:bg-drkbg flex w-fit items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-orange-500 px-2 py-[5px] dark:text-white">
            <p className="xs:text-sm text-xs 2xl:text-base text-white">&nbsp;View game</p>
          </button>
          <div
            onClick={() => setLike((like) => !like)}
            className="xs:h-[31px] xs:w-[31px] bg-drkbg dark:border-drkbrd flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-lg border text-sm text-white xl:text-base 2xl:h-[35px] 2xl:w-[35px] 2xl:text-lg"
          >
            {like ? (
              <RiHeart3Fill className="text-red-400" />
            ) : (
              <RiHeart3Line />
            )}
          </div>
        </div>
        <img src={game} alt="game" className="w-full rounded-lg" />
      </div>
      <div className="grid-rows-[auto, 100px] grid gap-3 sm:grid-cols-2 md:grid-cols-1">
        <div className="flex basis-[60%] flex-col gap-2 rounded-lg p-2 pt-0 md:p-0">
          <div className="flex flex-col gap-1">
            <p className="font-semibold sm:text-lg md:text-xl 2xl:text-2xl">
              Hogwarts Legacy
            </p>
            <p className="xs:text-sm xs:leading-5 3xl:line-clamp-[10] line-clamp-4 text-xs font-light md:line-clamp-6 md:leading-5 xl:line-clamp-[8] 2xl:text-base">
              Hogwarts Legacy is an immersive, open-world action RPG set in the
              world first introduced in the Harry Potter books. Now you can take
              control of the action and be at the center of your own adventure
              in the wizarding world. Embark on a journey through familiar and
              new locations as you explore and discover fantastic beasts,
              customize your character and craft potions, master spell casting,
              upgrade talents, and become the wizard you want to be. Experience
              Hogwarts in the 1800s. Your character is a student who holds the
              key to an ancient secret that threatens to tear the wizarding
              world apart. You have received a late acceptance to the Hogwarts
              School of Witchcraft and Wizardry and soon discover that you are
              no ordinary student: you possess an unusual ability to perceive
              and master Ancient Magic. Only you can decide if you will protect
              this secret for the good of all, or yield to the temptation of
              more sinister magic. Discover the feeling of living at Hogwarts as
              you make allies, battle Dark wizards, and ultimately decide the
              fate of the wizarding world. Your legacy is what you make of it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-end gap-3">
          <img src={game} alt="game" className="rounded-lg" />
          <img src={game} alt="game" className="rounded-lg" />
        </div>
      </div>
      <div className="text-center text-xs">slideshow buttons</div>
    </div>
  );
}