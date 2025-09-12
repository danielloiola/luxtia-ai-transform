import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import SuccessCases from "@/components/SuccessCases";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scroll');
    
    if (scrollTo) {
      // Aumentar o delay para garantir que a página carregou completamente
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Luxtia - Curadoria em Tecnologia & IA | Transformação Digital Estratégica"
        description="Luxtia é especialista em curadoria tecnológica e inteligência artificial para transformação digital. Mais de 20 anos de experiência em consultoria estratégica, automação de processos e soluções de IA para empresas."
        keywords="curadoria tecnológica, inteligência artificial, transformação digital, consultoria estratégica, automação de processos, IA empresarial, tecnologia corporativa, inovação digital, otimização de processos, governança tecnológica"
        canonical="https://luxtia.com.br"
      />
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <SuccessCases />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
