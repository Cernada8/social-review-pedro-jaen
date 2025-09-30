import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import SocialListening from "./pages/SocialListening";
import Reviews from "./pages/Reviews";
import Compare from "./pages/Compare";
import Tops from "./pages/Tops";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <DashboardSidebar />
              <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<SocialListening />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/tops" element={<Tops />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
