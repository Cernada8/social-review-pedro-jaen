import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileSpreadsheet, Image } from "lucide-react";

const downloadItems = [
  { 
    title: "Informe Social Listening", 
    description: "Resumen completo de menciones, alcance y sentiment",
    format: "JSON",
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
    format: "SVG",
    icon: Image 
  },
  { 
    title: "Informe de Tops", 
    description: "Top reseñas por puntuación y alcance",
    format: "JSON",
    icon: FileText 
  }
];

export default function Downloads() {
  const handleDownload = (item: typeof downloadItems[0]) => {
    let content = '';
    let filename = '';
    let mimeType = '';

    if (item.title === "Informe Social Listening") {
      // Datos JSON completos de Social Listening
      const data = {
        titulo: item.title,
        fecha_generacion: new Date().toISOString(),
        resumen: {
          menciones_totales: 2893,
          alcance_total: 1563500,
          sentiment: {
            positivo: 65.4,
            neutral: 24.3,
            negativo: 10.3
          }
        },
        ubicaciones: [
          { nombre: "Serrano (Madrid)", rating: 4.5, reviews: 1100, sentiment_positivo: 74 },
          { nombre: "Valencia", rating: 4.3, reviews: 305, sentiment_positivo: 68 },
          { nombre: "Barcelona", rating: 4.4, reviews: 300, sentiment_positivo: 70 },
          { nombre: "Málaga", rating: 4.7, reviews: 430, sentiment_positivo: 80 },
          { nombre: "Bilbao", rating: 4.5, reviews: 322, sentiment_positivo: 76 },
          { nombre: "Sevilla", rating: 4.6, reviews: 300, sentiment_positivo: 78 }
        ],
        idiomas: [
          { codigo: "es", nombre: "Español", porcentaje: 55.4 },
          { codigo: "en", nombre: "Inglés", porcentaje: 36.1 },
          { codigo: "pl", nombre: "Polaco", porcentaje: 4.8 },
          { codigo: "fr", nombre: "Francés", porcentaje: 2.4 },
          { codigo: "ro", nombre: "Rumano", porcentaje: 1.2 }
        ],
        fuentes: [
          { nombre: "Google", porcentaje: 80 },
          { nombre: "TripAdvisor", porcentaje: 15 },
          { nombre: "Facebook", porcentaje: 5 }
        ]
      };
      content = JSON.stringify(data, null, 2);
      filename = 'informe-social-listening.json';
      mimeType = 'application/json';
      
    } else if (item.title === "Datos de Reseñas") {
      // CSV con datos detallados
      content = 'Ubicación,Rating,Total Reseñas,Positivas,Neutrales,Negativas,Respuesta Promedio (días),Idioma Principal\n';
      content += 'Serrano (Madrid),4.5,1100,814,176,110,2.3,Español\n';
      content += 'Valencia,4.3,305,207,61,37,3.1,Español\n';
      content += 'Barcelona,4.4,300,210,45,45,2.8,Español\n';
      content += 'Málaga,4.7,430,344,52,34,1.9,Español\n';
      content += 'Bilbao,4.5,322,245,48,29,2.5,Español\n';
      content += 'Sevilla,4.6,300,234,36,30,2.2,Español\n';
      content += 'Oviedo,4.4,258,181,39,38,3.5,Español\n';
      content += 'Córdoba,4.5,190,143,28,19,2.7,Español\n';
      content += 'Zaragoza,4.3,220,150,44,26,3.2,Español\n';
      content += 'Palma de Mallorca,4.6,280,218,34,28,2.0,Inglés\n';
      filename = 'datos-resenas.csv';
      mimeType = 'text/csv;charset=utf-8';
      
    } else if (item.title === "Gráficos Comparativos") {
      // SVG con gráfico de barras comparativo
      content = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="#f8fafc"/>
        <text x="400" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">Comparación de Ubicaciones</text>
        <text x="400" y="70" text-anchor="middle" font-size="14" fill="#64748b">Rating promedio por ubicación</text>
        
        <!-- Eje Y -->
        <line x1="100" y1="100" x2="100" y2="500" stroke="#cbd5e1" stroke-width="2"/>
        <text x="90" y="105" text-anchor="end" font-size="12" fill="#64748b">5.0</text>
        <text x="90" y="205" text-anchor="end" font-size="12" fill="#64748b">4.0</text>
        <text x="90" y="305" text-anchor="end" font-size="12" fill="#64748b">3.0</text>
        <text x="90" y="405" text-anchor="end" font-size="12" fill="#64748b">2.0</text>
        <text x="90" y="505" text-anchor="end" font-size="12" fill="#64748b">1.0</text>
        
        <!-- Eje X -->
        <line x1="100" y1="500" x2="700" y2="500" stroke="#cbd5e1" stroke-width="2"/>
        
        <!-- Barras -->
        <rect x="120" y="180" width="60" height="320" fill="#0051FF" rx="4"/>
        <text x="150" y="520" text-anchor="middle" font-size="12" fill="#64748b">Madrid</text>
        <text x="150" y="170" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.5</text>
        
        <rect x="220" y="220" width="60" height="280" fill="#0051FF" rx="4"/>
        <text x="250" y="520" text-anchor="middle" font-size="12" fill="#64748b">Valencia</text>
        <text x="250" y="210" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.3</text>
        
        <rect x="320" y="200" width="60" height="300" fill="#0051FF" rx="4"/>
        <text x="350" y="520" text-anchor="middle" font-size="12" fill="#64748b">Barcelona</text>
        <text x="350" y="190" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.4</text>
        
        <rect x="420" y="140" width="60" height="360" fill="#0051FF" rx="4"/>
        <text x="450" y="520" text-anchor="middle" font-size="12" fill="#64748b">Málaga</text>
        <text x="450" y="130" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.7</text>
        
        <rect x="520" y="180" width="60" height="320" fill="#0051FF" rx="4"/>
        <text x="550" y="520" text-anchor="middle" font-size="12" fill="#64748b">Bilbao</text>
        <text x="550" y="170" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.5</text>
        
        <rect x="620" y="160" width="60" height="340" fill="#0051FF" rx="4"/>
        <text x="650" y="520" text-anchor="middle" font-size="12" fill="#64748b">Sevilla</text>
        <text x="650" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#0051FF">4.6</text>
        
        <!-- Footer -->
        <text x="400" y="570" text-anchor="middle" font-size="12" fill="#94a3b8">Generado: ${new Date().toLocaleString('es-ES')}</text>
      </svg>`;
      filename = 'graficos-comparativos.svg';
      mimeType = 'image/svg+xml';
      
    } else if (item.title === "Informe de Tops") {
      // JSON con top reseñas
      const data = {
        titulo: item.title,
        fecha_generacion: new Date().toISOString(),
        top_puntuacion: [
          {
            ubicacion: "Málaga",
            rating: 4.7,
            total_reviews: 430,
            review_destacada: "Excelente servicio, muy recomendable. El personal es muy atento y profesional."
          },
          {
            ubicacion: "Sevilla",
            rating: 4.6,
            total_reviews: 300,
            review_destacada: "Una experiencia increíble. Volveré sin duda."
          },
          {
            ubicacion: "Palma de Mallorca",
            rating: 4.6,
            total_reviews: 280,
            review_destacada: "Perfect location and amazing service. Highly recommended!"
          }
        ],
        top_alcance: [
          {
            ubicacion: "Serrano (Madrid)",
            alcance: 563500,
            menciones: 1100,
            plataforma_principal: "Google"
          },
          {
            ubicacion: "Málaga",
            alcance: 234000,
            menciones: 430,
            plataforma_principal: "Google"
          },
          {
            ubicacion: "Bilbao",
            alcance: 189000,
            menciones: 322,
            plataforma_principal: "Google"
          }
        ],
        sentiment_mas_positivo: [
          {
            ubicacion: "Málaga",
            sentiment_positivo: 80,
            palabras_clave: ["excelente", "increíble", "perfecto", "recomendable"]
          },
          {
            ubicacion: "Sevilla",
            sentiment_positivo: 78,
            palabras_clave: ["maravilloso", "genial", "fantástico", "mejor"]
          },
          {
            ubicacion: "Bilbao",
            sentiment_positivo: 76,
            palabras_clave: ["bueno", "agradable", "correcto", "satisfecho"]
          }
        ]
      };
      content = JSON.stringify(data, null, 2);
      filename = 'informe-tops.json';
      mimeType = 'application/json';
    }

    // Crear y descargar el archivo
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