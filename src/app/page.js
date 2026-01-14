import About from "@/components/About";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ExploreCakesBanner from "@/components/ExploreCakesBanner";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="w-full">
     
    <Hero/>
    <ExploreCakesBanner/>
    <About/>
    <Categories/>
    <TestimonialSection/>

     
    </div>
  );
}
