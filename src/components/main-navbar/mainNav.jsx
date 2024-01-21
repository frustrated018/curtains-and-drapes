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
    <nav className="p-[.5rem]">
      <section className="flex justify-between items-center mx-5">
        {/* //* Logo */}
        <h4 className="text-2xl font-bold">C&D</h4>

        {/* Links will be added here */}

        {/* <div className="hidden md:flex gap-2">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Deals</Link>
        </div> */}

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#">
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
              <SheetHeader>
                <SheetTitle>Curtains & Drapes</SheetTitle>
              </SheetHeader>
              {/* //! links */}
            </SheetContent>
          </Sheet>
        </div>

        {/* //! Avatar from shadcn */}
        <div className="">
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
