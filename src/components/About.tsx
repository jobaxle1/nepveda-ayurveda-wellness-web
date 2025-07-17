
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              Why Us
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Meet our experienced team of traditional Ayurvedic practitioners.
            </p>
          </div>

          {/* Team Member Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-nepveda-cream via-white to-nepveda-cream/70">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative">
                    <div className="aspect-square lg:aspect-auto lg:h-full bg-gradient-to-br from-nepveda-green/20 to-nepveda-green-light/30 flex items-center justify-center p-8">
                      <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-nepveda-green/30 shadow-xl">
                        <img 
                          src="/lovable-uploads/624c2bd5-cfa0-4457-94a8-1072347aebbc.png"
                          alt="Vaidya Madhu Bajracharya"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-nepveda-green-dark mb-2">
                          Vaidya Madhu Bajracharya
                        </h3>
                        <p className="text-xl text-nepveda-green font-semibold">
                          Traditional Vaidya
                        </p>
                      </div>
                      
                      <div className="w-20 h-1 bg-gradient-to-r from-nepveda-green to-nepveda-green-light rounded-full"></div>
                      
                      <p className="text-lg text-nepveda-green-dark/80 leading-relaxed">
                        Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines and therapies to address the root cause of your disease and restore health.
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="flex items-center space-x-2 pt-4">
                        <div className="w-2 h-2 bg-nepveda-green rounded-full"></div>
                        <div className="w-4 h-1 bg-nepveda-green-light rounded-full"></div>
                        <div className="w-2 h-2 bg-nepveda-green/60 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
