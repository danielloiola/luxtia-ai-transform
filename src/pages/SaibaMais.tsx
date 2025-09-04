import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Globe, Award, Clock, ArrowRight, BarChart } from "lucide-react";

const SaibaMais = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "500+",
      label: "Projetos Entregues"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      number: "4",
      label: "Continentes Atendidos"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "20+",
      label: "Anos de Experiência"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "98%",
      label: "Satisfação dos Clientes"
    }
  ];

  const expertise = [
    {
      title: "Inteligência Artificial",
      description: "Implementação de soluções de IA para automação e insights estratégicos"
    },
    {
      title: "Transformação Digital",
      description: "Modernização completa de processos e sistemas empresariais"
    },
    {
      title: "Cloud Computing",
      description: "Migração e otimização de infraestrutura na nuvem"
    },
    {
      title: "Governança de Dados",
      description: "Estruturação e proteção de dados corporativos críticos"
    },
    {
      title: "Automação de Processos",
      description: "Otimização de fluxos de trabalho através de tecnologia"
    },
    {
      title: "Consultoria Estratégica",
      description: "Planejamento tecnológico alinhado aos objetivos de negócio"
    }
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
                Conheça a LUXTIA
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas em curadoria tecnológica, combinando inovação 
                e experiência para transformar negócios em escala global.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Nossa História
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Fundada pela visionária Tatiana Lucente Campos, a LUXTIA nasceu da 
                    necessidade de oferecer consultoria tecnológica de alta qualidade 
                    que realmente entende os desafios empresariais modernos.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Com mais de duas décadas de experiência em transformação digital, 
                    desenvolvemos uma metodologia única que combina estratégia, 
                    tecnologia e resultados mensuráveis.
                  </p>
                </div>
                <div className="text-center">
                  <BarChart className="w-32 h-32 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Crescimento sustentável através da inovação
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-border/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground">
                        {stat.number}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Nossas Áreas de Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções completas em tecnologia, desde diagnóstico 
                até implementação e acompanhamento de resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Nossa Missão
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Capacitar empresas a alcançar seu máximo potencial através da 
                curadoria inteligente de tecnologias inovadoras, sempre focando 
                em resultados tangíveis e crescimento sustentável.
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300">
                  Fale Conosco <ArrowRight className="ml-2 w-5 h-5" />
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

export default SaibaMais;