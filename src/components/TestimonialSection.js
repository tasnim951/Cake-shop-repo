"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emma Watson",
    role: "Birthday Celebration",
    rating: 5,
    comment: "Absolutely loved the cake! The design and taste were beyond expectations.",
  },
  {
    name: "James Smith",
    role: "Wedding Cake",
    rating: 5,
    comment: "Our wedding cake was a masterpiece. Every guest complimented it!",
  },
  {
    name: "Sophia Lee",
    role: "Anniversary",
    rating: 4.8,
    comment: "Delicious and beautifully decorated. We will order again for sure!",
  },
];

export default function TestimonialSection() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.95)" : "rgba(60,40,20,0.95)";
  const subtleText = isDark ? "rgba(200,200,200,0.7)" : "rgba(80,60,40,0.7)";
  const cardBg = isDark ? "rgba(75,43,17,0.6)" : "rgba(255,255,255,0.85)";
  const cardText = isDark ? "#fff" : "#3C2814";

  return (
    <section style={{ backgroundColor: bg }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-5xl font-extrabold"
          style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
        >
          What Our Customers Say
        </h2>
        <p
          className="mt-4 text-lg md:text-xl"
          style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
        >
          Handcrafted cakes that make every occasion special. Here’s what our happy customers have to say.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch flex-wrap">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-1 max-w-md bg-opacity-80 rounded-2xl p-6 shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ backgroundColor: cardBg, color: cardText }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i + 1 <= Math.round(t.rating) ? "text-yellow-400" : "text-yellow-200"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 font-medium" style={{ color: cardText }}>
                {t.rating} / 5
              </span>
            </div>

            <p className="text-base md:text-lg mb-4" style={{ color: cardText, fontFamily: `"Poppins", sans-serif` }}>
              "{t.comment}"
            </p>

            <h3
              className="text-lg font-bold"
              style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
            >
              {t.name}
            </h3>
            <p className="text-sm" style={{ color: subtleText }}>
              {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
