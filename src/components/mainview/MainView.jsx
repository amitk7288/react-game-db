import FeaturedGame from "./featured-game/FeaturedGame";
import CardGridContainer from "../ui-components/CardGridContainer";
import GameCard from "./game-card/GameCard";

export default function MainView() {

  return (
    <main className="w-full lg:w-[calc(100%_-_20vw)] 2xl:w-[calc(100%_-_20vw)]">
      <div className="no-scrollbar fixed right-0 top-[80px] z-[-1] h-[calc(100%_-_80px)] w-full overflow-y-scroll px-4 pb-4 pt-4 sm:px-5 sm:pt-5 lg:w-[calc(100%_-_20vw)] 2xl:w-[calc(100%_-_20vw)] dark:bg-drkbg dark:text-drkcol">
        <div className="mb-5 flex items-center gap-3 rounded-lg p-2">
          <FeaturedGame />
        </div>
        <div>
          <CardGridContainer title={`Action Games`}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </CardGridContainer>
          <CardGridContainer title={`RPG Games`}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </CardGridContainer>
          <CardGridContainer title={`First Person Shooter Games`}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </CardGridContainer>
          <CardGridContainer title={`My Fav Games`}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </CardGridContainer>
        </div>
      </div>
    </main>
  );
}
