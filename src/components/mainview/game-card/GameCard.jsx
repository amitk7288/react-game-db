import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  RiHeart3Line,
  RiHeart3Fill,
  RiBookmarkFill,
  RiStarFill,
} from "react-icons/ri";
import { PiMagicWand, PiMagicWandFill } from "react-icons/pi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import {
  SiPlaystation,
  SiXbox,
  SiWindows10,
  SiLinux,
  SiAtari,
  SiCommodore,
  SiSega,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import Modal from "../../ui-components/Modal";
import AddToCollection from "./AddToCollection";
import {addToFav} from "../../../features/fav_games/favGamesSlice";
import { addToWish } from "../../../features/wish_games/wishGamesSlice";
import nintendoLogo from "../../../assets/nintendo-logo.svg"
import webLogo from "../../../assets/web-logo.svg"
import iosLogo from "../../../assets/ios-logo.svg"
import threedoLogo from "../../../assets/threedo-logo.svg"
import neogeoLogo from "../../../assets/neogeo-logo.png";

export default function GameCard({ notify, img, title, genre, slug, game }) {
  const dispatch = useDispatch();
  const favGamesData = useSelector((state) => state.favGames);
  const wishGamesData = useSelector((state) => state.wishGames);
  const savedGamesData = useSelector((state) => state.collections);

  const isFav = favGamesData.some((favGame) => favGame.id === game.id);
  const isWish = wishGamesData.some((wishGame) => wishGame.id === game.id);
  const isSaved = savedGamesData.some((collection) =>
    collection.games.some((savedGame) => savedGame.id === game.id),
  );

  const gameObj = game;

  const [fav, setFav] = useState(isFav);
  const [wish, setWish] = useState(isWish);
  const [save, setSave] = useState(isSaved);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/game/${game.id}/${slug}`, { state: { gameObj } });
  }

  function handleAddFav(event, gameObj) {
    event.stopPropagation();
    setFav((prevState) => !prevState);
    dispatch(addToFav(gameObj));
    {
      notify &&
        notify(
          <>
            <div className="flex items-center gap-2">
              {fav ? (
                <>
                  <RiHeart3Line className="text-2xl" />
                  <p className="text-[#222222]">Removed from Favorites</p>
                </>
              ) : (
                <>
                  <RiHeart3Fill className="text-2xl text-red-500" />
                  <p className="text-[#222222]">Added to Favorites!</p>
                </>
              )}
            </div>
          </>,
        );
    }
  }
  function handleAddWish(event, gameObj) {
    event.stopPropagation();
    setWish((prevState) => !prevState);
    dispatch(addToWish(gameObj));
    {
      notify &&
        notify(
          <>
            <div className="flex items-center gap-2">
              {wish ? (
                <>
                  <PiMagicWand className="text-2xl" />
                  <p className="text-[#222222]">Removed from Wishlist</p>
                </>
              ) : (
                <>
                  <PiMagicWandFill className="text-2xl text-lime-500" />
                  <p className="text-[#222222]">Added to Wishlist!</p>
                </>
              )}
            </div>
          </>,
        );
    }
  }
  function handleAddSave(event) {
    event.stopPropagation();
    setIsOpen(true);
  }
  useEffect(() => {
    setSave(isSaved);
  }, [savedGamesData, isSaved, game.id]);

  // parent platform icons
  const platformIcons = {
    PC: <SiWindows10 className="text-[16px]" />,
    PlayStation: <SiPlaystation className="text-[20px]" />,
    Xbox: <SiXbox className="text-[16px]" />,
    iOS: <img src={iosLogo} alt="iOS" className="h-[16px]" />,
    Android: <AiFillAndroid className="text-[20px] text-[#d3d3d3]" />,
    "Apple Macintosh": <FaApple className="text-[18px]" />,
    Linux: <SiLinux />,
    Nintendo: <img src={nintendoLogo} alt="Nintendo" className="w-[20px]" />,
    Atari: <SiAtari />,
    Commodore: <SiCommodore />,
    SEGA: <SiSega className="" />,
    "3DO": <img src={threedoLogo} alt="3DO" className="w-[8px]" />,
    NeoGeo: <img src={neogeoLogo} alt="neogeo" className="w-[17px]" />,
    Web: <img src={webLogo} alt="Web" className="w-[16px]" />,
  };

  return (
    <div
      data-testid="gamecard"
      onClick={handleNavigate}
      className="h-[100%] cursor-pointer"
    >
      <div className="grid w-full grid-rows-[200px_auto] overflow-hidden rounded-[10px] bg-slate-800 text-drkcol">
        {/* Image Section */}
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
          <img
            src={img}
            alt="game title"
            className="h-full w-[420px] object-cover"
          />
          {/* Icon Buttons */}
          <div className="absolute bottom-[10px] right-[10px] flex gap-[10px]">
            <button
              data-testid="fav-button"
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] hover:border"
              onClick={(event) => handleAddFav(event, gameObj)}
            >
              {fav ? (
                <RiHeart3Fill
                  data-testid="favedGame"
                  className="text-red-500"
                />
              ) : (
                <RiHeart3Line data-testid="unfavedGame" />
              )}
            </button>
            <button
              data-testid="wish-button"
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] hover:border"
              onClick={(event) => handleAddWish(event, gameObj)}
            >
              {wish ? (
                <PiMagicWandFill
                  data-testid="wishedGame"
                  className="text-lime-500"
                />
              ) : (
                <PiMagicWand data-testid="unwishedGame" />
              )}
            </button>
            <button
              data-testid="save-button"
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] hover:border"
              onClick={(event) => handleAddSave(event)}
            >
              {save ? (
                <RiBookmarkFill
                  data-testid="savedGame"
                  className="text-sky-500"
                />
              ) : (
                <MdOutlineBookmarkAdd
                  data-testid="unsavedGame"
                  className="text-xl"
                />
              )}
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-[10px] p-[15px]">
          {/* Header (Title and Rating) */}
          <div className="grid grid-cols-[80%_20%]">
            <h3
              data-testid="gameTitle"
              className="text-xl font-semibold text-white"
            >
              {title}
            </h3>
            <div className="flex h-[fit-content] items-center justify-end gap-[5px]">
              <p>{game?.rating?.toFixed(1)}</p>
              <div className="flex items-center justify-center">
                <RiStarFill className="text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Genre */}
          <span className="text-sm">{genre}</span>

          {/* Platforms */}
          <div className="flex gap-[5px]">
            <ul
              data-testid="platform-icons"
              className="flex items-center gap-2"
            >
              {game.parent_platforms?.map((p) => {
                const icon = platformIcons[p.platform.name];
                return icon ? <li key={p.platform.id}>{icon}</li> : null;
              })}
            </ul>
          </div>
        </div>
      </div>
      {isOpen ? (
        <Modal closeModal={() => setIsOpen(false)}>
          <AddToCollection
            onClose={() => setIsOpen(false)}
            gameObj={gameObj}
            notify={notify}
          />
        </Modal>
      ) : null}
    </div>
  );
}