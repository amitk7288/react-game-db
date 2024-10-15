export default function GenreTag({genre}) {
  return (
    <div className="z-10 rounded-full bg-drkbg/60 px-2 py-1">
      <p className="text-xs text-white xs:text-sm md:text-base">{genre}</p>
    </div>
  );
}