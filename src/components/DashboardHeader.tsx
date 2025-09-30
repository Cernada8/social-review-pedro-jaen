import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import logoEsquivel from "@/assets/logo-esquivel.png";
import logoAdgtravel from "@/assets/adgtravel_logo.png";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img 
            src={logoAdgtravel} 
            alt="ADG Travel" 
            className="h-8 opacity-85"
          />
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={logoEsquivel} 
            alt="Clínicas Esquivel" 
            className="h-12"
          />
          <h1 className="text-sm font-semibold text-muted-foreground mt-1">
            Monitorización & Reseñas
          </h1>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </div>
    </header>
  );
}
