import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Globe } from "lucide-react";

const Sobre = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Expertise Comprovada",
      description: "Duas décadas entregando projetos de alto impacto com resultados concretos."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Parcerias Estratégicas",
      description: "Como franqueada oficial da Skyone, combinamos agilidade com soluções em nuvem robustas, seguras e escaláveis, confiadas por mais de 25.000 clientes em mais de 35 países."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Soluções Holísticas",
      description: "Do diagnóstico à otimização de processos, infraestrutura, automação e conformidade com a LGPD, personalizamos estratégias para garantir que sua transformação digital esteja preparada para o futuro."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Por que Escolher a Luxtia?
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Somos especialistas em transformação digital com mais de 20 anos de experiência, 
                oferecendo soluções personalizadas que impulsionam o crescimento sustentável do seu negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Nossa História
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Fundada com a missão de democratizar a transformação digital, a Luxtia nasceu da 
                      experiência de profissionais que vivenciaram os desafios da evolução tecnológica 
                      em empresas de todos os portes. Nossa parceria estratégica com a Skyone nos permite 
                      oferecer soluções de classe mundial, combinando inovação com a confiabilidade 
                      necessária para o sucesso dos nossos clientes.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Acreditamos que a tecnologia deve ser um catalisador de crescimento, não um obstáculo. 
                      Por isso, desenvolvemos metodologias próprias que garantem implementações eficientes 
                      e resultados mensuráveis, sempre priorizando a sustentabilidade e o crescimento 
                      de longo prazo dos nossos parceiros.
                    </p>
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

export default Sobre;