import React from "react";
import LeftSearchLinks from "./leftSearchLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const LeftSideNav = () => {
  return (
    <>
      <section className="hidden h-full flex-col bg-secondary md:flex">
        <div className="pl-4 pt-2">
          {/* Title */}
          <h3 className="mb-2 text-sm text-muted-foreground">Collections</h3>

          {/* Links //TODO: Need to find a way to make them active links */}
          <div className="flex flex-col">
            <LeftSearchLinks />
          </div>
        </div>
      </section>

      <section className="mt-4 flex justify-center md:hidden">
        <DropdownMenu>
          {/* Trigger */}
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[90%] justify-between">
              All Products <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          {/* Content */}
          <DropdownMenuContent className="min-[320px]:w-72 min-[375px]:w-80 min-[425px]:w-96">
            <LeftSearchLinks />
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </>
  );
};

export default LeftSideNav;
