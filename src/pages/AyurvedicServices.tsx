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
      description: "Discover balance and vitality through personalized guidance tailored to lifestyle and emotional well-being with a passionate health coach who empowers individuals to claim their health naturally using the ancient science of Ayurveda.",
      services: [
        {
          name: "Consultation with a Holistic Ayurvedic Coach",
          description: "Holistic Ayurvedic Coach & Ayurvedic Diseases Management Practitioner (Kerala Ayurveda Academy)",
          duration: "120 mins",
          price: "Rs. 3000",
          benefits: [
            "Discover balance and vitality through personalized guidance",
            "Lifestyle and emotional well-being coaching",
            "Natural health empowerment using ancient Ayurvedic science"
          ]
        },
        {
          name: "Private Consultation with a Traditional Vaidya",
          description: "Vaidya Meethu Bajracharya - Traditional Vaidya. Experience the wisdom of classical Nepali Ayurveda with an experienced Vaidya possessing generational knowledge, who uses time-tested herbal medicines and therapies to address the root cause of your disease and restore health.",
          duration: "30 mins",
          price: "Rs. 1500",
          benefits: [
            "Classical Nepali Ayurvedic wisdom",
            "Generational knowledge application",
            "Time-tested herbal medicines and therapies",
            "Root cause disease treatment"
          ]
        },
        {
          name: "Private Consultation with an Ayurvedic Doctor",
          description: "Dr. Hari Sharan Aryal - MD, Internal Medicine (Ayurveda), Ancestral expert. Get expert medical insight from one of Nepal's best Ayurvedic doctors, who blends ancient diagnostics with modern tools to offer safe, personalized treatment for chronic and complex conditions.",
          duration: "30 mins",
          price: "Rs. 1500",
          benefits: [
            "Expert medical insight from Nepal's best Ayurvedic doctor",
            "Blend of ancient diagnostics with modern tools",
            "Safe, personalized treatment for chronic conditions"
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
          description: "Full body massage – including head and foot – with ayurvedic oil based on the dosha imbalance. Conditions: Body ache, stiffness, difficulty in movement, joint pain, numbness, insomnia, loss of sensation, lean structure, dry skin, Vata aggravation",
          duration: "60 mins",
          price: "Rs. 3500",
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
          name: "Udvartana",
          description: "Full body scrubbing with herbal powders. Conditions: Kapha vitiation, obesity, debility, cellulite, rough skin, varicose veins, heaviness, lethargy, water retention, non-infectious skin diseases with dead skin, diabetes type 2",
          duration: "60 mins",
          price: "Rs. 3500",
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
          description: "Head massage with ayurvedic oil based on the dosha imbalance. Conditions: Hair fall, dandruff, premature greying, dryness, tinnitus, eye strain, headaches, insomnia, stress, anxiety, epilepsy, Parkinson's",
          duration: "30 mins",
          price: "Rs. 1500",
          benefits: ["Prevents hair fall and premature graying", "Reduces stress and anxiety", "Improves memory and visual power", "Treats neurological conditions"]
        },
        {
          name: "Shiro Abhyanga",
          description: "Head massage with ayurvedic oil based on the dosha imbalance. Conditions: Hair fall, dandruff, premature greying, dryness, tinnitus, eye strain, headaches, insomnia, stress, anxiety, epilepsy, Parkinson's",
          duration: "60 mins",
          price: "Rs. 3000",
          benefits: ["Prevents hair fall and premature graying", "Reduces stress and anxiety", "Improves memory and visual power", "Treats neurological conditions"]
        },
        {
          name: "Shiro Lepa",
          description: "Application of herbal paste to the scalp for grey hair, hair fall, and dandruff. Conditions: Vata disorders (headache, tension, insomnia, stress, anxiety, epilepsy, depression, vertigo). Pitta disorders (burning sensations, boils, inflammation, hair fall).",
          duration: "45 mins",
          price: "Rs. 2500",
          benefits: ["Treats hair fall and dandruff", "Prevents premature graying", "Heals scalp conditions"]
        },
        {
          name: "Shirodhara",
          description: "Continuous pouring of ayurvedic oil on the forehead, especially for vata conditions. Conditions: Stress, insomnia, headache, menopause syndrome, paralysis, facial palsy, epilepsy, Parkinson's",
          duration: "60 mins",
          price: "Rs. 5000",
          benefits: ["Deep stress relief", "Treats insomnia and headaches", "Helps neurological disorders", "Calms the nervous system"]
        },
        {
          name: "Takradhara",
          description: "Continuous pouring of buttermilk infused with cooling ayurvedic herbs on the head, especially for Pitta and Vata. Conditions: Anxiety, insomnia, irritability, headache, psoriasis, skin rash, heat, stress-related disorders",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Cools and calms the mind", "Treats Pitta imbalances", "Reduces mental stress", "Improves sleep quality"]
        },
        {
          name: "Ksheeradhara",
          description: "Continuous pouring of milk infused with herbs on the head, especially for Pitta disorders and Vata imbalance. Conditions: Burning sensations, gastritis, excessive body heat, migraine, fatigue, emaciation, paralysis, neuropathic pain",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Nourishes nervous system", "Treats stress disorders", "Enhances mental clarity", "Provides deep relaxation"]
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
          description: "Facial massage with kansa wand using dosha-specific oil. Conditions: Sagging muscles, wrinkles, fatigue, stress, anxiety, eye strain",
          duration: "30 mins",
          price: "Rs. 2000",
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
          duration: "30 mins",
          price: "Rs. 1500",
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
          description: "Anti-fungal paste applied on the feet. Conditions: Fungal infections, cracks, lesions",
          duration: "45 mins",
          price: "Rs. 2500",
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
      description: "Pooling of warm dosha-specific ayurvedic oil on targeted body areas.",
      services: [
        {
          name: "Shiro Basti (two therapists)",
          description: "Pooling of warm dosha-specific ayurvedic oil on the head. Conditions: Stress, insomnia, depression, fatigue, migraine, psychosomatic diseases",
          duration: "60 mins",
          price: "Rs. 4000",
          benefits: ["Deep stress relief", "Treats migraines and headaches", "Improves memory", "Strengthens hair roots"]
        },
        {
          name: "Griva Basti",
          description: "Pooling of oil on the neck. Conditions: Spondylitis, cervical pain, radiating numbness, vertigo",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Relieves neck stiffness", "Treats cervical spondylitis", "Reduces radiating pain"]
        },
        {
          name: "Uro Basti",
          description: "Pooling of oil on the chest. Conditions: Asthma, bronchitis, chest stiffness, cardiac discomfort",
          duration: "45 mins",
          price: "Rs. 3000",
          benefits: ["Treats chest pain and palpitations", "Helps respiratory issues", "Reduces anxiety-related symptoms"]
        },
        {
          name: "Kati Basti",
          description: "Pooling of oil on the lower back. Conditions: Sciatica, spondylosis, back pain, degenerative issues",
          duration: "30 mins",
          price: "Rs. 3000",
          benefits: ["Treats lower back pain", "Helps disc problems", "Reduces muscle stiffness"]
        },
        {
          name: "Janu Basti (two therapists)",
          description: "Pooling of oil on the knees. Conditions: Osteoarthritis, ligament tears, knee pain",
          duration: "30 mins",
          price: "Rs. 4000",
          benefits: ["Treats knee pain and stiffness", "Helps osteoarthritis", "Improves joint mobility"]
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
          benefits: ["Alternative to Shiro Basti", "Treats head and scalp conditions"]
        },
        {
          name: "Griva Pichu",
          description: "Cotton pad on the neck with warm oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Griva Basti", "Treats neck conditions"]
        },
        {
          name: "Uro Pichu",
          description: "Cotton pad on the chest with warm oil",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Uro Basti", "Treats chest conditions"]
        },
        {
          name: "Kati Pichu",
          description: "Cotton pad on the lower back",
          duration: "30 mins",
          price: "Rs. 2000",
          benefits: ["Alternative to Kati Basti", "Treats lower back issues"]
        },
        {
          name: "Janu Pichu (two therapists)",
          description: "Cotton pad on the knees",
          duration: "30 mins",
          price: "Rs. 2500",
          benefits: ["Alternative to Janu Basti", "Treats knee problems"]
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