import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <HoverEffect className="gap-8" items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "FBE Coated Pipe",
    img: "./FBE Coated Pipe.png",
  },
  {
    title: "Epoxy Coated Pipe",
    img: "./Epoxy Coated Pipe.png",
  },
  {
    title: "Epoxy Coated Carbon Steel Pipe",
    img: "./Epoxy Coated Carbon Steel Pipe.png",
  },
];
