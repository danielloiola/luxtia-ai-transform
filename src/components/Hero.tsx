import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-muted pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Bem-vindo à LUXTIA
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8">
            Curadoria em Tecnologia & Inteligência Artificial
          </h2>
          
          <p className="text-xl md:text-2xl font-medium text-primary mb-8">
            Transformando Negócios por Meio da Inovação
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na LUXTIA, acreditamos que a tecnologia é mais do que uma ferramenta — é um catalisador para a transformação. 
              Com mais de 20 anos de experiência em transformação digital, 
              entregamos resultados mensuráveis por meio de parcerias estratégicas e tecnologias globais de ponta.
            </p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              Atuando no Brasil, Estados Unidos, Europa e América Latina, somos especializados em curar soluções 
              que impulsionam produtividade, eficiência e governança.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/iniciar-transformacao">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
              >
                Iniciar Transformação
              </Button>
            </Link>
            <Link to="/saiba-mais">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;