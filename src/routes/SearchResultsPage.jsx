import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchGamesByTitle } from "../features/games/gamesSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardGridPage from "../components/ui-components/CardGridPage";
import GameCard from "../components/mainview/game-card/GameCard";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";

export default function SearchResults() {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [searchedGames, setSearchedGames] = useState([]);

  const notify = (message) => {
    toast(message, {
      position: "top-right",
      hideProgressBar: true,
      className: "mt-[80px]",
    });
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(searchGamesByTitle(searchQuery))
      .unwrap()
      .then((games) => setSearchedGames(games));
    setIsLoading(false);
  }, [dispatch, searchQuery]);

  if (isLoading) {
    return <CardGridPage desc="Searching, please wait..." />;
  }

  return (
    <>
      <CardGridPage
        title={`Search results`}
        desc={`Search term: ${searchQuery}`}
        icon={<PiMagnifyingGlassDuotone />}
      >
        {searchedGames?.results?.map((game) => (
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
      </CardGridPage>
      <ToastContainer autoClose={3000} />
    </>
  );
}
