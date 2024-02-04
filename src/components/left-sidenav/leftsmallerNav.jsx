"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import LeftSearchLinks from "./leftSearchLinks";
import { useState } from "react";

const LeftSmallerNav = () => {
  const [selectedLink, setSelectedLink] = useState("All Products");

  return (
    <section className="mt-4 flex justify-center md:hidden">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[90%] justify-between">
            {selectedLink} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        {/* Content */}
        <DropdownMenuContent className="min-[320px]:w-72 min-[375px]:w-80 min-[425px]:w-96">
          <LeftSearchLinks setSelectedLink={setSelectedLink} />
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default LeftSmallerNav;
