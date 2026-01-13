import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import { ThemeProvider } from "../../context/ThemeContext";
import "./globals.css";
import About from "@/components/About";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cakery | Custom Cakes",
  description: "Order handcrafted cakes for every celebration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {/* Wrap everything inside ThemeProvider */}
          <ThemeProvider>
            <Navbar />
            <Hero />
             <About/>
             <Categories/>
            {children}
            <Footer/>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
