import { Search, Target, BarChart3, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const DiagnosticoEstrategia = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Diagnóstico Preciso",
      description: "Análise completa dos seus processos atuais e identificação de gargalos."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Estratégia Baseada em Dados",
      description: "Tomada de decisão apoiada em métricas e indicadores concretos."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Soluções Inovadoras",
      description: "Propostas criativas e tecnológicas para otimizar seus resultados."
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
            <span className="text-white">Diagnóstico & Estratégia</span>
          </nav>
          <div className="flex items-center mb-6">
            <Search className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Diagnóstico & Estratégia
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Transforme dados em decisões inteligentes. Nossa abordagem analítica identifica oportunidades 
            e constrói estratégias sólidas para o crescimento sustentável do seu negócio.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Nossa Metodologia
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Utilizamos uma abordagem estruturada que combina análise quantitativa e qualitativa 
                para entender profundamente o contexto do seu negócio.
              </p>
              <p>
                Nosso processo de diagnóstico envolve mapeamento de processos, análise de dados, 
                entrevistas com stakeholders e benchmarking de mercado.
              </p>
              <p>
                A partir dos insights coletados, desenvolvemos estratégias personalizadas que 
                alinham tecnologia, processos e pessoas aos objetivos do seu negócio.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que Entregamos
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Relatório completo de diagnóstico organizacional
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Mapeamento de processos críticos e oportunidades
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Plano estratégico com roadmap de implementação
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                KPIs e métricas para acompanhamento de resultados
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Recomendações de tecnologias e ferramentas
              </li>
            </ul>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Por que Escolher Nossa Abordagem?
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

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Pronto para Transformar Sua Estratégia?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossa expertise em diagnóstico 
            e estratégia pode acelerar o crescimento do seu negócio.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Solicitar Diagnóstico Gratuito
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticoEstrategia;