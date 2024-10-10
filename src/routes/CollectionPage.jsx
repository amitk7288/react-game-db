import CardGridPage from "../components/ui-components/CardGridPage";
import GameCard from "../components/mainview/game-card/GameCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CollectionPage() {
  const { title, id } = useParams();
  const collection = useSelector((state) =>
    state.collections.find((collection) => collection.id === parseInt(id)),
  );

  return (
    <CardGridPage title={`${title}`} desc={`Games in this collection:`}>
      {
        collection.games.map((game) => (
        <GameCard
          key={game.id}
          img={game.background_image}
          title={game.name}
          rating={game.metacritic}
          genre={game.genres[0].name}
          slug={game.slug}
          game={game}
        />
      ))}
    </CardGridPage>
  );
}
