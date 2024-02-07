import MainNav from "@/components/main-navbar/mainNav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const ProductDetailsPage = () => {
  return (
    <>
      <MainNav />
      <Card className="mx-auto mt-10 flex min-h-[80vh] w-[90%] flex-col md:flex-row">
        <div className="relative w-1/2 rounded-l-lg bg-secondary">
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
        <section className="w-1/2">
          <CardHeader>
            <h3 className="text-4xl">Name of the product</h3>
            <div className="max-w-max rounded-full bg-blue-600 text-white">
              <p className="p-2 font-bold">$ 69.69 USD</p>
            </div>
          </CardHeader>
          <DropdownMenuSeparator />
          <CardContent className="mt-5 space-y-5 text-muted-foreground">
            <p>
              Short Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex, pariatur.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Adipisci, ducimus unde numquam delectus rem praesentium itaque
              iste, quis ratione at animi, pariatur sit magni blanditiis quas?
              Deserunt modi minima est. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt, consequatur.
            </p>
            <ul className="list-disc pl-4">
              <li>Special Point 1 | Lorem, ipsum dolor.</li>
              <li>Special Point 2 | Lorem, ipsum dolor Lorem, ipsum.</li>
              <li>Special Point 3</li>
              <li>Special Point 4 | Lorem ipsum dolor sit.</li>
              <li>Special Point 5 | Lorem, ipsum.</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="gap-2 text-lg">
              Add to cart <PlusIcon className="h-5 w-5" />
            </Button>
          </CardFooter>
        </section>
      </Card>
    </>
  );
};

export default ProductDetailsPage;
