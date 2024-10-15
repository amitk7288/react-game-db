import { useState } from "react";
import GenreTag from "./GenreTag";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

export default function FeaturedGame() {
  const [like, setLike] = useState(false);
  return (
    <div className="grid gap-3 md:grid-cols-[60%_auto] md:gap-4">
      <div className="relative">
        <div className="absolute m-3 flex items-center gap-2">
          <GenreTag />
        </div>
        <div className="absolute bottom-0 right-0 z-10 m-3 flex items-center gap-2">
          <button className="from-gradPink hover:to-gradPink to-gradOrange hover:from-gradOrange flex w-fit items-center justify-center rounded-md bg-gradient-to-r px-2 py-[5px] dark:border-drkbrd dark:bg-drkbg dark:text-white">
            <p className="text-xs tracking-wider text-white xs:text-base 2xl:text-base">
              &nbsp;View game
            </p>
          </button>
          <div
            onClick={() => setLike((like) => !like)}
            className="flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-lg bg-[#252f3f] text-sm text-white xs:h-[34px] xs:w-[34px] xl:text-base 2xl:h-[35px] 2xl:w-[35px] 2xl:text-lg"
          >
            {like ? (
              <RiHeart3Fill className="text-red-500" />
            ) : (
              <RiHeart3Line />
            )}
          </div>
        </div>
        <img
          src={`https://wallpapercave.com/wp/wp9996646.jpg`}
          alt="game"
          className="w-full rounded-lg"
        />
      </div>
      <div className="grid-rows-[auto, 100px] grid gap-3 sm:grid-cols-2 md:grid-cols-1">
        <div className="flex basis-[60%] flex-col gap-2 rounded-lg md:p-0">
          <div className="flex flex-col gap-1">
            <p className="font-semibold sm:text-xl xl:text-2xl dark:text-white">
              Hogwarts Legacy
            </p>
            <p className="line-clamp-4 text-xs font-light xs:text-sm xs:leading-5 md:line-clamp-6 md:leading-5 xl:line-clamp-[8] 2xl:text-base 3xl:line-clamp-[10]">
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
          <img
            src={`https://media.rawg.io/media/resize/640/-/screenshots/723/7230cc1be966c19d2470a19d277b31e9.jpg`}
            alt="game"
            className="rounded-lg"
          />
          <img
            src={`https://media.rawg.io/media/resize/420/-/screenshots/f35/f35c6bcc541808298288ba49e50c37d5.jpg`}
            alt="game"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="text-center text-xs">slideshow buttons</div>
    </div>
  );
}
