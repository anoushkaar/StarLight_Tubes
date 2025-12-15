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
    <CardSpotlight className="h-fit  w-full rounded-3xl border border-white/10 shadow-2xl">
      <div className="max-w-5xl mx-auto">
        {heading && (
          <div className="mb-8">
            <span className="inline-block w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-4"></span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold relative z-20 text-white tracking-tight leading-tight">
              {heading}
            </h3>
          </div>
        )}
        <div className="relative z-20">
          <p className="text-gray-300/90 leading-[1.6] text-xs md:text-base font-normal">
            {text}
          </p>
          {image && (
            <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-white/5">
              <img
                src={image}
                alt=""
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </CardSpotlight>
  );
}
