
import { ArrowRight, Leaf, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-nepveda-cream via-nepveda-yellow-light/20 to-nepveda-sage/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <Leaf className="w-12 h-12 text-nepveda-green transform rotate-12" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-pulse delay-1000">
        <Heart className="w-8 h-8 text-nepveda-green-light transform -rotate-12" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-pulse delay-500">
        <Star className="w-10 h-10 text-nepveda-yellow transform rotate-45" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-nepveda-green-dark leading-tight">
                  Reclaim your
                  <span className="block text-nepveda-green">Mind, Body,</span>
                  <span className="block text-nepveda-earth text-4xl md:text-5xl lg:text-6xl">and Breath!</span>
                </h1>
                <p className="text-xl md:text-2xl text-nepveda-green-dark/80 max-w-2xl">
                  Nepveda helps you not only heal but understand how to stay healthy — in a way that's tailored just for you.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/9779818158848', '_blank')}
                className="border-2 border-nepveda-green text-nepveda-green hover:bg-nepveda-green hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Message on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-nepveda-sage/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-nepveda-green">5+</div>
                <div className="text-sm text-nepveda-green-dark/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nepveda-green">200+</div>
                <div className="text-sm text-nepveda-green-dark/70">Clients Healed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nepveda-green">100%</div>
                <div className="text-sm text-nepveda-green-dark/70">Natural Approach</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nepveda-green/20 to-nepveda-yellow/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-nepveda-green to-nepveda-green-light rounded-full flex items-center justify-center">
                    <Leaf className="w-16 h-16 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-nepveda-green-dark mb-2">Shailja Pradhan</h3>
                    <p className="text-nepveda-green font-medium">Certified Holistic Health Coach</p>
                    <p className="text-nepveda-earth text-sm">Kerala Ayurveda Certification</p>
                  </div>
                  <div className="bg-nepveda-cream rounded-2xl p-6">
                    <p className="text-nepveda-green-dark italic">
                      "Healing is not just about treating symptoms, but nurturing the whole person - mind, body, and spirit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
