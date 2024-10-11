import CardGridSection from "../components/ui-components/CardGridSection";
import GameCard from "../components/mainview/game-card/GameCard";
import {
  PiBookDuotone,
  PiHeartDuotone,
  PiMagicWandDuotone,
} from "react-icons/pi";
import { useSelector } from "react-redux";

export default function Library() {
  const favGamesData = useSelector((state) => state.favGames);
  const wishGamesData = useSelector((state) => state.wishGames);

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 p-2">
        <div className="mb-6 flex flex-col items-start gap-2">
          <div className="flex flex-wrap items-center gap-2 text-[60px] font-semibold dark:text-white">
            <PiBookDuotone />
            <p className="capitalize">Library</p>
          </div>
          <p className="font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            laboriosam qui dignissimos dolorem aut sunt. Expedita repudiandae
            enim fugit animi aliquam accusantium. Optio nisi possimus vitae
            nulla officia consequuntur sit doloribus distinctio necessitatibus
            autem voluptates cumque iusto eos omnis minima, asperiores assumenda
            ut excepturi rerum? Debitis quod perferendis labore assumenda.
          </p>
        </div>
      </div>
      <CardGridSection title={`Favourites`} icon={<PiHeartDuotone />} btnLink={`/favourites`}>
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
      </CardGridSection>

      <CardGridSection title={`Wishlist`} icon={<PiMagicWandDuotone />} btnLink={`/wishlist`}>
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
      </CardGridSection>
    </>
  );
}
