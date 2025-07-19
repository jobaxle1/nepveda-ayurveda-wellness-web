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
      image: "/lovable-uploads/a5fe69ad-56cc-4fcb-adbc-12ec516ac671.png",
      description: "Traditional full-body therapeutic treatments for complete wellness and rejuvenation",
      services: [
        {
          name: "ABHYANGA",
          description: "Full body ayurvedic massage including head and foot with a personalized therapeutic oil",
          benefits: "Body aches, stiffness, difficulty in movement, joint pain, numbness, insomnia, loss of sensation, lean structure, dry skin",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "PRASOOTIKA ABHYANGA",
          description: "Whole body massage - post partum",
          benefits: "Pacifies vata dosha, provides strength after childbirth",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "UDVERTANA",
          description: "Whole body scrubbing with herbal powders",
          benefits: "Kapha vikara - Toxin buildup, obesity, cellulite, rough skin, varicose veins, heaviness, lethargy, water retention, non-infectious skin disease with dead skin, dull skin, type 2 diabetes",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "PIZICHIL (N/A)",
          description: "Oil bath therapy also known as king's treatment",
          benefits: "Paralysis, hemiplegia, fibromyalgia, Parkinson's, ama (toxins) build up in tissues, pain, stiffness & muscular fatigue, muscle cramps, rigidity and discomfort in the limbs and spine, chronic",
          duration: "60 mins",
          price: "Rs. 6000"
        }
      ]
    },
    {
      id: "head-treatments",
      title: "Ayurvedic Head Treatments",
      image: "/lovable-uploads/aa6eaf9c-c819-4421-ab4e-a13cf29aeccb.png",
      description: "Specialized head and scalp treatments for mental clarity and hair health",
      services: [
        {
          name: "SHIRO ABHYANGA",
          description: "Head massage with a personalized ayurvedic oil",
          benefits: "Hair fall, dandruff, premature graying, dry skin, tinnitus, eye strain, lightheadedness or throbbing headache or pain in the eyes and temples, Insomnia, stress, anxiety, exhaustion",
          duration: "45 mins",
          price: "Rs. 2500 (2000 without shower)"
        },
        {
          name: "SHIRO LEPA",
          description: "Application of herbal paste to the scalp for gray hair fall and dandruff",
          benefits: "Migraine, headache, Insomnia, stress & anxiety, depression, epilepsy (Apasmara), vertigo. Pitta Disorders- Burning sensation in the head, High fever (Jwara) with delirium",
          duration: "45 mins",
          price: "Rs. 3000"
        }
      ]
    },
    {
      id: "face-treatments",
      title: "Ayurvedic Face Treatments",
      image: "/lovable-uploads/5a543ccd-dec4-4f5f-9fae-737dd41c4b98.png",
      description: "Rejuvenating facial treatments for natural beauty and skin health",
      services: [
        {
          name: "SAUNDARYA CHIKITSA",
          description: "Full facial with ayurvedic herbs and oils that suit individual dosha",
          benefits: "For pitta skin - Reduces redness, rashes, inflammatory acne, sensitivity, heat, irritation, pigmentation. For Vata Skin- Combats dryness, flakiness, fine lines; Improves circulation, tone, and skin elasticity; Nourishes deeply to restore glow and softness. For Kapha Skin -Clears clogged pores, blackheads, and excess oil; Reduces puffiness and",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "MARMA ABHYANGA",
          description: "Facial massage on marma points with ayurvedic oil",
          benefits: "Emotional blockages or fatigue, eye strain, blurred vision, dry eyes, sinus congestion, nasal blockage, allergic rhinitis, ear ringing, migraine, jaw tension and clenching, brow tension, neck and scalp tightness, facial fatigue, wrinkles, fine lines, puffiness",
          duration: "20 mins",
          price: "Rs. 1500"
        },
        {
          name: "KANSA ABHYANGA",
          description: "Facial massage with a Kansa wand with ayurvedic oil",
          benefits: "Puffiness around eyes and cheeks, accumulation of toxin (ama), sagging facial muscles, fine lines, wrinkles, fatigue, stress, anxiety, jaw tension, brow stiffness, eye strain, facial fatigue (Kansa is alkaline and helps neutralize skin acidity, it may cause a temporary greying effect implying acidic skin)",
          duration: "20 mins",
          price: "Rs. 1500"
        }
      ]
    },
    {
      id: "foot-treatments",
      title: "Ayurvedic Foot Treatments",
      image: "/lovable-uploads/64435b4a-6bce-49ab-802c-86056b3df6ae.png",
      description: "Therapeutic foot treatments for grounding and overall wellness",
      services: [
        {
          name: "PADA ABHYANGA",
          description: "Ayurvedic massage using warm, medicated oils applied with gentle to firm strokes",
          benefits: "Dryness, cracks & roughness of feet, restless leg syndrome, numbness & tingling in limbs, diabetic neuropathy, sciatica & lower back pain, varicose veins (early stages), Insomnia, fatigue, body pain, headache, migraine, stress, anxiety, eye strain, dry eye",
          duration: "45 mins",
          price: "Rs. 2000"
        },
        {
          name: "PADA LEPA",
          description: "Anti-fungal paste applied on the feet",
          benefits: "Fungal infection- Neem, turmeric, daruharidra kill fungal pathogens causing infections like athlete's foot, ringworm, or candida. Itching and Burning -Camphor and Licorice soothe itching, burning, irritation seen in fungal infections. Excess Moisture - Triphala and Neem help absorb excess moisture",
          duration: "45 mins",
          price: "Rs. 3000"
        }
      ]
    },
    {
      id: "steam-bath",
      title: "Steam Bath",
      image: "/lovable-uploads/97bbbccd-69d1-48c2-87c3-3be0e2030ed5.png",
      description: "Therapeutic steam treatments for detoxification and relaxation",
      services: [
        {
          name: "SWEDANA",
          description: "Therapeutic steam bath in an ayurvedic steam chamber (time depending on your dosha)",
          benefits: "Post-Abhyanga - Helps the medicated oils penetrate deeper and loosens toxins for elimination. Post-Udvartana -helps detox, fat breakdown, flush out loosened toxins and clear pores. Post-Pizhichil- Amplifies relaxation and pain relief, supports circulation and absorption of herbs. Post-Potli therapies -Enhances sweating and relieves musculoskeletal pain",
          duration: "5 - 20 mins",
          price: "Rs. 600"
        }
      ]
    },
    {
      id: "basti-treatments",
      title: "Basti",
      image: "/lovable-uploads/848d1f84-769f-4206-b8d6-e2f484076e16.png",
      description: "Localized oil pooling treatments for targeted healing",
      services: [
        {
          name: "SHIRO BASTI",
          description: "Continuous pooling of warm oil on the HEAD",
          benefits: "Stress, anxiety, insomnia, burnout, depression, emotional fatigue, migraine, sinusitis, memory issues, psychosomatic diseases, chronic tension headache, migraines, facial palsy, cervical",
          duration: "45 mins",
          price: "Rs. 3500"
        },
        {
          name: "GRIVA BASTI",
          description: "Continuous pooling of warm oil on the NECK",
          benefits: "Neck stiffness and strain, cervical spondylitis, bone degeneration, radiating pain- tingling-or numbness in arms, vertigo due to cervical issues",
          duration: "45 mins",
          price: "Rs. 3000"
        },
        {
          name: "URO BASTI",
          description: "Continuous pooling of warm oil on the CHEST",
          benefits: "Palpitation, chest pain, bronchial asthma, chronic cough, dyspnea, thoracic spondylosis, chest stiffness, anxiety-related heart symptoms, panic attacks with chest discomfort, grief",
          duration: "45 mins",
          price: "Rs. 3000"
        },
        {
          name: "JAANU BASTI",
          description: "Continuous pooling of warm oil on the KNEES",
          benefits: "Knee pain due to osteoarthritis, stiffness and crepitus, ligament tear, bone degeneration",
          duration: "45 mins",
          price: "Rs. 3000"
        },
        {
          name: "KATI BASTI",
          description: "Continuous pooling of warm oil on the LOWER BACK",
          benefits: "Lumbar spondylitis, muscle stiffness, disc prolapse, osteoarthritis, ligament tear, bone degeneration",
          duration: "45 mins",
          price: "Rs. 3000"
        }
      ]
    },
    {
      id: "pichu-treatments",
      title: "Pichu",
      image: "/lovable-uploads/f63b4ca7-eaef-4153-864f-eaeac080cf62.png",
      description: "Continuous application of medicated oil with cotton for localized treatment",
      services: [
        {
          name: "SHIRO PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the HEAD",
          benefits: "Stress, anxiety, insomnia, memory issues, chronic headaches, migraines",
          duration: "30 mins",
          price: "Rs. 2500"
        },
        {
          name: "GRIVA PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the NECK",
          benefits: "Neck stiffness, cervical issues, tension headaches",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "URO PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the CHEST",
          benefits: "Chest congestion, respiratory issues, anxiety-related chest discomfort",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "JAANU PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the KNEE",
          benefits: "Knee pain, stiffness, osteoarthritis symptoms",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "KATI PICHU",
          description: "Continuous application of cotton soaked in warm medicated oil on the LOWER BACK",
          benefits: "Lower back pain, muscle stiffness, sciatica",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "PICHU IN A PAIN AREA",
          description: "Continuous application of cotton soaked in warm medicated oil on the PAIN AREA such as ankle, sole, chest, elbow etc.",
          benefits: "Localized pain relief, inflammation reduction, improved circulation",
          duration: "30 mins",
          price: "Rs. 2000"
        }
      ]
    },
    {
      id: "pinda-sweda",
      title: "Pinda Sweda - Special Kerala Massage",
      image: "/lovable-uploads/ea4923ce-8c54-4f2a-af97-0a40051324ab.png",
      description: "Traditional Kerala massage with herbal boluses for therapeutic heating",
      services: [
        {
          name: "VALUKA PINDA SWEDA",
          description: "EXTREMELY DRY potli treatment with sand",
          benefits: "Rheumatoid arthritis (Pain with swelling), Joint inflammation with heaviness",
          duration: "60 mins",
          price: "Rs. 3500"
        },
        {
          name: "CHOORNA PINDA SWEDA",
          description: "DRY potli (bolus) treatment with powders of medicinal herbs",
          benefits: "Sciatica, spondylitis, arthritis, LBA, muscle stiffness",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "JAMBIR PINDA SWEDA",
          description: "DRY AND SWEAR INDUCING potli treatment with Lemon",
          benefits: "Cervical spondylitis, frozen shoulders, localized pain with kapha stagnation",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "PATRA PINDA SWEDA",
          description: "SWEAT INDUCING potli (bolus) treatment with different medicinal leaves",
          benefits: "Rheumatoid & osteo arthritis, Lumber & cervical spondylitis, myalgia (muscle pain)",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "TILA POTLI MASSAGE",
          description: "WARM AND UNCTUOUS potli massage with sesame seeds oil immersed in ayurvedic oil",
          benefits: "Osteo-arthritis, sciatica, frozen shoulder, stiffness, spasms, chronic fatigue, muscle wasting or weakness, post-injury, post surgery, post-paralysis, dry skin or vata prakopa",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "SARSAPA POTLI MASSAGE",
          description: "HEATING AND STIMULATING potli massage with sesame or mustard seeds used dry",
          benefits: "Stiffness, cellulite, obesity, muscle cramps, sluggish circulation, cold extremities",
          duration: "60 mins",
          price: "Rs. 4000"
        },
        {
          name: "SHASHTIKASHALI PINDA SWEDA",
          description: "EXTREMELY UNCTUOUS AND SWEAT INDUCING potli treatment with special Kerala rice cooked in milk and herbal decoction",
          benefits: "Neuromuscular and degenerative conditions: Paralysis, hemiplegia, multiple sclerosis, cerebral palsy, poliomyelitis, peripheral neuropathy",
          duration: "60 mins",
          price: "Rs. 4000"
        }
      ]
    },
    {
      id: "lepa-treatments",
      title: "Lepa",
      image: "/lovable-uploads/bc797e0d-a86c-417e-9ff7-15e4f2f88d9b.png",
      description: "Herbal paste applications for therapeutic healing",
      services: [
        {
          name: "UPANAHA LEPA",
          description: "Application of medicated paste made of herbs, oils over a painful or inflamed area, then covered with leaves or cloth and left for a specific period. (Not for open wounds and inflammation with redness)",
          benefits: "Osteoarthritis, rheumatoid arthritis, cervical/lumbar spondylosis, frozen shoulder, Low back pain Sciatica, muscle spasms and contractures. Tennis elbow, bursitis, tendonitis, local inflammation and pain, sprains, sports injuries",
          duration: "30 mins",
          price: "Rs. 2500"
        }
      ]
    },
    {
      id: "sensory-treatments",
      title: "Sensory Organs Treatment",
      image: "/lovable-uploads/96770cb7-bbab-42c6-89cf-61b6ed082e2e.png",
      description: "Specialized treatments for eyes, nose, and sensory organ health",
      services: [
        {
          name: "NASYA",
          description: "Nasal administration of medicated oils for disorders of head, neck, brain, nose, throat, and sensory organs, because the nose is considered the gateway to the brain",
          benefits: "ENT-Chronic sinusitis, clears mucus from sinuses, allergic rhinitis, nasal congestion and sneezing. Nose: Nasal polyps, inflammation and mucosal overgrowth, frequent cold/cough, strengthens nasal immunity, blocked nose or deviated septum",
          duration: "30 mins",
          price: "Rs. 2000"
        },
        {
          name: "NETRA TARPANA",
          description: "Retention of medicated ghee on the eyes for a specific period",
          benefits: "Dryness: Dry eye syndrome, restores tear film and moisture, treats digital eye strain, post-surgery dryness. Refractive errors: Myopia, hyperopia, astigmatism",
          duration: "30 mins",
          price: "Rs. 2000"
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ayurvedic Services
            </h1>
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of traditional Ayurvedic treatments, 
            each carefully crafted to restore balance and promote natural healing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {serviceCategories.map((category) => (
              <Collapsible
                key={category.id}
                open={expandedCategory === category.id}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20">
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
                          <CardTitle className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                            {category.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            {category.description}
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              Learn More
                              <ChevronDown className={cn(
                                "ml-2 h-4 w-4 transition-transform duration-300",
                                expandedCategory === category.id && "rotate-180"
                              )} />
                            </Button>
                            <Badge variant="secondary" className="text-sm">
                              {category.services.length} Services
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <CardContent className="pt-0">
                      <div className="border-t border-border/50 pt-8">
                        <div className="grid gap-6 md:gap-8">
                          {category.services.map((service, index) => (
                            <div key={index} className="group/service">
                              <Card className="border-l-4 border-l-primary/40 hover:border-l-primary transition-all duration-300 hover:shadow-md">
                                <CardContent className="p-6">
                                  <div className="grid gap-4">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                      <h4 className="text-xl font-semibold text-primary group-hover/service:text-primary/80 transition-colors">
                                        {service.name}
                                      </h4>
                                      <div className="flex gap-3">
                                        {service.duration && (
                                          <Badge variant="outline" className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {service.duration}
                                          </Badge>
                                        )}
                                        {service.price && (
                                          <Badge className="flex items-center gap-1 bg-gradient-to-r from-primary to-secondary">
                                            <DollarSign className="h-3 w-3" />
                                            {service.price}
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                    
                                    <p className="text-foreground leading-relaxed">
                                      {service.description}
                                    </p>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Heart className="h-4 w-4 text-destructive" />
                                        <span className="font-medium text-sm">Benefits & Conditions Treated:</span>
                                      </div>
                                      <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                                        {service.benefits}
                                      </p>
                                    </div>
                                    
                                    <div className="pt-4">
                                      <Button onClick={scrollToContact} className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced practitioners will guide you in selecting the perfect combination 
            of treatments tailored to your unique constitution and health goals.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;