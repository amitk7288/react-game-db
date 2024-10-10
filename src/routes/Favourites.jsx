import CardGridPage from "../components/ui-components/CardGridPage";
import GameCard from "../components/mainview/game-card/GameCard";
import {
  PiHeartDuotone,
} from "react-icons/pi";
import { useSelector } from "react-redux";

export default function Favourites() {
  const favGamesData = useSelector((state) => state.favGames);
  return (
    <CardGridPage
      title={`Favourites`}
      desc={`A list of all your favourite games!`}
      icon={<PiHeartDuotone />}
    >
      {favGamesData.map((g) => (
        <GameCard
          key={g.id}
          img={g.background_image}
          title={g.name}
          rating={g.metacritic}
          genre={g.genres[0].name}
          slug={g.slug}
          game={g}
        />
      ))}
    </CardGridPage>
  );
}
