import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, Heart, Sparkles, ArrowLeft, IndianRupee } from "lucide-react";
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

const AyurvedicServices2 = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: "body-treatments",
      title: "Ayurvedic Body Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Full body therapeutic treatments using traditional Ayurvedic techniques to restore balance and promote healing.",
      services: [
        {
          name: "Abhyanga",
          description: "Full body massage – including head and foot – with ayurvedic oil based on the dosha imbalance",
          duration: "60 mins",
          price: "Rs. 3500",
          benefits: ["Body ache, stiffness, difficulty in movement", "Joint pain, numbness, insomnia", "Loss of sensation, lean structure, dry skin, Vata aggravation"]
        },
        {
          name: "Prasootika Abhyanga",
          description: "Full body massage – post partum – with ayurvedic oil",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Vata dosha, loss of strength after childbirth"]
        },
        {
          name: "Udvartana",
          description: "Full body scrubbing with herbal powders",
          duration: "60 mins",
          price: "Rs. 3500",
          benefits: ["Kapha vitiation, obesity, debility, cellulite", "Rough skin, varicose veins, heaviness, lethargy", "Water retention, non-infectious skin diseases with dead skin, diabetes type 2"]
        },
        {
          name: "Shuksha Abhyanga",
          description: "Full body dry massage including head and foot",
          duration: "30 mins",
          price: "Rs. 1500 (with other)",
          benefits: ["Kapha, ama (toxin) obesity", "Metabolic sluggishness, skin issues"]
        }
      ]
    },
    {
      id: "head-treatments",
      title: "Ayurvedic Head Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Specialized treatments for head, scalp, and hair health using traditional Ayurvedic methods.",
      services: [
        {
          name: "Shiro Abhyanga",
          description: "Head massage with ayurvedic oil based on the dosha imbalance",
          duration: "30 mins",
          price: "Rs. 1500",
          benefits: ["Hair fall, dandruff, premature greying", "Dryness, tinnitus, eye strain", "Headaches, insomnia, stress, anxiety, epilepsy, Parkinson's"]
        },
        {
          name: "Shiro Abhyanga",
          description: "Head massage with ayurvedic oil based on the dosha imbalance (longer duration option)",
          duration: "60 mins",
          price: "Rs. 3000",
          benefits: ["Hair fall, dandruff, premature greying", "Dryness, tinnitus, eye strain", "Headaches, insomnia, stress, anxiety, epilepsy, Parkinson's"]
        },
        {
          name: "Shiro Lepa",
          description: "Application of herbal paste to the scalp for grey hair, hair fall, and dandruff",
          duration: "45 mins",
          price: "Rs. 2500",
          benefits: ["Vata disorders (headache, tension, insomnia, stress, anxiety, epilepsy, depression, vertigo)", "Pitta disorders (burning sensations, boils, inflammation, hair fall)"]
        },
        {
          name: "Shirodhara",
          description: "Continuous pouring of ayurvedic oil on the forehead, especially for vata conditions",
          duration: "60 mins",
          price: "Rs. 5000",
          benefits: ["Stress, insomnia, headache", "Menopause syndrome, paralysis, facial palsy", "Epilepsy, Parkinson's"]
        },
        {
          name: "Takradhara",
          description: "Continuous pouring of buttermilk infused with cooling ayurvedic herbs on the head, especially for Pitta and Vata",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Anxiety, insomnia, irritability", "Headache, psoriasis, skin rash", "Heat, stress-related disorders"]
        },
        {
          name: "Ksheeradhara",
          description: "Continuous pouring of milk infused with herbs on the head, especially for Pitta disorders and Vata imbalance",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Burning sensations, gastritis, excessive body heat", "Migraine, fatigue, emaciation", "Paralysis, neuropathic pain"]
        }
      ]
    },
    {
      id: "face-treatments",
      title: "Ayurvedic Face Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Natural facial treatments using herbs and oils for healthy, radiant skin.",
      services: [
        {
          name: "Saundarya Chikitsa",
          description: "Facial with ayurvedic herbs and oils suited to doshas and skin conditions",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Pitta (redness, heat, sensitivity, pigmentation)", "Vata (dryness, flakiness, fine lines)"]
        },
        {
          name: "Marma Abhyanga",
          description: "Facial massage on marma points using dosha-specific ayurvedic oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Eye strain, sinus congestion", "Wrinkles, facial tightness, dull complexion"]
        },
        {
          name: "Kansa Abhyanga",
          description: "Facial massage with kansa wand using dosha-specific oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Sagging muscles, wrinkles", "Fatigue, stress, anxiety, eye strain"]
        }
      ]
    },
    {
      id: "foot-treatments",
      title: "Ayurvedic Foot Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Therapeutic foot treatments for overall health and wellness.",
      services: [
        {
          name: "Pada Abhyanga",
          description: "Foot massage/reflexology using ayurvedic oil",
          duration: "30 mins",
          price: "Rs. 1500",
          benefits: ["Dryness, cracked heels, restlessness", "Neuropathy, insomnia, migraine", "Stress, anxiety"]
        },
        {
          name: "Pada Lepa Abhyanga",
          description: "Medicated paste applied to feet with massage",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Cracked heels, swelling, fungal infections"]
        },
        {
          name: "Pada Lepa",
          description: "Anti-fungal paste applied on the feet",
          duration: "45 mins",
          price: "Rs. 2500",
          benefits: ["Fungal infections, cracks, lesions"]
        }
      ]
    },
    {
      id: "steam-bath",
      title: "Steam Bath",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Therapeutic steam treatments for detoxification and relaxation.",
      services: [
        {
          name: "Swedana",
          description: "Therapeutic steam bath depending on dosha, detoxifies and clears pores",
          duration: "5–20 mins",
          price: "Rs. 500",
          benefits: ["Obesity, joint stiffness", "Muscle pain, post-panchakarma detox"]
        }
      ]
    },
    {
      id: "basti",
      title: "Basti",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Pooling of warm dosha-specific ayurvedic oil on targeted body areas.",
      services: [
        {
          name: "Shiro Basti (two therapists)",
          description: "Pooling of warm dosha-specific ayurvedic oil on the head",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Stress, insomnia, depression", "Fatigue, migraine, psychosomatic diseases"]
        },
        {
          name: "Griva Basti",
          description: "Pooling of oil on the neck",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Spondylitis, cervical pain", "Radiating numbness, vertigo"]
        },
        {
          name: "Uro Basti",
          description: "Pooling of oil on the chest",
          duration: "45 mins",
          price: "Rs. 3000",
          benefits: ["Asthma, bronchitis", "Chest stiffness, cardiac discomfort"]
        },
        {
          name: "Kati Basti",
          description: "Pooling of oil on the lower back",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Sciatica, spondylosis", "Back pain, degenerative issues"]
        },
        {
          name: "Janu Basti (two therapists)",
          description: "Pooling of oil on the knees",
          duration: "30 mins",
          price: "Rs. 4000",
          benefits: ["Osteoarthritis, ligament tears, knee pain"]
        }
      ]
    },
    {
      id: "pichu",
      title: "Pichu",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Cotton pad soaked in medicated oil applied over specific body areas.",
      services: [
        {
          name: "Shiro Pichu (two therapists)",
          description: "Cotton pad soaked in medicated oil applied on the head",
          duration: "30 mins",
          price: "Rs. 2500",
          benefits: ["Alternative to Shiro Basti", "Head and scalp conditions"]
        },
        {
          name: "Griva Pichu",
          description: "Cotton pad on the neck with warm oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Griva Basti", "Neck conditions"]
        },
        {
          name: "Uro Pichu",
          description: "Cotton pad on the chest with warm oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Uro Basti", "Chest conditions"]
        },
        {
          name: "Kati Pichu",
          description: "Cotton pad on the lower back",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Kati Basti", "Lower back issues"]
        },
        {
          name: "Janu Pichu (two therapists)",
          description: "Cotton pad on the knees",
          duration: "30 mins",
          price: "Rs. 2500",
          benefits: ["Alternative to Janu Basti", "Knee problems"]
        },
        {
          name: "Pichu (Pain Area)",
          description: "Cotton pad applied over specific painful area",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Targeted pain relief", "Localized treatment"]
        }
      ]
    },
    {
      id: "pinda-sweda",
      title: "Pinda Sweda – Special Kerala Massages",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Therapeutic massage with herbal boluses for deep healing.",
      services: [
        {
          name: "Valuka Pinda Sweda",
          description: "Dry bolus massage with sand heated in oil, reduces heaviness",
          duration: "60 mins",
          price: "Rs. 3500",
          benefits: ["Treats rheumatoid arthritis", "Reduces joint inflammation and swelling"]
        },
        {
          name: "Choorna Pinda Sweda",
          description: "Dry bolus massage with herbs",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Reduces swelling and muscle stiffness"]
        },
        {
          name: "Jambira Pinda Sweda",
          description: "Massage with lemon bolus, relieves stiffness and kapha accumulation",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Treats dry eye syndrome", "Helps with flu and fever"]
        },
        {
          name: "Patra Pinda Sweda",
          description: "Massage with herbal leaves, relieves pain and inflammation",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Post-surgery recovery", "Treats paralysis", "Improves skin condition"]
        },
        {
          name: "Tapa Pinda Sweda",
          description: "Sweat-inducing massage with herbs",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Deep nourishment", "Post-surgical healing"]
        },
        {
          name: "Sarsapa Potli Massage",
          description: "Massage with warm mustard seeds, stimulates blood circulation",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Reduces cellulite and obesity", "Improves circulation", "Treats muscle stiffness"]
        }
      ]
    },
    {
      id: "lepa",
      title: "Lepa",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Application of medicated paste over inflamed or painful areas.",
      services: [
        {
          name: "Upanaha Lepa",
          description: "Application of medicated paste over inflamed or painful area, covered with leaves and cloth",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Reduces inflammation", "Pain relief", "Natural healing"]
        }
      ]
    },
    {
      id: "sensory-treatment",
      title: "Sensory Organs Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Specialized treatments for sensory organs using traditional Ayurvedic methods.",
      services: [
        {
          name: "Nasya",
          description: "Nasal administration of medicated oils/ghee",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Sinusitis, rhinitis, migraine", "Eye disorders, memory loss, epilepsy"]
        },
        {
          name: "Netra Tarpana",
          description: "Retention of medicated ghee on the eyes",
          duration: "30 mins",
          price: "Rs. 2500",
          benefits: ["Dry eyes, eye strain", "Cataracts, glaucoma, macular degeneration"]
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/ayurvedic-services" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services 1
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-sage-900 mb-6">
            Ayurvedic Services 2
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of traditional Ayurvedic treatments designed to restore balance, promote healing, and enhance your well-being through ancient wisdom.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-sage-200">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-sage-600 text-white">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Traditional
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-sage-800 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    {category.title}
                  </CardTitle>
                  <p className="text-sage-600 text-sm line-clamp-3">
                    {category.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <Collapsible 
                    open={expandedCategory === category.id}
                    onOpenChange={() => toggleCategory(category.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between border-sage-300 text-sage-700 hover:bg-sage-50"
                      >
                        Learn More
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            expandedCategory === category.id && "rotate-180"
                          )}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4 mt-4">
                      {category.services.map((service, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-sage-50/50">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-sage-800">{service.name}</h4>
                            <div className="flex flex-col items-end gap-1 text-sm">
                              {service.duration && (
                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {service.duration}
                                </Badge>
                              )}
                              {service.price && (
                                <Badge variant="outline" className="border-sage-300 text-sage-700">
                                  <IndianRupee className="w-3 h-3 mr-1" />
                                  {service.price.replace('Rs. ', '')}
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-sage-600 text-sm mb-3">
                            {service.description}
                          </p>
                          
                          {service.benefits && service.benefits.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-xs font-medium text-sage-700 uppercase tracking-wide">
                                Conditions Treated:
                              </p>
                              <ul className="text-xs text-sage-600 space-y-1">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-start gap-2">
                                    <span className="w-1 h-1 bg-sage-400 rounded-full mt-2 flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <Button 
                            size="sm" 
                            className="w-full mt-3 bg-sage-600 hover:bg-sage-700"
                            onClick={scrollToContact}
                          >
                            Book This Treatment
                          </Button>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedicServices2;