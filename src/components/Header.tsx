import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" 
              alt="LUXTIA Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/sobre" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/manifesto" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Manifesto
              </Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;