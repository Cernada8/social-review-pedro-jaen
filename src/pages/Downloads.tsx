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
  const handleDownload = (item: typeof downloadItems[0]) => {
    // Crear contenido mock según el tipo de archivo
    let content = '';
    let filename = '';
    let mimeType = '';

    if (item.format === 'PDF') {
      // Para PDF, creamos un simple documento de texto (en un proyecto real usarías una librería como jsPDF)
      content = `INFORME: ${item.title}\n\n${item.description}\n\nGenerado: ${new Date().toLocaleString('es-ES')}`;
      filename = `${item.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
      mimeType = 'text/plain';
    } else if (item.format === 'CSV') {
      // Crear CSV con datos de ejemplo
      content = 'Ubicación,Rating,Reseñas,Sentiment Positivo,Sentiment Negativo\n';
      content += 'Serrano (Madrid),4.5,1100,74%,10%\n';
      content += 'Valencia,4.3,305,68%,20%\n';
      content += 'Barcelona,4.4,300,70%,20%\n';
      content += 'Málaga,4.7,430,80%,12%\n';
      content += 'Bilbao,4.5,322,76%,15%\n';
      content += 'Sevilla,4.6,300,78%,14%\n';
      filename = `${item.title.toLowerCase().replace(/\s+/g, '-')}.csv`;
      mimeType = 'text/csv';
    } else if (item.format === 'PNG') {
      // Para imágenes, usamos un canvas simple con texto
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = '#0051FF';
        ctx.font = 'bold 24px sans-serif';
        ctx.fillText(item.title, 50, 100);
        ctx.fillStyle = '#64748b';
        ctx.font = '16px sans-serif';
        ctx.fillText(item.description, 50, 140);
        ctx.fillText(`Generado: ${new Date().toLocaleString('es-ES')}`, 50, 180);
      }
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      });
      return;
    }

    // Crear blob y descargar
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
                    onClick={() => handleDownload(item)}
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
