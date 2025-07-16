import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nepveda-green to-nepveda-green-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Take the First Step
            </h2>
            
            <p className="text-xl md:text-2xl text-nepveda-cream/90 max-w-3xl mx-auto leading-relaxed">
              You don't have to live with discomfort or confusion any longer. At Nepveda, your story is heard, 
              your body is understood, and your healing is our mission.
            </p>
            
            <p className="text-lg text-nepveda-cream/80 max-w-2xl mx-auto">
              This isn't just a consultation — it's the beginning of real change.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-nepveda-green hover:bg-nepveda-cream px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/9779818158848', '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-nepveda-green px-8 py-6 text-lg rounded-full transition-all duration-300 font-semibold"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;