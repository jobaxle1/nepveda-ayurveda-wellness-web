
import { Heart, Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-nepveda-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fbe6386a-02f4-4611-833f-17ceb6928697.png" 
                alt="NEPVEDA Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-nepveda-cream/80 leading-relaxed">
              Authentic Ayurvedic wellness and holistic health coaching for complete mind-body-spirit harmony.
            </p>
            <div className="flex items-center space-x-2 text-nepveda-cream/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>in Mumbai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-nepveda-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors"
                >
                  About Shailja
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-nepveda-yellow">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-nepveda-cream/80">Ayurvedic Consultation</li>
              <li className="text-nepveda-cream/80">Panchakarma Therapy</li>
              <li className="text-nepveda-cream/80">Nutrition Guidance</li>
              <li className="text-nepveda-cream/80">Stress Management</li>
              <li className="text-nepveda-cream/80">Wellness Coaching</li>
              <li className="text-nepveda-cream/80">Women's Health</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-nepveda-yellow">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nepveda-yellow" />
                <a href="tel:+919876543210" className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nepveda-yellow" />
                <a href="mailto:hello@nepveda.com" className="text-nepveda-cream/80 hover:text-nepveda-yellow transition-colors">
                  hello@nepveda.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-nepveda-yellow" />
                <span className="text-nepveda-cream/80">
                  Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-nepveda-green/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-nepveda-cream/60 text-sm">
              © 2024 NEPVEDA. All rights reserved. | Holistic Health Coach: Shailja Pradhan
            </div>
            <div className="flex items-center space-x-4 text-sm text-nepveda-cream/60">
              <span>Certified by Kerala Ayurveda</span>
              <Leaf className="w-4 h-4 text-nepveda-yellow" />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-nepveda-green hover:bg-nepveda-green-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <Leaf className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
