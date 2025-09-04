import { TrendingUp, Activity, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EscalabilidadeDisponibilidade = () => {
  const metrics = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "99.9% Uptime",
      description: "Garantia de alta disponibilidade com SLA rigoroso."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Auto-scaling",
      description: "Escalonamento automático baseado em demanda."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global CDN",
      description: "Distribuição de conteúdo em múltiplas regiões."
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
            <span className="text-white">Escalabilidade & Disponibilidade</span>
          </nav>
          <div className="flex items-center mb-6">
            <TrendingUp className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Escalabilidade & Disponibilidade
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Prepare-se para crescer sem limites. Nossa expertise em arquiteturas escaláveis 
            garante que seus sistemas suportem qualquer volume de crescimento.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Arquiteturas Resilientes
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Projetamos sistemas distribuídos que crescem horizontalmente, 
                mantendo performance e estabilidade mesmo com milhões de usuários.
              </p>
              <p>
                Utilizamos padrões de microserviços, containerização e orquestração 
                para criar aplicações verdadeiramente escaláveis.
              </p>
              <p>
                Implementamos estratégias de caching inteligente, load balancing 
                e otimização de banco de dados para máxima eficiência.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Alta Disponibilidade
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Garantimos uptime superior a 99.9% através de redundância, 
                failover automático e monitoramento proativo.
              </p>
              <p>
                Nossa estratégia multi-região elimina pontos únicos de falha 
                e assegura continuidade mesmo em caso de desastres.
              </p>
              <p>
                Implementamos circuit breakers, health checks e auto-recovery 
                para sistemas que se autorreparam automaticamente.
              </p>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Métricas de Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-xl">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tecnologias de Escalabilidade */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Stack Tecnológico
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Kubernetes & Docker",
              "AWS EKS / Azure AKS",
              "Redis & Memcached",
              "Elasticsearch",
              "Apache Kafka",
              "NGINX & HAProxy",
              "PostgreSQL / MongoDB",
              "Prometheus & Grafana",
              "Istio Service Mesh",
              "ArgoCD & Flux",
              "Terraform & Helm",
              "DataDog & New Relic"
            ].map((tech, index) => (
              <div key={index} className="text-center p-3 border border-border/50 rounded-lg hover:shadow-md transition-all">
                <span className="text-foreground font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Padrões de Arquitetura */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Padrões de Arquitetura Escalável
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Microserviços</h3>
                <p className="text-muted-foreground mb-4">
                  Decomposição em serviços independentes que podem ser escalados individualmente.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Desenvolvimento independente</li>
                  <li>• Deploy independente</li>
                  <li>• Tecnologias heterogêneas</li>
                  <li>• Falhas isoladas</li>
                </ul>
              </div>
              
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Event-Driven Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Comunicação assíncrona através de eventos para máxima performance.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Desacoplamento temporal</li>
                  <li>• Processamento assíncrono</li>
                  <li>• Event sourcing</li>
                  <li>• CQRS pattern</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">CQRS & Event Sourcing</h3>
                <p className="text-muted-foreground mb-4">
                  Separação de responsabilidades para otimizar leitura e escrita.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Otimização independente</li>
                  <li>• Histórico completo</li>
                  <li>• Auditoria natural</li>
                  <li>• Replay de eventos</li>
                </ul>
              </div>
              
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">API Gateway</h3>
                <p className="text-muted-foreground mb-4">
                  Ponto único de entrada com rate limiting e autenticação.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rate limiting</li>
                  <li>• Autenticação centralizada</li>
                  <li>• Load balancing</li>
                  <li>• Monitoring & analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Estratégias de Scaling */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Estratégias de Escalonamento
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Horizontal Scaling",
                description: "Adicione mais servidores para distribuir a carga",
                features: ["Auto Scaling Groups", "Load Balancers", "Container Orchestration"]
              },
              {
                title: "Vertical Scaling",
                description: "Aumente recursos de CPU/RAM quando necessário",
                features: ["Dynamic Resource Allocation", "Performance Monitoring", "Capacity Planning"]
              },
              {
                title: "Database Scaling",
                description: "Otimize e distribua dados para máxima performance",
                features: ["Read Replicas", "Sharding", "Connection Pooling"]
              }
            ].map((strategy, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{strategy.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Casos de Sucesso */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Resultados Alcançados
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { metric: "99.99%", label: "Uptime médio" },
              { metric: "10x", label: "Melhoria na performance" },
              { metric: "1M+", label: "Usuários simultâneos" },
              { metric: "< 100ms", label: "Tempo de resposta" }
            ].map((stat, index) => (
              <div key={index} className="p-6 border border-border/50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Escale Sem Limites
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Não deixe que limitações técnicas impeçam seu crescimento. Nossa expertise 
            em escalabilidade prepara sua arquitetura para qualquer desafio.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Avaliar Arquitetura Atual
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EscalabilidadeDisponibilidade;