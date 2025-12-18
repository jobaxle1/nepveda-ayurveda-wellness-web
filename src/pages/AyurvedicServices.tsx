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

const AyurvedicServices = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: "consultation",
      title: "Ayurvedic Consultation",
      image: "/src/assets/ayurvedic-consultation.jpg",
      description: "Personalized consultations to understand your unique constitution and health needs",
      services: [
        {
          name: "Private Consultation with an Ayurvedic Doctor",
          description: "Dr. Hari Sharan Aryal - MD, Internal Medicine (Ayurveda), Anorectal expert. Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines to offer safe, personalized treatment for chronic and complex conditions.",
          duration: "60 mins",
          price: "Rs. 4,000",
          benefits: [
            "Expert medical insight from Nepal's best Ayurvedic doctor",
            "Classical Nepali Ayurvedic wisdom",
            "Time-tested herbal medicines",
            "Safe, personalized treatment for chronic and complex conditions"
          ]
        },
        {
          name: "Traditional Vaidya Consultation",
          description: "Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines to offer safe, personalized treatment for chronic and complex conditions.",
          duration: "30 mins",
          price: "Rs. 1,500",
          benefits: [
            "Classical Nepali Ayurvedic wisdom",
            "Generational knowledge application",
            "Time-tested herbal medicines and therapies",
            "Root cause disease treatment"
          ]
        },
        {
          name: "Consultation with a Holistic Ayurvedic Coach",
          description: "Ms. Shailja Pradhan - Holistic Ayurvedic Coach & Ayurvedic Disease Management Practitioner (Kerala Ayurveda Academy). Discover balance and vitality through personalized guidance tailored to lifestyle and emotional well-being.",
          duration: "3 sittings of 60 mins each",
          price: "Rs. 5,000",
          benefits: [
            "Personalized lifestyle guidance",
            "Emotional well-being coaching",
            "Natural health empowerment",
            "Ayurvedic disease management"
          ]
        }
      ]
    },
    {
      id: "body-treatments",
      title: "Ayurvedic Body Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Full body therapeutic treatments using traditional Ayurvedic techniques to restore balance and promote healing.",
      services: [
        {
          name: "Abhyanga",
          description: "Full body MASSAGE - including head and foot - with ayurvedic oil based on the dosha imbalance. Conditions: Body ache, stiffness, difficulty in movement, joint pain, dry skin, Vata aggravation",
          duration: "60 mins / 90 mins",
          price: "Rs. 3,500 / Rs. 4,500",
          benefits: ["Relieves body ache and stiffness", "Improves joint mobility", "Reduces insomnia", "Nourishes skin and hair"]
        },
        {
          name: "Prasootika Abhyanga",
          description: "Full body massage – post partum – with ayurvedic oil. Conditions: Vata dosha, loss of strength after childbirth",
          duration: "60 mins",
          price: "Rs. 4500",
          benefits: ["Post-partum recovery", "Restores strength after childbirth", "Balances Vata dosha"]
        },
        {
          name: "Udvertana",
          description: "Full body SCRUB WITH HERBAL POWDERS. Conditions: Kapha vikara - Toxin buildup, obesity, cellulite, rough skin, type 2 diabetes",
          duration: "60 mins",
          price: "Rs. 3,500",
          benefits: ["Reduces obesity and cellulite", "Improves skin texture", "Balances Kapha dosha", "Helps with metabolic disorders"]
        },
        {
          name: "Shuksha Abhyanga",
          description: "Full body dry massage including head and foot. Conditions: Kapha, ama (toxin) obesity, metabolic sluggishness, skin issues",
          duration: "30 mins",
          price: "Rs. 1500 (with other)",
          benefits: ["Stimulates metabolism", "Reduces toxin buildup", "Helps with obesity and metabolic issues", "Improves skin health"]
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
          description: "Head and shoulder massage with ayurvedic oil based on the dosha imbalance. Conditions: Hair fall, dandruff, premature greying, dryness, tinnitus, eye strain, headaches, insomnia, stress, anxiety",
          duration: "30 mins / 60 mins",
          price: "Rs. 1,500 / Rs. 2,500",
          benefits: ["Prevents hair fall and premature graying", "Reduces stress and anxiety", "Improves memory and visual power", "Treats neurological conditions"]
        },
        {
          name: "Shiro Lepa",
          description: "Application of herbal paste to the scalp for grey hair, hair fall, and dandruff",
          duration: "45 mins",
          price: "Rs. 2500",
          benefits: ["Vata disorders (headache, tension, insomnia, stress, anxiety, epilepsy, depression, vertigo)", "Pitta disorders (burning sensations, boils, inflammation, hair fall)"]
        },
        {
          name: "Shirodhara (Two Therapists)",
          description: "Continuous pouring of AYURVEDIC OIL on the forehead especially for Vata conditions",
          duration: "60 mins",
          price: "Rs. 5,000",
          benefits: ["Stress, insomnia, headache", "Menopause syndrome, paralysis, facial palsy", "Epilepsy, Parkinson's"]
        },
        {
          name: "Takradhara (Two Therapists)",
          description: "Continuous pouring of BUTTERMILK infused with cooling ayurvedic herbs on the head, especially for Pitta and Vata combined conditions",
          duration: "60 mins",
          price: "Rs. 4,000",
          benefits: ["Anxiety, insomnia, irritability", "Headache, psoriasis, skin rash", "Heat, stress-related disorders"]
        },
        {
          name: "Ksheeradhara (Two Therapists)",
          description: "Continuous pouring of MILK infused with cooling and nourishing herbs on the head. Pitta disorders: Burning sensation in the head/body, hot flushes, inflammatory conditions, excessive body heat",
          duration: "60 mins",
          price: "Rs. 4,000",
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
          description: "Facial with ayurvedic herbs and oils suited to doshas and skin conditions. Conditions: Pitta (redness, heat, sensitivity, pigmentation); Vata (dryness, flakiness, fine lines)",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Customized for individual skin type", "Treats acne and pigmentation", "Reduces signs of aging", "Balances skin doshas"]
        },
        {
          name: "Marma Abhyanga",
          description: "Facial massage on marma points using dosha-specific ayurvedic oil. Conditions: Eye strain, sinus congestion, wrinkles, facial tightness, dull complexion",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Relieves emotional blockages", "Reduces facial tension", "Improves skin circulation", "Anti-aging benefits"]
        },
        {
          name: "Kansa Abhyanga",
          description: "Facial massage with a KANSA WAND using dosha-specific ayurvedic oil. Conditions: Puffiness around eyes and cheeks, accumulation of wrinkles, stress, anxiety, tension, facial fatigue",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Neutralizes skin acidity", "Reduces stress and anxiety", "Improves lymphatic drainage", "Natural anti-aging effects"]
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
          description: "Foot massage/reflexology using ayurvedic oil. Conditions: Dryness, cracked heels, restlessness, neuropathy, insomnia, migraine, stress, anxiety",
          duration: "60 mins",
          price: "Rs. 3,500",
          benefits: ["Relieves restless leg syndrome", "Treats diabetic neuropathy", "Reduces stress and insomnia", "Improves circulation"]
        },
        {
          name: "Pada Lepa Abhyanga",
          description: "Medicated paste applied to feet with massage. Conditions: Cracked heels, swelling, fungal infections",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Comprehensive foot treatment", "Improves circulation", "Treats various foot conditions", "Therapeutic benefits"]
        },
        {
          name: "Pada Lepa",
          description: "Anti-fungal paste applied on the feet. Conditions: Fungal infection, itching and burning, excess moisture, cracks and lesions",
          duration: "45 mins",
          price: "Rs. 2,500",
          benefits: ["Treats fungal infections", "Heals cracks and lesions", "Antifungal properties"]
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
          description: "Therapeutic steam bath depending on dosha, detoxifies and clears pores. Conditions: Obesity, joint stiffness, muscle pain, post-panchakarma detox",
          duration: "5–20 mins",
          price: "Rs. 500",
          benefits: ["Detoxification", "Fat breakdown", "Pain relief", "Improved circulation"]
        }
      ]
    },
    {
      id: "basti",
      title: "Basti",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Continuous pooling of warm dosha-specific ayurvedic oil on targeted body areas for deep therapeutic healing.",
      services: [
        {
          name: "Shiro Basti (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the HEAD",
          duration: "45 mins",
          price: "Rs. 4,500",
          benefits: ["Stress, anxiety, insomnia, burnout, depression", "Psychosomatic diseases, chronic tension headache, migraines", "Facial palsy, cervical discopathies, strain, weak hair root"]
        },
        {
          name: "Griva Basti (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the NECK",
          duration: "45 mins",
          price: "Rs. 3,500",
          benefits: ["Tingling and pain in arms", "Vertigo due to cervical issues"]
        },
        {
          name: "Uro Basti (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the CHEST",
          duration: "45 mins",
          price: "Rs. 3,500",
          benefits: ["Related heart symptoms, panic attacks with chest discomfort", "Grief, inflammation of rib cartilage, nerve pain between ribs"]
        },
        {
          name: "Kati Basti (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the LOWER BACK",
          duration: "45 mins",
          price: "Rs. 3,500",
          benefits: ["Lumbosacral muscle stiffness, disc prolapse", "Osteoarthritis, ligament tear, bone degeneration"]
        },
        {
          name: "Janu Basti (Two therapists)",
          description: "Continuous pooling of warm dosha-specific ayurvedic oil on the KNEES",
          duration: "45 mins",
          price: "Rs. 4,500",
          benefits: ["Knee pain due to osteoarthritis", "Stiffness and crepitus"]
        }
      ]
    },
    {
      id: "pichu",
      title: "Pichu",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Continuous application of cotton soaked in warm medicated oil for localized treatment.",
      services: [
        {
          name: "Pichu (Head)",
          description: "Continuous application of cotton soaked in warm medicated oil on the HEAD",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Same as shiro basti", "Stress, anxiety, insomnia, burnout, depression", "Chronic tension headache, migraines"]
        },
        {
          name: "Griva Pichu",
          description: "Continuous application of cotton soaked in warm medicated oil on the NECK",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Same as griva basti", "Tingling and pain in arms, vertigo due to cervical issues"]
        },
        {
          name: "Uro Pichu",
          description: "Continuous application of cotton soaked in warm medicated oil on the CHEST",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Same as uro basti", "Heart symptoms, panic attacks with chest discomfort"]
        },
        {
          name: "Kati Pichu",
          description: "Continuous application of cotton soaked in warm medicated oil on the LOWER BACK",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Same as kati basti", "Lumbosacral muscle stiffness, disc prolapse"]
        },
        {
          name: "Jaanu Pichu",
          description: "Continuous application of cotton soaked in warm medicated oil on the KNEE",
          duration: "30 mins",
          price: "Rs. 2,500",
          benefits: ["Same as jaanu basti", "Knee pain due to osteoarthritis, stiffness and crepitus"]
        }
      ]
    },
    {
      id: "pinda-sweda",
      title: "Pinda Sweda – Special Kerala Massages",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Traditional Kerala massage with herbal boluses for therapeutic heating and deep healing.",
      services: [
        {
          name: "Valuka Pinda Sweda (Two therapists)",
          description: "Extremely dry potli treatment with sand",
          duration: "60 mins",
          price: "Rs. 3,500",
          benefits: ["Rheumatoid arthritis (pain with swelling)", "Joint inflammation with heaviness"]
        },
        {
          name: "Choorna Pinda Sweda (Two therapists)",
          description: "Dry and stimulating potli treatment with herbal powders",
          duration: "60 mins",
          price: "Rs. 4,500",
          benefits: ["Sciatica, spondylitis, arthritis", "Lower back pain, muscle stiffness"]
        },
        {
          name: "Jambir Pinda Sweda (Two therapists)",
          description: "Dry and sweat inducing potli treatment with Lemon",
          duration: "60 mins",
          price: "Rs. 4,500",
          benefits: ["Cervical spondylitis, frozen shoulders", "Localized pain with kapha stagnation"]
        },
        {
          name: "Patra Pinda Sweda (Two therapists)",
          description: "Sweat inducing potli treatment with medicinal leaves",
          duration: "60 mins",
          price: "Rs. 4,500",
          benefits: ["Rheumatoid & osteo arthritis", "Lumber & cervical spondylitis, myalgia (muscle pain)"]
        },
        {
          name: "Tila Potli Massage (Two therapists)",
          description: "Warm and unctuous potli massage with sesame seeds immersed in ayurvedic oil",
          duration: "60 mins",
          price: "Rs. 5,000",
          benefits: ["Osteo-arthritis, sciatica, frozen shoulder, stiffness, spasms", "Chronic fatigue, muscle wasting or weakness", "Post-injury, post surgery, post-paralysis, dry skin or vata prakopa"]
        },
        {
          name: "Sarsapa Potli Massage (Two therapists)",
          description: "Heating and stimulating potli massage with mustard seeds used dry",
          duration: "60 mins",
          price: "Rs. 4,000",
          benefits: ["Stiffness, cellulite, obesity", "Muscle cramps, sluggish circulation, cold extremities"]
        }
      ]
    },
    {
      id: "lepa",
      title: "Lepa",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Application of medicated paste made of herbs and oils for therapeutic healing.",
      services: [
        {
          name: "Upanaha Lepa",
          description: "Application of medicated paste made of herbs and oils over a painful or inflamed area, then covered with leaves or cloth and left for a specific period. (Not for open wounds and inflammation with redness)",
          duration: "30 mins",
          price: "Rs. 2,000",
          benefits: ["Osteoarthritis, rheumatoid arthritis, cervical/lumbar spondylosis", "Frozen shoulder, low back pain, sciatica, muscle spasms", "Tennis elbow, bursitis, tendonitis, sprains, sports injuries"]
        }
      ]
    },
    {
      id: "sensory-treatment",
      title: "Sensory Organs Treatments",
      image: "/src/assets/ayurvedic-massage.jpg",
      description: "Specialized treatments for eyes, nose, and other sensory organs.",
      services: [
        {
          name: "Nasya",
          description: "Nasal administration of medicated oils/ghee. Conditions: Sinusitis, rhinitis, migraine, eye disorders, memory loss, epilepsy",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Treats chronic sinusitis", "Improves vision", "Reduces headaches and migraines", "Strengthens sensory organs"]
        },
        {
          name: "Netra Tarpana",
          description: "Retention of medicated ghee on the eyes. Conditions: Dry eyes, eye strain, cataracts, glaucoma, macular degeneration",
          duration: "30 mins",
          price: "Rs. 2500",
          benefits: ["Treats dry eye syndrome", "Improves ocular strength", "Reduces digital eye strain", "Prevents macular degeneration"]
        }
      ]
    },
    {
      id: "yoga-breathwork",
      title: "Yoga & Breathwork",
      image: "/src/assets/yoga-breathwork.jpg",
      description: "One-on-one yoga and pranayama practice based on specific illness or for general wellness.",
      services: [
        {
          name: "Vikruti Specific Yoga & Pranayam",
          description: "Correct yoga and pranayama can heal you while wrong ones can aggravate the doshas. Vata-Pitta- Calming poses. Kapha- Energizing poses and breath.",
          duration: "60 mins",
          price: "Rs. 2000",
          benefits: ["Personalized for your dosha", "Targeted healing approach", "Prevents dosha aggravation"]
        }
      ]
    },
    {
      id: "meditation",
      title: "Meditation",
      image: "/src/assets/yoga-breathwork.jpg",
      description: "Guided relaxation and meditative practice to calm the mind and restore balance.",
      services: [
        {
          name: "Meditation",
          description: "Guided meditation practice to calm the mind, reduce stress, and promote inner peace. Helps with anxiety, mental clarity, emotional balance, and spiritual well-being.",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Reduces stress and anxiety", "Improves mental clarity", "Promotes emotional balance", "Enhances spiritual well-being"]
        },
        {
          name: "Yoga Nidra",
          description: "Calms the nervous system, reduces stress hormones, increases mood-boosting hormones, helps resolve mental-emotional blocks, promotes healing and regeneration at a cellular level. Anxiety, insomnia, hypertension, chronic pain, diabetes, hormonal imbalance, addiction.",
          duration: "30 mins",
          price: "Rs. 1500 (with other treatment)",
          benefits: ["Reduces stress hormones", "Improves mood", "Helps with chronic conditions", "Cellular regeneration"]
        }
      ]
    },
    {
      id: "packages",
      title: "Packages",
      image: "/src/assets/ayurvedic-consultation.jpg",
      description: "Comprehensive treatment packages designed for optimal healing and wellness.",
      services: [
        {
          name: "Therapy Package",
          description: "3-14 day treatment designed to target the root cause as per consultation/doctor advice. Ayurveda emphasizes long-term prevention so we just not to relieve symptoms but also to prevent recurrence. Example: Shirodhara (mild -7 sessions, moderate -14 sessions, severe migraine -21 sessions). Initial sessions calm the nervous system and reduce Vata-Pitta imbalance. Continued sessions deepen the effect on stress hormones, sleep regulation, and gain thresholds. Optimal sessions end which symptoms and offer long-term protection against Vata-Pitta imbalance.",
          duration: "30–60 mins",
          price: "Price depending on treatment",
          benefits: ["Targets root causes", "Long-term prevention", "Systematic healing approach", "Sustained results"]
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
    <div className="min-h-screen bg-gradient-to-br from-nepveda-cream via-nepveda-cream/50 to-white">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Navigation */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-nepveda-green hover:text-nepveda-green-dark transition-colors mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-nepveda-green to-nepveda-green-dark bg-clip-text text-transparent">
                  Consultation & Wellness
                </h1>
                <Sparkles className="h-8 w-8 text-nepveda-green animate-pulse" />
              </div>
              <p className="text-xl text-nepveda-green-dark/80 max-w-3xl mx-auto leading-relaxed">
                Begin your journey to wellness with personalized consultations and holistic practices 
                designed to restore balance and vitality.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:gap-12 max-w-5xl mx-auto">
              {serviceCategories.map((category) => (
                <Collapsible
                  key={category.id}
                  open={expandedCategory === category.id}
                  onOpenChange={() => toggleCategory(category.id)}
                >
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-nepveda-green/20 hover:border-nepveda-green/40 transition-all duration-500 hover:shadow-2xl hover:shadow-nepveda-green/10">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="p-0">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Category Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                  {category.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base max-w-lg">
                                  {category.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                                >
                                  Learn More
                                </Button>
                                <ChevronDown 
                                  className={cn(
                                    "h-6 w-6 transition-transform duration-300",
                                    expandedCategory === category.id && "rotate-180"
                                  )} 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="p-8 bg-gradient-to-br from-nepveda-cream/30 to-white">
                        <div className="grid gap-6">
                          {category.services.map((service, serviceIndex) => (
                            <div 
                              key={serviceIndex}
                              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-nepveda-green/10 hover:border-nepveda-green/30 transition-all duration-300 hover:shadow-lg"
                            >
                              <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-3">
                                    <Heart className="h-5 w-5 text-nepveda-green flex-shrink-0" />
                                    <h4 className="text-xl font-semibold text-nepveda-green-dark">
                                      {service.name}
                                    </h4>
                                  </div>
                                  
                                  <p className="text-gray-700 mb-4 leading-relaxed">
                                    {service.description}
                                  </p>

                                  {service.benefits && (
                                    <div className="mb-4">
                                      <h5 className="font-semibold text-nepveda-green-dark mb-2">Benefits:</h5>
                                      <div className="grid gap-2">
                                        {service.benefits.map((benefit, index) => (
                                          <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-nepveda-green rounded-full flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{benefit}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex flex-wrap gap-3">
                                    {service.duration && (
                                      <Badge variant="secondary" className="bg-nepveda-green/10 text-nepveda-green-dark border-nepveda-green/20">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {service.duration}
                                      </Badge>
                                    )}
                                    {service.price && (
                                      <Badge variant="secondary" className="bg-nepveda-gold/10 text-nepveda-gold border-nepveda-gold/20">
                                        <IndianRupee className="h-3 w-3 mr-1" />
                                        {service.price}
                                      </Badge>
                                    )}
                                  </div>
                                </div>

                                <Button 
                                  onClick={scrollToContact}
                                  className="bg-nepveda-green hover:bg-nepveda-green-dark text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                                >
                                  Book This Service
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-nepveda-green to-nepveda-green-dark rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Begin Your Wellness Journey?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Schedule your consultation today and take the first step towards balanced health and vitality.
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-nepveda-green hover:bg-nepveda-cream hover:text-nepveda-green-dark transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedicServices;