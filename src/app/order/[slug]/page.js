"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import cakes from "@/data/cakesData";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import PrivateRoute from "@/components/PrivateRoute";
import toast from "react-hot-toast";
import { FaUtensils, FaBirthdayCake, FaStar } from "react-icons/fa";
import "@fontsource/playfair-display";

function OrderPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { isDark } = useTheme();

  const cake = cakes.find((c) => c.slug === slug);

  const [size, setSize] = useState("Medium");
  const [flavor, setFlavor] = useState(cake?.flavours[0] || "");
  const [toppings, setToppings] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Theme colors
  const bg = isDark ? "#2d190c" : "#f0f4e3";
  const cardBg = isDark ? "#55301a" : "#ffffff";
  const borderColor = isDark ? "rgba(176,196,138,0.3)" : "rgba(0,0,0,0.1)";
  const textColor = isDark ? "#B0C48A" : "#3C2814"; // Heading & labels
  const subTextColor = isDark ? "#B0C48A" : "#6B4226"; // Olive/coffee for image texts & description
  const buttonBg = "#4B2B11";
  const buttonText = "#F5F0DC";

  useEffect(() => {
    if (!cake) return;
    let basePrice = parseInt(cake.priceRange.split("–")[0].replace("₹", "").trim());
    if (size === "Small") basePrice -= 200;
    if (size === "Large") basePrice += 300;
    if (toppings.includes("Extra Chocolate")) basePrice += 150;
    setTotal(basePrice);
  }, [size, toppings, cake]);

  const handleOrderClick = () => {
    if (!user) {
      router.push(`/login?redirect=/order/${slug}`);
      return;
    }
    setShowModal(true);
  };

  const confirmOrder = () => {
    if (!deliveryDate) {
      toast.error("Please select a delivery date!");
      return;
    }
    setLoading(true);

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      cakeName: cake.name,
      cakeImage: cake.image,
      size,
      flavor,
      toppings,
      deliveryDate,
      total,
      status: "Pending",
    };
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      toast.success("Order placed successfully!");
      router.push("/my-orders");
    }, 500);
  };

  if (!cake)
    return (
      <p className="text-center mt-24 text-red-500 text-xl">
        Cake not found!
      </p>
    );

  return (
    <div
      className="w-full min-h-screen pt-[6rem] px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: bg }}
    >
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-10 animate-bounce hover:scale-105 transition-transform"
        style={{ color: textColor, fontFamily: "'Playfair Display', serif" }}
      >
        BOOK YOUR ORDER
      </h1>

      {/* Form Card */}
      <div
        className="w-full max-w-5xl p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-6 bg-opacity-95 hover:shadow-3xl transition-shadow duration-300"
        style={{
          backgroundColor: cardBg,
          border: `1px solid ${borderColor}`,
          paddingBottom: "3rem" // extra bottom padding to avoid touching footer
        }}
      >
        {/* Left: Image & Details */}
        <div className="md:w-1/3 flex flex-col items-center gap-4">
          <div className="relative group">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-48 md:w-56 h-auto object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform"
            />
          </div>
          <h2 className="text-xl font-semibold" style={{ color: textColor }}>
            {cake.name}
          </h2>
          <p className="text-center text-sm md:text-base" style={{ color: subTextColor }}>
            {cake.description || "Delicious and freshly baked cake for every occasion."}
          </p>
          <div className="flex flex-col gap-2 text-sm md:text-base mt-2">
            <div className="flex items-center gap-2" style={{ color: subTextColor }}>
              <FaBirthdayCake /> Flavor: {flavor}
            </div>
            <div className="flex items-center gap-2" style={{ color: subTextColor }}>
              <FaUtensils /> Size: {size}
            </div>
            <div className="flex items-center gap-2" style={{ color: subTextColor }}>
              <FaStar /> Toppings: {toppings.join(", ") || "None"}
            </div>
          </div>
        </div>

        {/* Right: Form Fields */}
        <div className="md:w-2/3 flex flex-col gap-3">
          {/* Size */}
          <div className="flex flex-col">
            <label className="font-semibold" style={{ color: textColor }}>
              Size
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="px-3 py-2 rounded-lg border"
              style={{ borderColor, backgroundColor: bg, color: textColor }}
            >
              {["Small", "Medium", "Large"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Flavor */}
          <div className="flex flex-col">
            <label className="font-semibold" style={{ color: textColor }}>
              Flavor
            </label>
            <select
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
              className="px-3 py-2 rounded-lg border"
              style={{ borderColor, backgroundColor: bg, color: textColor }}
            >
              {cake.flavours.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Toppings */}
          <div className="flex flex-col">
            <label className="font-semibold" style={{ color: textColor }}>
              Toppings
            </label>
            <div className="flex flex-wrap gap-3">
              {["Extra Chocolate", "Fruits", "Nuts"].map((t) => (
                <label key={t} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={t}
                    checked={toppings.includes(t)}
                    onChange={(e) =>
                      e.target.checked
                        ? setToppings([...toppings, t])
                        : setToppings(toppings.filter((x) => x !== t))
                    }
                  />
                  <span style={{ color: textColor }}>{t}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Delivery Date */}
          <div className="flex flex-col">
            <label className="font-semibold" style={{ color: textColor }}>
              Delivery Date
            </label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="px-3 py-2 rounded-lg border"
              style={{ borderColor, backgroundColor: bg, color: textColor }}
            />
          </div>

          {/* Total */}
          <p className="text-lg font-semibold mt-2" style={{ color: textColor }}>
            Total: ₹{total}
          </p>

          {/* Place Order Button */}
          <button
            onClick={handleOrderClick}
            className="mt-3 px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            style={{ backgroundColor: buttonBg, color: buttonText }}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="p-6 rounded-3xl shadow-2xl max-w-md w-full"
            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: textColor }}>
              Confirm Your Order
            </h3>
            <p className="mb-4" style={{ color: textColor }}>
              Cake: {cake.name} <br />
              Size: {size} <br />
              Flavor: {flavor} <br />
              Toppings: {toppings.join(", ") || "None"} <br />
              Delivery: {deliveryDate || "Not selected"} <br />
              Total: ₹{total}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border"
                style={{ borderColor, color: textColor }}
              >
                Cancel
              </button>
              <button
                onClick={confirmOrder}
                disabled={loading}
                className="px-4 py-2 rounded-lg font-semibold"
                style={{ backgroundColor: buttonBg, color: buttonText }}
              >
                {loading ? "Processing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrderPageWrapper() {
  return (
    <PrivateRoute>
      <OrderPage />
    </PrivateRoute>
  );
}
