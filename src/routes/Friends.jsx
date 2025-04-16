import CardGridPage from "../components/ui-components/CardGridPage";
import FriendCard from "../components/ui-components/FriendCard";
import friend1 from "../assets/1.jpg"
import friend2 from "../assets/2.jpg"
import friend3 from "../assets/3.jpg"
import friend4 from "../assets/4.jpg"
import friend5 from "../assets/5.jpg"
import game from "../assets/hogwarts-legacy.jpg";
import hl1 from "../assets/hl-1.jpg";
import hl2 from "../assets/hl-2.jpg";
import {
  PiUsersDuotone,
} from "react-icons/pi";

const friends = [
  {
    id: 1,
    name: "John",
    img: friend1,
    game1: game,
    game2: hl1,
    game3: hl2,
  },
  {
    id: 2,
    name: "Eric",
    img: friend2,
    game1: game,
    game2: hl1,
    game3: hl2,
  },
  {
    id: 3,
    name: "Sarah",
    img: friend3,
    game1: game,
    game2: hl1,
    game3: hl2,
  },
  {
    id: 4,
    name: "Ian",
    img: friend4,
    game1: game,
    game2: hl1,
    game3: hl2,
  },
  {
    id: 5,
    name: "Joe",
    img: friend5,
    game1: game,
    game2: hl1,
    game3: hl2,
  },
];

export default function Friends() {
  return (
    <CardGridPage
      title={`Friends`}
      desc={`A hardcoded page showing your friends and what they're currently playing`}
      icon={<PiUsersDuotone />}
    >
      {friends.map((f) => (
        <FriendCard
          key={f.id}
          img={f.img}
          name={f.name}
          game1={f.game1}
          game2={f.game2}
          game3={f.game3}
        />
      ))}
    </CardGridPage>
  );
}
