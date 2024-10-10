import CardGridPage from "../components/ui-components/CardGridPage";
import GameCard from "../components/mainview/game-card/GameCard";
import {
  PiMagicWandDuotone,
} from "react-icons/pi";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const wishGamesData = useSelector((state) => state.wishGames);
  return (
    <CardGridPage
      title={`Wishlist`}
      desc={`A list of all the games you want!`}
      icon={<PiMagicWandDuotone />}
    >
      {wishGamesData.map((g) => (
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
