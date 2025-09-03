import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import DiagnosticoEstrategia from "./pages/services/DiagnosticoEstrategia";
import OtimizacaoProcessos from "./pages/services/OtimizacaoProcessos";
import InfraestruturaAutomacao from "./pages/services/InfraestruturaAutomacao";
import SegurancaConformidade from "./pages/services/SegurancaConformidade";
import EscalabilidadeDisponibilidade from "./pages/services/EscalabilidadeDisponibilidade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos/diagnostico-estrategia" element={<DiagnosticoEstrategia />} />
          <Route path="/servicos/otimizacao-processos" element={<OtimizacaoProcessos />} />
          <Route path="/servicos/infraestrutura-automacao" element={<InfraestruturaAutomacao />} />
          <Route path="/servicos/seguranca-conformidade" element={<SegurancaConformidade />} />
          <Route path="/servicos/escalabilidade-disponibilidade" element={<EscalabilidadeDisponibilidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
