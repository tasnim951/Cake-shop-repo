"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.9)" : "rgba(60,40,20,0.9)";
  const inputBg = isDark ? "#2a1a0f" : "#fff";
  const btnBg = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const btnText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.9)";

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
          style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
        >
          Contact Us
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg outline-none"
            style={{ backgroundColor: inputBg, color: textColor }}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg outline-none"
            style={{ backgroundColor: inputBg, color: textColor }}
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg outline-none"
            style={{ backgroundColor: inputBg, color: textColor }}
          />

          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full font-semibold w-fit mx-auto"
            style={{ backgroundColor: btnBg, color: btnText }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
