import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SliderCard from "./sliderCard";

const sliderContents = [
  {
    url: "https://i.ibb.co/3Rx9WK8/dimas-anggara-VIk1nwibg-NE-unsplash.jpg",
    name: "Velvet Elegance",
    price: 25.99,
  },
  {
    url: "https://i.ibb.co/yh5Fm5C/mitchell-luo-b7hgn-Fu-X4-Rc-unsplash.jpg",
    name: "Linen Harmony",
    price: 22.5,
  },
  {
    url: "https://i.ibb.co/26YQMMS/anais-murith-u2k-V8mqvdtc-unsplash.jpg",
    name: "Silk Serenity Window Covering",
    price: 19.95,
  },
  {
    url: "https://i.ibb.co/QCsbkqg/mitchell-luo-Gwq0-Ffo-VUv-I-unsplash.jpg",
    name: "Elegant Drapes",
    price: 29.99,
  },
  {
    url: "https://i.ibb.co/PjTkxHV/gigi-Uk-R7-Dq2-Yq-PY-unsplash.jpg",
    name: "Soothing Shadows",
    price: 24.5,
  },
  {
    url: "https://i.ibb.co/mBTsqYX/nadine-marfurt-3-OUJ0-r-Cnq-Q-unsplash.jpg",
    name: "Luxury Linens",
    price: 18.75,
  },
  {
    url: "https://i.ibb.co/7NTrnVp/jonathan-borba-q-MYhr-V18s-TU-unsplash.jpg",
    name: "Velvet Veil",
    price: 23.95,
  },
  {
    url: "https://i.ibb.co/YdT83jP/meghna-r-Izb3k0-Ti9g-unsplash.jpg",
    name: "Silken Drapery",
    price: 27.5,
  },
  {
    url: "https://i.ibb.co/PYrt6Dk/kelly-sikkema-Wu-V93q-VO97c-unsplash.jpg",
    name: "Opulent Curtains",
    price: 21.99,
  },
];

const HomePageSlider = () => {
  return (
    <>
      <Carousel
        className="w-full max-w-screen-md xl:max-w-screen-lg mx-auto"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderContents.map((content, index) => (
            <CarouselItem key={index}>
              <div className="p-5">
                <SliderCard content={content} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </div>
      </Carousel>
    </>
  );
};

export default HomePageSlider;
