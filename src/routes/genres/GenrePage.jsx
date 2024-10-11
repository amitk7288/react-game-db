import { useEffect, useState } from "react";
import CardGridPage from "../../components/ui-components/CardGridPage";
import GameCard from "../../components/mainview/game-card/GameCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../features/genres/genresSlice";
import { fetchGames } from "../../features/games/gamesSlice";

export default function GenrePage() {
  const dispatch = useDispatch();
  const { genreId } = useParams();

  const gamesData = useSelector((state) => state.games.data) || [];
  const genres = useSelector((state) => state.genres);

  const [isLoading, setIsLoading] = useState(true);

    const notify = (message) => {
      toast(message, {
        position: "top-right",
        hideProgressBar: true,
        className: "mt-[80px]"
      });
    };

  useEffect(() => {
    setIsLoading(true);

    dispatch(fetchGames({ genreId, page: 1, pageSize: 40 })).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch, genreId]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genreData = genres.data.results || [];
  console.log("genres", genreData);

  const genre = genreData.find((genre) => genre.id === parseInt(genreId));
  console.log("GENRE: ", genre);

  console.log("GAMES: ", gamesData);

  if (!genre) {
    return (
      <CardGridPage
        title="Loading..."
        desc="Fetching genre data..."
      ></CardGridPage>
    );
  }

  if (isLoading) {
    return (
      <CardGridPage
        desc="Please wait while we fetch the games."
      />
    );
  }

  return (
    <>
      <CardGridPage
        title={`${genre.name} Games`}
        desc={`A list of ${genre.name} games:`}
      >
        {gamesData.map((game) => (
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
      <div className="mb-10 flex gap-5 text-xl">
        <button className="border p-4">Prev</button>
        <button className="border p-4">Next</button>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
}
