"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const { register, googleLogin } = useAuth();
  const { isDark } = useTheme();
  const router = useRouter();
  const [error, setError] = useState("");

  /* SAME COLORS AS LOGIN */
  const bg = isDark
    ? "rgba(55,31,10,0.95)"
    : "rgba(176,196,138,0.85)";
  const cardBg = isDark
    ? "rgba(75,43,17,0.95)"
    : "#fff";
  const heading = isDark
    ? "rgba(176,196,138,0.9)"
    : "rgba(75,43,17,1)";
  const text = isDark ? "#eee" : "#333";
  const primaryBg = isDark
    ? "rgba(176,196,138,0.9)"
    : "rgba(75,43,17,1)";
  const primaryText = isDark
    ? "rgba(55,31,10,0.95)"
    : "rgba(176,196,138,0.9)";
  const border = isDark
    ? "rgba(176,196,138,0.6)"
    : "rgba(75,43,17,0.6)";

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
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: bg }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-8 shadow-2xl"
        style={{ backgroundColor: cardBg }}
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
          className="text-center mb-8"
          style={{ color: text, fontFamily: `"Poppins", sans-serif` }}
        >
          Create your account and start designing cakes
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full px-4 py-3 rounded-xl outline-none"
            style={{
              backgroundColor: isDark ? "#2a1a0f" : "#f7f7f7",
              color: text,
              border: `1px solid ${border}`,
            }}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl outline-none"
            style={{
              backgroundColor: isDark ? "#2a1a0f" : "#f7f7f7",
              color: text,
              border: `1px solid ${border}`,
            }}
          />

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            className="w-full py-3 rounded-full font-semibold transition hover:scale-[1.02]"
            style={{
              backgroundColor: primaryBg,
              color: primaryText,
            }}
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px" style={{ backgroundColor: border }} />
          <span className="text-sm" style={{ color: text }}>
            OR
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: border }} />
        </div>

        <button
          onClick={async () => {
            await googleLogin();
            router.push("/");
          }}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full font-semibold transition hover:scale-[1.02]"
          style={{
            border: `1px solid ${border}`,
            color: heading,
          }}
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </section>
  );
}
