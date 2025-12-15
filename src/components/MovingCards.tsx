"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "Duplex 2205 Plate.png",
    name: "Duplex 2205 Plate",
    title: "Premium Grade Stainless Steel",
  },
  {
    image: "Duplex 2205 Plate1.png",
    name: "Duplex 2205 Plate",
    title: "Corrosion Resistant Material",
  },
  {
    image: "Duplex 2205 Plate2.png",
    name: "Duplex 2205 Plate",
    title: "High Strength & Durability",
  },
  {
    image: "Duplex Stainless Steel Round Bar.png",
    name: "Duplex Round Bar",
    title: "Industrial Grade Quality",
  },
  {
    image: "Duplex Stainless Steel Round Bar1.png",
    name: "Duplex Round Bar",
    title: "Superior Mechanical Properties",
  },
  {
    image: "Nickel 200 Tube1.png",
    name: "Nickel 200 Tube",
    title: "High Purity Nickel Alloy",
  },
  {
    image: "Nickel 200 Tube2.png",
    name: "Nickel 200 Tube",
    title: "Excellent Thermal Conductivity",
  },
  {
    image: "Nickel 201 Tube.png",
    name: "Nickel 201 Tube",
    title: "Low Carbon Content",
  },
  {
    image: "Nickel 201 Tube1.png",
    name: "Nickel 201 Tube",
    title: "Precision Engineered",
  },
  {
    image: "Nickel 201 Tube2.png",
    name: "Nickel 201 Tube",
    title: "Chemical Processing Grade",
  },
  {
    image: "Nickel 201 Tube3.png",
    name: "Nickel 201 Tube",
    title: "Certified Quality Standards",
  },
];
