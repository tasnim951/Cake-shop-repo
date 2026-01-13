"use client";

import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { CakeSlice } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { isDark } = useTheme();

  const bgColor = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const textColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";
  const linkHover = isDark ? "rgba(176,196,138,0.7)" : "rgba(75,43,17,0.7)";
  const borderColor = isDark ? "rgba(176,196,138,0.9)" : "rgba(75,43,17,1)";

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Designs", href: "/designs" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaXTwitter />, href: "https://twitter.com" },
];


  return (
    <footer style={{ backgroundColor: bgColor }} className="w-full flex-shrink-0">
     
      <div className="w-full overflow-hidden">
        <div
          className="h-[2px] bg-current animate-footer-border" // slightly thicker
          style={{ backgroundColor: borderColor }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <CakeSlice
            size={36}
            color={textColor}
            className="transition-transform duration-300 hover:rotate-[15deg]"
          />
          <span
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: `"Geist", sans-serif`, color: textColor }} // match navbar font
          >
            CAKERY
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group transition-colors duration-300"
              style={{ color: textColor }}
            >
              {link.name}
              <span
                className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full group-hover:-translate-x-1/2"
                style={{ backgroundColor: linkHover }}
              />
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {socials.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-opacity-20"
              style={{ color: textColor }}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm md:text-base mt-4 md:mt-0" style={{ color: textColor }}>
          © {new Date().getFullYear()} Cakery. All rights reserved.
        </div>
      </div>

      
      <style jsx>{`
        @keyframes footerBorderAnim {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-footer-border {
          animation: footerBorderAnim 1s ease forwards;
        }
      `}</style>
    </footer>
  );
}
