import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, DollarSign, Heart, Sparkles, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface Service {
  name: string;
  description: string;
  duration?: string;
  price?: string;
  benefits?: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  services: Service[];
}

const ConsultationBreathwork = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: "consultation",
      title: "Ayurvedic Consultation",
      image: "/src/assets/ayurvedic-consultation.jpg",
      description: "Personalized consultations to understand your unique constitution and health needs",
      services: [
        {
          name: "Private Consultation with an Ayurvedic Doctor",
          description: "Dr. Hari Sharan Aryal - MD, Internal Medicine (Ayurveda), Anorectal expert. Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines to offer safe, personalized treatment for chronic and complex conditions.",
          duration: "60 mins",
          price: "Rs. 4,000",
          benefits: [
            "Expert medical insight from Nepal's best Ayurvedic doctor",
            "Classical Nepali Ayurvedic wisdom",
            "Time-tested herbal medicines",
            "Safe, personalized treatment for chronic and complex conditions"
          ]
        },
        {
          name: "Traditional Vaidya Consultation",
          description: "Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines to offer safe, personalized treatment for chronic and complex conditions.",
          duration: "30 mins", 
          price: "Rs. 1,500",
          benefits: [
            "Classical Nepali Ayurvedic wisdom",
            "Generational knowledge application",
            "Time-tested herbal medicines and therapies",
            "Root cause disease treatment"
          ]
        },
        {
          name: "Consultation with a Holistic Ayurvedic Coach",
          description: "Ms. Shailja Pradhan - Holistic Ayurvedic Coach & Ayurvedic Disease Management Practitioner (Kerala Ayurveda Academy). Discover balance and vitality through personalized guidance tailored to lifestyle and emotional well-being.",
          duration: "3 sittings of 60 mins each",
          price: "Rs. 5,000",
          benefits: [
            "Personalized lifestyle guidance",
            "Emotional well-being coaching",
            "Natural health empowerment",
            "Ayurvedic disease management"
          ]
        }
      ]
    },
    {
      id: "yoga-breathwork",
      title: "Yoga and Breath Work",
      image: "/src/assets/yoga-breathwork.jpg",
      description: "Ancient practices to harmonize mind, body, and spirit through movement and breath",
      services: [
        {
          name: "Private Yoga Session",
          description: "Customized yoga practice tailored to your body type, health conditions, and spiritual goals.",
          duration: "75 minutes",
          price: "Rs. 3000",
          benefits: [
            "Personalized asana practice",
            "Improved flexibility and strength",
            "Stress reduction", 
            "Better sleep quality"
          ]
        },
        {
          name: "Pranayama (Breath Work)",
          description: "Specialized breathing techniques to enhance energy, calm the mind, and improve overall health.",
          duration: "45 minutes",
          price: "Rs. 2000", 
          benefits: [
            "Enhanced lung capacity",
            "Stress and anxiety relief",
            "Improved concentration",
            "Emotional balance"
          ]
        },
        {
          name: "Meditation Session",
          description: "Guided meditation practices to cultivate inner peace, mindfulness, and spiritual growth.",
          duration: "30 minutes",
          price: "Rs. 1500",
          benefits: [
            "Mental clarity",
            "Emotional stability", 
            "Spiritual connection",
            "Deep relaxation"
          ]
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nepveda-cream via-nepveda-cream/50 to-white">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Navigation */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-nepveda-green hover:text-nepveda-green-dark transition-colors mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-nepveda-green to-nepveda-green-dark bg-clip-text text-transparent">
                  Consultation & Breath Work
                </h1>
                <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
              </div>
              <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto leading-relaxed">
                Begin your journey to wellness with personalized consultations and holistic practices 
                designed to restore balance and vitality.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:gap-12 max-w-5xl mx-auto">
              {serviceCategories.map((category) => (
                <Collapsible
                  key={category.id}
                  open={expandedCategory === category.id}
                  onOpenChange={() => toggleCategory(category.id)}
                >
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-nepveda-green/20 hover:border-nepveda-green/40 transition-all duration-500 hover:shadow-2xl hover:shadow-nepveda-green/10">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="p-0">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Category Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                  {category.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base max-w-lg">
                                  {category.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                                >
                                  Learn More
                                </Button>
                                <ChevronDown 
                                  className={cn(
                                    "h-6 w-6 transition-transform duration-300",
                                    expandedCategory === category.id && "rotate-180"
                                  )} 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="p-8 bg-gradient-to-br from-nepveda-cream/30 to-white">
                        <div className="grid gap-6">
                          {category.services.map((service, serviceIndex) => (
                            <div 
                              key={serviceIndex}
                              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-nepveda-green/10 hover:border-nepveda-green/30 transition-all duration-300 hover:shadow-lg"
                            >
                              <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-3">
                                    <Heart className="h-5 w-5 text-nepveda-green flex-shrink-0" />
                                    <h4 className="text-xl font-semibold text-nepveda-green-dark">
                                      {service.name}
                                    </h4>
                                  </div>
                                  
                                  <p className="text-gray-700 mb-4 leading-relaxed">
                                    {service.description}
                                  </p>

                                  {service.benefits && (
                                    <div className="mb-4">
                                      <h5 className="font-semibold text-nepveda-green-dark mb-2">Benefits:</h5>
                                      <div className="grid gap-2">
                                        {service.benefits.map((benefit, index) => (
                                          <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-nepveda-green rounded-full flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{benefit}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex flex-wrap gap-3">
                                    {service.duration && (
                                      <Badge variant="secondary" className="bg-nepveda-green/10 text-nepveda-green-dark border-nepveda-green/20">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {service.duration}
                                      </Badge>
                                    )}
                                    {service.price && (
                                      <Badge variant="secondary" className="bg-nepveda-gold/10 text-nepveda-gold border-nepveda-gold/20">
                                        <DollarSign className="h-3 w-3 mr-1" />
                                        {service.price}
                                      </Badge>
                                    )}
                                  </div>
                                </div>

                                <Button 
                                  onClick={scrollToContact}
                                  className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                                >
                                  Book This Service
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-nepveda-green to-nepveda-green-dark rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Begin Your Wellness Journey?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Schedule your consultation today and take the first step towards balanced health and vitality.
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-nepveda-green hover:bg-nepveda-cream hover:text-nepveda-green-dark transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationBreathwork;