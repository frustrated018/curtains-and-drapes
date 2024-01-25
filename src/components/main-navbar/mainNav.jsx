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
import { Input } from "@/components/ui/input";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";

const MainNav = () => {
  return (
    <nav className="p-[.5rem] border border-b-foreground ">
      <section className="flex justify-between items-center mx-5">
        {/* //! Left Side */}
        <section className="flex items-center gap-5">
          {/* //! Logo */}
          <Link href="/" className="text-xl font-bold hidden md:block mr-auto">
            Curtains & Drapes
          </Link>

          {/* //! Normal Nav Links */}
          <div className="hidden md:block">
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu size={24} />
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

        <section className="flex justify-center gap-3">
          {/* //! Search Bar */}

          <Input type="text" placeholder="Search" />

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
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>C&S</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {/* //! Content */}
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Login</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
    </nav>
  );
};

export default MainNav;
