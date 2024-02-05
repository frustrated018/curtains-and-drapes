import LeftSideNav from "@/components/left-sidenav/leftSidenav";
import MainNav from "@/components/main-navbar/mainNav";
import RightSidenav from "@/components/right-sidenav/rightSidenav";

export default function SearchLayout({ children }) {
  //TODO: Need to add two sidenavs in this layout

  return (
    <>
      <MainNav />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="order-1 w-full flex-none md:w-36 lg:w-48">
          <LeftSideNav />
        </div>
        <div className="order-3 flex-grow p-6 md:order-2 md:overflow-y-auto md:p-12">
          {children}
        </div>
        <div className="order-2 w-full flex-none md:order-3 md:w-36 lg:w-48">
          <RightSidenav />
        </div>
      </div>
    </>
  );
}
