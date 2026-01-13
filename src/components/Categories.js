"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import {
  FaBirthdayCake,
  FaHeart,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Wedding Cakes",
    image: "/Cake-2.avif",
    button: "BOOK YOUR DESIGN",
    icon: <FaHeart />,
  },
  {
    title: "Birthday Cakes",
    image: "/Cake-1.avif",
    button: "BOOK YOUR TASTE",
    icon: <FaBirthdayCake />,
  },
  {
    title: "Special Occasion Cakes",
    image: "/Cake-3.avif",
    button: "BOOK YOUR TASTE",
    icon: <FaStar />,
  },
];

export default function Categories() {
  const { isDark } = useTheme();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setTimeout(() => setShow(true), 120);
  }, []);

  /* THEME COLORS */
  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const heading = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const text = isDark ? "rgba(235,235,235,0.9)" : "rgba(60,40,20,0.9)";
  const borderColor = isDark
    ? "rgba(176,196,138,0.7)"
    : "rgba(75,43,17,0.8)";
  const btnBg = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const btnText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.9)";

  return (
    <section style={{ backgroundColor: bg }} className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: heading, fontFamily: `"Playfair Display", serif` }}
          >
            Our Cake Categories
          </h2>
          <p
            className="max-w-3xl mx-auto text-lg"
            style={{ color: text, fontFamily: `"Poppins", sans-serif` }}
          >
            Crafted with passion, precision, and premium ingredients — explore
            cakes designed for every kind of celebration.
          </p>
        </div>

        {/* CATEGORY ROWS */}
        <div className="flex flex-col gap-16">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
                transition-all duration-1000 ease-out
                ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              {/* IMAGE */}
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  height: "280px",
                  boxShadow: isDark
                    ? "0 20px 40px rgba(0,0,0,0.55)"
                    : "0 20px 40px rgba(75,43,17,0.35)",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  style={{ filter: isDark ? "brightness(0.85)" : "none" }}
                />
              </div>

              {/* INFO BOX */}
              <div
                className="px-8 py-8 rounded-2xl flex flex-col justify-center
                transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: `1px solid ${borderColor}`,
                  color: text,
                  minHeight: "280px",
                  fontFamily: `"Poppins", sans-serif`,
                }}
              >
                {/* Title */}
                <h3
                  className="text-3xl font-semibold flex items-center gap-3"
                  style={{ color: heading, fontFamily: `"Playfair Display", serif` }}
                >
                  {cat.icon}
                  {cat.title}
                </h3>

                {/* Subheading */}
                <p
                  className="text-lg italic mt-2"
                  style={{ fontFamily: `"Cormorant Garamond", serif`, opacity: 0.95 }}
                >
                  Crafted to match your vision, mood, and moment
                </p>

                {/* Body */}
                <p className="text-base leading-relaxed mt-2">
                  Our {cat.title.toLowerCase()} are thoughtfully designed using premium
                  ingredients, balanced flavors, and refined decoration techniques.
                  Each cake is made to feel personal, elegant, and unforgettable.
                </p>

                {/* BUTTON */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setSelected(cat.title);
                      setOpen(true);
                    }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold
                      transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: btnBg, color: btnText }}
                  >
                    {cat.button}
                    <FaArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div
            className="w-[90%] max-w-md p-8 rounded-2xl"
            style={{ backgroundColor: bg }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: heading }}>
              Book – {selected}
            </h3>

            <form className="flex flex-col gap-4">
              {["Your Name", "Phone Number"].map((p, i) => (
                <input
                  key={i}
                  placeholder={p}
                  className="px-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: isDark ? "#2a1a0f" : "#ffffff",
                    color: isDark ? "#f5f5f5" : "#000000",
                  }}
                />
              ))}

              <textarea
                placeholder="Your requirements"
                rows={3}
                className="px-4 py-3 rounded-lg outline-none"
                style={{
                  backgroundColor: isDark ? "#2a1a0f" : "#ffffff",
                  color: isDark ? "#f5f5f5" : "#000000",
                }}
              />

              <button
                className="mt-2 px-6 py-3 rounded-full font-semibold"
                style={{ backgroundColor: btnBg, color: btnText }}
              >
                Submit Booking
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 underline text-sm"
              style={{ color: heading }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
