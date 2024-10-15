
function MetaInfo({icon, name, value}) {
  return (
    <div className="rounded-lg border px-2 py-1 dark:border-drkbrd">
      <div className="flex items-center gap-1">
        <div className="text-xl">{icon}</div>
        <p className="text-sm font-extralight dark:text-white xs:text-base 2xl:text-xl 2xl:font-light">{name}</p>
      </div>
      <div>
        <p className="text-sm font-medium dark:text-white xs:text-base 2xl:text-xl">{value}</p>
      </div>
    </div>
  );
}

export default MetaInfo