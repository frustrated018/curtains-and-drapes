import HomePageFooter from "@/components/footer/home-footer";
import HomePageSlider from "@/components/home-page-slider/homePageSlider";
import MainNav from "@/components/main-navbar/mainNav";
import BannerGrid from "@/components/promotional-hero/bannerGrid";

export default function Home() {
  return (
    <main>
      <MainNav />
      <HomePageSlider />
      <div className="my-10">
      <BannerGrid />
      </div>
      <HomePageFooter />
    </main>
  );
}
