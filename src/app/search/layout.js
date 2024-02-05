import LeftSideNav from "@/components/left-sidenav/leftSidenav";
import MainNav from "@/components/main-navbar/mainNav";
import RightSidenav from "@/components/right-sidenav/rightSidenav";

export default function SearchLayout({ children }) {
  //! TODO: Issue with the links.... Every time i click the liks it refreshes the whole page and makes a mess. also if i change the pages but don't update the sort function it stays the same for the dorpdown menu but the search params don't actually stay updated
  
  //! Vercel Deploy issue: Error occurred prerendering page "/search/curtains". and other dynamic routes as well. I think it's form the prop drilling but let's see 

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
