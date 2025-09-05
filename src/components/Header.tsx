import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/46064a06-2be8-4182-afc1-78e6807c6772.png" 
              alt="LUXTIA Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link to="/manifesto" className="text-foreground hover:text-primary transition-colors">
              Manifesto
            </Link>
            <Link to="/contato">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                Entre em Contato
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;