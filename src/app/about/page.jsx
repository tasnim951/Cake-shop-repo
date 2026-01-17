"use client";

import { useTheme } from "@/context/ThemeContext";
import { Cake, Heart, Gift, Star, Truck, Smile } from "lucide-react";

export default function AboutPage() {
  const { isDark } = useTheme();

  // Theme colors
  const bg = isDark ? "rgba(55,31,10,0.95)" : "rgba(176,196,138,0.85)";
  const headingColor = isDark ? "rgba(176,196,138,0.95)" : "rgba(75,43,17,1)";
  const textColor = isDark ? "rgba(235,235,235,0.95)" : "rgba(60,40,20,0.95)";
  const cardBg = isDark ? "rgba(75,43,17,0.75)" : "rgba(120,140,80,0.85)";
  const borderBoxBg = isDark ? "rgba(176,196,138,0.1)" : "rgba(75,43,17,0.1)";
  const borderColor = isDark ? "rgba(176,196,138,0.5)" : "rgba(75,43,17,0.5)";

  // Rows data
 const rows = [
  {
    icon: <Cake size={36} />,
    title: "Birthday Cakes",
    description:
      "Celebrate special moments with our handcrafted birthday cakes, designed with vibrant themes and premium finishes.",
    details: [
      "Flavours: Chocolate, Vanilla, Red Velvet",
      "Customization: Theme, Name, Toppers",
      "Available Sizes: 0.5kg to 5kg",
      "Best For: Birthdays & Kids Parties",
    ],
  },
  {
    icon: <Heart size={36} />,
    title: "Wedding Cakes",
    description:
      "Elegant, multi-tier wedding cakes crafted to match your venue, theme, and celebration style.",
    details: [
      "Custom Tiers & Elegant Designs",
      "Premium Ingredients & Fillings",
      "Consultation with Cake Designer",
      "Perfect for Weddings & Receptions",
    ],
  },
  {
    icon: <Gift size={36} />,
    title: "Special Occasions",
    description:
      "From anniversaries to corporate events, we create cakes that leave a lasting impression.",
    details: [
      "Personalized Branding & Messages",
      "Wide Variety of Flavours",
      "Minimal or Luxury Designs",
      "Ideal for Events & Celebrations",
    ],
  },
];

 
  const chartList = [
    { icon: <Star size={20} />, text: "Premium quality ingredients" },
    { icon: <Truck size={20} />, text: "Timely delivery for every order" },
    { icon: <Smile size={20} />, text: "Friendly and personalized service" },
    { icon: <Cake size={20} />, text: "Customizable designs for all occasions" },
    { icon: <Heart size={20} />, text: "Loved by hundreds of happy customers" },
  ];

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-28 pb-16 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="text-center mb-10 px-4 md:px-0">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            About Us
          </h1>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            At our cakery, we create handcrafted cakes for every special occasion. With passion, creativity, and premium ingredients, we ensure every cake is memorable, delicious, and a work of art.
          </p>
        </div>

        {/* Rows */}
        {rows.map((row, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-stretch">
           
            <div
              className="flex-1 p-6 rounded-2xl shadow-lg flex flex-col gap-4 transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: cardBg, color: textColor }}
            >
              <div className="text-4xl">{row.icon}</div>
              <h3 className="text-2xl font-bold" style={{ color: headingColor }}>
                {row.title}
              </h3>
              <p className="text-base md:text-lg" style={{ color: textColor }}>
                {row.description}
              </p>
            </div>

           
<div
  className="flex-1 p-6 rounded-2xl border-2 flex flex-col gap-4
             transition-transform duration-300 hover:scale-105"
  style={{
    borderColor: borderColor,
    backgroundColor: borderBoxBg,
    color: textColor,
  }}
>
  <h4
    className="text-xl font-semibold flex items-center gap-2"
    style={{ color: headingColor }}
  >
    Details & Highlights
  </h4>

  <div className="h-px w-full opacity-40" style={{ backgroundColor: borderColor }} />

  <ul className="flex flex-col gap-3">
    {row.details.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-base md:text-lg">
        <span
          className="mt-1 h-2 w-2 rounded-full"
          style={{ backgroundColor: headingColor }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

          </div>
        ))}

    
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
        
          <div
            className="flex-1 p-6 rounded-2xl shadow-lg flex flex-col gap-3 transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: cardBg, color: textColor }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>
              Why Choose Us
            </h3>
            <ul className="flex flex-col gap-3">
              {chartList.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-olive">{item.icon}</span>
                  <span style={{ color: textColor }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

  
<div
  className="flex-1 p-6 rounded-2xl border-2 flex flex-col gap-4
             transition-transform duration-300 hover:scale-105"
  style={{
    borderColor: borderColor,
    backgroundColor: borderBoxBg,
    color: textColor,
  }}
>
  <h3
    className="text-2xl font-bold flex items-center gap-2"
    style={{ color: headingColor }}
  >
    Our Services
  </h3>

  <div className="h-px w-full opacity-40" style={{ backgroundColor: borderColor }} />

  <ul className="flex flex-col gap-3 text-base md:text-lg">
    <li className="flex items-center gap-3">
      <Cake size={18} style={{ color: headingColor }} />
      <span>Custom cake design tailored to your occasion</span>
    </li>
    <li className="flex items-center gap-3">
      <Heart size={18} style={{ color: headingColor }} />
      <span>Wedding, engagement & anniversary cakes</span>
    </li>
    <li className="flex items-center gap-3">
      <Star size={18} style={{ color: headingColor }} />
      <span>Flavor, theme & decoration consultation</span>
    </li>
    <li className="flex items-center gap-3">
      <Gift size={18} style={{ color: headingColor }} />
      <span>Corporate, festive & celebration cakes</span>
    </li>
    <li className="flex items-center gap-3">
      <Truck size={18} style={{ color: headingColor }} />
      <span>Safe packaging & on-time delivery</span>
    </li>
  </ul>
</div>

        </div>
      </div>
    </section>
  );
}
