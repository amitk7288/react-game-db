import FeaturedGame from "./featured-game/FeaturedGame";
import CardGridContainer from "../ui-components/CardGridContainer";
import { Outlet, useLocation } from "react-router-dom";
import GameCard from "./game-card/GameCard";

export default function MainView() {
  const location = useLocation();

  // Check if the path is exactly "/"
  const isHomePage = location.pathname === "/";

  return (
    <main className="w-full lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)]">
      <div className="no-scrollbar fixed right-0 top-[80px] z-[-1] h-[calc(100%_-_80px)] w-full overflow-y-scroll px-4 pb-4 pt-4 sm:px-5 sm:pt-5 lg:w-[calc(100%_-_20vw)] xl:w-[calc(100%_-_18vw)] 2xl:w-[calc(100%_-_15vw)] 3xl:w-[calc(100%_-_12vw)] dark:bg-drkbg dark:text-drkcol">
        {isHomePage && (
          <div>
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
        )}
        <Outlet />
      </div>
    </main>
  );
}
