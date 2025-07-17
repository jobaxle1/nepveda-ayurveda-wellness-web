
import { ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-nepveda-cream via-nepveda-yellow-light/20 to-nepveda-sage/10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-nepveda-green-dark leading-tight">
            Reclaim your Mind, Body, and Breath!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
