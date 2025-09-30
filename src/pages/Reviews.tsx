import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviewsData } from "@/lib/mockData";
import { Star, ThumbsUp, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Reviews() {
  const [selectedLocation, setSelectedLocation] = useState("total");

  const location = reviewsData.locations.find(loc => loc.id === selectedLocation);

  if (!location) return null;

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Google Reviews</h2>
        <p className="text-muted-foreground mt-1">
          Análisis detallado de reseñas por ubicación
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

      {/* KPIs de la ubicación */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rating Medio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{location.ratingAvg}</span>
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Reseñas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{location.totalReviews.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-positive" />
                <span className="font-medium">{location.sentimentPct.pos}%</span>
                <span className="text-muted-foreground">Positivo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-negative" />
                <span className="font-medium">{location.sentimentPct.neg}%</span>
                <span className="text-muted-foreground">Negativo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              % Respuestas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{location.businessReplyPct}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Topics y Empleados */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Temas Recurrentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {location.topicsRank.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${100 - idx * 15}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium capitalize">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Más Mencionado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {location.employeesTop.map((employee, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                    {employee.split(' ')[0].charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{employee}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reseñas de ejemplo */}
      {location.reviews.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Reseñas Destacadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {location.reviews.map((review) => (
                <div key={review.id} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold">
                        {review.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{review.dateRel}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {review.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm mb-3">{review.text}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {review.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted rounded-md text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {review.helpful}
                    </span>
                    <span>{review.reach.toLocaleString()} vistas</span>
                  </div>
                  {review.businessReply && (
                    <div className="mt-3 p-3 bg-muted/50 rounded-lg border-l-2 border-primary">
                      <p className="text-xs font-medium mb-1">
                        Respuesta de la clínica · {review.businessReply.dateRel}
                      </p>
                      <p className="text-sm">{review.businessReply.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
