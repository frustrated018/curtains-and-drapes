import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="rounded-lg border border-accent-foreground">
      <section className="relative h-80 rounded-lg bg-secondary xl:h-[360px]">
        <div className="relative h-full w-full rounded-lg">
          <Image
            src="https://i.ibb.co/26YQMMS/anais-murith-u2k-V8mqvdtc-unsplash.jpg"
            alt="Product Image"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-contain"
          />
        </div>
        {/* Name & Price */}
        <div className=" absolute bottom-2 left-2 max-w-[90%] rounded-full border border-accent-foreground bg-card xl:max-w-[70%]">
          <div className=" flex items-center gap-3 p-1 pl-5 text-sm font-semibold md:gap-2 xl:gap-7">
            <h3>Product name</h3>
            <h4 className="rounded-full bg-blue-600 p-2 text-white">$69.69</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
