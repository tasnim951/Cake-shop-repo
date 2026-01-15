"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { Palette, Ruler, CakeSlice, Flame } from "lucide-react";

export default function DesignPage() {
  const { isDark } = useTheme();

  /* THEME COLORS */
  const bg = isDark ? "rgba(45,25,12,0.97)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "#F5F0DC" : "#4B2B11";
  const textColor = isDark ? "#F5F0DC" : "#3C2814";

  const cardBg = isDark
    ? "rgba(85,45,22,0.98)"        // chocolate
    : "rgba(150,170,120,0.45)";   // olive

  const oliveBorder = isDark
    ? "rgba(176,196,138,0.7)"
    : "rgba(75,43,17,0.35)";

  const rows = [
    {
      title: "Cake Colors & Finish",
      icon: <Palette />,
      img: "/design-color.avif",
      intro:
        "Color defines the first impression of your cake. We carefully curate finishes and tones that align perfectly with your event theme and aesthetic.",
      points: [
        "Pastel, bold & luxury color palettes",
        "Matte, glossy & metallic finishes",
        "Theme-based color coordination",
        "Food-safe premium coloring techniques",
      ],
    },
    {
      title: "Cake Size & Shape",
      icon: <Ruler />,
      img: "/design-size.avif",
      intro:
        "From intimate gatherings to grand celebrations, we design cake sizes and shapes that balance elegance, proportion, and practicality.",
      points: [
        "Single to multi-tier cake options",
        "Round, square & custom shapes",
        "Guest-based portion planning",
        "Balanced proportions for every event",
      ],
    },
    {
      title: "Taste & Flavor",
      icon: <CakeSlice />,
      img: "/design-flavour.avif",
      intro:
        "Flavor is the heart of every cake. Our selection blends classic favorites with modern tastes to ensure every bite is memorable.",
      points: [
        "Classic & premium flavor selections",
        "Eggless & low-sugar options available",
        "Custom flavor combinations supported",
        "Seasonal and signature flavors",
      ],
    },
    {
      title: "Baking Style",
      icon: <Flame />,
      img: "/design-baking.avif",
      intro:
        "Our baking approach focuses on freshness, texture, and consistency, ensuring your cake tastes as exceptional as it looks.",
      points: [
        "Freshly baked only after confirmation",
        "Buttercream, fondant & whipped styles",
        "Ganache, mousse & rich fillings",
        "Soft, moist texture guaranteed",
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            Design Your Perfect Cake
          </h1>
          <p
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            Customize every element — color, size, flavor, and baking style —
            to create a cake that truly reflects your celebration.
          </p>
        </div>

        {/* ROWS */}
        <div className="flex flex-col gap-24">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div
                className={`relative h-[380px] rounded-3xl overflow-hidden shadow-xl
                ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={row.img}
                  alt={row.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* INFO BOX */}
              <div
                className={`h-[380px] p-10 rounded-3xl border shadow-lg flex flex-col justify-center
                transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                ${index % 2 === 1 ? "lg:order-1" : ""}`}
                style={{
                  backgroundColor: cardBg,
                  borderColor: oliveBorder,
                  color: textColor,
                }}
              >
                {/* TITLE */}
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ color: headingColor }}
                >
                  {row.icon}
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {row.title}
                  </h2>
                </div>

                {/* INTRO */}
                <p className="text-base md:text-lg leading-relaxed opacity-90 mb-5">
                  {row.intro}
                </p>

                {/* DIVIDER */}
                <div
                  className="h-px w-full mb-5"
                  style={{ backgroundColor: oliveBorder }}
                />

                {/* POINTS */}
                <ul className="space-y-3 text-base md:text-lg">
                  {row.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-current opacity-70" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
