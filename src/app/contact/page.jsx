"use client";

import { useTheme } from "@/context/ThemeContext";
import { MapPin, Phone, Mail, Clock, Cake, Truck, Headphones } from "lucide-react";

export default function ContactPage() {
  const { isDark } = useTheme();

  // Page background
  const bg = isDark ? "rgba(40,20,8,0.98)" : "rgba(176,196,138,0.85)";

  // Colors
  const headingColor = isDark ? "#F5F0DC" : "#4B2B11"; 
  const textColor = isDark ? "#F5F0DC" : "#3C2814";    
  const infoCardBg = isDark ? "rgba(90,50,25,0.95)" : "transparent"; 
  const oliveBorder = isDark ? "rgba(176,196,138,0.7)" : "transparent"; 
  const railBg = isDark ? "rgba(65,35,15,0.95)" : "rgba(75,43,17,0.15)";
  const divider = isDark ? "rgba(176,196,138,0.5)" : "rgba(75,43,17,0.35)";
  const infoHover = "transition-all duration-500 hover:-translate-y-1 hover:shadow-xl";

  return (
    <section style={{ backgroundColor: bg }} className="w-full pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto animate-fadeUp">

        {/* HEADER */}
        <div className="max-w-4xl mb-16 text-center lg:text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: headingColor, fontFamily: `"Playfair Display", serif` }}
          >
            Contact Us
          </h1>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ color: textColor, fontFamily: `"Poppins", sans-serif` }}
          >
            Whether you’re planning a celebration, ordering a custom cake, or
            simply have a question — we’re here to help and happy to assist.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT CONTACT RAIL */}
          <div
            className={`lg:w-1/4 rounded-3xl p-6 flex flex-col gap-6 ${infoHover}`}
            style={{ background: railBg, border: `1px solid ${oliveBorder}` }}
          >
            <ContactItem icon={<MapPin />} title="Location" textColor={textColor}>
              123 Sweet Street, Bakery Lane, City Center
            </ContactItem>
            <Divider color={divider} />
            <ContactItem icon={<Phone />} title="Phone" textColor={textColor}>
              +1 (234) 567-8900
            </ContactItem>
            <Divider color={divider} />
            <ContactItem icon={<Mail />} title="Email" textColor={textColor}>
              hello@cakery.com
            </ContactItem>
            <Divider color={divider} />
            <ContactItem icon={<Clock />} title="Working Hours" textColor={textColor}>
              Mon – Sat: 9:00 AM – 8:00 PM
            </ContactItem>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex flex-col gap-14">

            {/* INFO BLOCKS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <InfoBlock
                icon={<Cake />}
                title="Custom Cake Consultation"
                text="Work directly with our designers to create cakes tailored to your
                event theme, flavor preference, and budget."
                headingColor={headingColor}
                textColor={textColor}
                bgColor={infoCardBg}
                borderColor={oliveBorder}
              />

              <InfoBlock
                icon={<Truck />}
                title="Delivery & Pickup"
                text="Secure packaging and timely delivery ensure your cake arrives
                fresh, beautiful, and ready to celebrate."
                headingColor={headingColor}
                textColor={textColor}
                bgColor={infoCardBg}
                borderColor={oliveBorder}
              />

              <InfoBlock
                icon={<Headphones />}
                title="Customer Support"
                text="Our team is available to assist you with inquiries, changes,
                and guidance throughout your order."
                headingColor={headingColor}
                textColor={textColor}
                bgColor={infoCardBg}
                borderColor={oliveBorder}
              />
            </div>

            {/* FOOTER NOTE */}
            <div className="pt-6 border-t" style={{ borderColor: divider }}>
              <p style={{ color: textColor }} className="text-lg leading-relaxed">
                We believe great service is just as important as great taste.
                Reach out anytime — your celebration starts with a conversation.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* LOCAL ANIMATIONS */}
      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}



function ContactItem({ icon, title, children, textColor }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="mt-1 transition-transform duration-300 group-hover:scale-110 text-yellow-200">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold" style={{ color: textColor }}>{title}</h4>
        <p className="text-sm md:text-base" style={{ color: textColor }}>{children}</p>
      </div>
    </div>
  );
}

function Divider({ color }) {
  return <div className="h-px w-full" style={{ backgroundColor: color }} />;
}

function InfoBlock({ icon, title, text, headingColor, textColor, bgColor, borderColor }) {
  return (
    <div
      className="flex flex-col gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
      style={{
        padding: "1.5rem",
        borderRadius: "1.5rem",
        background: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div className="transition-transform duration-300 hover:scale-110" style={{ color: headingColor }}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold" style={{ color: headingColor }}>{title}</h3>
      <p style={{ color: textColor }}>{text}</p>
    </div>
  );
}
