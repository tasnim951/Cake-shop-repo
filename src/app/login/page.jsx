"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { isDark } = useTheme();
  const { login, googleLogin, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    if (user) router.push(redirect);
  }, [user, redirect, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  /* THEME COLORS */
  const bg = isDark ? "#2c1b0f" : "#B0C48A";
  const cardBg = isDark ? "#3b2513" : "#97af7a";
  const textColor = "#F5F0DC";
  const inputBg = isDark ? "#2a1a0f" : "#a9bf8a";
  const borderColor = "rgba(176,196,138,0.6)";
  const btnBg = isDark ? "#6B4226" : "#556B2F";

  return (
    <div
      className="min-h-screen flex justify-center px-4 pt-24"
      style={{ backgroundColor: bg }}
    >
      <div
        className={`max-w-md w-full rounded-3xl p-8 shadow-2xl transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{
            color: textColor,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Login to Cakery
        </h2>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium" style={{ color: textColor }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:scale-[1.01]"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: textColor }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:scale-[1.01]"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: btnBg,
              color: "#F5F0DC",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <hr className="flex-grow" style={{ borderColor }} />
          <span className="px-3 text-sm" style={{ color: textColor }}>
            OR
          </span>
          <hr className="flex-grow" style={{ borderColor }} />
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3 rounded-full flex items-center justify-center gap-3
                     font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: "transparent",
            border: `1.5px solid ${borderColor}`,
            color: textColor,
          }}
        >
          <FcGoogle size={20} />
          {loading ? "Processing..." : "Login with Google"}
        </button>

        {/* REGISTER */}
        <p className="mt-6 text-center text-sm" style={{ color: textColor }}>
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="font-semibold underline hover:opacity-80 transition"
            style={{ color: "#B0C48A" }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
