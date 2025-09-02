import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Globe } from "lucide-react";

const WhyChoose = () => {
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
    <section id="sobre" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Por que Escolher a Luxtia?
          </h2>
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
      </div>
    </section>
  );
};

export default WhyChoose;