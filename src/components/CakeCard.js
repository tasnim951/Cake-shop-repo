"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function CakeCard({ cake }) {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(255,255,255,0.85)";
  const border = isDark ? "rgba(176,196,138,0.6)" : "rgba(75,43,17,0.4)";
  const heading = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const text = isDark ? "#ddd" : "#333";

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: bg, border: `1px solid ${border}` }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-56">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        <h3
          className="text-xl font-semibold"
          style={{ color: heading, fontFamily: `"Playfair Display", serif` }}
        >
          {cake.name}
        </h3>

        <p
          className="text-sm"
          style={{ color: text, fontFamily: `"Poppins", sans-serif` }}
        >
          {cake.shortDescription}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span style={{ color: text }}>{cake.priceRange}</span>
          <span className="flex items-center gap-1" style={{ color: heading }}>
            <FaStar size={14} /> {cake.rating}
          </span>
        </div>

        <button
          className="mt-2 py-2 rounded-full font-semibold transition-all hover:opacity-90"
          style={{
            backgroundColor: heading,
            color: isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.9)",
          }}
        >
          View & Book
        </button>
      </div>
    </div>
  );
}
