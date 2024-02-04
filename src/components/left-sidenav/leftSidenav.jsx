import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LeftSideNav = () => {
  return (
    <section className="flex h-full flex-col bg-secondary">
      <div className="ml-4 mt-2">
        {/* Title */}
        <h3 className="mb-2 text-sm text-muted-foreground">Collections</h3>

        {/* Links //TODO: Need to find a way to make them active links */}
        <div className="flex flex-col">
          <Link href="/search">All Products</Link>
          <Link href="/search">All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default LeftSideNav;
