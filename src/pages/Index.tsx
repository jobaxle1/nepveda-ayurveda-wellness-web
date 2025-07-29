
import Header from "@/components/Header";
import PhotoCarousel from "@/components/PhotoCarousel";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ConsultationPackages from "@/components/ConsultationPackages";
import WhyNepveda from "@/components/WhyNepveda";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-nepveda-cream">
      <Header />
      <PhotoCarousel />
      <Hero />
      <About />
      <WhyNepveda />
      <Services />
      <ConsultationPackages />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
