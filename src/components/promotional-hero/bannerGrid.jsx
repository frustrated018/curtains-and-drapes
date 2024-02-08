import BannerCard from "./bannerCard";

const BannerGrid = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto">
            <BannerCard />
            <BannerCard />
            <BannerCard />
        </section>
    );
};

export default BannerGrid;