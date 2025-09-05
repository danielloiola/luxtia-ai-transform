import { Card, CardContent } from "@/components/ui/card";

const SuccessCases = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como transformamos negócios através de soluções digitais inovadoras
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="aspect-video w-full relative group cursor-pointer">
                <a 
                  href="https://www.youtube.com/clip/Ugkxyc973fygLCm7vL1dpOmnFPbf88arKMSf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src="/lovable-uploads/6e3c9b2a-619c-43ff-abf4-27d82f96483f.png"
                    alt="Case de Sucesso - Transformação Digital"
                    className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Transformação Digital Completa
                </h3>
                <p className="text-muted-foreground">
                  Acompanhe como implementamos uma solução completa de transformação digital, 
                  resultando em maior eficiência operacional e crescimento sustentável.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;