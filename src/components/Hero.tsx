
import { ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative py-8 flex items-center justify-center bg-nepveda-cream">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nepveda-green-dark leading-tight">
            Reclaim your Mind, Body, and Breath!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
