
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyNepveda from "@/components/WhyNepveda";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-nepveda-cream">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyNepveda />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
