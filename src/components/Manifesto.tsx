import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 bg-gradient-to-b from-muted to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nosso Manifesto
            </h2>
          </div>
          
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Na Luxtia, não entregamos apenas soluções — construímos confiança e parcerias de longo prazo. 
                  Nosso compromisso com excelência, ética e inovação aplicada garante que cada decisão digital 
                  seja um passo em direção a um futuro sustentável.
                </p>
                
                <div className="py-8">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Mais do que IA. Luxtia.
                  </h3>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Pronto para transformar seu negócio? Entre em contato para iniciar sua jornada rumo 
                  a resultados impactantes e mensuráveis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    Transforme Seu Negócio
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                  >
                    Agende uma Consulta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;