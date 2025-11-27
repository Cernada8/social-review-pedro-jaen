import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Eye, ThumbsUp } from "lucide-react";
import { reviewsData } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function Tops() {
  const [selectedLocation, setSelectedLocation] = useState("total");

  // Obtener la ubicación seleccionada
  const location = reviewsData.locations.find(loc => loc.id === selectedLocation);

  if (!location) return null;

  // Si es "total", agregamos todas las reseñas de todas las ubicaciones
  const allReviews = selectedLocation === "total" 
    ? reviewsData.locations
        .filter(loc => loc.id !== "total")
        .flatMap(loc => loc.reviews)
    : location.reviews;

  // Asegurar que siempre haya al menos 5 reseñas únicas para cada categoría
  const minReviews = Math.min(5, allReviews.length);

  // Ordenar reseñas por engagement (helpful primero, luego reach)
  const topByEngagement = [...allReviews]
    .sort((a, b) => {
      if (b.helpful !== a.helpful) return b.helpful - a.helpful;
      return b.reach - a.reach;
    })
    .slice(0, minReviews);

  // Ordenar reseñas por alcance (reach primero) - EXCLUYENDO las que ya están en engagement
  const engagementIds = new Set(topByEngagement.map(r => r.id));
  let topByReach = [...allReviews]
    .filter(r => !engagementIds.has(r.id))
    .sort((a, b) => {
      if (b.reach !== a.reach) return b.reach - a.reach;
      return b.helpful - a.helpful;
    })
    .slice(0, minReviews);

  // Si no hay suficientes reseñas diferentes, rellenar con las de engagement
  if (topByReach.length < minReviews) {
    const remainingFromEngagement = topByEngagement.slice(topByReach.length);
    topByReach = [...topByReach, ...remainingFromEngagement].slice(0, minReviews);
  }

  // Top reseñas positivas (rating 5, ordenadas por engagement) - excluir las anteriores
  const usedIds = new Set([...topByEngagement.map(r => r.id), ...topByReach.map(r => r.id)]);
  let topPositiveReviews = [...allReviews]
    .filter(r => r.rating === 5 && !usedIds.has(r.id))
    .sort((a, b) => {
      if (b.helpful !== a.helpful) return b.helpful - a.helpful;
      return b.reach - a.reach;
    })
    .slice(0, 3);

  // Si no hay suficientes positivas sin usar, tomar de las que ya están en las listas
  if (topPositiveReviews.length < 3) {
    const additionalPositives = [...allReviews]
      .filter(r => r.rating === 5)
      .sort((a, b) => {
        if (b.helpful !== a.helpful) return b.helpful - a.helpful;
        return b.reach - a.reach;
      })
      .filter(r => !topPositiveReviews.some(tp => tp.id === r.id))
      .slice(0, 3 - topPositiveReviews.length);
    
    topPositiveReviews = [...topPositiveReviews, ...additionalPositives];
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tops</h2>
        <p className="text-muted-foreground mt-1">
          Reseñas destacadas por puntuación y alcance
        </p>
      </div>

      {/* Selector de ubicación */}
      <div className="flex flex-wrap gap-2">
        {reviewsData.locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(loc.id)}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-all",
              selectedLocation === loc.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card border hover:bg-muted"
            )}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {allReviews.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No hay reseñas disponibles para esta ubicación
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top por Rating/Engagement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  Top {topByEngagement.length} - Mejor Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topByEngagement.map((review, idx) => (
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
                  Top {topByReach.length} - Mayor Alcance
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

          {/* Reseñas Destacadas */}
          {topPositiveReviews.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  Reseñas Destacadas (5 estrellas)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {topPositiveReviews.map((review) => (
                    <div key={review.id} className="p-4 rounded-lg border bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-base">{review.user}</p>
                          <p className="text-xs text-muted-foreground">{review.location}</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                        "{review.text}"
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                        <span className="flex items-center gap-1.5">
                          <ThumbsUp className="h-3 w-3" />
                          <span className="font-medium">{review.helpful}</span>
                          <span>likes</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-3 w-3" />
                          <span className="font-medium">{review.reach.toLocaleString()}</span>
                          <span>vistas</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}