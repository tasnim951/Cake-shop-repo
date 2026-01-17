"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const { register, googleLogin } = useAuth();
  const { isDark } = useTheme();
  const router = useRouter();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  
  const bg = isDark ? "#2c1b0f" : "#B0C48A";
  const cardBg = isDark ? "#3b2513" : "#97af7a";
  const heading = "#F5F0DC";
  const text = "#F5F0DC";
  const inputBg = isDark ? "#2a1a0f" : "#a9bf8a";
  const border = "rgba(176,196,138,0.6)";
  const primaryBg = isDark ? "#6B4226" : "#556B2F";

  const handleRegister = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await register(e.target.email.value, password);
      router.push("/");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <section
      className="min-h-screen flex justify-center px-6 pt-24"
      style={{ backgroundColor: bg }}
    >
      <div
        className={`w-full max-w-md rounded-3xl p-8 shadow-2xl transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
      >
        <h2
          className="text-3xl font-extrabold text-center mb-2"
          style={{
            color: heading,
            fontFamily: `"Playfair Display", serif`,
          }}
        >
          Join CAKERY
        </h2>

        <p
          className="text-center mb-8 text-sm"
          style={{ color: text, fontFamily: `"Poppins", sans-serif` }}
        >
          Create your account and start designing cakes
        </p>

        {/* FORM */}
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:scale-[1.01]"
            style={{
              backgroundColor: inputBg,
              color: text,
              border: `1px solid ${border}`,
            }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:scale-[1.01]"
            style={{
              backgroundColor: inputBg,
              color: text,
              border: `1px solid ${border}`,
            }}
          />

          {error && (
            <p className="text-sm text-red-300 text-center">{error}</p>
          )}

          <button
            className="w-full py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: primaryBg,
              color: "#F5F0DC",
            }}
          >
            Create Account
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px" style={{ backgroundColor: border }} />
          <span className="text-sm" style={{ color: text }}>
            OR
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: border }} />
        </div>

        {/* GOOGLE */}
        <button
          onClick={async () => {
            await googleLogin();
            router.push("/");
          }}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full
                     font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{
            border: `1.5px solid ${border}`,
            color: heading,
            backgroundColor: "transparent",
          }}
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </section>
  );
}
