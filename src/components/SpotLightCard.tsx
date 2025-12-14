import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo({
  heading,
  text,
  image,
}: {
  heading?: string;
  text: string;
  image?: string;
}) {
  return (
    <CardSpotlight className="h-fit w-370 ">
      {heading && (
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          {heading}
        </p>
      )}
      <div className="text-neutral-200 mt-4 relative z-20">
        <p className="text-neutral-300 mt-4 relative z-20 text-md">{text}</p>
        {image && (
          <div className="mt-4">
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </CardSpotlight>
  );
}
