"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emma ayra",
    role: "Birthday Celebration",
    rating: 5,
    comment: "Absolutely loved the cake! The design and taste were beyond expectations.",
  },
  {
    name: "Jamelee yana",
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
  {
    name: "Zaima",
    role: "Engagement",
    rating: 5,
    comment: "Elegant design and rich flavor. Truly premium quality.",
  },
  {
    name: "Sultana Afrin",
    role: "Baby Shower",
    rating: 4.9,
    comment: "Beautiful cake and super soft texture. Everyone loved it.",
  },
];

export default function TestimonialSection() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.95)" : "rgba(60,40,20,0.95)";
  const subtleText = isDark ? "rgba(200,200,200,0.7)" : "rgba(90,65,40,0.75)";

  
  const cardBg = isDark
    ? "rgba(75,43,17,0.75)"       
    : "rgba(120,140,80,0.9)";  

  const cardText = isDark ? "#fff" : "rgba(45,30,15,0.95)";

  return (
    <section style={{ backgroundColor: bg }} className="py-20 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14 px-6">
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
          Real stories from people who trusted us with their special moments.
        </p>
      </div>

      {/* RUNNING SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{ backgroundColor: cardBg, color: cardText }}
            >
              {/* STARS */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i + 1 <= Math.round(t.rating)
                        ? "text-yellow-400"
                        : "text-yellow-200"
                    }
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-4">
                “{t.comment}”
              </p>

              <h4
                className="font-bold"
                style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
              >
                {t.name}
              </h4>
              <span className="text-xs" style={{ color: subtleText }}>
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
