"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import PrivateRoute from "@/components/PrivateRoute";
import toast from "react-hot-toast";

function MyOrdersPage() {
  const { isDark } = useTheme();
  const [orders, setOrders] = useState([]);

  // Theme colors
  const bg = isDark ? "#2c1b0f" : "#B0C48A"; // full page background
  const cardBg = isDark ? "#3b2513" : "#97af7a"; // card background
  const borderColor = isDark ? "rgba(176,196,138,0.3)" : "rgba(150,180,110,0.3)";
  const textColor = "#F5F0DC"; // cream/light text
  const buttonOlive = "#B0C48A"; // olive button
  const buttonChocolate = "#6B4226"; // chocolate button

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((o) => o.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success("Order deleted successfully!");
  };

  const handleCancel = (id) => {
    const updatedOrders = orders.map((o) =>
      o.id === id ? { ...o, status: "Cancelled" } : o
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success("Order cancelled!");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center pt-[6rem] px-4 md:px-12"
      style={{ backgroundColor: bg }}
    >
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center animate-bounce"
        style={{ color: textColor, fontFamily: "'Playfair Display', serif" }}
      >
        MY ORDERS
      </h1>

      {/* Orders List */}
      <div className="w-full max-w-5xl flex flex-col gap-6">
        {orders.length === 0 && (
          <p
            className="text-center text-lg mt-10"
            style={{ color: textColor }}
          >
            No orders placed yet.
          </p>
        )}

        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col md:flex-row gap-4 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow w-full"
            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
          >
            {/* Image */}
            <div className="md:w-1/4 flex justify-center items-center">
              <img
                src={order.cakeImage}
                alt={order.cakeName}
                className="w-40 md:w-48 h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="md:w-3/4 flex flex-col justify-between gap-3">
              <div>
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: textColor }}
                >
                  {order.cakeName}
                </h2>
                <p className="text-sm md:text-base" style={{ color: textColor }}>
                  Size: {order.size} | Flavor: {order.flavor} |Toppings: {(order.toppings && order.toppings.length > 0)
  ? order.toppings.join(", ")
  : "None"}

                </p>
                <p className="text-sm md:text-base mt-1" style={{ color: textColor }}>
                  Delivery: {order.deliveryDate} | Total: ₹{order.total}
                </p>
                <p className="text-sm mt-1 font-semibold" style={{ color: textColor }}>
                  Status: {order.status}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-2 flex-wrap">
                <button
                  onClick={() => handleCancel(order.id)}
                  className="px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: buttonOlive,
                    color: "#fff",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: buttonChocolate,
                    color: "#fff",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra space at bottom */}
      <div className="h-10"></div>
    </div>
  );
}

export default function MyOrdersWrapper() {
  return (
    <PrivateRoute>
      <MyOrdersPage />
    </PrivateRoute>
  );
}
