import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Eye, ThumbsUp } from "lucide-react";

const topByRating = [
  { id: 1, user: "Ángela G.", location: "Serrano", rating: 5, text: "Trato excepcional de Laura y Alba en recepción...", helpful: 13, reach: 3800 },
  { id: 2, user: "Daniel M.", location: "Valencia", rating: 5, text: "Resultados increíbles con el Dr. Esquivel...", helpful: 11, reach: 2900 },
  { id: 3, user: "Campanilla Z.", location: "Málaga", rating: 5, text: "Experiencia perfecta de principio a fin...", helpful: 15, reach: 4200 },
  { id: 4, user: "Andrea D.", location: "Bilbao", rating: 5, text: "Dr. Andrés es un profesional excepcional...", helpful: 9, reach: 2100 },
  { id: 5, user: "Mireya T.", location: "Sevilla", rating: 5, text: "El Dr. Forero superó todas mis expectativas...", helpful: 12, reach: 3500 },
];

const topByReach = [
  { id: 1, user: "Campanilla Z.", location: "Málaga", rating: 5, text: "Experiencia perfecta de principio a fin...", helpful: 15, reach: 4200 },
  { id: 2, user: "Ángela G.", location: "Serrano", rating: 5, text: "Trato excepcional de Laura y Alba en recepción...", helpful: 13, reach: 3800 },
  { id: 3, user: "Mireya T.", location: "Sevilla", rating: 5, text: "El Dr. Forero superó todas mis expectativas...", helpful: 12, reach: 3500 },
  { id: 4, user: "Daniel M.", location: "Valencia", rating: 5, text: "Resultados increíbles con el Dr. Esquivel...", helpful: 11, reach: 2900 },
  { id: 5, user: "Laura V.", location: "Serrano", rating: 1, text: "Falta de seguimiento después de tratamientos...", helpful: 7, reach: 2100 },
];

export default function Tops() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tops</h2>
        <p className="text-muted-foreground mt-1">
          Reseñas destacadas por puntuación y alcance
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top por Rating */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              Top 5 - Mejor Puntuación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topByRating.map((review, idx) => (
                <div key={review.id} className="flex gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{review.text}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {review.helpful}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {review.reach.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top por Alcance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Top 5 - Mayor Alcance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topByReach.map((review, idx) => (
                <div key={review.id} className="flex gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{review.text}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {review.helpful}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {review.reach.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
