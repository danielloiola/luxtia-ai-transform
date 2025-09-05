import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap, Building, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Diagnóstico & Estratégia",
      description: "Identificamos oportunidades e criamos estratégias baseadas em dados para maximizar o potencial de transformação digital do seu negócio.",
      link: "/servicos/diagnostico-estrategia",
      details: [
        "Análise completa da infraestrutura atual",
        "Identificação de gaps e oportunidades",
        "Roadmap personalizado de transformação",
        "Análise de ROI e métricas de sucesso"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Otimização de Processos",
      description: "Simplificamos operações para máxima eficiência, eliminando gargalos e automatizando tarefas repetitivas.",
      link: "/servicos/otimizacao-processos",
      details: [
        "Mapeamento de processos existentes",
        "Automação inteligente de workflows",
        "Integração de sistemas legados",
        "Monitoramento e melhoria contínua"
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Infraestrutura & Automação",
      description: "Desenvolvemos equipes resilientes e sistemas escaláveis que crescem junto com seu negócio.",
      link: "/servicos/infraestrutura-automacao",
      details: [
        "Migração para nuvem estratégica",
        "DevOps e CI/CD pipelines",
        "Monitoramento proativo 24/7",
        "Backup e disaster recovery"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança & Conformidade",
      description: "Protegemos seu negócio com soluções seguras e automatizadas, garantindo conformidade com LGPD e normas internacionais.",
      link: "/servicos/seguranca-conformidade",
      details: [
        "Auditoria de segurança completa",
        "Implementação de LGPD",
        "Políticas de acesso e governança",
        "Treinamento em cybersecurity"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Escalabilidade & Disponibilidade",
      description: "Garantimos que seus sistemas estejam prontos para o crescimento e operem com alta disponibilidade.",
      link: "/servicos/escalabilidade-disponibilidade",
      details: [
        "Arquitetura elástica e resiliente",
        "Load balancing e CDN",
        "Monitoramento de performance",
        "Planos de crescimento sustentável"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nossos Serviços
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Oferecemos soluções completas de transformação digital, desde o diagnóstico inicial 
                até a implementação e otimização contínua de sistemas escaláveis e seguros.
              </p>
            </div>
            
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            {service.icon}
                          </div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                            {service.title}
                          </CardTitle>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Link 
                          to={service.link}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                          Saiba mais sobre {service.title} →
                        </Link>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          O que incluímos:
                        </h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;