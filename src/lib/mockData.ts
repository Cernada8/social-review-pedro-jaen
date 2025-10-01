// Mock data para el dashboard basado en datos reales

export const socialListeningData = {
  kpis: {
    mentions: { 
      value: 83, 
      deltaPct: 2.0, 
      series: Array.from({length: 30}, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        value: Math.floor(70 + Math.random() * 30)
      }))
    },
    reach: { 
      value: 2400000, 
      deltaPct: 7800.0,
      series: Array.from({length: 30}, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        value: Math.floor(2000000 + Math.random() * 800000)
      }))
    },
    sentiment: { 
      positive: 26.5, 
      neutral: 66.3, 
      negative: 7.2,
      series: Array.from({length: 30}, (_, i) => ({
        date: new Date(2024, 8, i + 1).toISOString(),
        positive: 20 + Math.random() * 15,
        neutral: 60 + Math.random() * 15,
        negative: 5 + Math.random() * 10
      }))
    }
  },
  demographics: {
    gender: { male: 66.7, female: 33.3 },
    age: [
      { range: "25-34", pct: 50 }, 
      { range: "45-54", pct: 50 }
    ]
  },
  geo: [
    { country: "España", value: 92 }, 
    { country: "Otros", value: 8 }
  ],
  topics: [
    "camilo", "esquivel", "clínicas esquivel", "carla barber", 
    "madrid", "valencia", "bilbao", "opiniones", "new patients",
    "labios", "botox", "coolsculpting", "láser", "resultados"
  ],
  languages: [
    { code: "es", label: "Español", pct: 91.8 },
    { code: "en", label: "Inglés", pct: 5.4 },
    { code: "fr", label: "Francés", pct: 2.4 },
    { code: "otros", label: "Otros", pct: 0.4 }
  ],
  sources: [
    { source: "Noticias/Blogs", pct: 50.6 },
    { source: "Web", pct: 39.8 },
    { source: "Vimeo", pct: 4.8 },
    { source: "X", pct: 2.4 },
    { source: "Reddit", pct: 2.4 }
  ],
  topMentions: [
    { title: "\"Nunca me llegué a casar\" ... Carla Barber", domain: "hola.com" },
    { title: "Currículum amoroso... Carla Barber", domain: "lecturas.com" },
    { title: "Nuevos detalles... Laura Matamoros", domain: "telecinco.es" },
    { title: "Ex de Carla Barber...", domain: "semana.es" },
    { title: "Opinión positiva del Dr. Esquivel", domain: "stanfordhealthcare.org" }
  ],
  topInfluencers: [
    { name: "Hola Magazine", platform: "News" },
    { name: "Lecturas", platform: "News" },
    { name: "Telecinco", platform: "TV" },
    { name: "Semana", platform: "News" }
  ]
};

export const socialListeningData2 = {
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
      value: 654300000,   // 654.3M
      deltaPct: 478.0,    // +478%
      series: []
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
      { range: "18-24", pct: 0.0 },
      { range: "25-34", pct: 57.2 },
      { range: "35-44", pct: 32.1 },
      { range: "45-54", pct: 7.1 },
      { range: "55-64", pct: 3.6 },
      { range: "65+",   pct: 0.0 }
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
    { code: "es", label: "Español",   pct: 97.9 },
    { code: "en", label: "Inglés",    pct: 1.3 },
    { code: "ru", label: "Ruso",      pct: 0.3 },
    { code: "pt", label: "Portugués", pct: 0.1 },
    { code: "id", label: "Indonesio", pct: 0.1 }
  ],

  sources: [
    { source: "News/Blogs", pct: 75.3 },
    { source: "Web",       pct: 22.8 },
    { source: "X",         pct: 1.1 },
    { source: "Vimeo",     pct: 0.9 }
  ],

  topMentions: [
    { domain: "elle.com",           authority: 97, audience: 170000000 },
    { domain: "marca.com",          authority: 97, audience: 127600000 },
    { domain: "www.elmundo.es",     authority: 97, audience: 91400000 },
    { domain: "elmundo.es",         authority: 97, audience: 91400000 },
    { domain: "eltiempo.es",        authority: 93, audience: 56700000 },
    { domain: "mundodeportivo.com", authority: 96, audience: 46200000 },
    { domain: "www.lavanguardia.com", authority: 97, audience: 41900000 },
    { domain: "lavanguardia.com",   authority: 97, audience: 41900000 },
    { domain: "sport.es",           authority: 96, audience: 27000000 }
  ],

  topInfluencers: [
    { domain: "www.elmundo.es",     authority: 97, audience: 91400000 },
    { domain: "elmundo.es",         authority: 97, audience: 91400000 },
    { domain: "eltiempo.es",        authority: 93, audience: 56700000 },
    { domain: "mundodeportivo.com", authority: 96, audience: 46200000 },
    { domain: "www.lavanguardia.com", authority: 97, audience: 41900000 },
    { domain: "lavanguardia.com",   authority: 97, audience: 41900000 },
    { domain: "sport.es",           authority: 96, audience: 27000000 },
    { domain: "www.abc.es",         authority: 98, audience: 15400000 },
    { domain: "concepto.de",        authority: 95, audience: null } // no se ve la audiencia en la captura
  ]
};


