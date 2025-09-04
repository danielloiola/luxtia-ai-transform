import { Shield, Lock, FileCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SegurancaConformidade = () => {
  const frameworks = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "ISO 27001",
      description: "Implementação de sistemas de gestão de segurança da informação."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "LGPD/GDPR",
      description: "Conformidade com regulamentações de proteção de dados."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "SOX & Auditoria",
      description: "Controles internos e compliance para auditorias corporativas."
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
            <span className="text-white">Segurança & Conformidade</span>
          </nav>
          <div className="flex items-center mb-6">
            <Shield className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Segurança & Conformidade
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Proteja seus ativos digitais e garanta conformidade regulatória. Nossa expertise 
            em cibersegurança e compliance mantém seu negócio seguro e em conformidade.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Abordagem 360° em Segurança
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Implementamos uma estratégia multicamada de segurança que protege desde 
                a infraestrutura física até aplicações e dados sensíveis.
              </p>
              <p>
                Nossa metodologia combina prevenção proativa, detecção avançada e 
                resposta rápida a incidentes de segurança.
              </p>
              <p>
                Desenvolvemos políticas de segurança customizadas e programas de 
                conscientização para criar uma cultura de segurança organizacional.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Compliance Regulatório
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Auxiliamos na adequação às principais regulamentações como LGPD, 
                GDPR, SOX, PCI-DSS e outros frameworks setoriais.
              </p>
              <p>
                Realizamos gap analysis para identificar não conformidades e 
                desenvolvemos planos de adequação com prazos e responsabilidades claras.
              </p>
              <p>
                Oferecemos auditoria contínua e relatórios de compliance para 
                demonstrar aderência às regulamentações para órgãos fiscalizadores.
              </p>
            </div>
          </div>
        </div>

        {/* Serviços de Segurança */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Serviços de Segurança
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Pentest & Vulnerability Assessment",
              "Security Operation Center (SOC)",
              "Identity & Access Management",
              "Data Loss Prevention (DLP)",
              "Incident Response Plan",
              "Security Awareness Training",
              "Backup & Disaster Recovery",
              "Compliance Audit & Reporting"
            ].map((service, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg hover:shadow-md transition-all text-center">
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frameworks e Certificações
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {framework.icon}
                  </div>
                  <CardTitle className="text-xl">{framework.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processo de Implementação */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Processo de Implementação
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Assessment", desc: "Avaliação de riscos e vulnerabilidades" },
              { step: "02", title: "Planning", desc: "Definição de estratégia e roadmap" },
              { step: "03", title: "Implementation", desc: "Implementação de controles e processos" },
              { step: "04", title: "Testing", desc: "Testes de segurança e validação" },
              { step: "05", title: "Monitoring", desc: "Monitoramento contínuo e melhoria" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Threats Landscape */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Principais Ameaças que Combatemos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ransomware & Malware</h3>
                  <p className="text-muted-foreground">Proteção avançada contra ataques de sequestro de dados e softwares maliciosos.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phishing & Social Engineering</h3>
                  <p className="text-muted-foreground">Treinamento e ferramentas para prevenir ataques de engenharia social.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Breach & Insider Threats</h3>
                  <p className="text-muted-foreground">Monitoramento e controles para prevenir vazamentos de dados internos.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Persistent Threats (APT)</h3>
                  <p className="text-muted-foreground">Detecção e resposta a ataques sofisticados e prolongados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Proteja Seu Futuro Digital
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Não deixe a segurança para depois. Entre em contato conosco e descubra 
            como podemos proteger seus ativos mais valiosos.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Solicitar Assessment de Segurança
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SegurancaConformidade;