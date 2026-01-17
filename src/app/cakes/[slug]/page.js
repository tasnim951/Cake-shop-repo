"use client";

import { useTheme } from "@/context/ThemeContext";
import { useParams, useRouter } from "next/navigation";
import cakes from "@/data/cakesData";
import { FaStar, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function CakeDetail() {
  const { isDark } = useTheme();
  const { user } = useAuth(); 
  const params = useParams();
  const router = useRouter();

  const slug = params.slug; 

  
  const cake = cakes.find(
    (c) => c.name.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!cake)
    return (
      <div className="text-center py-24 text-xl font-semibold">
        Cake not found!
      </div>
    );

  // THEME COLORS
  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.95)" : "rgba(60,40,20,0.95)";
  const subtleText = isDark ? "rgba(200,200,200,0.7)" : "rgba(80,60,40,0.7)";
  const btnBg = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const btnText = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.95)";
  const borderColor = isDark ? "rgba(176,196,138,0.4)" : "rgba(75,43,17,0.3)";

  
  const handleOrder = () => {
    if (!user) {
      router.push(`/login?redirect=/order/${slug}`);
    } else {
      router.push(`/order/${slug}`);
    }
  };

  return (
    <section style={{ backgroundColor: bg }} className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">

        {/* IMAGE */}
        <div
          className="relative w-full md:w-1/2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
          style={{ border: `1.5px solid ${borderColor}` }}
        >
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover rounded-2xl"
            style={{ filter: isDark ? "brightness(0.85)" : "brightness(0.95)" }}
          />
        </div>

        {/* INFO */}
        <div className="flex-1 flex flex-col justify-start gap-6">
          {/* TITLE */}
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            {cake.name}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            {cake.longDescription}
          </p>

          {/* CAKE DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p style={{ color: subtleText }}>
              <span className="font-semibold text-base" style={{ color: headingColor }}>Category:</span> {cake.category}
            </p>
            <p style={{ color: subtleText }}>
              <span className="font-semibold text-base" style={{ color: headingColor }}>Taste:</span> {cake.taste}
            </p>
            <p style={{ color: subtleText }}>
              <span className="font-semibold text-base" style={{ color: headingColor }}>Flavours:</span> {cake.flavours.join(", ")}
            </p>
            <p style={{ color: subtleText }}>
              <span className="font-semibold text-base" style={{ color: headingColor }}>Price:</span> {cake.priceRange}
            </p>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-400 text-lg" />
            <span className="font-medium" style={{ color: textColor }}>
              {cake.rating} / 5
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold w-max
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: btnBg, color: btnText }}
            >
              <FaArrowRight /> Back to Cakes
            </button>

            <button
              onClick={handleOrder}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold w-max
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: btnBg, color: btnText }}
            >
              <FaShoppingCart /> Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
