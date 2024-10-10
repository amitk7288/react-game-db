import { useEffect } from "react";
import FeaturedGame from "./featured-game/FeaturedGame";
import CardGridSection from "../ui-components/CardGridSection";
import { Outlet, useLocation } from "react-router-dom";
import GameCard from "./game-card/GameCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardGridPage from "../ui-components/CardGridPage";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../../features/games/gamesSlice";

export default function MainView() {
  const games = useSelector((state) => state.games.data);
  const dispatch = useDispatch();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const notify = (message) => {
    toast(message, {
      position: "top-right",
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const gamesData = games.results || [];

  return (
    <>
      <main className="w-full lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)]">
        <div className="no-scrollbar fixed right-0 top-[80px] z-[-1] h-[calc(100%_-_80px)] w-full overflow-y-scroll px-4 pb-4 pt-4 sm:px-5 sm:pt-5 lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)] dark:bg-drkbg dark:text-drkcol">
          {isHomePage && (
            <div>
              <div className="mb-5 flex items-center gap-3 rounded-lg p-2">
                <FeaturedGame />
              </div>
              <CardGridPage>
                {/* {games.isLoading ? (
                  <p className="text-xl">Loading...</p>
                ) : (
                  gamesData.map((game) => (
                    <div key={game.id}>
                      <GameCard
                        // notify={notify}
                        img={game.background_image}
                        title={game.name}
                        rating={game.metacritic}
                        genre={game.genres[0].name}
                        slug={game.slug}
                      />
                    </div>
                  ))
                )} */}
              </CardGridPage>
              <CardGridSection title={`Action Games`}>
                {gamesData.filter((game) => game.genres.some((g) => g.name === "Action"))
                  .slice(0, 6)
                  .map((game) => (
                    <GameCard
                      key={game.id}
                      notify={notify}
                      img={game.background_image}
                      title={game.name}
                      rating={game.metacritic}
                      genre={game.genres[0].name}
                      slug={game.slug}
                      game={game}
                    />
                  ))}
              </CardGridSection>
              {/* <CardGridSection title={`Shooter Games`}>
                {gamesData.filter((game) => game.genres.some((g) => g.name === "Shooter"))
                  .slice(0, 6)
                  .map((game) => (
                    <GameCard
                      key={game.id}
                      // notify={notify}
                      img={game.background_image}
                      title={game.name}
                      rating={game.metacritic}
                      genre={game.genres[0].name}
                      slug={game.slug}
                    />
                  ))}
              </CardGridSection>
              <CardGridSection title={`Indie Games`}>
                {gamesData.filter((game) => game.genres.some((g) => g.name === "Indie"))
                  .slice(0, 6)
                  .map((game) => (
                    <GameCard
                      key={game.id}
                      // notify={notify}
                      img={game.background_image}
                      title={game.name}
                      rating={game.metacritic}
                      genre={game.genres[0].name}
                      slug={game.slug}
                    />
                  ))}
              </CardGridSection> */}
            </div>
          )}
          <Outlet />
        </div>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
}
