import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nepveda: My happy space that gave me hope🥰🥰 I came to Nepveda for my apnea issues. After nasya treatments, yoga sessions, and diet changes, I'm breathing and sleeping better. Nepveda has truly been my comforting place that healed my soul.",
      author: "Reshma Shrestha",
      rating: 5,
      image: "/lovable-uploads/860bed1b-71cc-4eb4-a2dd-f96c006f6df7.png"
    },
    {
      text: "After my consultation, it finally made sense why I wasn't getting better. I wish I had come sooner.",
      author: "Raj M.",
      rating: 5
    },
    {
      text: "I finally feel a little peace like I no longer stress out over things like before",
      author: "Anita K.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-nepveda-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Real stories from people who found healing and hope at Nepveda
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    {testimonial.image && (
                      <div className="w-20 h-20 mx-auto mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full rounded-full object-cover border-4 border-nepveda-green/20"
                        />
                      </div>
                    )}
                    <Quote className="w-12 h-12 text-nepveda-green mx-auto mb-4 opacity-20" />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-nepveda-yellow fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-nepveda-green-dark/80 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-nepveda-sage/30 pt-4">
                    <p className="text-nepveda-green font-semibold">
                      — {testimonial.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;