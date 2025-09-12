import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer 
      className="py-12 text-white bg-slate-900 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/382448f9-2175-46d3-b779-039fe041a584.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" 
                alt="LUXTIA Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              Transformando negócios por meio da inovação tecnológica há mais de 20 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link 
                  to="/servicos/diagnostico-estrategia" 
                  className="hover:text-white transition-colors"
                >
                  Diagnóstico & Estratégia
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/otimizacao-processos" 
                  className="hover:text-white transition-colors"
                >
                  Otimização de Processos
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/infraestrutura-automacao" 
                  className="hover:text-white transition-colors"
                >
                  Infraestrutura & Automação
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/seguranca-conformidade" 
                  className="hover:text-white transition-colors"
                >
                  Segurança & Conformidade
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/escalabilidade-disponibilidade" 
                  className="hover:text-white transition-colors"
                >
                  Escalabilidade & Disponibilidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="text-white/90 space-y-2">
              <p>Brasil | Estados Unidos</p>
              <p>Europa | América Latina</p>
              <p>contato@luxtia.com.br</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/lux-tia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/luxtia_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2024 LUXTIA. Mais do que IA. LUXTIA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;