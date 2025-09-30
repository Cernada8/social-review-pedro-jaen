import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileSpreadsheet, Image } from "lucide-react";

const downloadItems = [
  { 
    title: "Informe Social Listening", 
    description: "Resumen completo de menciones, alcance y sentiment",
    format: "PDF",
    icon: FileText 
  },
  { 
    title: "Datos de Reseñas", 
    description: "Exportación de todas las reseñas por ubicación",
    format: "CSV",
    icon: FileSpreadsheet 
  },
  { 
    title: "Gráficos Comparativos", 
    description: "Visualizaciones de comparación entre ubicaciones",
    format: "PNG",
    icon: Image 
  },
  { 
    title: "Informe de Tops", 
    description: "Top reseñas por puntuación y alcance",
    format: "PDF",
    icon: FileText 
  }
];

export default function Downloads() {
  const handleDownload = (item: string) => {
    console.log(`Descargando: ${item}`);
    // Aquí iría la lógica real de descarga
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Descargas</h2>
        <p className="text-muted-foreground mt-1">
          Exporta informes y datos en diferentes formatos
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {downloadItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-muted">
                    {item.format}
                  </span>
                  <Button 
                    onClick={() => handleDownload(item.title)}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Descargar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-dashed">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <FileSpreadsheet className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold mb-2">¿Necesitas un formato específico?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Podemos personalizar los informes según tus necesidades
            </p>
            <Button variant="outline">Solicitar formato personalizado</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
