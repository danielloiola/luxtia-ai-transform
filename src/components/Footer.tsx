const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/46064a06-2be8-4182-afc1-78e6807c6772.png" 
                alt="Luxtia Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando negócios por meio da inovação tecnológica há mais de 20 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Diagnóstico & Estratégia</li>
              <li>Otimização de Processos</li>
              <li>Infraestrutura & Automação</li>
              <li>Segurança & Conformidade</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Brasil | Estados Unidos</p>
              <p>Europa | América Latina</p>
              <p className="font-medium">Tatiana Lucente Campos</p>
              <p className="text-sm">Fundadora & CEO</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Luxtia. Mais do que IA. Luxtia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;