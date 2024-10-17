import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../features/games/gamesSlice";
import { fetchGameAchievements } from "../features/games/gamesSlice";
import { fetchGameScreenshots } from "../features/games/gamesSlice";
import { fetchGameDLCS } from "../features/games/gamesSlice";
import { fetchGamesInSeries } from "../features/games/gamesSlice";
import useTruncate from "./../hooks/useTruncate";
import GameCard from "../components/mainview/game-card/GameCard";
import CardGridSection from "../components/ui-components/CardGridSection";
import Achievement from "./singleGame-components/Achievement";
import MetaInfo from "./singleGame-components/MetaInfo";
import GenreTag from "../components/mainview/featured-game/GenreTag"
import Modal from "../components/ui-components/Modal";
import AddToCollection from "../components/mainview/game-card/AddToCollection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToFav } from "../features/fav_games/favGamesSlice";
import { addToWish } from "../features/wish_games/wishGamesSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { BsThreeDots } from "react-icons/bs";
import {
  PiGameControllerDuotone,
  PiClockCountdownDuotone,
  PiCodeDuotone,
  PiCalendarXDuotone,
  PiMagicWandFill,
  PiMagicWand,
} from "react-icons/pi";
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
import {
  RiStarFill,
  RiHeart3Fill,
  RiHeart3Line,
  RiBookmarkFill,
} from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import {
  MdOutlineGamepad,
  MdOutlineDownload,
  MdOutlineImage,
  MdOutlineSwipe,
  MdOutlineBookmarkAdd,
  MdOutlineCategory,
} from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import platformIconCustom from "../data/platformIcons";
import neogeoLogo from "../assets/neogeo-logo.png";

