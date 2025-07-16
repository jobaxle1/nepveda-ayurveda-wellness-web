
import { Leaf, Brain, Utensils, Dumbbell, Stethoscope, Moon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Ayurvedic Consultation",
      description: "Discover your dosha, imbalances, and path to wellness with our holistic Ayurvedic coach, traditional vaidya, or medical doctor.",
      features: ["Deep consultation, not cookie-cutter diagnosis", "Personalized for your body and lifestyle", "Dosha assessment", "Comprehensive health analysis"]
    },
    {
      icon: Leaf,
      title: "Therapeutic Massages",
      description: "Experience healing through Abhyanga, Udvartana, and other treatments to ease pain, detoxify, and restore vitality.",
      features: ["Abhyanga (oil massage)", "Udvartana therapy", "Pain relief treatments", "Detoxification and vitality restoration"]
    },
    {
      icon: Brain,
      title: "Yoga & Breathwork",
      description: "Gentle, one-on-one guidance to balance your mind and body using ancient techniques matched to your constitution.",
      features: ["One-on-one guidance", "Constitutional matching", "Mind-body balance", "Ancient breathing techniques"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-nepveda-green to-nepveda-green-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-nepveda-green-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-nepveda-green-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-nepveda-green-dark/70">
                        <Leaf className="w-3 h-3 text-nepveda-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-nepveda-green hover:bg-nepveda-green-dark text-white rounded-full transition-all duration-300"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-nepveda-green-dark mb-4">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-xl text-nepveda-green-dark/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards holistic health with a personalized consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-nepveda-green text-nepveda-green hover:bg-nepveda-green hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
