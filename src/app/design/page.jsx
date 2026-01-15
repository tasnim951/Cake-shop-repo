"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { Cake, Palette, Calendar, Ruler } from "lucide-react";

export default function DesignPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(45,25,12,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "#F5F0DC" : "#4B2B11";
  const textColor = isDark ? "#F5F0DC" : "#3C2814";
  const cardBg = isDark ? "rgba(85,45,22,0.95)" : "rgba(255,255,255,0.85)";
  const oliveBorder = isDark ? "rgba(176,196,138,0.55)" : "rgba(60,40,20,0.3)";
  const cardHover = "transition-all duration-500 hover:-translate-y-1 hover:shadow-xl";

  // Example cake designs
  const designs = [
    {
      img: "/cake1.avif",
      title: "Birthday Cake",
      baking: "Vanilla sponge",
      flavor: "Chocolate & Strawberry",
      size: "8 inches",
      color: "Pink & White",
    },
    {
      img: "/cake2.avif",
      title: "Wedding Cake",
      baking: "Buttercream sponge",
      flavor: "Red Velvet",
      size: "12 inches",
      color: "White & Gold",
    },
    {
      img: "/cake3.avif",
      title: "Anniversary Cake",
      baking: "Chocolate sponge",
      flavor: "Dark Chocolate Ganache",
      size: "10 inches",
      color: "Chocolate & Olive",
    },
    // Add more rows here
  ];

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            Our Cake Designs
          </h1>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            Explore our handcrafted cakes. Each design is customizable with flavors, colors, and sizes to make your celebration unforgettable.
          </p>
        </div>

        {/* DESIGN ROWS */}
        <div className="flex flex-col gap-16">
          {designs.map((design, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${cardHover}`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={design.img}
                  alt={design.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Box */}
              <div
                className="md:w-1/2 w-full p-6 rounded-2xl border"
                style={{
                  backgroundColor: cardBg,
                  borderColor: oliveBorder,
                  color: textColor,
                }}
              >
                <h2 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>
                  {design.title}
                </h2>

                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-2">
                    <Cake size={20} /> <span><strong>Baking:</strong> {design.baking}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette size={20} /> <span><strong>Flavor:</strong> {design.flavor}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Ruler size={20} /> <span><strong>Size:</strong> {design.size}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar size={20} /> <span><strong>Color:</strong> {design.color}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
