
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello, I would like to book a consultation.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/9779705002060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "You'll be redirected to WhatsApp to send your message.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+977 9705002060",
      link: "tel:+9779705002060"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@nepveda.com.np",
      link: "mailto:info@nepveda.com.np"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kathmandu, Babarmahal",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "On appointment basis through WhatsApp",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-nepveda-green-dark mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto">
              Ready to start your holistic wellness journey? Contact us for a personalized consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-nepveda-green-dark mb-6">
                    Book Your Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-nepveda-green-dark mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-lg border-nepveda-sage/50 focus:border-nepveda-green"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-nepveda-green-dark mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-lg border-nepveda-sage/50 focus:border-nepveda-green"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-nepveda-green-dark mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="rounded-lg border-nepveda-sage/50 focus:border-nepveda-green"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-nepveda-green-dark mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-nepveda-sage/50 bg-white px-3 py-2 text-sm focus:border-nepveda-green focus:outline-none focus:ring-2 focus:ring-nepveda-green/20"
                        >
                          <option value="">Select a service</option>
                          <option value="consultation">Ayurvedic Consultation</option>
                          <option value="panchakarma">Panchakarma Therapy</option>
                          <option value="nutrition">Ayurvedic Nutrition</option>
                          <option value="stress">Stress Management</option>
                          <option value="wellness">Wellness Coaching</option>
                          <option value="womens">Women's Health</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-nepveda-green-dark mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-lg border-nepveda-sage/50 focus:border-nepveda-green"
                        placeholder="Tell us about your health goals and any specific concerns..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-nepveda-green hover:bg-nepveda-green-dark text-white py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-nepveda-green-dark">
                  Contact Information
                </h3>
                <p className="text-nepveda-green-dark/80 text-lg">
                  Get in touch with us for personalized Ayurvedic care and holistic health guidance.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-nepveda-green to-nepveda-green-light rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-nepveda-green-dark">{info.title}</h4>
                          {info.link !== "#" ? (
                            <a 
                              href={info.link}
                              className="text-nepveda-green hover:text-nepveda-green-dark transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-nepveda-green-dark/80">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-nepveda-cream to-nepveda-yellow-light/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-nepveda-green-dark mb-4">
                    Why Choose NEPVEDA?
                  </h4>
                  <ul className="space-y-3 text-nepveda-green-dark/80">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-nepveda-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Authentic Kerala Ayurveda training and certification
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-nepveda-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Personalized treatment plans based on individual constitution
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-nepveda-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Holistic approach combining traditional wisdom with modern lifestyle
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-nepveda-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ongoing support and guidance throughout your wellness journey
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
