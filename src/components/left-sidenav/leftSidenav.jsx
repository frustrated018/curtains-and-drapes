import React from "react";
import LeftSearchLinks from "./leftSearchLinks";

const LeftSideNav = () => {
  return (
    <div className="flex h-full flex-col bg-secondary">
      <section className="ml-4 mt-2 hidden md:block">
        {/* Title */}
        <h3 className="mb-2 text-sm text-muted-foreground">Collections</h3>

        {/* Normal Links */}
        <div className="flex flex-col">
          <LeftSearchLinks />
        </div>
      </section>
    </div>
  );
};

export default LeftSideNav;
