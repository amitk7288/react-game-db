import game from "../../assets/hogwarts-legacy.jpg";
import hl1 from "../../assets/hl-1.jpg";
import hl2 from "../../assets/hl-2.jpg";

export default function CollectionCard() {
  return (
    <div className="grid w-full max-w-[500px] grid-rows-[200px_auto] overflow-hidden rounded-[10px] text-drkcol p-3 bg-gradient-to-t from-black to bg-slate-800">
      <div className="flex flex-col items-center gap-5 mt-10">
        <p className="text-2xl font-semibold text-white underline text-center">
          Collection Title
        </p>
        <div>
          <p className="text-lg">50 games</p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3">
          <div>
            <img src={game} alt="game" className="rounded-lg relative left-2" />
          </div>
          <div className="mb-10">
            <img src={hl1} alt="game" className="rounded-lg scale-125 relative bottom-4 z-10" />
          </div>
          <div>
            <img src={hl2} alt="game" className="rounded-lg relative right-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
