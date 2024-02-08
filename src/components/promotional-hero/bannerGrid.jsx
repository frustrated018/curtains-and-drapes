import BannerCard from "./bannerCard";

const BannerGrid = () => {
    return (
        <section className="grid grid-cols-3 gap-5  lg:max-w-screen-md xl:max-w-screen-xl mx-auto">
            <BannerCard />
            <BannerCard />
            <BannerCard />
        </section>
    );
};

export default BannerGrid;