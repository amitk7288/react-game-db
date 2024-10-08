
export default function FriendCard({img, name, game1, game2, game3}) {
  return (
    <div className="to grid h-auto w-full max-w-[500px] grid-rows-[200px_auto] overflow-hidden rounded-[10px] bg-slate-800 bg-gradient-to-t from-black p-3 text-drkcol">
      <div className="grid grid-cols-1 place-items-center">
        <div className="flex flex-col gap-3">
          <img
            src={img}
            alt={name}
            className="h-[80px] w-[80px] rounded-full"
          />
          <p className="text-xl text-center">{name}</p>
        </div>
      </div>
      <div className="">
        <p className="mb-3">Currently playing:</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <img src={game1} alt="game" className="rounded-lg" />
          </div>
          <div className="mb-5">
            <img src={game2} alt="game" className="rounded-lg" />
          </div>
          <div>
            <img src={game3} alt="game" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
