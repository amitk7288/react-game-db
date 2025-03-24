import { useState, useEffect } from "react";
import FeaturedGame from "./featured-game/FeaturedGame";
import GameCard from "./game-card/GameCard";
import CardGridSection from "../ui-components/CardGridSection";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchGames } from "../../features/games/gamesSlice";
import "react-toastify/dist/ReactToastify.css";
import {PiSwordBold} from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";
import { MdGamepad } from "react-icons/md";

export default function MainView() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [actionGames, setActionGames] = useState([]);
  const [rpgGames, setRpgGames] = useState([]);
  const [IndieGames, setIndieGames] = useState([]);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const notify = (message) => {
    toast(message, {
      position: "top-right",
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    setIsLoading(true);

    // Fetch Action Games
    dispatch(fetchGames({ genreId: 4, page: 2, pageSize: 10 }))
      .unwrap()
      .then((games) => {
        setActionGames(games);
      })
      .catch((error) => {
        console.error("Error fetching action games:", error);
        notify("Failed to fetch action games.");
      });

    // Fetch RPG Games
    dispatch(fetchGames({ genreId: 5, page: 12, pageSize: 10 }))
      .unwrap()
      .then((games) => {
        setRpgGames(games);
      })
      .catch((error) => {
        console.error("Error fetching RPG games:", error);
        notify("Failed to fetch RPG games.");
      });

    // Fetch Indie Games
    dispatch(fetchGames({ genreId: 51, page: 1, pageSize: 10 }))
      .unwrap()
      .then((games) => {
        setIndieGames(games);
      })
      .catch((error) => {
        console.error("Error fetching Indie games:", error);
        notify("Failed to fetch Indie games.");
      })
      .finally(() => {
        console.log("Setting isLoading to false.");
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <main className="h-full w-full lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)]">
        <div className="no-scrollbar fixed right-0 top-[80px] z-[-1] h-[calc(100%_-_80px)] w-full overflow-y-scroll px-4 pb-4 pt-4 sm:px-5 sm:pt-5 lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)] dark:bg-drkbg dark:text-drkcol">
          {isHomePage && (
            <div>
              <div className="mb-5 flex items-center gap-3 rounded-lg p-2">
                <FeaturedGame />
              </div>

              {isLoading ? (
                <p data-testid="loading">Loading...</p>
              ) : (
                <>
                  <CardGridSection
                    title={"Action"}
                    icon={<GiPistolGun />}
                    btnLink={`/genre/4/action`}
                  >
                    {actionGames.map((game) => (
                      <GameCard
                        key={game.id}
                        img={game.background_image}
                        title={game.name}
                        rating={game.metacritic}
                        genre={game.genres[0]?.name}
                        slug={game.slug}
                        game={game}
                        notify={notify}
                      />
                    ))}
                  </CardGridSection>

                  <CardGridSection
                    title={"RPG"}
                    icon={<PiSwordBold />}
                    btnLink={`/genre/5/role-playing-games-rpg`}
                  >
                    {rpgGames.map((game) => (
                      <GameCard
                        key={game.id}
                        img={game.background_image}
                        title={game.name}
                        rating={game.metacritic}
                        genre={game.genres[0]?.name}
                        slug={game.slug}
                        game={game}
                        notify={notify}
                      />
                    ))}
                  </CardGridSection>

                  <CardGridSection
                    title={"Indie"}
                    icon={<MdGamepad />}
                    btnLink={`/genre/51/indie`}
                  >
                    {IndieGames.map((game) => (
                      <GameCard
                        key={game.id}
                        img={game.background_image}
                        title={game.name}
                        rating={game.metacritic}
                        genre={game.genres[0]?.name}
                        slug={game.slug}
                        game={game}
                        notify={notify}
                      />
                    ))}
                  </CardGridSection>
                </>
              )}
            </div>
          )}
          <Outlet />
        </div>
        <ToastContainer autoClose={1000} stacked />
      </main>
    </>
  );
}
