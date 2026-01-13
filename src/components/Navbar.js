"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { CakeSlice, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const [borderWidth, setBorderWidth] = useState("0%"); 

  useEffect(() => {
    const html = document.documentElement;
    isDark ? html.classList.add("dark") : html.classList.remove("dark");

    // Animate border on mount
    setTimeout(() => setBorderWidth("100%"), 50);
  }, [isDark]);

  const navLinks = ["Home", "Design", "Contact", "Login", "Register"];

  const lightBg = "rgba(176,196,138,0.8)"; 
  const darkBg = "rgba(55,31,10,0.95)"; 
  const lightText = "rgba(75,43,17,1)";
  const darkText = "rgba(176,196,138,0.9)"; 
  const lightHover = "rgba(60,30,10,1)"; 
  const darkHover = "rgba(176,196,138,0.8)"; 

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        style={{
          backgroundColor: isDark ? darkBg : lightBg,
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <CakeSlice
            size={45}
            color={isDark ? darkText : lightText}
            className="transition-transform duration-300 group-hover:rotate-[15deg]"
          />
          <span
            style={{
              color: isDark ? darkText : lightText,
              textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
              fontWeight: 900,
              fontSize: "1.8rem",
              letterSpacing: "0.05em",
              userSelect: "none",
            }}
          >
            CAKERY
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative font-bold transition-colors duration-300 group"
              style={{ color: isDark ? darkText : lightText }}
            >
              {item}
              {/* Underline Animation */}
              <span
                className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"
                style={{ backgroundColor: isDark ? darkHover : lightHover }}
              />
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="ml-4 p-2 rounded-full hover:bg-[rgba(60,30,10,0.2)] transition"
          >
            {isDark ? <Sun size={20} color={darkText} /> : <Moon size={20} color={lightText} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-[rgba(60,30,10,0.2)] transition"
        >
          {isOpen ? <X size={28} color={isDark ? darkText : lightText} /> : <Menu size={28} color={isDark ? darkText : lightText} />}
        </button>
      </div>

      {/* Animated bottom border */}
      <div className="w-full h-[3px] overflow-hidden">
        <div
          className="h-full transition-all duration-[1500ms]"
          style={{
            width: borderWidth,
            backgroundColor: isDark ? darkHover : lightHover,
          }}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pt-2 pb-4 space-y-4 font-semibold transition-colors duration-300"
          style={{ backgroundColor: isDark ? darkBg : lightBg }}
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block font-bold text-lg transition-colors duration-300"
              style={{ color: isDark ? darkText : lightText }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              setIsDark(!isDark);
              setIsOpen(false);
            }}
            className="flex items-center gap-2 font-medium"
            style={{ color: isDark ? darkText : lightText }}
          >
            {isDark ? <Sun size={18} color={darkText} /> : <Moon size={18} color={lightText} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
