import { Leaf, FileText, Globe, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyNepveda = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "100% personalized for your body and lifestyle",
      description: "Every treatment plan is tailored specifically to your unique constitution and life circumstances"
    },
    {
      icon: FileText,
      title: "Deep consultation, not cookie-cutter diagnosis",
      description: "We take time to truly understand your health concerns and root causes"
    },
    {
      icon: Globe,
      title: "Rooted in Nepalese Ayurveda traditions",
      description: "Authentic practices passed down through generations of traditional healers"
    },
    {
      icon: Heart,
      title: "Led by an experienced, caring coach",
      description: "Shailja Pradhan brings years of expertise with genuine compassion for healing"
    },
    {
      icon: Sparkles,
      title: "Designed to feel premium, serene, and private",
      description: "A peaceful, confidential environment where you can focus on your wellness journey"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              Why Nepveda?
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Experience the difference of truly personalized Ayurvedic care
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-nepveda-cream/30 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-nepveda-green to-nepveda-green-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-nepveda-green-dark mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-nepveda-green-dark/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNepveda;