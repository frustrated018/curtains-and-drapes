"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggleButton } from "@/components/theme-toggle-button/themeToggleButton";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import LoginLogout from "@/components/login-logout-buttons/loginLogout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import SearchBar from "@/components/search-bar/searchBar";

//TODO: Seperate which parts of this navbar are static and which are not.

const MainNav = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="p-[.5rem] border border-b-foreground ">
      <section className="flex justify-around md:justify-between items-center">
        {/* //! Left Side */}
        <section id="left" className="flex items-center gap-5">
          {/* //! Logo */}
          <Link
            href="/"
            className=" order-2 lg:order-1 text-xl font-bold hidden md:block"
          >
            Curtains & Drapes
          </Link>

          {/* //! Normal Nav Links */}
          <div className="hidden lg:block order-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      All Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Deals
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* //! For Mobile devices  */}
          {/* //TODO: Change the links and add other things */}
          <div className=" order-1 lg:hidden flex justify-center">
            <Sheet>
              <SheetTrigger>
                <IoIosMenu size={30} />
              </SheetTrigger>
              <SheetContent side={"left"}>
                {/* //! links */}
                <div className="flex flex-col gap-2">
                  <Link href="/" className="font-bold">
                    Curtains & Drapes
                  </Link>
                  <Link href="#" className="text-primary">
                    About
                  </Link>
                  <Link href="#" className="text-primary">
                    Contact
                  </Link>
                  <Link href="#" className="text-primary">
                    Deals
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        <section className="flex items-center gap-3">
          {/* //! Search Bar */}
          <SearchBar />

          {/* //! Light and dark mode toggle button */}
          <ThemeToggleButton />

          {/* //! Cart  */}
          <Sheet>
            <SheetTrigger>
              <CiShoppingCart size={24} />
            </SheetTrigger>
            <SheetContent side={"right"}>
              <div className="flex flex-col justify-center items-center pt-[50%]">
                <CiShoppingCart size={60} />
                <h2 className="text-4xl font-bold">Oops!</h2>
                <p className="text-lg font-semibold">No items in your cart.</p>
              </div>
            </SheetContent>
          </Sheet>

          {/* //! Avatar from shadcn */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://source.unsplash.com/white-french-bulldog-puppy-covered-with-white-textile-IeT84oak7HQ"
                  }
                  alt="user profile image"
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {/* //! Content */}
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              {/* login logout toggle */}
              <LoginLogout />
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
    </nav>
  );
};

export default MainNav;
