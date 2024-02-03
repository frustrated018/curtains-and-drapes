import { Card, CardContent } from "@/components/ui/card";

const SliderCard = ({ content }) => {
//   console.log(content);

  return (
    <Card>
      <CardContent className="flex flex-col aspect-video gap-5 bg-sky-200"></CardContent>
    </Card>
  );
};

export default SliderCard;
