

export default function Achievement({img, name, progress, desc}) {
  return (
    <div className="flex items-start border dark:border-drkbrd gap-3 p-1 rounded-md">
      <div>
        <img src={img} alt={name} className="max-w-[55px] max-h-[55px] rounded-md" />
      </div>
      <div>
        <p className="text-xs dark:text-white">{progress}%</p>
        <p className="font-medium dark:text-white">{name}</p>
        <p className="text-xs font-extralight dark:text-white/[.50]">{desc}</p>
      </div>
    </div>
  );
}