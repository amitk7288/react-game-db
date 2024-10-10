import CardGridPage from "../../components/ui-components/CardGridPage";
import GenreCard from "../../components/ui-components/GenreCard";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { useSelector , useDispatch} from "react-redux";
import { fetchGenres } from "../../features/genres/genresSlice";
import { useEffect } from "react";

export default function GenrePage() {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genreData = genres.data.results || [];

  console.log("genres", genres.data.results);

  return (
    <CardGridPage
      title={`Genres`}
      desc={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cumque pariatur neque praesentium suscipit atque sapiente excepturi tempora, quas accusamus quia vero quis, libero dolor adipisci beatae provident? Mollitia ratione suscipit illum odit adipisci repudiandae fuga. Distinctio perferendis natus numquam.`}
      icon={<PiSquaresFourDuotone />}
    >
      {genres.isLoading ? (
        <p className="text-xl">Loading...</p>
      ) : (
        genreData.map((genre) => (
          <div key={genre.id}>
            <GenreCard
              title={genre.name}
              games={genre.games_count.toLocaleString()}
              slug={genre.slug}
              img={genre.image_background}
            />
          </div>
        ))
      )}
    </CardGridPage>
  );
}
