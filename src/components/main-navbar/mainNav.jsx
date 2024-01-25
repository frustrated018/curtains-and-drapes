"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggleButton } from "@/components/theme-toggle-button/themeToggleButton";

const MainNav = () => {
  return (
    <nav className="p-[.5rem] border border-b-foreground ">
      <section className="flex justify-between md:justify-normal items-center mx-5">
        {/* //* Logo */}
        <Link href="/" className="text-xl font-bold hidden md:block mr-auto">
          Curtains & Drapes
        </Link>

        {/* //! Normal Nav Links */}

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Deals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* //! For Mobile devices  */}
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

        {/* //! Avatar from shadcn */}
        <div className="flex justify-center gap-3">
          <ThemeToggleButton />
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
        </div>
      </section>
    </nav>
  );
};

export default MainNav;
