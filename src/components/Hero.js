"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const [show, setShow] = useState(false);
  const { isDark } = useTheme(); 

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  /* THEME COLORS */
  const lightBg = "rgba(176,196,138,0.85)"; 
  const darkBg = "rgba(55,31,10,0.95)"; 
  const lightHeading = "rgba(75,43,17,1)"; 
  const darkHeading = "rgba(176,196,138,0.9)"; 

  const lightBody = "rgba(60,40,20,0.85)";
  const darkBody = "rgba(220,220,220,0.85)";

  const primaryBg = isDark ? lightHeading : lightHeading; 
  const primaryText = isDark ? darkHeading : lightHeading;
  const secondaryBorder = isDark ? darkHeading : lightHeading;
  const secondaryText = isDark ? darkHeading : lightHeading;

  const bgColor = isDark ? darkBg : lightBg;
  const headingColor = isDark ? darkHeading : lightHeading;
  const bodyColor = isDark ? darkBody : lightBody;

  return (
    <section style={{ backgroundColor: bgColor }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "380px",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 25px 50px rgba(0,0,0,0.5)" 
                  : "0 25px 50px rgba(75,43,17,0.35)",
              }}
            >
              <Image
                src="/Hero.avif"
                alt="Custom cakes by Cakery"
                fill
                priority
                className="object-cover rounded-[28px]"
                style={{
                  filter: isDark ? "brightness(0.85)" : "none", 
                }}
              />
            </div>
          </div>

          {/* TEXT */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
            `}
          >
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
              style={{
                fontFamily: `"Playfair Display", serif`,
                color: headingColor,
              }}
            >
              Beautifully Crafted <br /> Cakes for Every Celebration
            </h1>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                fontFamily: `"Poppins", sans-serif`,
                color: bodyColor,
              }}
            >
              At Cakery, we design and bake cakes that balance elegance, flavor,
              and personality. Each creation is handcrafted for your special moments.
            </p>

           {/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4">
  {/* Primary Button */}
  <Link
    href="/design"
    className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
    style={{
      backgroundColor: isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)", // olive in dark, wood in light
      color: isDark ? "rgba(75,43,17,1)" : "rgba(176,196,138,0.9)", // wood text in dark, olive in light
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
  >
    Book a Design
  </Link>

  {/* Secondary Button */}
  <Link
  href="/designs"
  className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
  style={{
    border: `2px solid ${isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)"}`, // OLIVE border in dark
    color: isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)",
    backgroundColor: "transparent",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = isDark
      ? "rgba(75,43,17,1)" 
      : "rgba(75,43,17,1)";
    e.currentTarget.style.color = isDark
      ? "rgba(176,196,138,0.9)" 
      : "rgba(176,196,138,0.9)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  }}
>
  Choose Design
</Link>

</div>

          </div>

        </div>
      </div>
    </section>
  );
}
