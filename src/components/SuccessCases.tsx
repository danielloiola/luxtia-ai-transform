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
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/clip/Ugkxyc973fygLCm7vL1dpOmnFPbf88arKMSf"
                  title="Case de Sucesso - Transformação Digital"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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