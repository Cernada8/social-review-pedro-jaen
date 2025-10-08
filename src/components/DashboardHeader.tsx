import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoEsquivel from "@/assets/logo-esquivel.png";
import logoAdgtravel from "@/assets/adgtravel_logo.png";
import logoAdgOscuro from "@/assets/logo-adgtravel-blanco.png";
import logoEsquivelOscuro from "@/assets/logo-esquivel-blanco.png";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Establecer tema oscuro por defecto al montar el componente
  useEffect(() => {
    // Si no hay tema establecido o es el tema del sistema, cambiar a dark
    if (!theme || theme === "system") {
      setTheme("dark");
    }
  }, []);

  // Seleccionar logos según el tema actual
  const logoAdg = theme === "dark" ? logoAdgOscuro : logoAdgtravel;
  const logoEsq = theme === "dark" ? logoEsquivelOscuro : logoEsquivel;
  
  // Verificar si estamos en la ruta /2
  const isRoute2 = location.pathname === "/2";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img
            src={logoAdg}
            alt="ADG Travel"
            className="h-8 opacity-85"
          />
        </div>

        <div className="flex flex-col items-center">
          {isRoute2 ? (
            <div className="h-12 flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
                Cirugía Plástica
              </span>
            </div>
          ) : (
            <img
              src={logoEsq}
              alt="Clínicas Esquivel"
              className="h-12"
            />
          )}
          <h1 className="text-sm font-semibold text-muted-foreground mt-1">
            Análisis & Reputación Online
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