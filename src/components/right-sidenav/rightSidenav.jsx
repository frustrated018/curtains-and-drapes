import RightSearchLinks from "./rightSearLinks";
import RightDropdown from "./rightDropdown";

const RightSidenav = () => {
  return (
    <>
      {/* Normal links */}
      <section className="hidden h-full flex-col bg-secondary md:flex">
        <div className="pl-4 pt-2">
          {/* Title */}
          <h3 className="mb-2 text-sm text-muted-foreground">Sort By</h3>

          {/* Links */}
          <div className="flex flex-col">
            <RightSearchLinks />
          </div>
        </div>
      </section>

      {/* Links for smaller devices */}
      <RightDropdown />
    </>
  );
};

export default RightSidenav;
