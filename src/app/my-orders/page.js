"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import PrivateRoute from "@/components/PrivateRoute";
import toast from "react-hot-toast";

function MyOrdersPage() {
  const { isDark } = useTheme();
  const [orders, setOrders] = useState([]);

  const bg = isDark ? "#2d190c" : "#f0f4e3";
  const cardBg = isDark ? "#55301a" : "#ffffff";
  const textColor = isDark ? "#F5F0DC" : "#3C2814";
  const borderColor = isDark ? "rgba(176,196,138,0.5)" : "rgba(0,0,0,0.1)";

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const handleCancel = (orderId) => {
    if (!confirm("Are you sure you want to cancel this order?")) return;
    const updated = orders.map((o) =>
      o.id === orderId ? { ...o, status: "Cancelled" } : o
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    toast.success("Order cancelled!");
  };

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12" style={{ backgroundColor: bg }}>
      <h1 className="text-4xl font-bold mb-12 text-center" style={{ color: textColor }}>
        My Orders
      </h1>

      {orders.length === 0 && (
        <p className="text-center text-lg" style={{ color: textColor }}>
          You have no orders yet.
        </p>
      )}

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-6 rounded-2xl border shadow-md gap-4 md:gap-0"
            style={{ backgroundColor: cardBg, borderColor, color: textColor }}
          >
            <div className="flex items-center gap-4">
              <img
                src={order.cakeImage || "/bday.avif"}
                alt={order.cakeName}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold">{order.cakeName}</h2>
                <p className="text-sm">
                  Size: {order.size} | Flavor: {order.flavor} | Toppings: {order.toppings?.join(", ") || "None"}
                </p>
                <p className="text-sm">Delivery: {order.deliveryDate}</p>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-2">
              <p
                className={`font-semibold ${
                  order.status === "Pending" ? "text-yellow-500" : order.status === "Cancelled" ? "text-red-500" : "text-green-500"
                }`}
              >
                Status: {order.status}
              </p>
              <p className="font-semibold">Total: ₹{order.total}</p>
              {order.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancel(order.id)}
                  className="px-4 py-2 mt-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyOrdersPageWrapper() {
  return (
    <PrivateRoute>
      <MyOrdersPage />
    </PrivateRoute>
  );
}
