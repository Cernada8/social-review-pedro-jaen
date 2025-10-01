import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, MessageCircle, Globe } from "lucide-react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line
} from "recharts";

// Mock data basada en socialListeningData2
const socialListeningData2 = {
  kpis: {
    mentions: { 
      value: 21000,           
      deltaPct: 906.0,        
      series: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        value: i < 24
          ? Math.floor(250 + Math.random() * 150)
          : Math.floor(600 + Math.random() * 600)
      }))
    },
    reach: {
      value: 654300000,
      deltaPct: 478.0,
      series: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        value: Math.floor(500000000 + Math.random() * 200000000)
      }))
    },
    sentiment: { 
      positive: 22.1,
      neutral: 70.6,
      negative: 7.3,
      series: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        positive: 18 + Math.random() * 10,
        neutral: 65 + Math.random() * 10,
        negative: 5 + Math.random() * 5
      }))
    }
  },
  demographics: {
    gender: { female: 53.2, male: 46.8 },
    age: [
      { range: "25-34", pct: 57.2 },
      { range: "35-44", pct: 32.1 },
      { range: "45-54", pct: 7.1 },
      { range: "55-64", pct: 3.6 }
    ]
  },
  geo: [
    { country: "España", value: 96 },
    { country: "Otros", value: 4 }
  ],
  topics: [
    "estética", "cirugía", "ácido hialurónico", "injerto capilar", "botox",
    "medicina estética", "clínicas", "lifting", "piel", "resultado",
    "operación", "rejuvenecimiento", "tratamientos", "clínica",
    "láser", "medicina", "capilar", "trasplante"
  ],
  languages: [
    { code: "es", label: "Español", pct: 97.9 },
    { code: "en", label: "Inglés", pct: 1.3 },
    { code: "ru", label: "Ruso", pct: 0.3 },
    { code: "pt", label: "Portugués", pct: 0.1 }
  ],
  sources: [
    { source: "News/Blogs", pct: 75.3 },
    { source: "Web", pct: 22.8 },
    { source: "X", pct: 1.1 },
    { source: "Vimeo", pct: 0.9 }
  ],
  topMentions: [
    { title: "Artículo sobre cirugía estética", domain: "elle.com" },
    { title: "Tendencias en medicina estética", domain: "marca.com" },
    { title: "Nuevos tratamientos faciales", domain: "elmundo.es" },
    { title: "Innovación en rejuvenecimiento", domain: "eltiempo.es" },
    { title: "Avances en trasplante capilar", domain: "mundodeportivo.com" }
  ],
  topInfluencers: [
    { name: "Elle Magazine", platform: "Fashion" },
    { name: "Marca", platform: "News" },
    { name: "El Mundo", platform: "News" },
    { name: "El Tiempo", platform: "News" }
  ]
};

// KPI Card Component
const KpiCard = ({ title, value, delta, icon, chart }) => (
  <Card className="transition-all hover:shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {delta && (
        <p className="text-xs text-muted-foreground">
          <span className={delta > 0 ? "text-green-600" : "text-red-600"}>
            {delta > 0 ? "+" : ""}{delta}%
          </span>
          {" vs período anterior"}
        </p>
      )}
      {chart && <div className="mt-2">{chart}</div>}
    </CardContent>
  </Card>
);

const SENTIMENT_COLORS = {
  positive: "hsl(var(--positive))",
  neutral: "hsl(var(--neutral))",
  negative: "hsl(var(--negative))"
};

export default function SocialListening2() {
  const { kpis, demographics, geo, topics, languages, sources, topMentions, topInfluencers } = socialListeningData2;

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
          value={kpis.mentions.value.toLocaleString()}
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
                          {`${entry.name}: ${Number(entry.value).toFixed(1)}%`}
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
                    label={(entry) => `${Number(entry.value).toFixed(1)}%`}
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