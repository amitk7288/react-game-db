import { useState } from "react";
import game from "../../../assets/hogwarts-legacy.jpg";
import {
  RiBookmarkFill,
  RiBookmarkLine,
  RiHeart3Fill,
  RiHeart3Line,
  RiStarFill,
} from "react-icons/ri";

export default function GameCard() {
  const [save, setSave] = useState(false);
  const [wish, setWish] = useState(false);

  return (
    <div className="grid w-full max-w-[500px] grid-rows-[200px_auto] overflow-hidden rounded-[10px] bg-slate-800 text-drkcol">
      {/* Image Section */}
      <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
        <img
          src={game}
          alt="game title"
          className="h-full w-full object-cover"
        />
        {/* Icon Buttons */}
        <div className="absolute bottom-[10px] right-[10px] flex gap-[10px]">
          <div
            onClick={() => setSave((save) => !save)}
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px]"
          >
            {save ? <RiBookmarkFill className="text-sky-500" /> : <RiBookmarkLine />}
          </div>
          <div
            onClick={() => setWish((wish) => !wish)}
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px]"
          >
            {wish ? <RiHeart3Fill className="text-red-500" /> : <RiHeart3Line />}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-[10px] p-[15px]">
        {/* Header (Title and Rating) */}
        <div className="grid grid-cols-[80%_20%]">
          <h3 className="text-xl font-semibold text-white">Hogwarts Legacy</h3>
          <div className="flex h-[fit-content] items-center justify-center gap-[5px]">
            <p>8.4</p>
            <div className="flex items-center justify-center">
              <RiStarFill className="text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Genre */}
        <span className="text-[12px]">genre</span>

        {/* Platforms */}
        <div className="flex gap-[5px]">
          <p className="">platforms go here</p>
        </div>
      </div>
    </div>
  );
}