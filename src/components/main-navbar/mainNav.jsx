"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

const MainNav = () => {
  return (
    <nav className="p-[.5rem] border border-b-foreground ">
      <section className="flex justify-between items-center mx-5">
        {/* //* Logo */}
        <Link href="/" className="text-2xl font-bold hidden md:block">
          C&D
        </Link>

        {/* //! Normal Nav Links */}

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <Link href="/#" legacyBehavior passHref>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>

              <Link href="/#" legacyBehavior passHref>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>

              <Link href="/#" legacyBehavior passHref>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Deals
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>
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
              <SheetHeader>
                <SheetTitle>Curtains & Drapes</SheetTitle>
              </SheetHeader>
              {/* //! links */}
            </SheetContent>
          </Sheet>
        </div>

        {/* //! Avatar from shadcn */}
        <div className="flex justify-center">
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
