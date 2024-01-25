import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <form className="w-max-[550px] w-full lg:w-80 xl:w-full">
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      
    </form>
  );
};

export default Search;
