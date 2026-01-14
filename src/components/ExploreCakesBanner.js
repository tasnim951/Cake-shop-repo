"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function ExploreCakesBanner() {
  const { isDark } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 120);
  }, []);

  /* COLORS */
  const lightBg = "rgba(176,196,138,0.85)";
  const darkBg = "rgba(55,31,10,0.95)";
  const heading = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const text = "#FFFFFF";
  const btnBg = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const btnText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.95)";
  const imgBorderColor = isDark ? "rgba(176,196,138,0.6)" : "rgba(75,43,17,0.6)";

  return (
    <section
      className="w-full overflow-hidden relative py-14 px-4 md:px-8"
      style={{
        backgroundColor: isDark ? darkBg : lightBg,
      }}
    >
      {/* HEADING */}
      <div
        className={`text-center mb-8 transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          style={{
            color: heading,
            fontFamily: `"Playfair Display", serif`,
          }}
        >
          Our Top-Ranked Cakes
        </h2>
      </div>

      {/* BANNER WITH BORDER */}
      <div
        className={`relative w-full h-[360px] md:h-[420px] rounded-xl p-1 transition-all duration-700 ease-out hover:scale-105`}
        style={{
          border: `2px solid ${imgBorderColor}`, // thin border
        }}
      >
        {/* IMAGE */}
        <Image
          src="/banner-1.avif"
          alt="Top ranked cakes"
          fill
          priority
          className="object-cover rounded-xl"
          style={{
            filter: isDark ? "brightness(0.8)" : "brightness(0.9)",
          }}
        />

        {/* LINEAR OVERLAY (kept as before) */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, rgba(55,31,10,0.1), rgba(55,31,10,0.3))"
              : "linear-gradient(to bottom, rgba(176,196,138,0.1), rgba(176,196,138,0.25))",
          }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            className={`max-w-3xl text-center transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <p
              className="text-base md:text-lg mb-8 leading-relaxed"
              style={{
                color: text,
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Handcrafted favorites loved by our customers — premium ingredients,
              refined designs, and unforgettable taste. Discover our most popular
              cake selections or customize your own.
            </p>

            <Link
              href="/cakes"
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg
                         transition-transform duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: btnBg,
                color: btnText,
              }}
            >
              Explore Cakes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
