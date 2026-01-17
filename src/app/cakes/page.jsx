"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import cakes from "@/data/cakesData";
import { FaStar, FaArrowRight } from "react-icons/fa";

export default function CakesPage() {
  const { isDark } = useTheme();

  // THEME COLORS
  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.9)" : "rgba(60,40,20,0.9)";
  const cardBg = isDark ? "rgba(75,43,17,0.85)" : "#fff";
  const cardBorder = isDark ? "rgba(176,196,138,0.7)" : "rgba(75,43,17,0.7)";
  const btnBg = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const btnText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.9)";

  return (
    <section
      style={{ backgroundColor: bg }}
      className="w-full pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeIn"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            Explore Our Cakes
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            Choose from our top-quality cakes for birthdays, weddings, and special occasions. Click on any cake to see full details and order.
          </p>
        </div>

        {/* CAKE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cakes.map((cake) => (
            <Link
              key={cake.id}
              href={`/cakes/${cake.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="group"
            >
              <div
                className="flex flex-col rounded-3xl overflow-hidden shadow-lg h-full
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
              >
                {/* IMAGE */}
                <div className="relative w-full h-64 sm:h-72 md:h-64 lg:h-72">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover"
                    style={{ filter: isDark ? "brightness(0.85)" : "none" }}
                  />
                </div>

                {/* INFO */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
                    >
                      {cake.name}
                    </h3>
                    <p
                      className="text-sm mb-2 leading-snug"
                      style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
                    >
                      {cake.shortDescription}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: textColor }}
                    >
                      Price: {cake.priceRange}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-yellow-400">
                      <FaStar className="mr-1" /> {cake.rating}
                    </div>
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold
                        transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: btnBg, color: btnText }}
                    >
                      Explore <FaArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
