"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaPalette } from "react-icons/fa";

export default function DesignPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.9)" : "rgba(60,40,20,0.9)";
  const cardBg = isDark ? "rgba(75,43,17,0.85)" : "#fff";
  const cardBorder = isDark ? "rgba(176,196,138,0.7)" : "rgba(75,43,17,0.7)";

  const designs = [
    {
      title: "Custom Birthday Cakes",
      description: "Create a cake that perfectly fits your celebration and style.",
      icon: <FaPalette />,
    },
    {
      title: "Wedding Cake Designs",
      description: "Elegant and luxurious cakes for your perfect wedding day.",
      icon: <FaPalette />,
    },
    {
      title: "Special Occasion Cakes",
      description: "From anniversaries to corporate events, we craft unique designs.",
      icon: <FaPalette />,
    },
  ];

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeIn"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            Cake Design Services
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            Our expert designers craft cakes to match your celebration’s theme, taste, and style.
          </p>
        </div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {designs.map((design, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-3xl shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                color: textColor,
              }}
            >
              <div className="text-4xl mb-4">{design.icon}</div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: `"Playfair Display", serif` }}
              >
                {design.title}
              </h3>
              <p
                className="text-center text-base"
                style={{ fontFamily: `"Poppins", sans-serif` }}
              >
                {design.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
