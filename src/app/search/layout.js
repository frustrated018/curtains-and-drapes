import LeftSideNav from "@/components/left-sidenav/leftSidenav";
import MainNav from "@/components/main-navbar/mainNav";

export default function SearchLayout({ children }) {
  //TODO: Need to add two sidenavs in this layout

  return (
    <>
      <MainNav />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-32 lg:w-40">
          <LeftSideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}
