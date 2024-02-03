import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import SliderCard from "./sliderCard";

const sliderContents = [
  {
    url: "https://i.ibb.co/3Rx9WK8/dimas-anggara-VIk1nwibg-NE-unsplash.jpg",
    name: "Dimas Anggara",
    price: 25.99,
  },
  {
    url: "https://i.ibb.co/PzQTMX3/jon-tyson-Slpsgi-Zs-SNk-unsplash.jpg",
    name: "Jon Tyson",
    price: 29.99,
  },
  {
    url: "https://i.ibb.co/yh5Fm5C/mitchell-luo-b7hgn-Fu-X4-Rc-unsplash.jpg",
    name: "Mitchell Luo",
    price: 22.5,
  },
  {
    url: "https://i.ibb.co/26YQMMS/anais-murith-u2k-V8mqvdtc-unsplash.jpg",
    name: "Anais Murith",
    price: 19.95,
  },
];

const HomePageSlider = () => {
  return (
    <>
      <Carousel className="w-full max-w-screen-md xl:max-w-screen-lg mx-auto">
        <CarouselContent>
          {sliderContents.map((content, index) => (
            <CarouselItem key={index}>
              <div className="p-5">
                <SliderCard content={content} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
    </>
  );
};

export default HomePageSlider;
