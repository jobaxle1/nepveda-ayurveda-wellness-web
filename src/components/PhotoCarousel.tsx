import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/a227e5ac-02bc-4546-869c-e9a1711f4145.png",
      alt: "Ayurvedic practitioner preparing herbs"
    },
    {
      src: "/lovable-uploads/c3057a06-20c3-4197-aacb-f3c48307baa5.png", 
      alt: "Ayurvedic massage therapy session"
    },
    {
      src: "/lovable-uploads/82cb0405-adf7-4c6b-b257-60a3cab0eeb0.png",
      alt: "Traditional herbal preparation"
    },
    {
      src: "/lovable-uploads/a1055ba7-e2d2-4aac-a62c-30e2aa30c411.png",
      alt: "NEPVEDA clinic exterior"
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
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
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