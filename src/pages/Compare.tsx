import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviewsData } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Star } from "lucide-react";

export default function Compare() {
  const comparisonData = reviewsData.locations.map(loc => ({
    name: loc.name.split(' ')[0],
    rating: loc.ratingAvg,
    reseñas: loc.totalReviews,
    positivo: loc.sentimentPct.pos,
    negativo: loc.sentimentPct.neg,
    respuestas: loc.businessReplyPct
  }));

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Comparar Ubicaciones</h2>
        <p className="text-muted-foreground mt-1">
          Análisis comparativo entre todas las clínicas
        </p>
      </div>

      {/* Tabla comparativa */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen Comparativo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Ubicación</th>
                  <th className="text-left p-3 font-medium">Rating</th>
                  <th className="text-left p-3 font-medium">Reseñas</th>
                  <th className="text-left p-3 font-medium">% Positivo</th>
                  <th className="text-left p-3 font-medium">% Negativo</th>
                  <th className="text-left p-3 font-medium">% Respuestas</th>
                </tr>
              </thead>
              <tbody>
                {reviewsData.locations.map((loc) => (
                  <tr key={loc.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-3 font-medium">{loc.name}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {loc.ratingAvg}
                      </div>
                    </td>
                    <td className="p-3">{loc.totalReviews.toLocaleString()}</td>
                    <td className="p-3">
                      <span className="text-positive font-medium">{loc.sentimentPct.pos}%</span>
                    </td>
                    <td className="p-3">
                      <span className="text-negative font-medium">{loc.sentimentPct.neg}%</span>
                    </td>
                    <td className="p-3">{loc.businessReplyPct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos comparativos */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rating por Ubicación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Bar dataKey="rating" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sentiment por Ubicación (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positivo" fill="hsl(var(--positive))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="negativo" fill="hsl(var(--negative))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Volumen de Reseñas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="reseñas" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
