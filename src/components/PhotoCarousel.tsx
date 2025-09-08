import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/e4803de9-7595-4f29-b8d1-a6d6d3515a2f.png",
      alt: "Ayurvedic massage therapy with candles"
    },
    {
      src: "/lovable-uploads/fc9529df-d1fe-42c8-ae44-6633a257ccbb.png", 
      alt: "Foot bath with rose petals"
    },
    {
      src: "/lovable-uploads/5255ffdb-5261-4483-bfc5-1a2efcce59be.png",
      alt: "Shirodhara oil treatment"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full bg-nepveda-cream/50 py-4">
      <div className="w-full">
        <div className="relative w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="aspect-[16/9] w-full">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
            </div>
            
            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-nepveda-green-dark w-12 h-12 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-nepveda-green-dark w-12 h-12 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-nepveda-green scale-110" 
                    : "bg-nepveda-sage hover:bg-nepveda-green/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;