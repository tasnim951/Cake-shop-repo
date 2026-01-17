"use client";

import { useEffect, useState } from "react";
import { GiCakeSlice, GiCupcake } from "react-icons/gi";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const [show, setShow] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  // THEME COLORS
  const bgColor = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const bodyColor = isDark ? "rgba(220,220,220,0.9)" : "rgba(60,40,20,0.9)";
  const primaryBg = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const primaryText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.9)";
  const secondaryBorder = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const secondaryText = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";

  return (
    <section style={{ backgroundColor: bgColor }} className="w-full pt-12 pb-20"
>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">

        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            About CAKERY
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: bodyColor, fontFamily: `"Poppins", sans-serif` }}
          >
            At Cakery, we craft bespoke cakes that are visually stunning and incredibly delicious. 
            Our mission is to bring sweetness, creativity, and unforgettable flavor to your celebrations.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
         
          <div
            className={`flex-1 px-8 py-10 rounded-2xl shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
            style={{ backgroundColor: primaryBg, color: primaryText }}
          >
            <div className="flex flex-col items-center gap-4">
              <GiCakeSlice size={60} />
              <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: `"Playfair Display", serif` }}>
                Artful Designs
              </h3>
              <p className="text-center text-lg md:text-xl" style={{ fontFamily: `"Poppins", sans-serif` }}>
                Each cake is a masterpiece, designed with creativity and elegance to impress your guests.
              </p>
            </div>
          </div>

         
          <div
            className={`flex-1 px-8 py-10 rounded-2xl shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
            style={{ border: `2px solid ${secondaryBorder}`, color: secondaryText, backgroundColor: "transparent" }}
          >
            <div className="flex flex-col items-center gap-4">
              <GiCupcake size={60} />
              <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: `"Playfair Display", serif` }}>
                Delicious Flavors
              </h3>
              <p className="text-center text-lg md:text-xl" style={{ fontFamily: `"Poppins", sans-serif` }}>
                Our cakes are baked with premium ingredients, ensuring unforgettable taste in every bite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
