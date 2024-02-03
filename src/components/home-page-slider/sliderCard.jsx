import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SliderCard = ({ content }) => {
  const { name, url, price } = content;

  return (
    <Card>
      <CardContent className="flex flex-col justify-center items-center aspect-video gap-2 rounded-lg pt-6">
        <div className="relative">
          <Image
            src={url}
            alt="Product image"
            width={200}
            height={100}
            className="w-auto h-auto"
          />
        </div>
        <h2 className="text-3xl font-semibold hover:text-sky-300">{name}</h2>
        <h4 className="text-xl">$ {price}</h4>
      </CardContent>
    </Card>
  );
};

export default SliderCard;
