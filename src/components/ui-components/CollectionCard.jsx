import { Link } from "react-router-dom";
import game from "../../assets/hogwarts-legacy.jpg";
import hl1 from "../../assets/hl-1.jpg";
import hl2 from "../../assets/hl-2.jpg";

export default function CollectionCard({ title, numGames, id }) {
  return (
    <Link to={`/collection/${id}/${title}`}>
      <div className="to grid w-full max-w-[500px] grid-rows-[200px_auto] overflow-hidden rounded-[10px] bg-slate-800 bg-gradient-to-t from-black p-3 text-drkcol">
        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-center text-2xl font-semibold text-white underline">
            {title}
          </p>
          <div>
            <p className="text-lg">{numGames} games</p>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3">
            <div>
              <img
                src={game}
                alt="game"
                className="relative left-2 rounded-lg"
              />
            </div>
            <div className="mb-10">
              <img
                src={hl1}
                alt="game"
                className="relative bottom-4 z-10 scale-125 rounded-lg"
              />
            </div>
            <div>
              <img
                src={hl2}
                alt="game"
                className="relative right-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
