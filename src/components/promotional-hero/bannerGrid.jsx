import BannerCard from "./bannerCard";

const cardData = [
  {
    title: "Winter Seasosn",
    subtitle: "2023",
    imgURL: "https://i.ibb.co/3Rx9WK8/dimas-anggara-VIk1nwibg-NE-unsplash.jpg",
  },
  {
    title: "Latest Arrivals",
    subtitle: "2024",
    imgURL: "https://i.ibb.co/26YQMMS/anais-murith-u2k-V8mqvdtc-unsplash.jpg",
  },
  {
    title: "Summer Sale",
    subtitle: "2024",
    imgURL: "https://i.ibb.co/QCsbkqg/mitchell-luo-Gwq0-Ffo-VUv-I-unsplash.jpg",
  },
];

//TODO: Add Links to these banner to redirect.

const BannerGrid = () => {
  return (
    <section className="mx-auto grid max-w-[90%] grid-cols-1 gap-5 lg:grid-cols-3">
      {cardData.map((card) => (
        <BannerCard card={card} key={card.title} />
      ))}
    </section>
  );
};

export default BannerGrid;
