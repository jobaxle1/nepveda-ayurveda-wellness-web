
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fbe6386a-02f4-4611-833f-17ceb6928697.png" 
              alt="NEPVEDA Logo" 
              className="h-36 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium"
            >
              About
            </button>
            <a 
              href="/services"
              className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium"
            >
              Services
            </a>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-nepveda-green-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
            <nav className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium text-left"
              >
                About
              </button>
              <a 
                href="/services"
                className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-nepveda-green-dark hover:text-nepveda-green transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-nepveda-green hover:bg-nepveda-green-dark text-white w-full rounded-full mt-4"
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
