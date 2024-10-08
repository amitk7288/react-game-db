import CardGridPage from "../../components/ui-components/CardGridPage";
import GameCard from "../../components/mainview/game-card/GameCard";
import { useParams } from "react-router-dom";

export default function GenrePage() {
  const {slug} = useParams();

  return (
    <CardGridPage
      title={`${slug}`}
      desc={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cumque pariatur neque praesentium suscipit atque sapiente excepturi tempora, quas accusamus quia vero quis, libero dolor adipisci beatae provident? Mollitia ratione suscipit illum odit adipisci repudiandae fuga. Distinctio perferendis natus numquam. Dolor nostrum aperiam, at inventore iusto maiores deleniti quasi blanditiis iure, sequi odio ex ut aut laboriosam vel consequuntur sint aspernatur molestias deserunt? Eum, deserunt id perferendis repellendus iste delectus non reprehenderit accusantium numquam explicabo incidunt nulla doloribus vero iure distinctio voluptas? Voluptatem velit alias quos asperiores autem officia necessitatibus, quis similique soluta, obcaecati non, vel odit possimus laudantium repellendus ad tempora earum ratione saepe dignissimos qui odio? Accusantium est expedita facere amet, dolorum necessitatibus quae exercitationem voluptatem assumenda voluptates, eaque quaerat ipsa molestiae eligendi, repudiandae cum rem reprehenderit ea nihil? Officiis quisquam nulla unde molestias. Nostrum dolorum nihil in nobis? Optio reiciendis voluptatum laboriosam reprehenderit quaerat praesentium. Animi, cum.`}
    >
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </CardGridPage>
  );
}
