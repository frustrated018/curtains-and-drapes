"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import RightSearchLinks from "./rightSearLinks";

const RightDropdown = () => {
  const [selectedQuery, setSelectedQuery] = useState("Relevance");

  return (
    <section className="mt-4 flex justify-center md:hidden">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[90%] justify-between">
            {selectedQuery} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        {/* Content */}
        <DropdownMenuContent className="min-[320px]:w-72 min-[375px]:w-80 min-[425px]:w-96">
          <RightSearchLinks setSelectedQuery={setSelectedQuery} />
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default RightDropdown;
