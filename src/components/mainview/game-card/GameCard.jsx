import { useState } from "react";
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
import Modal from "../../ui-components/Modal";
import AddToCollection from "./AddToCollection";
import {addToFav} from "../../../features/fav_games/favGamesSlice";
import { addToWish } from "../../../features/wish_games/wishGamesSlice";

export default function GameCard({ notify, img, title, rating, genre, slug, game }) {
  const dispatch = useDispatch();
  const favGamesData = useSelector((state) => state.favGames);
  const wishGamesData = useSelector((state) => state.wishGames);

  const isFav = favGamesData.some((favGame) => favGame.id === game.id);
  const isWish = wishGamesData.some((wishGame) => wishGame.id === game.id);

  const gameObj = game;

  const [fav, setFav] = useState(isFav);
  const [wish, setWish] = useState(isWish);
  const [save, setSave] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/game/${slug}`);
  }

  function handleAddFav(event, gameObj) {
    event.stopPropagation();
    setFav((prevState) => !prevState);
    console.log("gameobj", gameObj);

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
    console.log("gameobj", gameObj);

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


  // useEffect(() => {
  //   console.log("FAV GAMES: ", favGamesData);
  // }, [favGamesData])

  // useEffect(() => {
  //   console.log("WISH GAMES: ", wishGamesData);
  // }, [wishGamesData]);

  // function handleAddSave(event) {
  //   event.stopPropagation();
  //   setSave((prevState) => {
  //     const newSaveState = !prevState;
  //     if (mounted) {
  //       notify(
  //         <>
  //           <div className="flex items-center gap-2">
  //             {newSaveState ? (
  //               <>
  //                 <RiBookmarkFill className="text-sky-500" />
  //                 <p className="text-[#222222]">Added to Collection!</p>
  //               </>
  //             ) : (
  //               <>
  //                 <MdOutlineBookmarkAdd className="text-xl" />
  //                 <p className="text-black">Removed from Collection</p>
  //               </>
  //             )}
  //           </div>
  //         </>,
  //       );
  //     }
  //     return newSaveState;
  //   });
  // }

  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="grid w-full grid-rows-[200px_auto] overflow-hidden rounded-[10px] bg-slate-800 text-drkcol">
        {/* Image Section */}
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
          <img
            src={img}
            alt="game title"
            className="h-full w-full object-cover"
          />
          {/* Icon Buttons */}
          <div className="absolute bottom-[10px] right-[10px] flex gap-[10px]">
            <div
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px]"
              onClick={(event) => handleAddFav(event, gameObj)}
            >
              {fav ? (
                <RiHeart3Fill className="text-red-500" />
              ) : (
                <RiHeart3Line />
              )}
            </div>
            <div
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px]"
              onClick={(event) => handleAddWish(event, gameObj)}
            >
              {wish ? (
                <PiMagicWandFill className="text-lime-500" />
              ) : (
                <PiMagicWand />
              )}
            </div>
            <div
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px]"
              onClick={(event) => handleAddSave(event)}
            >
              {save ? (
                <RiBookmarkFill className="text-sky-500" />
              ) : (
                <MdOutlineBookmarkAdd className="text-xl" />
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-[10px] p-[15px]">
          {/* Header (Title and Rating) */}
          <div className="grid grid-cols-[80%_20%]">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="flex h-[fit-content] items-center justify-center gap-[5px]">
              <p>{(rating ?? 0) / 10}</p>
              <div className="flex items-center justify-center">
                <RiStarFill className="text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Genre */}
          <span className="text-sm">{genre}</span>

          {/* Platforms */}
          <div className="flex gap-[5px]">
            <p className="">platforms go here</p>
          </div>
        </div>
      </div>
      {isOpen ? (
        <Modal closeModal={() => setIsOpen(false)}>
          <AddToCollection onClose={() => setIsOpen(false)} gameObj={gameObj} />
        </Modal>
      ) : null}
    </div>
  );
}
