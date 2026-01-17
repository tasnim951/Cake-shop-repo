"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { CakeSlice, Sun, Moon, Menu, X, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [borderWidth, setBorderWidth] = useState("0%");

  useEffect(() => {
    const html = document.documentElement;
    isDark ? html.classList.add("dark") : html.classList.remove("dark");
    setTimeout(() => setBorderWidth("100%"), 50);
  }, [isDark]);

  const lightBg = "rgba(176,196,138,0.8)";
  const darkBg = "rgba(55,31,10,0.95)";
  const lightText = "rgba(75,43,17,1)";
  const darkText = "rgba(176,196,138,0.9)";
  const lightHover = "rgba(60,30,10,1)";
  const darkHover = "rgba(176,196,138,0.8)";

  
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Design", href: "/design" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        style={{
          backgroundColor: isDark ? darkBg : lightBg,
          transition: "background-color 0.3s ease",
        }}
      >
        {/* LOGO */}
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-semibold relative">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative font-bold transition-colors duration-300 group"
              style={{ color: isDark ? darkText : lightText }}
            >
              {item.label}
              <span
                className="absolute left-1/2 -bottom-1 h-[2px] w-0 transition-all duration-300
                           group-hover:w-full group-hover:-translate-x-1/2"
                style={{ backgroundColor: isDark ? darkHover : lightHover }}
              />
            </Link>
          ))}

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[rgba(60,30,10,0.2)] transition"
              >
                <User size={24} color={isDark ? darkText : lightText} />
              </button>
              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-white dark:bg-[rgba(55,31,10,0.95)] rounded-lg shadow-lg border dark:border-[rgba(176,196,138,0.5)] py-2 flex flex-col"
                  style={{ color: isDark ? darkText : lightText }}
                >
                  <Link
                    href="/my-orders"
                    className="px-4 py-2 hover:bg-[rgba(176,196,138,0.2)] dark:hover:bg-[rgba(176,196,138,0.3)] transition"
                    onClick={() => setProfileOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                      router.push("/");
                    }}
                    className="px-4 py-2 text-left hover:bg-[rgba(176,196,138,0.2)] dark:hover:bg-[rgba(176,196,138,0.3)] transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="font-bold transition-colors duration-300"
                style={{ color: isDark ? darkText : lightText }}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="font-bold transition-colors duration-300"
                style={{ color: isDark ? darkText : lightText }}
              >
                Register
              </Link>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="ml-4 p-2 rounded-full hover:bg-[rgba(60,30,10,0.2)] transition"
          >
            {isDark ? (
              <Sun size={20} color={darkText} />
            ) : (
              <Moon size={20} color={lightText} />
            )}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-[rgba(60,30,10,0.2)] transition"
        >
          {isOpen ? (
            <X size={28} color={isDark ? darkText : lightText} />
          ) : (
            <Menu size={28} color={isDark ? darkText : lightText} />
          )}
        </button>
      </div>

      {/* ANIMATED BORDER */}
      <div className="w-full h-[3px] overflow-hidden">
        <div
          className="h-full transition-all duration-[1500ms]"
          style={{
            width: borderWidth,
            backgroundColor: isDark ? darkHover : lightHover,
          }}
        />
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="md:hidden px-6 pt-2 pb-4 space-y-4 font-semibold transition-colors duration-300"
          style={{ backgroundColor: isDark ? darkBg : lightBg }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block font-bold text-lg transition-colors duration-300"
              style={{ color: isDark ? darkText : lightText }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <div className="flex flex-col gap-2">
              <Link
                href="/my-orders"
                className="block px-4 py-2 hover:bg-[rgba(176,196,138,0.2)] dark:hover:bg-[rgba(176,196,138,0.3)] rounded transition"
                onClick={() => setIsOpen(false)}
              >
                My Orders
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                  router.push("/");
                }}
                className="block px-4 py-2 hover:bg-[rgba(176,196,138,0.2)] dark:hover:bg-[rgba(176,196,138,0.3)] rounded transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 rounded transition"
                style={{ color: isDark ? darkText : lightText }}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 rounded transition"
                style={{ color: isDark ? darkText : lightText }}
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}

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
