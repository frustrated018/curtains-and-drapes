import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MainNav = () => {
  return (
    <nav className="bg-slate-300 p-[.5rem]">
      <section className="flex justify-between items-center">
        {/* //* Logo */}
        <h4 className="text-2xl font-bold">My Logo</h4>

        {/* Links will be added here */}

        {/* //! Avatar from shadcn */}
        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>C&S</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </nav>
  );
};

export default MainNav;
