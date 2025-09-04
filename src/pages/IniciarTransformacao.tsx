import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Target, Zap, TrendingUp } from "lucide-react";

const IniciarTransformacao = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Diagnóstico Completo",
      description: "Identificamos oportunidades e gargalos em seus processos atuais"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Estratégia Personalizada",
      description: "Desenvolvemos um plano único baseado nas necessidades do seu negócio"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Implementação & Resultados",
      description: "Executamos a transformação com acompanhamento contínuo"
    }
  ];

  const benefits = [
    "Aumento de produtividade em até 40%",
    "Redução de custos operacionais",
    "Automação de processos manuais",
    "Melhoria na tomada de decisões",
    "Escalabilidade para crescimento",
    "Conformidade e segurança"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/30 to-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Inicie Sua Transformação Digital
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Dê o primeiro passo rumo à inovação. Nossa metodologia comprovada 
                transforma desafios em oportunidades de crescimento sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300">
                    Agendar Consultoria Gratuita
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Ver Cases de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Como Funciona Nossa Metodologia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seguimos um processo estruturado para garantir resultados mensuráveis 
                em cada etapa da sua transformação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => (
                <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Resultados que Você Pode Esperar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nossos clientes experimentam transformações significativas 
                  em média 3-6 meses após o início da implementação.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma consultoria gratuita e descubra como podemos 
                acelerar o crescimento da sua empresa.
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300">
                  Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IniciarTransformacao;