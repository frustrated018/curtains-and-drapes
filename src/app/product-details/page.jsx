import MainNav from "@/components/main-navbar/mainNav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const ProductDetailsPage = () => {
  return (
    <>
      <MainNav />
      <Card className="mx-auto mt-10 flex h-[80vh] w-[90%]">
        <div className="relative w-1/2 bg-secondary rounded-l-lg">
          <Image
            src={
              "https://i.ibb.co/PYrt6Dk/kelly-sikkema-Wu-V93q-VO97c-unsplash.jpg"
            }
            alt="Product Image"
            fill
            className=" object-contain"
            priority={true}
          />
        </div>
        <div className="w-1/2">
          <CardHeader className="text-4xl">Name of the product</CardHeader>
        </div>
      </Card>
    </>
  );
};

export default ProductDetailsPage;
