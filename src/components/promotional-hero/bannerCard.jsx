import Image from "next/image";

const BannerCard = () => {
  return (
    <section className="max-w-1/3 h-52 rounded-lg bg-muted">
      <div className="flex items-center justify-around p-4">
        <div className="font-semibold">
          <h2 className="text-xl">Winter Seasosn</h2>
          <h2>2023</h2>
        </div>
        <div className="flex w-1/2 justify-center">
          <Image
            src={"https://i.ibb.co/PjTkxHV/gigi-Uk-R7-Dq2-Yq-PY-unsplash.jpg"}
            alt="Product Image"
            width={130}
            height={130}
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
