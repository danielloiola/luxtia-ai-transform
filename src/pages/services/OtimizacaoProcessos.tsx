import { Zap, Workflow, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OtimizacaoProcessos = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Redução de Tempo",
      description: "Eliminate gargalos e acelere a execução de processos críticos."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Aumento de Eficiência",
      description: "Maximize a produtividade com fluxos de trabalho otimizados."
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Padronização",
      description: "Crie processos consistentes e repetíveis em toda organização."
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
            <span className="text-white">Otimização de Processos</span>
          </nav>
          <div className="flex items-center mb-6">
            <Zap className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Otimização de Processos
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Simplifique operações complexas e acelere resultados. Nossa expertise em otimização 
            transforma processos burocráticos em fluxos ágeis e eficientes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Nossa Abordagem
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Aplicamos metodologias comprovadas como Lean Six Sigma e Business Process 
                Reengineering para identificar desperdícios e otimizar fluxos de trabalho.
              </p>
              <p>
                Cada processo é analisado sob a ótica de valor agregado, tempo de ciclo, 
                qualidade e custos operacionais.
              </p>
              <p>
                Utilizamos tecnologias de automação e IA para eliminar tarefas repetitivas 
                e focar recursos humanos em atividades de maior valor estratégico.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Áreas de Atuação
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Processos administrativos e financeiros
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Cadeia de suprimentos e logística
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Atendimento ao cliente e suporte
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Produção e operações
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Recursos humanos e gestão de talentos
              </li>
            </ul>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Resultados Comprovados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nosso Processo de Otimização
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Mapeamento", desc: "Identificamos e documentamos processos atuais" },
              { step: "02", title: "Análise", desc: "Avaliamos eficiência e identificamos gargalos" },
              { step: "03", title: "Redesign", desc: "Criamos novos fluxos otimizados" },
              { step: "04", title: "Implementação", desc: "Executamos mudanças com acompanhamento" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Acelere Seus Processos Hoje
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Permita que nossa equipe especializada analise seus processos e apresente 
            soluções customizadas para maximizar sua eficiência operacional.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Solicitar Análise de Processos
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OtimizacaoProcessos;