import { RiSearchLine } from "react-icons/ri";
import logo from "../../assets/temp-logo.png"

const Header = () => {
  return (
    <header className="dark:border-drkbrd dark:bg-drkbg dark:text-drkcol fixed right-0 top-0 h-[80px] w-full border-b p-5 sm:border-x lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-shrink-0 lg:hidden">
          <img src={logo} alt="Gaming Logo" className="h-auto w-[35px] rounded-md" />
        </div>
        <div className="dark:bg-drkbg2 dark:text-drkcol relative flex h-[40px] w-[100%] items-center gap-2 rounded-md bg-[#f7f7f7] px-2 py-3 lg:w-[60%]">
          <RiSearchLine />
          <input
            className="dark:text-drkcol w-[100%] border-none bg-[transparent] p-0 text-sm font-medium text-black outline-none focus:ring-0"
            type="search"
            name="searchcards"
            id="searchcards"
            placeholder="Search cards..."
          />
          <div className="dark:bg-drkbg2 dark:text-drkcol absolute left-[-81px] top-[55px] w-[100vw] rounded-b-md bg-[#f7f7f7] sm:left-0 sm:top-[35px] sm:w-full"></div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 lg:hidden"></div>
          <div className="hidden lg:flex lg:items-center lg:gap-4"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;