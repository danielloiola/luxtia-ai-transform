import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manifesto = () => {
  const principles = [
    {
      title: "Transparência Total",
      description: "Acreditamos que nossos clientes merecem total clareza sobre processos, custos e resultados. Não há surpresas em nossa parceria."
    },
    {
      title: "Inovação Responsável",
      description: "Aplicamos tecnologias de ponta sempre com propósito claro: gerar valor real e mensurável para o negócio."
    },
    {
      title: "Sustentabilidade Digital",
      description: "Construímos soluções que crescem com seu negócio, priorizando eficiência energética e longevidade tecnológica."
    },
    {
      title: "Pessoas no Centro",
      description: "A tecnologia serve às pessoas, não o contrário. Priorizamos experiências humanas em todas as nossas soluções."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-muted to-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nosso Manifesto
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Os princípios que guiam nossa missão de transformar negócios através da tecnologia
                </p>
              </div>
              
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl mb-12">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Mais do que IA. Luxtia.
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Na Luxtia, não entregamos apenas soluções — construímos confiança e parcerias de longo prazo. 
                      Nosso compromisso com excelência, ética e inovação aplicada garante que cada decisão digital 
                      seja um passo em direção a um futuro sustentável.
                    </p>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Acreditamos que a verdadeira transformação digital vai além da implementação de tecnologias. 
                      É sobre empoderar pessoas, otimizar processos e criar valor duradouro que transcende tendências passageiras.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {principles.map((principle, index) => (
                  <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Nossa Promessa
                    </h3>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Cada projeto é uma oportunidade de demonstrar nosso compromisso com a excelência. 
                      Trabalhamos incansavelmente para superar expectativas, entregar resultados mensuráveis 
                      e construir relacionamentos baseados em confiança mútua e respeito.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Pronto para transformar seu negócio? Entre em contato para iniciar sua jornada rumo 
                      a resultados impactantes e mensuráveis.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link to="/iniciar-transformacao">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg w-full sm:w-auto"
                        >
                          Transforme Seu Negócio
                        </Button>
                      </Link>
                      <Link to="/contato">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg w-full sm:w-auto"
                        >
                          Agende uma Consulta
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;