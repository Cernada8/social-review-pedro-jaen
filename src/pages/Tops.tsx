import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Eye, ThumbsUp } from "lucide-react";

// TOP por engagement (likes/"útil" priorizado; desempate por reach)
const topByEngagement = [
  { id: 301, user: "Campanilla Z.", location: "Málaga",  rating: 5, text: "El trato fue excelente desde el primer minuto. Equipo cercano y resultados perfectos.", helpful: 27, reach: 5200 },
  { id: 302, user: "Ángela G.",     location: "Serrano", rating: 5, text: "Recepción (Laura y Alba) de 10. Atención y resultados muy naturales.",        helpful: 24, reach: 4800 },
  { id: 303, user: "Mireya T.",     location: "Sevilla", rating: 5, text: "El Dr. Forero superó mis expectativas: cercanía, profesionalidad y resultado.", helpful: 18, reach: 4100 },
  { id: 304, user: "Daniel M.",     location: "Valencia",rating: 5, text: "Resultados increíbles con el Dr. Esquivel; explicación clara y seguimiento.",  helpful: 14, reach: 3200 },
  { id: 305, user: "Andrea D.",     location: "Bilbao",  rating: 5, text: "El Dr. Andrés es excepcional. Trato y resultado de 10.",                       helpful: 12, reach: 2600 },
];

// TOP por alcance (reach priorizado; puede incluir críticas muy virales)
const topByReach = [
  { id: 401, user: "Campanilla Z.", location: "Málaga",  rating: 5, text: "Experiencia perfecta de principio a fin. Repetiré sin duda.",  helpful: 27, reach: 5200 },
  { id: 402, user: "Ángela G.",     location: "Serrano", rating: 5, text: "Trato excepcional en recepción y resultado muy natural.",       helpful: 24, reach: 4800 },
  { id: 403, user: "Laura V.",      location: "Serrano", rating: 1, text: "Eché en falta seguimiento tras los tratamientos.",              helpful: 11, reach: 4500 }, // crítica con alto alcance
  { id: 404, user: "Mireya T.",     location: "Sevilla", rating: 5, text: "Atención impecable y resultado excelente con el Dr. Forero.",   helpful: 18, reach: 4100 },
  { id: 405, user: "Daniel M.",     location: "Valencia",rating: 5, text: "Muy buen resultado y explicación detallada del procedimiento.", helpful: 14, reach: 3200 },
];

const topPositiveReviews = [
  {
    id: 101,
    user: "Alicia R.",
    location: "Serrano",
    rating: 5,
    text: "Excelente profesional y persona. El Dr. Esquivel te trata con cercanía, aconsejándote y explicando todo con detalle. Resultados espectaculares.",
    helpful: 18,
    reach: 4100,
  },
  {
    id: 102,
    user: "Campanilla Z.",
    location: "Málaga",
    rating: 5,
    text: "El trato fue excelente desde el primer momento, todo el equipo muy profesional y cercano. Me sentí en las mejores manos, experiencia perfecta.",
    helpful: 22,
    reach: 5300,
  },
  {
    id: 103,
    user: "Mireya T.",
    location: "Sevilla",
    rating: 5,
    text: "Encantada con la clínica y con el Dr. Forero. Superó todas mis expectativas con un trato cercano, profesional y unos resultados increíbles.",
    helpful: 16,
    reach: 3600,
  },
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
              Top 5 - Mejor Engagement
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

      {/* Reseñas Destacadas */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-primary text-primary" />
            Reseñas Destacadas
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
    </div>
  );
}