import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap, Building, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Diagnóstico & Estratégia",
      description: "Identificamos oportunidades e criamos estratégias baseadas em dados.",
      link: "/servicos/diagnostico-estrategia"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Otimização de Processos",
      description: "Simplificamos operações para máxima eficiência.",
      link: "/servicos/otimizacao-processos"
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Infraestrutura & Automação",
      description: "Desenvolvemos equipes resilientes e sistemas escaláveis.",
      link: "/servicos/infraestrutura-automacao"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança & Conformidade",
      description: "Protegemos seu negócio com soluções seguras e automatizadas.",
      link: "/servicos/seguranca-conformidade"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Escalabilidade & Disponibilidade",
      description: "Garantimos que seus sistemas estejam prontos para o crescimento.",
      link: "/servicos/escalabilidade-disponibilidade"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm h-full cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="text-primary font-medium group-hover:underline">
                      Saiba mais →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;