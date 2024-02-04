import MainNav from "@/components/main-navbar/mainNav";

export default function SearchLayout({ children }) {
  return (
    <>
      <MainNav />
      <>{children}</>
      {/* //TODO: Need to add two sidenavs in this layout */}
    </>
  );
}
