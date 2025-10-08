import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Eye, ThumbsUp } from "lucide-react";

// TOP por engagement (likes/"útil" priorizado; desempate por reach)
// Nota: no hay datos reales de helpful/reach en las reseñas proporcionadas → se dejan en 0
const topByEngagement = [
  // Serrano 166
  { id: 2001, user: "Vanesa V", location: "Serrano 166", rating: 5, text: "La doctora Teresa Armenta es una profesional increíble. Resultados visibles y trato inmejorable.", helpful: 0, reach: 0 },
  // Alcobendas
  { id: 2002, user: "Carmen Castillo Parejo", location: "Alcobendas", rating: 5, text: "Atención excelente. Lucía gestionó todo y la Dra. María Asunción Ballester, muy profesional y amable.", helpful: 0, reach: 0 },
  { id: 2003, user: "Rocío Gómez", location: "Alcobendas", rating: 5, text: "La Doctora Vanja es una gran profesional, amable y tranquilizadora. Encantada.", helpful: 0, reach: 0 },
  // Serrano 143
  { id: 2004, user: "Natalia", location: "Serrano 143", rating: 5, text: "Trato excelente. La Dra. Natalia Jiménez es una profesional increíble, cercana y encantadora.", helpful: 0, reach: 0 },
  // Cinca 30
  { id: 2005, user: "Adrian Gonzalez Castro", location: "Cinca 30", rating: 5, text: "Atención muy profesional y de alta calidad. Explicaciones claras y detalladas.", helpful: 0, reach: 0 },
];

// TOP por alcance (reach priorizado; puede incluir críticas muy virales)
// Nota: sin reach real → 0, incluyo una negativa representativa
const topByReach = [
  // Serrano 143 negativa visible en tu listado
  { id: 3001, user: "Juliana Guzmán", location: "Serrano 143", rating: 1, text: "Experiencia decepcionante. Desorden desde el principio y falta de seguimiento.", helpful: 0, reach: 0 },
  // Alcobendas (atención/facturación, caso negativo)
  { id: 3002, user: "Noelia Perez", location: "Alcobendas", rating: 1, text: "Atención al cliente y facturación pésimos. Varias reclamaciones sin respuesta.", helpful: 0, reach: 0 },
  // Cinca 27 (quejas)
  { id: 3003, user: "Luis", location: "Cinca 27", rating: 1, text: "Atención fría y poca empatía. No repetiré.", helpful: 0, reach: 0 },
  // Positivas representativas
  { id: 3004, user: "Miguel Iglesias", location: "Serrano 143", rating: 5, text: "Excelente experiencia con la Dra. Marta Garay. Trato impecable.", helpful: 0, reach: 0 },
  { id: 3005, user: "Begoña Figuerola Adan", location: "Serrano 166", rating: 5, text: "Excelente trato y servicio. Resultados reales.", helpful: 0, reach: 0 },
];

const topPositiveReviews = [
  // Serrano 143
  {
    id: 1001,
    user: "Isabel Gonzalez Vita",
    location: "Serrano 143",
    rating: 5,
    text: "La Dra. Natalia Jiménez es encantadora. Explica el tratamiento adecuado con detalle y transmite confianza.",
    helpful: 0,
    reach: 0,
  },
  // Alcobendas
  {
    id: 1002,
    user: "Marisa Dmd",
    location: "Alcobendas",
    rating: 5,
    text: "Fantástica la atención del Dr. Imbernón. Gran profesional.",
    helpful: 0,
    reach: 0,
  },
  // Cinca 30
  {
    id: 1003,
    user: "Mirian",
    location: "Cinca 30",
    rating: 5,
    text: "Recomiendo al Dr. Daniel Ortega Quijano por su gran profesionalidad. Tras varios tricólogos, él marcó la diferencia.",
    helpful: 0,
    reach: 0,
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
        {/* Top por Rating/Engagement */}
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
