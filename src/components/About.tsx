
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Hari Sharan Aryal",
      title: "MD, Internal Medicine (Ayurveda), Anorectal expert",
      image: "/lovable-uploads/39fdac97-87a6-4919-8a0c-dd50c9422eef.png",
      description: "Get expert medical insight from one of Nepal's best Ayurvedic doctors, who blends ancient diagnostics with modern tools to offer safe, personalized treatment for chronic and complex conditions."
    },
    {
      name: "Shailja Pradhan",
      title: "Holistic Ayurvedic Coach",
      image: "/lovable-uploads/fc289f4b-a751-446e-a18e-6e26f2ce470f.png",
      description: "Discover balance and vitality through personalized guidance on diet, lifestyle, and emotional well-being with a passionate health coach who empowers individuals to claim their health naturally using the ancient science of Ayurveda."
    },
    {
      name: "Vaidya Madhu Bajracharya",
      title: "Traditional Vaidya",
      image: "/lovable-uploads/624c2bd5-cfa0-4457-94a8-1072347aebbc.png",
      description: "Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines and therapies to address the root cause of your disease and restore health."
    }
  ];

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

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden bg-gradient-to-br from-nepveda-cream via-white to-nepveda-cream/70 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-nepveda-green/30 shadow-lg">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Name and Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-nepveda-green-dark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-nepveda-green font-semibold">
                      {member.title}
                    </p>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-nepveda-green to-nepveda-green-light rounded-full mx-auto mb-4"></div>
                  
                  {/* Description */}
                  <p className="text-base text-nepveda-green-dark/80 leading-relaxed flex-grow italic">
                    "{member.description}"
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

export default About;
