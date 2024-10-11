import { Link } from "react-router-dom";

export default function CardGridSection({ children, title, icon, btnLink }) {

  return (
    <div className="mb-10 flex flex-col gap-3 p-2">
      <div className="flex items-center gap-2">
        <div className="rounded-md p-1 text-3xl dark:text-white text-drkbg">{icon}</div>
        <p className="text-2xl font-semibold dark:text-white">{title}</p>
      </div>
      <div className=" grid place-items-center md:place-items-start gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 mt-auto">
        {children}
      </div>
      <div className="mt-5">
        <Link to={btnLink}>
          <button className="flex w-fit items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-orange-500 px-2 py-[5px] hover:from-orange-500 hover:to-pink-500 dark:border-drkbrd dark:bg-drkbg dark:text-white">
            <p className="text-xs tracking-wide text-white xs:text-lg 2xl:text-lg">
              {`See all ${title} games`}
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}
