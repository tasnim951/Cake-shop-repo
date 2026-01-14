"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export default function AboutPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.9)" : "rgba(60,40,20,0.9)";

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        <div className="md:w-1/2">
          <Image
            src="/about-banner.avif" // add your image to public
            alt="About Cakery"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </div>

        <div className="md:w-1/2">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            About Our Cakery
          </h2>
          <p
            className="text-lg mb-4"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            At our cakery, we believe every cake tells a story. From birthdays to weddings, our team crafts each cake with passion, precision, and premium ingredients.
          </p>
          <p
            className="text-base"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            With years of experience and countless celebrations, we ensure every bite is memorable, elegant, and perfectly suited to your special occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
