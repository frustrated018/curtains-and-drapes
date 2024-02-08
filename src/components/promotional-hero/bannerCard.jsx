import Image from "next/image";

const BannerCard = ({ card }) => {
  const { title, subtitle, imgURL } = card;
  return (
    <section className="max-w-1/3 h-52 rounded-lg bg-muted">
      <div className="flex items-center justify-around gap-2 p-3">
        <div className="font-semibold text-nowrap">
          <h2 className="text-xl">{title}</h2>
          <h4>{subtitle}</h4>
        </div>
        <div className="flex w-1/2 justify-center">
          <Image
            src={imgURL}
            alt="Product Image"
            width={125}
            height={125}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
