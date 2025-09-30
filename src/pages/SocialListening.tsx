import { KpiCard } from "@/components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { socialListeningData } from "@/lib/mockData";
import { BarChart3, Users, MessageCircle, Globe } from "lucide-react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line
} from "recharts";

const SENTIMENT_COLORS = {
  positive: "hsl(var(--positive))",
  neutral: "hsl(var(--neutral))",
  negative: "hsl(var(--negative))"
};

export default function SocialListening() {
  const { kpis, demographics, geo, topics, languages, sources, topMentions, topInfluencers } = socialListeningData;

  const sentimentData = [
    { name: "Positivo", value: kpis.sentiment.positive, color: SENTIMENT_COLORS.positive },
    { name: "Neutro", value: kpis.sentiment.neutral, color: SENTIMENT_COLORS.neutral },
    { name: "Negativo", value: kpis.sentiment.negative, color: SENTIMENT_COLORS.negative }
  ];

  const genderData = [
    { name: "Hombre", value: demographics.gender.male, color: "hsl(var(--chart-1))" },
    { name: "Mujer", value: demographics.gender.female, color: "hsl(var(--chart-2))" }
  ];

  const languageData = languages.map((lang, idx) => ({
    ...lang,
    color: `hsl(var(--chart-${(idx % 5) + 1}))`
  }));

  const sourceData = sources.map((src, idx) => ({
    ...src,
    color: `hsl(var(--chart-${(idx % 5) + 1}))`
  }));

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Social Listening</h2>
        <p className="text-muted-foreground mt-1">
          Análisis de menciones y alcance en redes sociales
        </p>
      </div>

      {/* KPIs principales */}
      <div className="grid gap-6 md:grid-cols-3">
        <KpiCard
          title="Menciones"
          value={kpis.mentions.value}
          delta={kpis.mentions.deltaPct}
          icon={<MessageCircle className="h-4 w-4" />}
          chart={
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={kpis.mentions.series}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <KpiCard
          title="Alcance"
          value={`${(kpis.reach.value / 1000000).toFixed(1)}M`}
          delta={kpis.reach.deltaPct}
          icon={<Users className="h-4 w-4" />}
          chart={
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={kpis.reach.series}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={(entry) => {
                      const RADIAN = Math.PI / 180;
                      const radius = 70 + 20;
                      const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
                      const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill={entry.color}
                          textAnchor={x > entry.cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          className="text-xs font-medium"
                        >
                          {`${entry.name}: ${entry.value.toFixed(1)}%`}
                        </text>
                      );
                    }}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demografía */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Género</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.value.toFixed(1)}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Edad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographics.age}>
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pct" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Territorio y Topics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Territorio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geo.map((country) => (
                <div key={country.country}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{country.country}</span>
                    <span className="text-muted-foreground">{country.value}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${country.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Topics Principales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  style={{
                    fontSize: `${0.875 + (topics.length - idx) * 0.05}rem`
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Idiomas y Fuentes */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Idiomas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="pct"
                    labelLine={false}
                    label={(entry) => {
                      const RADIAN = Math.PI / 180;
                      const radius = 80 + 25;
                      const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
                      const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill={entry.fill}
                          textAnchor={x > entry.cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          className="text-xs font-medium"
                        >
                          {`${entry.code.toUpperCase()}: ${entry.pct}%`}
                        </text>
                      );
                    }}
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fuentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="pct"
                    labelLine={false}
                    label={(entry) => {
                      const RADIAN = Math.PI / 180;
                      const radius = 80 + 30;
                      const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
                      const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill={entry.fill}
                          textAnchor={x > entry.cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          className="text-xs font-medium"
                        >
                          {`${entry.source}: ${entry.pct}%`}
                        </text>
                      );
                    }}
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Mentions y Top Influencers */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Menciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topMentions.map((mention, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{mention.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{mention.domain}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Influencers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topInfluencers.map((influencer, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                    {influencer.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{influencer.name}</p>
                    <p className="text-xs text-muted-foreground">{influencer.platform}</p>
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