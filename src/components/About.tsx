
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Kerala Certification",
      description: "Certified Holistic Health Coach from the heart of Ayurveda"
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Treating mind, body, and spirit as interconnected systems"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Customized treatment plans based on individual constitution"
    },
    {
      icon: Sparkles,
      title: "Ancient Wisdom",
      description: "5000+ years of traditional Ayurvedic knowledge"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              About NEPVEDA
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Founded on the principles of authentic Ayurveda, NEPVEDA bridges ancient wisdom with modern wellness needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-nepveda-green-dark">
                  Meet Shailja Pradhan
                </h3>
                <div className="space-y-4 text-nepveda-green-dark/80 text-lg leading-relaxed">
                  <p>
                    With deep-rooted passion for holistic healing, I am a certified Holistic Health Coach 
                    trained in the traditional practices of Kerala Ayurveda. My journey began with a 
                    personal transformation through Ayurvedic principles, which led me to dedicate my 
                    life to helping others achieve optimal wellness.
                  </p>
                  <p>
                    At NEPVEDA, we believe that true health encompasses not just the absence of disease, 
                    but a state of complete physical, mental, and spiritual well-being. Every consultation 
                    is personalized to your unique constitution (Prakriti) and current state of balance.
                  </p>
                  <p>
                    My approach combines time-tested Ayurvedic therapies with modern lifestyle guidance, 
                    ensuring that ancient wisdom seamlessly integrates into your contemporary life.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-nepveda-cream rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-nepveda-green-dark mb-4">Credentials & Training</h4>
                <ul className="space-y-2 text-nepveda-green-dark/80">
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-nepveda-green mr-3" />
                    Certified Holistic Health Coach - Kerala Ayurveda
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-nepveda-green mr-3" />
                    Traditional Panchakarma Therapy Training
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-nepveda-green mr-3" />
                    Ayurvedic Nutrition & Lifestyle Counseling
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 text-nepveda-green mr-3" />
                    Herbal Medicine & Formulation
                  </li>
                </ul>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-nepveda-cream/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-nepveda-green to-nepveda-green-light rounded-full flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-nepveda-green-dark mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-nepveda-green-dark/70">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
