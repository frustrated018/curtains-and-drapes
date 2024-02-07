import HomePageFooter from "@/components/footer/home-footer";
import HomePageSlider from "@/components/home-page-slider/homePageSlider";
import MainNav from "@/components/main-navbar/mainNav";

export default function Home() {
  return (
    <main>
      <MainNav />
      <HomePageSlider />
      <HomePageFooter />
    </main>
  );
}
