import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
