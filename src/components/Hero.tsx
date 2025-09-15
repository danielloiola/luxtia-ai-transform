import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/purple-gradient-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="text-center relative px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Bem-vindo à LUXTIA
              </h1>
              
              <h2 className="text-lg md:text-2xl font-semibold text-white/90 mb-6">
                Curadoria em Tecnologia & Inteligência Artificial
              </h2>
              
              <p className="text-base md:text-xl font-medium text-white/80 mb-6">
                Transformando Negócios por Meio da Inovação
              </p>
              
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-sm md:text-base text-white/75 leading-relaxed">
                  Na LUXTIA, acreditamos que a tecnologia é mais do que uma ferramenta — é um catalisador para a transformação. 
                  Com mais de 20 anos de experiência em transformação digital, 
                  entregamos resultados mensuráveis por meio de parcerias estratégicas e tecnologias globais de ponta.
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-sm md:text-base text-white/75 mb-6">
                  Atuando no Brasil, Estados Unidos, Europa e América Latina, somos especializados em curar soluções 
                  que impulsionam produtividade, eficiência e governança.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/iniciar-transformacao">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-700 hover:bg-white/90 hover:shadow-xl transition-all duration-300 px-6 py-3 text-base font-semibold"
                  >
                    Iniciar Transformação
                  </Button>
                </Link>
                <Link to="/saiba-mais">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-purple-700 px-6 py-3 text-base font-semibold bg-transparent"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;