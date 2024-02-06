import LeftSideNav from "@/components/left-sidenav/leftSidenav";
import MainNav from "@/components/main-navbar/mainNav";
import RightSidenav from "@/components/right-sidenav/rightSidenav";
import { Suspense } from "react";

export default function SearchLayout({ children }) {
  //! TODO: Issue with the links.... Every time i click the liks it refreshes the whole page and makes a mess. also if i change the pages but don't update the sort function it stays the same for the dorpdown menu but the search params don't actually stay updated

  //! AHHHHH this thing is so much worse than i thought the issue is the whole page loading when one link is clicked. I just want to update the url like in the vercel e-commerce store. but WTH is wrong with my approach !!!! (¬_¬ )

  //! Another one ༼ つ ◕_◕ ༽つ : There is a scrollbar in the children. If there are too many cardsit shows up.

  return (
    <>
      <MainNav />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="order-1 w-full flex-none md:w-36 lg:w-48">
          <LeftSideNav />
        </div>
        <div className="no-scrollbar order-3 flex-grow p-4 md:order-2 md:overflow-y-auto md:p-5">
          {children}
        </div>
        <div className="order-2 w-full flex-none md:order-3 md:w-36 lg:w-48">
          <Suspense fallback={<div>Layout loading....</div>}>
            <RightSidenav />
          </Suspense>
        </div>
      </div>
    </>
  );
}
