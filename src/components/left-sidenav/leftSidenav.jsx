import LeftSearchLinks from "./leftSearchLinks";
import LeftSmallerNav from "./leftsmallerNav";

const LeftSideNav = () => {
  return (
    <>
      {/* Normal links */}
      <section className="hidden h-full flex-col bg-secondary md:flex">
        <div className="pl-4 pt-2">
          {/* Title */}
          <h3 className="mb-2 text-sm text-muted-foreground">Collections</h3>

          {/* Links */}
          <div className="flex flex-col">
            <LeftSearchLinks />
          </div>
        </div>
      </section>

      {/* Links for smaller devices */}
      <LeftSmallerNav />
    </>
  );
};

export default LeftSideNav;
