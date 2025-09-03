import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envio (em um ambiente real, você faria uma chamada para API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      // Resetar formulário
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        mensagem: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-accent to-secondary py-16 text-white mt-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Pronto para transformar seu negócio? Nossa equipe está disponível para 
            conversar sobre suas necessidades e apresentar soluções personalizadas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Agende uma Conversa
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                      rows={4}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@luxtia.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Brasil | Estados Unidos<br />
                      Europa | América Latina
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                      Suporte 24/7 para clientes premium
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/lux-tia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/luxtia_oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* FAQ Rápido */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Quanto tempo leva para receber uma resposta?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Respondemos em até 24 horas úteis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Oferecem consultoria gratuita?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sim! A primeira consulta é sempre gratuita.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Atendem empresas de que porte?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Desde startups até grandes corporações.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
