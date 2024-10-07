import { PiSwordBold } from "react-icons/pi";

export default function CardGridContainer({ children, title }) {
  return (
    <div className="mb-6 flex flex-col gap-3 p-2">
      <div className="flex items-start gap-2">
        <PiSwordBold className="rounded-md bg-gradient-to-br from-purple-800 to-sky-300 p-1 text-3xl text-white" />
        <p className="text-2xl font-semibold dark:text-white">{title}</p>
      </div>
      <div className="grid place-items-center gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
      <div>
        <button className="flex w-fit items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-orange-500 px-2 py-[5px] hover:from-orange-500 hover:to-pink-500 dark:border-drkbrd dark:bg-drkbg dark:text-white">
          <p className="text-xs text-white xs:text-sm 2xl:text-base tracking-wide">
            &nbsp;See all
          </p>
        </button>
      </div>
    </div>
  );
}
