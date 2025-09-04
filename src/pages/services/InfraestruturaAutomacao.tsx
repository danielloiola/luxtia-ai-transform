import { Building, Server, Cpu, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InfraestruturaAutomacao = () => {
  const services = [
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Migração e otimização de ambientes em nuvem (AWS, Azure, GCP)."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Automação Inteligente",
      description: "Implementação de RPA e IA para automatizar tarefas repetitivas."
    },
    {
      icon: <Network className="w-6 h-6 text-primary" />,
      title: "DevOps & CI/CD",
      description: "Pipeline de desenvolvimento ágil e deploy contínuo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header com breadcrumb */}
      <div className="bg-gradient-to-r from-primary via-accent to-secondary py-16 text-white mt-20">
        <div className="container mx-auto px-6">
          <nav className="mb-6">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-white">Infraestrutura & Automação</span>
          </nav>
          <div className="flex items-center mb-6">
            <Building className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Infraestrutura & Automação
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Construa fundações tecnológicas sólidas e escaláveis. Nossa expertise em infraestrutura 
            e automação prepara seu negócio para o futuro digital.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Infraestrutura Moderna
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Desenvolvemos arquiteturas resilientes baseadas em tecnologias de ponta, 
                garantindo alta disponibilidade, segurança e performance.
              </p>
              <p>
                Nossa abordagem cloud-first permite escalabilidade dinâmica e redução 
                significativa de custos operacionais.
              </p>
              <p>
                Implementamos soluções de monitoramento avançado e observabilidade 
                para garantir visibilidade completa dos seus sistemas.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Automação Estratégica
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Utilizamos Robotic Process Automation (RPA) e Machine Learning 
                para automatizar processos complexos e repetitivos.
              </p>
              <p>
                Nossa expertise em orquestração de containers e microserviços 
                permite deploy e scaling automático de aplicações.
              </p>
              <p>
                Implementamos chatbots inteligentes e assistentes virtuais 
                para otimizar o atendimento ao cliente.
              </p>
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Tecnologias que Utilizamos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Docker & Kubernetes",
              "Terraform & Ansible",
              "Jenkins & GitLab CI",
              "Prometheus & Grafana",
              "AWS / Azure / GCP",
              "UiPath & Automation Anywhere",
              "Python & Node.js",
              "Redis & MongoDB"
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 border border-border/50 rounded-lg hover:shadow-md transition-all">
                <span className="text-foreground font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Casos de Uso Comuns
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Migração para Cloud</h3>
                  <p className="text-muted-foreground">Transição segura de sistemas legados para ambientes em nuvem.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automação de Deploy</h3>
                  <p className="text-muted-foreground">Pipeline automatizado para releases frequentes e confiáveis.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Monitoramento Avançado</h3>
                  <p className="text-muted-foreground">Visibilidade completa da saúde e performance dos sistemas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Backup & Disaster Recovery</h3>
                  <p className="text-muted-foreground">Estratégias de continuidade de negócio e recuperação de dados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Modernize Sua Infraestrutura
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Conte com nossa experiência para construir uma base tecnológica 
            robusta, escalável e preparada para os desafios do futuro.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Consultar Especialistas
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfraestruturaAutomacao;