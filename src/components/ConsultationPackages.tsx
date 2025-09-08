
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const YogaBreathworkCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const yogaServices = [
    {
      title: "VIKRUTI SPECIFIC YOGA & PRANAYAM",
      duration: "60 mins",
      price: "Rs. 2000",
      packageInfo: "",
      description: "Tailored yoga and pranayama for specific dosha conditions"
    },
    {
      title: "MEDITATION",
      duration: "30 mins",
      price: "Rs. 2000",
      packageInfo: "",
      description: "Guided relaxation, reduces stress, promotes healing"
    },
    {
      title: "YOGA NIDRA",
      duration: "30 mins",
      price: "Rs. 1500",
      packageInfo: "(with other treatment)",
      description: "Deep relaxation, balances hormones, reduces anxiety, helps insomnia"
    },
    {
      title: "THERAPY PACKAGE",
      duration: "30–60 mins",
      price: "Price depending on treatment",
      packageInfo: "",
      description: "3–14 day treatment designed as per consultation, includes therapies like Shirodhara, massage, Swedana."
    }
  ];

  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-card/80">
      <CardHeader className="relative">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/6aa914c8-42d9-4f6b-8028-dc5d804e8ac0.png"
            alt="Yoga and breathwork practice"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        </div>
        
        <div className="relative z-10">
          <CardTitle className="text-3xl font-bold text-center mb-6 text-primary">
            YOGA & BREATHWORK
          </CardTitle>
          
          <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
            <img 
              src="/lovable-uploads/6aa914c8-42d9-4f6b-8028-dc5d804e8ac0.png"
              alt="People practicing yoga and pranayama in garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isExpanded ? "Hide Details" : "Learn More"}
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="p-8 bg-card/95 backdrop-blur-sm animate-accordion-down">
          <div className="space-y-8">
            {yogaServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="flex gap-6 text-center">
                    <div className="bg-primary/10 rounded-lg p-3 min-w-[80px]">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-bold text-primary">{service.duration}</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3 min-w-[100px]">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-bold text-secondary-foreground">{service.price}</p>
                      {service.packageInfo && (
                        <p className="text-xs text-muted-foreground">{service.packageInfo}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Session
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const ConsultationPackages = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const consultationTypes = [
    {
      title: "CONSULTATION WITH A HOLISTIC AYURVEDIC COACH",
      practitioner: "Ms. Shailja Pradhan",
      credentials: "Holistic Ayurvedic Coach & Ayurvedic Disease Management Practitioner (Kerala Ayurveda Academy)",
      duration: "120 mins",
      price: "Rs. 3000",
      description: "Discover balance and vitality through personalized guidance on diet, lifestyle, and emotional well-being with a passionate health coach who empowers individuals to claim their health naturally using the ancient science of Ayurveda."
    },
    {
      title: "PRIVATE CONSULTATION WITH A TRADITIONAL VAIDYA",
      practitioner: "Vaidya Madhu Bajracharya",
      credentials: "Traditional Vaidya",
      duration: "30 mins",
      price: "Rs. 1500",
      description: "Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines and therapies to address the root cause of your disease and restore health."
    },
    {
      title: "PRIVATE CONSULTATION WITH AN AYURVEDIC DOCTOR",
      practitioner: "Dr. Hari Sharan Aryal",
      credentials: "MD, Internal Medicine (Ayurveda), Anorectal expert",
      duration: "30 mins",
      price: "Rs. 1500",
      description: "Get expert medical insight from one of Nepal's best Ayurvedic doctors, who blends ancient diagnostics with modern tools to offer safe, personalized treatment for chronic and complex conditions."
    }
  ];

  return (
    <section id="consultation-packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Consultation & Packages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ayurvedic Consultation Card */}
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-card/80">
              <CardHeader className="relative">
                <div className="absolute inset-0">
                  <img 
                    src="/lovable-uploads/57a290d8-0a3e-4177-9d2c-176e6fca35a2.png"
                    alt="Ayurvedic consultation session"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                </div>
                
                <div className="relative z-10">
                  <CardTitle className="text-3xl font-bold text-center mb-6 text-primary">
                    AYURVEDIC CONSULTATION
                  </CardTitle>
                  
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/lovable-uploads/57a290d8-0a3e-4177-9d2c-176e6fca35a2.png"
                      alt="Ayurvedic consultation in peaceful garden setting"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isExpanded ? "Hide Details" : "Learn More"}
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="p-8 bg-card/95 backdrop-blur-sm animate-accordion-down">
                  <div className="space-y-8">
                    {consultationTypes.map((consultation, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary mb-2">
                              {consultation.title}
                            </h3>
                            <div className="text-secondary-foreground">
                              <p className="font-semibold text-accent-foreground">
                                {consultation.practitioner}
                              </p>
                              <p className="text-sm text-muted-foreground italic">
                                {consultation.credentials}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex gap-6 text-center">
                            <div className="bg-primary/10 rounded-lg p-3 min-w-[80px]">
                              <p className="text-sm text-muted-foreground">Duration</p>
                              <p className="font-bold text-primary">{consultation.duration}</p>
                            </div>
                            <div className="bg-secondary/10 rounded-lg p-3 min-w-[100px]">
                              <p className="text-sm text-muted-foreground">Price</p>
                              <p className="font-bold text-secondary-foreground">{consultation.price}</p>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {consultation.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Your Consultation
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Yoga & Breathwork Card */}
            <YogaBreathworkCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationPackages;
