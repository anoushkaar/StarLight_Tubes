"use client";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/MainScrollableImage/Home.webp",
    "/MainScrollableImage/Home1.webp",
    "/MainScrollableImage/Home2.webp",
    "/MainScrollableImage/Home3.webp",
    "/MainScrollableImage/Home4.webp",
    "/MainScrollableImage/Home5.webp",
    "/MainScrollableImage/Home6.webp",
  ];

  const texts = [
    {
      title: "Global Metal",
      highlight: "Exports",
      subtitle:
        "Trusted Exporter of Stainless Steel, Nickel Alloys, Inconel & Carbon Steel to 60+ Countries",
      badge: "Worldwide Delivery",
    },
    {
      title: "Your Global",
      highlight: "Supply Partner",
      subtitle:
        "SS Pipes, Nickel Sheets, Inconel Bolts, Carbon Steel & More — Delivered Worldwide",
      badge: "Export Specialists",
    },
    {
      title: "Precision",
      highlight: "Engineering",
      subtitle: "Seamless & Welded Tubes Built for Industrial Excellence",
      badge: "Global Delivery",
    },
    {
      title: "Inconel & Nickel",
      highlight: "Superalloys",
      subtitle: "High-Performance Materials for Extreme Environments",
      badge: "Premium Quality",
    },
    {
      title: "Carbon Steel",
      highlight: "Expertise",
      subtitle:
        "ASTM & API 5L Certified for Oil, Gas & Petrochemical Industries",
      badge: "Trusted Partner",
    },
    {
      title: "Global Export",
      highlight: "Network",
      subtitle: "Serving 60+ Countries Across 6 Continents with Excellence",
      badge: "Worldwide",
    },
    {
      title: "Quality",
      highlight: "Guaranteed",
      subtitle: "Mill Test Certificates & Third Party Inspection Available",
      badge: "100% Authentic",
    },
  ];

  return (
    <ImagesSlider className="md:h-[85vh] h-[75vh]" images={images}>
      {(currentIndex) => (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center px-6 md:px-12"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/10">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                {texts[currentIndex].badge}
              </span>
            </span>
          </motion.div>

          {/* Main Title with Gradient Highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-bold text-3xl md:text-5xl lg:text-6xl text-center leading-tight max-w-5xl"
          >
            <span className="text-white drop-shadow-2xl">
              {texts[currentIndex].title}
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              {texts[currentIndex].highlight}
            </span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-6 mb-6 rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-medium text-base md:text-xl lg:text-2xl text-center text-white/80 max-w-4xl leading-relaxed"
          >
            {texts[currentIndex].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              <span>Request Quote</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </ImagesSlider>
  );
}
