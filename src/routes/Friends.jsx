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
      desc={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cumque pariatur neque praesentium suscipit atque sapiente excepturi tempora, quas accusamus quia vero quis, libero dolor adipisci beatae provident? Mollitia ratione suscipit illum odit adipisci repudiandae fuga. Distinctio perferendis natus numquam. Dolor nostrum aperiam, at inventore iusto maiores deleniti quasi blanditiis iure, sequi odio ex ut aut laboriosam vel consequuntur sint aspernatur molestias deserunt? Eum, deserunt id perferendis repellendus iste delectus non reprehenderit accusantium numquam explicabo incidunt nulla doloribus vero iure distinctio voluptas? Voluptatem velit alias quos asperiores autem officia necessitatibus, quis similique soluta, obcaecati non, vel odit possimus laudantium repellendus ad tempora earum ratione saepe dignissimos qui odio? Accusantium est expedita facere amet, dolorum necessitatibus quae exercitationem voluptatem assumenda voluptates, eaque quaerat ipsa molestiae eligendi, repudiandae cum rem reprehenderit ea nihil? Officiis quisquam nulla unde molestias. Nostrum dolorum nihil in nobis? Optio reiciendis voluptatum laboriosam reprehenderit quaerat praesentium. Animi, cum.`}
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
