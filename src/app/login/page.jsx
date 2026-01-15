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

  // If user is already logged in, redirect immediately
  useEffect(() => {
    if (user) {
      router.push(redirect);
    }
  }, [user, redirect, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
      // Wait for AuthContext to update user
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
      // Wait for AuthContext to update user
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(245,245,220,0.95)";
  const cardBg = isDark ? "rgba(75,43,17,0.85)" : "#fff";
  const textColor = isDark ? "#F0F0F0" : "#3C2814";
  const inputBg = isDark ? "rgba(60,40,20,0.7)" : "#f9f9f9";
  const inputBorder = isDark ? "#B0C48A" : "#3C2814";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: bg }}
    >
      <div
        className="max-w-md w-full rounded-2xl shadow-2xl p-8"
        style={{ backgroundColor: cardBg }}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: textColor }}
        >
          Login to Cakery
        </h2>

        {/* Email & Password */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" style={{ color: textColor }}>
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textColor,
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: textColor }}>
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textColor,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition-colors duration-300 ${
              isDark
                ? "bg-yellow-700 hover:bg-yellow-600 text-white"
                : "bg-yellow-500 hover:bg-yellow-600 text-white"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="px-2" style={{ color: textColor }}>
            OR
          </span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-2 rounded-md border flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition"
          style={{ backgroundColor: isDark ? "#B0C48A" : "#fff" }}
        >
          <FcGoogle size={20} />
          {loading ? "Processing..." : "Login with Google"}
        </button>

        {/* Register Link */}
        <p className="mt-4 text-center" style={{ color: textColor }}>
          Don't have an account?{" "}
          <span className="text-yellow-500 font-semibold">
            <a href="/register">Register</a>
          </span>
        </p>
      </div>
    </div>
  );
}
