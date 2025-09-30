import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string | number;
  delta?: number;
  icon?: React.ReactNode;
  chart?: React.ReactNode;
  className?: string;
}

export function KpiCard({ title, value, delta, icon, chart, className }: KpiCardProps) {
  const isPositive = delta && delta > 0;
  const isNegative = delta && delta < 0;

  return (
    <Card className={cn("transition-all hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {delta !== undefined && (
          <div className="flex items-center gap-1 text-xs mt-2">
            {isPositive && <TrendingUp className="h-3 w-3 text-positive" />}
            {isNegative && <TrendingDown className="h-3 w-3 text-negative" />}
            <span className={cn(
              "font-medium",
              isPositive && "text-positive",
              isNegative && "text-negative"
            )}>
              {delta > 0 ? "+" : ""}{delta.toFixed(1)}%
            </span>
            <span className="text-muted-foreground">vs período anterior</span>
          </div>
        )}
        {chart && <div className="mt-4">{chart}</div>}
      </CardContent>
    </Card>
  );
}
