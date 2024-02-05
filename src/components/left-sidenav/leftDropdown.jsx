"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import LeftSearchLinks from "./leftSearchLinks";

const LeftDropdown = () => {

  return (
    <section className="mt-4 flex justify-center md:hidden">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[90%] justify-between">
            Collection <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        {/* Content */}
        <DropdownMenuContent className="min-[320px]:w-72 min-[375px]:w-80 min-[425px]:w-96">
          <LeftSearchLinks  />
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default LeftDropdown;
