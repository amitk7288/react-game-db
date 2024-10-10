export default function CardGridPage({ children, title, desc, icon }) {
  return (
    <div className="mb-6 flex flex-col gap-3 p-2">
      <div className="mb-6 flex flex-col items-start gap-2">
        <div className="flex items-center gap-2 text-[60px] font-semibold dark:text-white flex-wrap">
          {icon}
          <p className="capitalize">{title}</p>
        </div>
        <p className="font-light">{desc}</p>
      </div>
      <div className="grid place-items-center gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {children}
      </div>
    </div>
  );
}