export const reviewsData = {
  locations: [
    {
      id: "serrano",
      name: "Serrano (Madrid)",
      ratingAvg: 4.5,
      totalReviews: 1100,
      sentimentPct: { pos: 74, neu: 16, neg: 10 },
      businessReplyPct: 38,
      topicsRank: ["labios", "trato recepción", "resultados", "coolsculpting", "seguimiento"],
      employeesTop: ["Dr. Esquivel", "Dra. Marina", "Dra. Erika", "Recepción (Laura, Alba)"],
      reviews: [
        {
          id: "ser-001",
          user: "Laura V.",
          source: "Google",
          rating: 1,
          dateRel: "hace 5 días",
          text: "He realizado varios tratamientos y la experiencia no ha sido la esperada. Falta de seguimiento después de los procedimientos.",
          location: "Serrano (Madrid)",
          topics: ["seguimiento", "espera"],
          mentions: [],
          helpful: 7,
          reach: 2100,
          businessReply: null
        },
        {
          id: "ser-002",
          user: "Ángela G.",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 meses",
          text: "Trato del personal de recepción Laura y Alba excepcional. Muy profesionales y atentas en todo momento. Los resultados han superado mis expectativas.",
          location: "Serrano (Madrid)",
          topics: ["trato recepción", "resultados"],
          mentions: ["Recepción"],
          helpful: 13,
          reach: 3800,
          businessReply: { dateRel: "hace 2 meses", text: "¡Gracias por tu confianza! Nos alegra saber que has tenido una experiencia positiva." }
        }
      ]
    },
    {
      id: "valencia",
      name: "Valencia",
      ratingAvg: 4.3,
      totalReviews: 305,
      sentimentPct: { pos: 68, neu: 12, neg: 20 },
      businessReplyPct: 32,
      topicsRank: ["labios", "botox", "precio", "trato recepción", "resultados"],
      employeesTop: ["Dr. Esquivel", "Dra. Patricia", "Recepción"],
      reviews: []
    },
    {
      id: "barcelona",
      name: "Barcelona",
      ratingAvg: 4.4,
      totalReviews: 300,
      sentimentPct: { pos: 70, neu: 10, neg: 20 },
      businessReplyPct: 28,
      topicsRank: ["láser", "labios", "coolsculpting", "resultados", "seguimiento"],
      employeesTop: ["Dr. Esquivel", "Dra. Maja", "Recepción"],
      reviews: []
    },
    {
      id: "malaga",
      name: "Málaga",
      ratingAvg: 4.7,
      totalReviews: 430,
      sentimentPct: { pos: 80, neu: 8, neg: 12 },
      businessReplyPct: 45,
      topicsRank: ["labios", "botox", "trato recepción", "resultados", "coolsculpting"],
      employeesTop: ["Dr. Esquivel", "Dra. Marina", "Recepción (Gema)"],
      reviews: []
    },
    {
      id: "bilbao",
      name: "Bilbao",
      ratingAvg: 4.5,
      totalReviews: 322,
      sentimentPct: { pos: 76, neu: 9, neg: 15 },
      businessReplyPct: 36,
      topicsRank: ["labios", "botox", "resultados", "precio", "trato recepción"],
      employeesTop: ["Dr. Andrés", "Dr. Esquivel", "Recepción (Itsaso)"],
      reviews: []
    },
    {
      id: "sevilla",
      name: "Sevilla",
      ratingAvg: 4.6,
      totalReviews: 300,
      sentimentPct: { pos: 78, neu: 8, neg: 14 },
      businessReplyPct: 41,
      topicsRank: ["labios", "coolsculpting", "trato recepción", "resultados", "botox"],
      employeesTop: ["Dr. Forero", "Dr. Esquivel", "Recepción (Gema)"],
      reviews: []
    },
    {
      id: "total",
      name: "Total Empresa",
      ratingAvg: 4.53,
      totalReviews: 2757,
      sentimentPct: { pos: 74, neu: 10, neg: 16 },
      businessReplyPct: 37,
      topicsRank: ["labios", "botox", "trato recepción", "láser", "resultados"],
      employeesTop: ["Dr. Esquivel", "Dr. Forero", "Dr. Andrés", "Dra. Marina", "Dra. Erika"],
      reviews: []
    }
  ]
};
