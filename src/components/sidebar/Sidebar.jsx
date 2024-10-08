import SidebarIcons from "./SidebarIcons";

export default function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-0 z-0 hidden h-[100%] w-[20vw] xl:w-[18vw] 2xl:w-[15vw] 3xl:w-[12vw] lg:flex dark:bg-drkbg dark:text-drkcol">
      <SidebarIcons />
    </aside>
  );
}