export default function SingleGamePage() {

  const dispatch = useDispatch();
  const { gameId } = useParams();

  const favGamesData = useSelector((state) => state.favGames);
  const wishGamesData = useSelector((state) => state.wishGames);
  const savedGamesData = useSelector((state) => state.collections);

  const [game, setGame] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [screenshots, setScreenshots] = useState(null);
  const [gameDLCS, setGameDLCS] = useState(null);
  const [gamesInSeries, setGamesInSeries] = useState(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [achievementsResults, setAchievementsResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [fav, setFav] = useState(null);
  const [wish, setWish] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const notify = (message) => {
    toast(message, {
      position: "top-right",
      hideProgressBar: true,
      className: "mt-[80px]",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // game info
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGameById(gameId))
      .then((action) => setGame(action.payload))
      .catch((error) => console.error(error));

    const isFav = favGamesData.some(
      (favGame) => favGame?.id === parseInt(gameId),
    );
    const isWish = wishGamesData.some(
      (wishGame) => wishGame?.id === parseInt(gameId),
    );
    setFav(isFav);
    setWish(isWish);
  }, [dispatch, gameId, favGamesData, wishGamesData]);

  // achievements
  useEffect(() => {
    dispatch(fetchGameAchievements({ gameId, page: 1 }))
      .then((action) => {
        setAchievements(action.payload);
        setAchievementsResults(action.payload.results);
        action.payload.next !== null ? setHasMore(true) : setHasMore(false);
      })
      .catch((error) => console.error(error));
  }, [dispatch, gameId]);

  const getMoreAchievements = () => {
    if (!hasMore) {
      return;
    }

    if (hasMore) {
      const nextPage = page + 1;
      dispatch(fetchGameAchievements({ gameId, page: nextPage }))
        .then((action) => {
          console.log(action.payload);
          if (action.payload && action.payload.results) {
            setAchievementsResults((prevResults) => [
              ...prevResults,
              ...action.payload.results,
            ]);
            action.payload.next !== null ? setHasMore(true) : setHasMore(false);
            setPage(nextPage);
          } else {
            console.error("Results are not available:", action.payload);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  // screenshots
  useEffect(() => {
    dispatch(fetchGameScreenshots(gameId))
      .then((action) => {
        console.log("B");
        setScreenshots(action.payload);
            console.log("D");
      })
      .catch((error) => console.error(error));
  }, [dispatch, gameId]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // DLCS
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGameDLCS(gameId))
      .then((action) => setGameDLCS(action.payload))
      .catch((error) => console.error(error));
  }, [dispatch, gameId]);

  // In series
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGamesInSeries(gameId))
      .then((action) => setGamesInSeries(action.payload))
      .catch((error) => console.error(error));
  }, [dispatch, gameId]);

  // release date format
  const dateStr = "2018-11-14";
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  // parent platform icons
  const platformIcons = {
    PC: <SiWindows10 className="text-[16px]" />,
    PlayStation: <SiPlaystation className="text-[20px]" />,
    Xbox: <SiXbox className="text-[16px]" />,
    iOS: platformIconCustom[1].img,
    Android: (
      <AiFillAndroid className="text-[20px] text-[black] dark:text-[#d3d3d3]" />
    ),
    "Apple Macintosh": <FaApple className="text-[20px] dark:text-[#d3d3d3]" />,
    Linux: <SiLinux />,
    Nintendo: platformIconCustom[2].img,
    Atari: <SiAtari />,
    Commodore: <SiCommodore />,
    SEGA: <SiSega className="" />,
    "3DO": platformIconCustom[3].img,
    NeoGeo: <img src={neogeoLogo} alt="neogeo" className="w-[17px]" />,
    Web: platformIconCustom[0].img,
  };

  const truncatedDesc = useTruncate(game?.description_raw, 300);
  const truncatedDescXL = useTruncate(game?.description_raw, 800);

  const gameObj = game;

  const isSaved = savedGamesData.some((collection) =>
    collection.games.some((savedGame) => savedGame?.id === game?.id),
  );

  const [save, setSave] = useState(isSaved);

  useEffect(() => {
    setSave(isSaved);
  }, [savedGamesData, isSaved, game?.id]);

  if (!game) return <p>Loading game data...</p>;

  function handleAddFav(event, gameObj) {
    event.stopPropagation();
    setFav((prevState) => !prevState);
    console.log("gameobj", game);

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
  function handleAddWish(event, game) {
    event.stopPropagation();
    setWish((prevState) => !prevState);
    console.log("gameobj", game);

    dispatch(addToWish(game));
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

  function readMoreClickHandler() {
    setIsReadMore((prevState) => !prevState);
  }

  function openAchievementModal() {
    setShowAllAchievements(true);
    setIsOpen(true);
  }
  function closeAchievementModal() {
    setShowAllAchievements(false);
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col gap-8 md:px-10">
      <h1 className="text-[60px] font-semibold leading-tight dark:text-white">
        {game.name}
      </h1>
      <div className="xl:grid xl:grid-cols-2 xl:gap-6">
        <div className="flex flex-col gap-3">
          <div>
            {/* main image */}
            <div className="relative">
              <ul className="absolute left-2 top-2 flex flex-wrap gap-1">
                {game.genres.map((genre) => (
                  <GenreTag key={genre.id} genre={genre.name} />
                ))}
              </ul>
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full rounded-lg"
              />
              {/* Icon Buttons */}
              <div className="absolute bottom-[10px] right-[10px] flex gap-[10px]">
                <div
                  className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] text-white hover:border"
                  onClick={(event) => handleAddFav(event, gameObj)}
                >
                  {fav ? (
                    <RiHeart3Fill className="text-red-500" />
                  ) : (
                    <RiHeart3Line />
                  )}
                </div>
                <div
                  className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] text-white hover:border"
                  onClick={(event) => handleAddWish(event, game)}
                >
                  {wish ? (
                    <PiMagicWandFill className="text-lime-500" />
                  ) : (
                    <PiMagicWand />
                  )}
                </div>
                <div
                  className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] bg-[#252f3f] text-[18px] text-white hover:border"
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
          </div>
          {/* platforms and rating */}
          <div className="flex items-start justify-between">
            <ul className="xxs:grid-cols-5 grid grid-cols-4 gap-2 xs:grid-cols-6 sm:grid-cols-10">
              {game.parent_platforms.map((p) => (
                <li
                  key={p.platform.id}
                  className="flex w-[38px] items-center justify-center rounded-md border p-2 dark:border-drkbrd"
                >
                  {platformIcons[p.platform.name] || null}
                </li>
              ))}
            </ul>
            <div className="flex h-[fit-content] items-center justify-end gap-[5px] font-medium xs:text-lg md:text-xl 2xl:text-2xl">
              <p>Rating:</p>
              <p>{game?.rating.toFixed(1)}</p>
              <div className="flex items-center justify-center">
                <RiStarFill className="text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div id="desc" className="mt-6 xl:mt-0">
          <p className="mb-2 text-2xl font-medium 2xl:text-3xl dark:text-white">
            About
          </p>
          <div>
            <div>
              <p className="block font-light 2xl:hidden 3xl:text-xl 3xl:font-extralight">
                {isReadMore ? game.description_raw : truncatedDesc}
              </p>
              <p className="hidden font-light 2xl:block 3xl:text-xl 3xl:font-extralight">
                {isReadMore ? game.description_raw : truncatedDescXL}
              </p>
              <button
                onClick={readMoreClickHandler}
                className="mt-3 cursor-pointer rounded-md bg-drkbg2 px-2 py-0.5 text-white dark:bg-drkcol dark:text-drkbg2"
              >
                {isReadMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* secondary image */}
        <div className="2xl:hidden">
          <img
            src={game.background_image_additional}
            alt={game.name}
            className="w-full rounded-lg"
          />
        </div>
        {/* meta info */}
        <div className="flex h-full flex-col">
          <div>
            <div className="mb-2 flex items-center gap-2 dark:text-white">
              <MdOutlineCategory className="text-2xl xl:text-3xl" />
              <p className="text-2xl font-medium 2xl:text-3xl">Stats</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 xl:h-fit xl:grid-rows-1 2xl:grid-cols-4">
              <MetaInfo
                icon={<PiClockCountdownDuotone />}
                name={`Avg Playtime: `}
                value={`${game.playtime} ${game.playtime > 1 ? `hrs` : `hr`}`}
              />
              <MetaInfo
                icon={<PiCalendarXDuotone />}
                name={`Released: `}
                value={formattedDate}
              />
              <MetaInfo
                icon={<PiGameControllerDuotone />}
                name={`Publisher: `}
                value={game.publishers?.[0]?.name || "Unknown"}
              />
              <MetaInfo
                icon={<PiCodeDuotone />}
                name={`Developer: `}
                value={game.developers?.[0]?.name || "Unknown"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mb-2 flex items-center gap-2 dark:text-white">
          <MdOutlineImage className="text-2xl xl:text-3xl" />
          <p className="text-2xl font-medium 2xl:text-3xl">Screenshots</p>
        </div>
        <Slider {...settings} className="">
          {screenshots?.results.map((i) => (
            <img
              key={i.id}
              className={`scale-95 rounded-lg`}
              src={i.image}
              alt={`Screenshot ${i.id}`}
              style={{ width: `90%`, height: `100%` }}
            />
          ))}
        </Slider>
        <div className="mt-4 flex justify-center text-2xl xl:text-3xl">
          <MdOutlineSwipe />
        </div>
      </div>

      {achievements?.count > 0 && (
        <div>
          <div className="mb-2 flex items-center gap-2 dark:text-white">
            <GrTrophy className="text-xl xl:text-2xl" />
            <p className="text-2xl font-medium 2xl:text-3xl">
              Achievements ({achievements?.count})
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {achievements?.results.map((a) => (
              <Achievement
                key={a.id}
                img={a.image}
                name={a.name}
                progress={a.percent}
                desc={a.description}
              />
            ))}
            <div className="flex items-start gap-3 rounded-md border p-1 dark:border-drkbrd">
              <div
                className="flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-md bg-[#202020] text-white transition-all duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-[white] dark:hover:text-black"
                onClick={openAchievementModal}
              >
                <BsThreeDots className="text-3xl" />
              </div>
              <div>
                <p className="font-medium dark:text-white">
                  See all achievements
                </p>
                <p className="text-xs font-extralight dark:text-white/[.50]">
                  {achievements?.count} items
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {gameDLCS && gameDLCS.results.length !== 0 ? (
        <CardGridSection
          title={`DLC's for this game`}
          icon={<MdOutlineDownload />}
        >
          {gameDLCS?.results.map((i) => (
            <GameCard
              key={i.id}
              img={i.background_image}
              title={i.name}
              rating={i.metacritic}
              genre={i.genres[0]?.name}
              slug={i.slug}
              game={i}
            />
          ))}
        </CardGridSection>
      ) : null}

      {gamesInSeries && gamesInSeries.results.length !== 0 ? (
        <CardGridSection
          title={`Other games in this series`}
          icon={<MdOutlineGamepad />}
        >
          {gamesInSeries.results.map((i) => (
            <GameCard
              key={i.id}
              img={i.background_image}
              title={i.name}
              rating={i.metacritic}
              genre={i.genres[0]?.name}
              slug={i.slug}
              game={i}
            />
          ))}
        </CardGridSection>
      ) : null}
      {isOpen && !showAllAchievements ? (
        <Modal closeModal={() => setIsOpen(false)}>
          <AddToCollection
            onClose={() => setIsOpen(false)}
            gameObj={game}
            notify={notify}
          />
        </Modal>
      ) : null}
      {isOpen && showAllAchievements ? (
        <Modal closeModal={closeAchievementModal}>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium xs:text-2xl dark:text-white">
              All Achievements
            </p>
            <InfiniteScroll
              dataLength={achievementsResults.length || 0}
              next={getMoreAchievements}
              hasMore={hasMore}
              loader={<p className="text-center">Loading...</p>}
              height={400}
              endMessage={
                <p className="mt-3 text-center font-light">
                  That&apos;s the lot!
                </p>
              }
            >
              <div className="grid grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2">
                {achievementsResults.map((a) => (
                  <Achievement
                    key={a.id}
                    img={a.image}
                    name={a.name}
                    progress={a.percent}
                    desc={a.description}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
