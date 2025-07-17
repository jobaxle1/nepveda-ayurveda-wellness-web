
import { useState } from "react";
import { Leaf, Brain, Stethoscope, ChevronDown, ChevronUp, Clock, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const consultationImg = "/lovable-uploads/2b980cce-cecb-4ebe-a555-fd046ba2feeb.png";
import massageImg from "@/assets/ayurvedic-massage.jpg";
const yogaImg = "/lovable-uploads/f124a34a-8a87-4e76-abb9-b540e4172050.png";

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const mainServices = [
    {
      id: "consultation",
      icon: Stethoscope,
      title: "Ayurvedic Consultation",
      description: "Understand your body. Discover your healing path. Our consultations go far beyond surface symptoms.",
      image: consultationImg,
      subServices: [
        {
          name: "Holistic Ayurvedic Coach Consultation",
          description: "Explore your physical, emotional, and lifestyle patterns with a trained Ayurvedic coach. Ideal for stress, sleep, digestion, or energy-related concerns.",
          duration: "90 mins",
          price: "Rs. 2500"
        },
        {
          name: "Traditional Vaidya Consultation",
          description: "Experience pulse diagnosis and classical Ayurvedic insight passed through generations. Best for subtle imbalances and chronic conditions.",
          duration: "20 mins",
          price: "Rs. 1500"
        },
        {
          name: "Ayurvedic Doctor Consultation",
          description: "Medical-level consultation with Ayurvedic diagnosis for complex or long-standing issues.",
          duration: "20 mins",
          price: "Rs. 1500"
        }
      ]
    },
    {
      id: "massage",
      icon: Leaf,
      title: "Ayurvedic Massages",
      description: "Release tension. Cleanse toxins. Reconnect with your body. Our therapeutic massages use medicated oils and time-tested techniques.",
      image: massageImg,
      subServices: [
        {
          name: "Abhyanga",
          description: "Full-body oil massage to relieve joint pain, fatigue, and stress",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "Udvartana",
          description: "Herbal powder scrub to support detox and metabolic balance",
          duration: "60 mins",
          price: "Custom"
        },
        {
          name: "Prasootika Abhyanga",
          description: "Postpartum full-body care for strength and vata balance",
          duration: "60 mins",
          price: "Custom"
        },
        {
          name: "Pizichil",
          description: "Royal warm oil bath for neurological conditions or deep fatigue",
          duration: "60 mins",
          price: "Rs. 6000"
        }
      ]
    },
    {
      id: "yoga",
      icon: Brain,
      title: "Yoga & Breathwork",
      description: "Heal from within. Strengthen your breath. Restore clarity. Gentle, guided practices that honor your energy level.",
      image: yogaImg,
      subServices: [
        {
          name: "Vikruti-Based Yoga",
          description: "Movement therapy adapted to your imbalances",
          duration: "Custom",
          price: "Custom"
        },
        {
          name: "Pranayama",
          description: "Conscious breathing to reset your nervous system",
          duration: "Custom",
          price: "Custom"
        },
        {
          name: "Yog Nidra",
          description: "Deep guided rest for stress and emotional reset",
          duration: "Custom",
          price: "Custom"
        }
      ]
    }
  ];

  const wellnessPackages = [
    {
      name: "Half-Day Wellness Experience",
      description: "Includes one consultation, one tailored therapy, one yoga or meditation session, and nourishing herbal tea. Ideal for first-timers or those needing a reset."
    },
    {
      name: "3–14 Day Therapy Plan",
      description: "Custom-designed after an initial consultation. Includes a series of treatments, guided practices, and progress support. Ideal for chronic issues, recovery, or deep transformation."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleExpanded = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-nepveda-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              Our Signature Services
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Deeply personalized guidance using ancient knowledge, modern care, and natural healing
            </p>
          </div>

          {/* Main Services Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <Card key={service.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-3 group overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nepveda-green-dark/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-nepveda-green-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-nepveda-green-dark/80 leading-relaxed">
                    {service.description}
                  </p>

                  <Button 
                    onClick={() => toggleExpanded(service.id)}
                    className="w-full bg-nepveda-green hover:bg-nepveda-green-dark text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>

                  {/* Expanded Sub-Services */}
                  {expandedService === service.id && (
                    <div className="mt-6 space-y-4 animate-fade-in">
                      {service.subServices.map((subService, idx) => (
                        <div key={idx} className="bg-nepveda-cream/30 rounded-xl p-4 border border-nepveda-green/10">
                          <h4 className="text-lg font-bold text-nepveda-green-dark mb-2">
                            {subService.name}
                          </h4>
                          <p className="text-nepveda-green-dark/70 text-sm mb-3">
                            {subService.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-nepveda-green">
                              <Clock className="w-4 h-4" />
                              <span>{subService.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 text-nepveda-green font-semibold">
                              <IndianRupee className="w-4 h-4" />
                              <span>{subService.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button 
                        onClick={scrollToContact}
                        className="w-full bg-nepveda-green-dark hover:bg-nepveda-green text-white rounded-full transition-all duration-300 mt-4"
                      >
                        Book This Service
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Wellness Packages */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-nepveda-green-dark text-center mb-8">
              Wellness Packages
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {wellnessPackages.map((pkg, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white p-6">
                  <h4 className="text-xl font-bold text-nepveda-green-dark mb-3">
                    {pkg.name}
                  </h4>
                  <p className="text-nepveda-green-dark/80 leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-nepveda-green text-nepveda-green hover:bg-nepveda-green hover:text-white rounded-full transition-all duration-300"
                  >
                    Inquire About Package
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-nepveda-green-dark mb-4">
              Have Questions?
            </h3>
            <p className="text-xl text-nepveda-green-dark/80 mb-8 max-w-2xl mx-auto">
              Contact us via WhatsApp or book a discovery consultation to learn what's right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Discovery Consultation
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-nepveda-green text-nepveda-green hover:bg-nepveda-green hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
