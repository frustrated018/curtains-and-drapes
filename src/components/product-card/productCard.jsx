import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="relative h-[350px] rounded-lg  bg-secondary">
      <div className="relative h-full w-full">
        <Image
          src="https://i.ibb.co/26YQMMS/anais-murith-u2k-V8mqvdtc-unsplash.jpg"
          alt="Product Image"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
      {/* Name & Price */}
      <div className=" absolute bottom-2 left-2 max-w-[70%] rounded-full border-2 bg-card">
        <div className=" flex items-center gap-7 p-1 pl-5 text-sm font-semibold">
          <h3>Product name</h3>
          <h4 className="rounded-full bg-blue-600 p-2">$69.69</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
