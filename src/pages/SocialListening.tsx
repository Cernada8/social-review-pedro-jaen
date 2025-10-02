import React, { useState } from 'react';
import { KpiCard } from "@/components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  socialListeningData_30d,
  socialListeningData_6m, 
  socialListeningData_1y,
  socialListeningData_5y,
  socialListeningData_10y,
  reviewsData 
} from "@/lib/mockData";
import { BarChart3, Users, MessageCircle, Globe, Calendar } from "lucide-react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line
} from "recharts";

const SENTIMENT_COLORS = {
  positive: "hsl(142, 76%, 36%)",
  neutral: "hsl(47, 9%, 61%)",
  negative: "hsl(0, 84%, 60%)"
};

const timeRangeData = {
  '30d': { label: 'Últimos 30 días', data: socialListeningData_30d },
  '6m': { label: 'Últimos 6 meses', data: socialListeningData_6m },
  '1y': { label: 'Último año', data: socialListeningData_1y },
  '5y': { label: 'Últimos 5 años', data: socialListeningData_5y },
  '10y': { label: 'Últimos 10 años', data: socialListeningData_10y }
};

export default function SocialListening() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('10y');
  const currentData = timeRangeData[selectedTimeRange].data;
  
  const { kpis, demographics, geo, topics, languages, sources, topMentions, topInfluencers } = currentData;

  const sentimentData = [
    { name: "Positivo", value: kpis.sentiment.positive, color: SENTIMENT_COLORS.positive },
    { name: "Neutro", value: kpis.sentiment.neutral, color: SENTIMENT_COLORS.neutral },
    { name: "Negativo", value: kpis.sentiment.negative, color: SENTIMENT_COLORS.negative }
  ];

  const genderData = [
    { name: "Hombre", value: demographics.gender.male, color: "hsl(221, 83%, 53%)" },
    { name: "Mujer", value: demographics.gender.female, color: "hsl(333, 71%, 51%)" }
  ];

  const languageData = languages.map((lang, idx) => ({
    ...lang,
    color: `hsl(${idx * 60}, 70%, 50%)`
  }));

  const sourceData = sources.map((src, idx) => ({
    ...src,
    color: `hsl(${idx * 45 + 15}, 65%, 55%)`
  }));

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Social Listening</h2>
          <p className="text-muted-foreground mt-1">
            Análisis de menciones y alcance en redes sociales
          </p>
        </div>
        <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30d">Últimos 30 días</SelectItem>
            <SelectItem value="6m">Últimos 6 meses</SelectItem>
            <SelectItem value="1y">Último año</SelectItem>
            <SelectItem value="5y">Últimos 5 años</SelectItem>
            <SelectItem value="10y">Últimos 10 años</SelectItem>
          </SelectContent>
        </Select>
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
                  stroke="hsl(221, 83%, 53%)" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <KpiCard
          title="Alcance"
          value={formatValue(kpis.reach.value)}
          delta={kpis.reach.deltaPct}
          icon={<Users className="h-4 w-4" />}
          chart={
            kpis.reach.series && kpis.reach.series.length > 0 ? (
              <ResponsiveContainer width="100%" height={60}>
                <LineChart data={kpis.reach.series}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(142, 76%, 36%)" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : null
          }
        />
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sentimiento
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
                  <Bar dataKey="pct" fill="hsl(221, 83%, 53%)" radius={[8, 8, 0, 0]} />
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
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
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
                  className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors"
                  style={{
                    fontSize: `${Math.max(0.75, 0.875 + (topics.length - idx) * 0.03)}rem`
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
                          {`${entry.label}: ${entry.pct}%`}
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
              {topMentions.slice(0, 5).map((mention, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {mention.title || mention.domain}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{mention.domain}</p>
                    {mention.audience && (
                      <p className="text-xs text-muted-foreground">
                        Audiencia: {formatValue(mention.audience)}
                      </p>
                    )}
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
              {topInfluencers.slice(0, 5).map((influencer, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    {influencer.name ? influencer.name.charAt(0) : influencer.domain?.charAt(0) || '?'}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {influencer.name || influencer.domain}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {influencer.platform || 'Web'}
                    </p>
                    {influencer.audience && (
                      <p className="text-xs text-muted-foreground">
                        Audiencia: {formatValue(influencer.audience)}
                      </p>
                    )}
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