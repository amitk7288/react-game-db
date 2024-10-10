import { useSelector } from "react-redux";
import CardGridPage from "../components/ui-components/CardGridPage";
import CollectionCard from "../components/ui-components/CollectionCard";
import {
  PiBookmarkSimpleDuotone,
} from "react-icons/pi";

export default function Collections() {
  const collectionsData = useSelector((state) => state.collections);
  return (
      <CardGridPage
        title={`Collections`}
        desc={`A list of all your collections`}
        icon={<PiBookmarkSimpleDuotone />}
      >
        {collectionsData.map((c) => (
          <CollectionCard
            key={c.id}
            id={c.id}
            title={c.title}
            numGames={c.games.length}
          />
        ))}
      </CardGridPage>
  );
}
