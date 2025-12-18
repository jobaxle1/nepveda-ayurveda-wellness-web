
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, DollarSign, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  name: string;
  description: string;
  benefits: string;
  duration?: string;
  price?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  services: Service[];
}

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: "body-treatments",
      title: "Ayurvedic Body Treatments",
      image: "/lovable-uploads/96dc896f-896c-46d5-a002-1e8d101939cf.png",
      description: "Traditional full-body therapeutic treatments for complete wellness and rejuvenation",
      services: [
        {
          name: "ABHYANGA",
          description: "Full body massage – including head and foot – with ayurvedic oil based on the dosha imbalance",
          benefits: "Body ache, stiffness, difficulty in movement, joint pain, numbness, insomnia, loss of sensation, lean structure, dry skin, Vata aggravation",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "PRASOOTIKA ABHYANGA",
          description: "Full body massage – post partum – with ayurvedic oil",
          benefits: "Vata dosha, loss of strength after childbirth",
          duration: "60 mins",
          price: "Rs. 4500"
        },
        {
          name: "UDVARTANA",
          description: "Full body scrubbing with herbal powders",
          benefits: "Kapha vitiation, obesity, debility, cellulite, rough skin, varicose veins, heaviness, lethargy, water retention, non-infectious skin diseases with dead skin, diabetes type 2",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "SHUKSHA ABHYANGA",
          description: "Full body dry massage including head and foot",
          benefits: "Kapha, ama (toxin) obesity, metabolic sluggishness, skin issues",
          duration: "30 mins",
          price: "Rs. 1500 (with other)"
        }
      ]
    },
    {
      id: "head-treatments",
      title: "Ayurvedic Head Treatments",
      image: "/lovable-uploads/e7313421-2aa6-4df9-a1f7-f31930b649eb.png",
      description: "Specialized head and scalp treatments for mental clarity and hair health",
      services: [
        {
          name: "SHIRO ABHYANGA (30 mins)",
          description: "Head massage with ayurvedic oil based on the dosha imbalance",
          benefits: "Hair fall, dandruff, premature greying, dryness, tinnitus, eye strain, headaches, insomnia, stress, anxiety, epilepsy, Parkinson's",
          duration: "30 mins",
          price: "Rs. 1500"
        },
        {
          name: "SHIRO ABHYANGA (60 mins)",
          description: "Head massage with ayurvedic oil based on the dosha imbalance (longer duration option)",
          benefits: "Hair fall, dandruff, premature greying, dryness, tinnitus, eye strain, headaches, insomnia, stress, anxiety, epilepsy, Parkinson's",
          duration: "60 mins",
          price: "Rs. 3000"
        },
        {
          name: "SHIRO LEPA",
          description: "Application of herbal paste to the scalp for grey hair, hair fall, and dandruff",
          benefits: "Vata disorders (headache, tension, insomnia, stress, anxiety, epilepsy, depression, vertigo). Pitta disorders (burning sensations, boils, inflammation, hair fall)",
          duration: "45 mins",
          price: "Rs. 2500"
        },
        {
          name: "SHIRODHARA",
          description: "Continuous pouring of ayurvedic oil on the forehead, especially for vata conditions",
          benefits: "Stress, insomnia, headache, menopause syndrome, paralysis, facial palsy, epilepsy, Parkinson's",
          duration: "60 mins",
          price: "Rs. 5000"
        },
        {
          name: "TAKRADHARA",
          description: "Continuous pouring of buttermilk infused with cooling ayurvedic herbs on the head, especially for Pitta and Vata",
          benefits: "Anxiety, insomnia, irritability, headache, psoriasis, skin rash, heat, stress-related disorders",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "KSHEERADHARA",
          description: "Continuous pouring of milk infused with herbs on the head, especially for Pitta disorders and Vata imbalance",
          benefits: "Burning sensations, gastritis, excessive body heat, migraine, fatigue, emaciation, paralysis, neuropathic pain",
          duration: "60 mins",
          price: "Rs. 4000"
        }
      ]
    },
    {
      id: "face-treatments",
      title: "Ayurvedic Face Treatments",
      image: "/lovable-uploads/c992dc1d-e487-4e69-877d-bb3ca011dea9.png",
      description: "Rejuvenating facial treatments for natural beauty and skin health",
      services: [
        {
          name: "SAUNDARYA CHIKITSA",
          description: "Facial with ayurvedic herbs and oils suited to doshas and skin conditions",
          benefits: "Pitta (redness, heat, sensitivity, pigmentation); Vata (dryness, flakiness, fine lines)",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "MARMA ABHYANGA",
          description: "Facial massage on marma points using dosha-specific ayurvedic oil",
          benefits: "Eye strain, sinus congestion, wrinkles, facial tightness, dull complexion",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "KANSA ABHYANGA",
          description: "Facial massage with kansa wand using dosha-specific oil",
          benefits: "Sagging muscles, wrinkles, fatigue, stress, anxiety, eye strain",
          duration: "30 mins",
          price: "Rs. 2000"
        }
      ]
    },
    {
      id: "foot-treatments",
      title: "Ayurvedic Foot Treatments",
      image: "/lovable-uploads/1e3c28fc-2a3e-4042-b858-c5f95c3a53b4.png",
      description: "Therapeutic foot treatments for grounding and overall wellness",
      services: [
        {
          name: "PADA ABHYANGA",
          description: "Foot massage/reflexology using ayurvedic oil",
          benefits: "Dryness, cracked heels, restlessness, neuropathy, insomnia, migraine, stress, anxiety",
          duration: "30 mins",
          price: "Rs. 1500"
        },
        {
          name: "PADA LEPA ABHYANGA",
          description: "Medicated paste applied to feet with massage",
          benefits: "Cracked heels, swelling, fungal infections",
          duration: "30 mins",
          price: "Rs. 3000"
        },
        {
          name: "PADA LEPA",
          description: "Anti-fungal paste applied on the feet",
          benefits: "Fungal infections, cracks, lesions",
          duration: "45 mins",
          price: "Rs. 2500"
        }
      ]
    },
    {
      id: "steam-bath",
      title: "Steam Bath",
      image: "/lovable-uploads/d971b0f9-42fa-4b47-8f69-b0f036b480e1.png",
      description: "Therapeutic steam treatments for detoxification and relaxation",
      services: [
        {
          name: "SWEDANA",
          description: "Therapeutic steam bath depending on dosha, detoxifies and clears pores",
          benefits: "Obesity, joint stiffness, muscle pain, post-panchakarma detox",
          duration: "5–20 mins",
          price: "Rs. 500"
        }
      ]
    },
    {
      id: "basti-treatments",
      title: "Basti",
      image: "/lovable-uploads/9ff14322-fe0c-4380-9922-0099e82aa823.png",
      description: "Continuous pooling of warm dosha-specific ayurvedic oil on targeted body areas for deep therapeutic healing",
      services: [
        {
          name: "SHIRO BASTI (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the HEAD",
          benefits: "Stress, anxiety, insomnia, burnout, depression, psychosomatic diseases, chronic tension headache, migraines, facial palsy, cervical discopathies, strain, weak hair root",
          duration: "45 mins",
          price: "Rs. 4,500"
        },
        {
          name: "GRIVA BASTI (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the NECK",
          benefits: "Tingling and pain in arms, vertigo due to cervical issues",
          duration: "45 mins",
          price: "Rs. 3,500"
        },
        {
          name: "URO BASTI (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the CHEST",
          benefits: "Related heart symptoms, panic attacks with chest discomfort, grief, inflammation of rib cartilage, nerve pain between ribs",
          duration: "45 mins",
          price: "Rs. 3,500"
        },
        {
          name: "KATI BASTI (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the LOWER BACK",
          benefits: "Lumbosacral muscle stiffness, disc prolapse, osteoarthritis, ligament tear, bone degeneration",
          duration: "45 mins",
          price: "Rs. 3,500"
        },
        {
          name: "JANU BASTI (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the KNEES",
          benefits: "Knee pain due to osteoarthritis, stiffness and crepitus",
          duration: "45 mins",
          price: "Rs. 4,500"
        }
      ]
    },
    {
      id: "pichu-treatments",
      title: "Pichu",
      image: "/lovable-uploads/116293ab-2653-442c-ac03-8ffc2606d922.png",
      description: "Continuous application of cotton soaked in warm medicated oil for localized treatment",
      services: [
        {
          name: "PICHU (Head)",
          description: "Continuous application of cotton soaked in warm medicated oil on the HEAD",
          benefits: "Same as shiro basti - Stress, anxiety, insomnia, burnout, depression, psychosomatic diseases, chronic tension headache, migraines",
          duration: "30 mins",
          price: "Rs. 2,000"
        },
        {
          name: "GRIVA PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the NECK",
          benefits: "Same as griva basti - Tingling and pain in arms, vertigo due to cervical issues",
          duration: "30 mins",
          price: "Rs. 2,000"
        },
        {
          name: "URO PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the CHEST",
          benefits: "Same as uro basti - Heart symptoms, panic attacks with chest discomfort, grief, inflammation of rib cartilage",
          duration: "30 mins",
          price: "Rs. 2,000"
        },
        {
          name: "KATI PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the LOWER BACK",
          benefits: "Same as kati basti - Lumbosacral muscle stiffness, disc prolapse, osteoarthritis",
          duration: "30 mins",
          price: "Rs. 2,000"
        },
        {
          name: "JAANU PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the KNEE",
          benefits: "Same as jaanu basti - Knee pain due to osteoarthritis, stiffness and crepitus",
          duration: "30 mins",
          price: "Rs. 2,500"
        }
      ]
    },
    {
      id: "pinda-sweda",
      title: "Pinda Sweda - Special Kerala Massages",
      image: "/lovable-uploads/60c03619-2ce5-4107-b039-3fb4b168a451.png",
      description: "Traditional Kerala massage with herbal boluses for therapeutic heating and deep healing",
      services: [
        {
          name: "VALUKA PINDA SWEDA (Two therapists)",
          description: "Extremely dry potli treatment with sand",
          benefits: "Rheumatoid arthritis (pain with swelling), joint inflammation with heaviness",
          duration: "60 mins",
          price: "Rs. 3,500"
        },
        {
          name: "CHOORNA PINDA SWEDA (Two therapists)",
          description: "Dry and stimulating potli treatment with herbal powders",
          benefits: "Sciatica, spondylitis, arthritis, lower back pain, muscle stiffness",
          duration: "60 mins",
          price: "Rs. 4,500"
        },
        {
          name: "JAMBIR PINDA SWEDA (Two therapists)",
          description: "Dry and sweat inducing potli treatment with Lemon",
          benefits: "Cervical spondylitis, frozen shoulders, localized pain with kapha stagnation",
          duration: "60 mins",
          price: "Rs. 4,500"
        },
        {
          name: "PATRA PINDA SWEDA (Two therapists)",
          description: "Sweat inducing potli treatment with medicinal leaves",
          benefits: "Rheumatoid & osteo arthritis, lumber & cervical spondylitis, myalgia (muscle pain)",
          duration: "60 mins",
          price: "Rs. 4,500"
        },
        {
          name: "TILA POTLI MASSAGE (Two therapists)",
          description: "Warm and unctuous potli massage with sesame seeds immersed in ayurvedic oil",
          benefits: "Osteo-arthritis, sciatica, frozen shoulder, stiffness, spasms, chronic fatigue, muscle wasting or weakness, post-injury, post surgery, post-paralysis, dry skin or vata prakopa",
          duration: "60 mins",
          price: "Rs. 5,000"
        },
        {
          name: "SARSAPA POTLI MASSAGE (Two therapists)",
          description: "Heating and stimulating potli massage with mustard seeds used dry",
          benefits: "Stiffness, cellulite, obesity, muscle cramps, sluggish circulation, cold extremities",
          duration: "60 mins",
          price: "Rs. 4,000"
        }
      ]
    },
    {
      id: "lepa-treatments",
      title: "Lepa",
      image: "/lovable-uploads/38e100fd-a780-4bcf-932b-2541e69e5386.png",
      description: "Application of medicated paste made of herbs and oils for therapeutic healing",
      services: [
        {
          name: "UPANAHA LEPA",
          description: "Application of medicated paste made of herbs and oils over a painful or inflamed area, then covered with leaves or cloth and left for a specific period. (Not for open wounds and inflammation with redness)",
          benefits: "Osteoarthritis, rheumatoid arthritis, cervical/lumbar spondylosis, frozen shoulder, low back pain, sciatica, muscle spasms and contractures, tennis elbow, bursitis, tendonitis, local inflammation and pain, sprains, sports injuries",
          duration: "30 mins",
          price: "Rs. 2,000"
        }
      ]
    },
    {
      id: "sensory-treatments",
      title: "Sensory Organs Treatment",
      image: "/lovable-uploads/e06b70dc-2a09-476f-8823-a7134cbb65a3.png",
      description: "Specialized treatments for eyes, nose, and sensory organ health",
      services: [
        {
          name: "NASYA",
          description: "Nasal administration of medicated oils/ghee",
          benefits: "Sinusitis, rhinitis, migraine, eye disorders, memory loss, epilepsy",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "NETRA TARPANA",
          description: "Retention of medicated ghee on the eyes",
          benefits: "Dry eyes, eye strain, cataracts, glaucoma, macular degeneration",
          duration: "30 mins",
          price: "Rs. 2500"
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-nepveda-cream via-nepveda-cream/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-nepveda-green to-nepveda-green-dark bg-clip-text text-transparent">
                Ayurvedic Services
              </h2>
              <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
            </div>
            <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of traditional Ayurvedic treatments, 
              each carefully crafted to restore balance and promote natural healing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:gap-12">
            {serviceCategories.map((category) => (
              <Collapsible
                key={category.id}
                open={expandedCategory === category.id}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-2 hover:border-nepveda-green/20 bg-card">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer">
                      <div className="flex flex-col lg:flex-row gap-6 items-center">
                        <div className="relative overflow-hidden rounded-xl w-full lg:w-80 h-64 flex-shrink-0">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                          <CardTitle className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-nepveda-green transition-colors duration-300 text-nepveda-green-dark">
                            {category.title}
                          </CardTitle>
                          <p className="text-nepveda-green-dark/80 text-lg leading-relaxed mb-6">
                            {category.description}
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Button variant="outline" className="group-hover:bg-nepveda-green group-hover:text-white transition-all duration-300 border-nepveda-green text-nepveda-green">
                              Learn More
                              <ChevronDown className={cn(
                                "ml-2 h-4 w-4 transition-transform duration-300",
                                expandedCategory === category.id && "rotate-180"
                              )} />
                            </Button>
                            <Badge variant="secondary" className="text-sm bg-nepveda-green/10 text-nepveda-green">
                              {category.services.length} Services
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <CardContent className="pt-0">
                      <div className="border-t border-nepveda-green/20 pt-8">
                        <div className="grid gap-6 md:gap-8">
                          {category.services.map((service, index) => (
                            <div key={index} className="group/service">
                              <Card className="border-l-4 border-l-nepveda-green/40 hover:border-l-nepveda-green transition-all duration-300 hover:shadow-md bg-nepveda-cream/30">
                                <CardContent className="p-6">
                                  <div className="grid gap-4">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                      <h4 className="text-xl font-semibold text-nepveda-green group-hover/service:text-nepveda-green-dark transition-colors">
                                        {service.name}
                                      </h4>
                                      <div className="flex gap-3">
                                        {service.duration && (
                                          <Badge variant="outline" className="flex items-center gap-1 border-nepveda-green text-nepveda-green">
                                            <Clock className="h-3 w-3" />
                                            {service.duration}
                                          </Badge>
                                        )}
                                        {service.price && (
                                          <Badge className="flex items-center gap-1 bg-gradient-to-r from-nepveda-green to-nepveda-green-dark text-white">
                                            <DollarSign className="h-3 w-3" />
                                            {service.price}
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                    
                                    <p className="text-nepveda-green-dark leading-relaxed">
                                      {service.description}
                                    </p>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Heart className="h-4 w-4 text-nepveda-green" />
                                        <span className="font-medium text-sm text-nepveda-green-dark">Benefits & Conditions Treated:</span>
                                      </div>
                                      <p className="text-sm text-nepveda-green-dark/70 leading-relaxed pl-6">
                                        {service.benefits}
                                      </p>
                                    </div>
                                    
                                    <div className="pt-4">
                                      <Button onClick={scrollToContact} className="w-full sm:w-auto bg-gradient-to-r from-nepveda-green to-nepveda-green-dark hover:from-nepveda-green/90 hover:to-nepveda-green-dark/90 transition-all duration-300 text-white">
                                        Book This Treatment
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-nepveda-green/10">
            <h3 className="text-3xl md:text-4xl font-bold text-nepveda-green-dark mb-6">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-nepveda-green-dark/80 mb-8 max-w-2xl mx-auto">
              Our experienced practitioners will guide you in selecting the perfect combination 
              of treatments tailored to your unique constitution and health goals.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-nepveda-green to-nepveda-green-dark hover:from-nepveda-green/90 hover:to-nepveda-green-dark/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
