import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SliderCard = ({ content }) => {
  const { name, url, price } = content;

  return (
    <Card>
      <CardContent className="flex flex-col justify-center items-center aspect-video gap-2 rounded-lg pt-6 bg-secondary">
        <div className="relative h-full w-full">
          <Image
            src={url}
            alt="Product image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className="object-contain"
          />
        </div>
        <h2 className="text-xl sm:text-3xl font-semibold hover:text-sky-300">
          {name}
        </h2>
        <h4 className="text-sm sm:text-xl">${price}</h4>
      </CardContent>
    </Card>
  );
};

export default SliderCard;
