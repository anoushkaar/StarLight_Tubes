import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({projects}: {projects?: Array<{img: string; title: string;}>}) {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <HoverEffect className="gap-8" items={projects ?? []} />
    </div>
  );
}
