export default function CardGridPage({ children, title, desc }) {
  return (
    <div className="mb-6 flex flex-col gap-3 p-2">
      <div className="flex flex-col items-start gap-2">
        <p className="text-[60px] font-semibold dark:text-white">{title}</p>
        <p className="font-light">{desc}</p>
      </div>
      <div className="grid place-items-center gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {children}
      </div>
    </div>
  );
}
