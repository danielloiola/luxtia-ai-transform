const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-accent to-[#B8860B] text-primary-foreground py-12" style={{background: 'var(--gradient-gold)'}}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/46064a06-2be8-4182-afc1-78e6807c6772.png" 
                alt="LUXTIA Logo" 
                className="h-10 w-auto filter brightness-0 invert"
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
              <p>contato@luxtia.com.br</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/lux-tia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/luxtia_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 LUXTIA. Mais do que IA. LUXTIA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;