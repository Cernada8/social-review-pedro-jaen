// Mock data para el dashboard basado en datos reales
// ===== Helpers =====
const lastMonthsSeries = (months, mapFn) => {
  const now = new Date();
  return Array.from({ length: months }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (months - 1 - i), 1);
    return mapFn(d.toISOString(), i);
  });
};
const lastWeeksSeries = (weeks, mapFn) => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - (weeks - 1) * 7);
  return Array.from({ length: weeks }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return mapFn(d.toISOString(), i);
  });
};

// ===== 30 días =====
export const socialListeningData_30d = {
  kpis: {
    mentions: {
      value: 8,
      deltaPct: 120.0,
      series: lastWeeksSeries(4, (date, i) => ({ date, value: [1, 2, 1, 4][i] ?? 0 }))
    },
    reach: {
      value: 85_000,
      deltaPct: 180.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        value: [20_000, 18_000, 12_000, 35_000][i] ?? 10_000
      }))
    },
    sentiment: {
      positive: 50.0,
      neutral: 50.0,
      negative: 0.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        positive: [40, 55, 45, 60][i] ?? 50,
        neutral: 100 - ([40, 55, 45, 60][i] ?? 50),
        negative: 0
      }))
    }
  },
  demographics: {
    gender: { male: 60.0, female: 40.0 },
    age: [
      { range: "18-24", pct: 5 },
      { range: "25-34", pct: 55 },
      { range: "35-44", pct: 25 },
      { range: "45-54", pct: 10 },
      { range: "55-64", pct: 4 },
      { range: "65+", pct: 1 }
    ]
  },
  geo: [
    { country: "España", value: 92 },
    { country: "Otros", value: 8 }
  ],
  topics: ["pedro jaén", "madrid", "dermatólogo", "cita", "resultados", "láser"],
  languages: [
    { code: "es", label: "Español", pct: 95.0 },
    { code: "en", label: "Inglés", pct: 4.0 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 55.0 },
    { source: "Web", pct: 35.0 },
    { source: "Vimeo", pct: 10.0 }
  ],
  topMentions: [
    { title: "davidsaceda.com", domain: "davidsaceda.com" },
    { title: "estudioimagen.es", domain: "estudioimagen.es" },
    { title: "empresite.eleconomista.es", domain: "empresite.eleconomista.es" }
  ],
  topInfluencers: [
    { name: "Clínica Grupo Pedro Jaén", platform: "Web" },
    { name: "Unidad Tricología", platform: "Web" },
    { name: "Medicina Estética Badajoz", platform: "Web" }
  ]
};

// ===== 6 meses =====
export const socialListeningData_6m = {
  kpis: {
    mentions: {
      value: 42,
      deltaPct: 95.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: (i % 8 === 3 ? 4 : i % 13 === 10 ? 6 : 1)
      }))
    },
    reach: {
      value: 640_000,
      deltaPct: 260.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: (i % 13 === 10 ? 140_000 : i % 8 === 3 ? 80_000 : 12_000)
      }))
    },
    sentiment: {
      positive: 52.0,
      neutral: 47.0,
      negative: 1.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        positive: i % 6 === 0 ? 60 : 50,
        neutral: i % 6 === 0 ? 40 : 49,
        negative: 1
      }))
    }
  },
  demographics: {
    gender: { male: 62.0, female: 38.0 },
    age: [
      { range: "18-24", pct: 6 },
      { range: "25-34", pct: 52 },
      { range: "35-44", pct: 26 },
      { range: "45-54", pct: 11 },
      { range: "55-64", pct: 4 },
      { range: "65+", pct: 1 }
    ]
  },
  geo: [
    { country: "España", value: 93 },
    { country: "Otros", value: 7 }
  ],
  topics: [
    "pedro jaén", "dermatología", "madrid", "láser", "tratamientos", "cita", "resultados"
  ],
  languages: [
    { code: "es", label: "Español", pct: 96.0 },
    { code: "en", label: "Inglés", pct: 3.0 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 58.0 },
    { source: "Vimeo", pct: 27.0 },
    { source: "Web", pct: 15.0 }
  ],
  topMentions: [
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "larazon.es", domain: "larazon.es" },
    { title: "okdiario.com", domain: "okdiario.com" }
  ],
  topInfluencers: [
    { name: "La Vanguardia", platform: "News" },
    { name: "El Economista", platform: "News" }
  ]
};

// ===== 1 año =====
export const socialListeningData_1y = {
  kpis: {
    mentions: {
      value: 70,
      deltaPct: 140.0,
      series: lastMonthsSeries(12, (date, i) => ({ date, value: i % 6 === 4 ? 9 : i % 4 === 2 ? 6 : 3 }))
    },
    reach: {
      value: 2_900_000,
      deltaPct: 430.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        value: i % 6 === 4 ? 1_000_000 : i % 4 === 2 ? 420_000 : 120_000
      }))
    },
    sentiment: {
      positive: 48.0,
      neutral: 51.0,
      negative: 1.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        positive: i % 3 === 1 ? 55 : 45,
        neutral: 100 - (i % 3 === 1 ? 55 : 45) - 1,
        negative: 1
      }))
    }
  },
  demographics: {
    gender: { male: 64.0, female: 36.0 },
    age: [
      { range: "18-24", pct: 7 },
      { range: "25-34", pct: 50 },
      { range: "35-44", pct: 27 },
      { range: "45-54", pct: 11 },
      { range: "55-64", pct: 4 },
      { range: "65+", pct: 1 }
    ]
  },
  geo: [
    { country: "España", value: 94 },
    { country: "Otros", value: 6 }
  ],
  topics: [
    "pedro jaén", "madrid", "grupo pedro jaén", "dermatólogo", "piel", "estética", "láser"
  ],
  languages: [
    { code: "es", label: "Español", pct: 97.0 },
    { code: "en", label: "Inglés", pct: 2.0 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 60.0 },
    { source: "Vimeo", pct: 25.0 },
    { source: "Web", pct: 15.0 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "lavozdegalicia.es", domain: "lavozdegalicia.es" }
  ],
  topInfluencers: [
    { name: "Marca", platform: "News" },
    { name: "El Mundo", platform: "News" },
    { name: "ABC", platform: "News" }
  ]
};

// ===== 5 años =====
export const socialListeningData_5y = {
  kpis: {
    mentions: {
      value: 118,
      deltaPct: 210.0,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        value: i % 15 === 12 ? 12 : i % 20 === 6 ? 9 : 2
      }))
    },
    reach: {
      value: 8_900_000,
      deltaPct: 120.0,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        value: i % 20 === 6 ? 3_800_000 : i % 15 === 12 ? 1_600_000 : 60_000
      }))
    },
    sentiment: {
      positive: 32.0,
      neutral: 66.5,
      negative: 1.5,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        positive: i % 20 === 6 ? 40 : 30,
        neutral: i % 20 === 6 ? 60 : 69,
        negative: 1
      }))
    }
  },
  demographics: {
    gender: { male: 65.0, female: 35.0 },
    age: [
      { range: "18-24", pct: 6 },
      { range: "25-34", pct: 53 },
      { range: "35-44", pct: 25 },
      { range: "45-54", pct: 10 },
      { range: "55-64", pct: 4 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 95 },
    { country: "Otros", value: 5 }
  ],
  topics: ["pedro jaén", "dermatología", "grupo pedro jaén", "madrid", "piel", "estética", "láser"],
  languages: [
    { code: "es", label: "Español", pct: 96.5 },
    { code: "en", label: "Inglés", pct: 2.5 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 62.0 },
    { source: "Vimeo", pct: 27.0 },
    { source: "Web", pct: 11.0 }
  ],
  topMentions: [
    { title: "hola.com", domain: "hola.com" },
    { title: "lecturas.com", domain: "lecturas.com" },
    { title: "semana.es", domain: "semana.es" },
    { title: "okdiario.com", domain: "okdiario.com" },
    { title: "moovitapp.com", domain: "moovitapp.com" }
  ],
  topInfluencers: [
    { name: "Hola Magazine", platform: "News" },
    { name: "Lecturas", platform: "News" },
    { name: "Semana", platform: "News" }
  ]
};

// ===== 10 años =====  (basado en las imágenes que enviaste)
export const socialListeningData_10y = {
  kpis: {
    mentions: {
      value: 149,            // panel principal
      deltaPct: 831.0,       // “+831%”
      series: lastMonthsSeries(120, (date, i) => ({
        // actividad baja con picos en los años recientes
        date,
        value: (i % 30 === 12 ? 10 : i % 24 === 0 ? 7 : i % 18 === 10 ? 4 : 1)
      }))
    },
    reach: {
      value: 14_200_000,     // recorte “14.2M”
      deltaPct: 1300.0,      // “+1.3K%”
      series: lastMonthsSeries(120, (date, i) => ({
        date,
        value:
          (i % 30 === 12
            ? 4_000_000
            : i % 24 === 0
            ? 2_500_000
            : i % 18 === 10
            ? 900_000
            : 45_000)
      }))
    },
    sentiment: {
      positive: 19.5,
      neutral: 80.5,
      negative: 0.0,
      series: lastMonthsSeries(120, (date, i) => ({
        date,
        positive: i % 24 === 0 ? 35 : 15,
        neutral: 100 - (i % 24 === 0 ? 35 : 15),
        negative: 0
      }))
    }
  },
  demographics: {
    gender: { male: 100.0, female: 0.0 }, // donut: 100% male
    age: [
      { range: "25-34", pct: 100 }        // panel de edad: 25-34 = 100%
    ]
  },
  geo: [
    { country: "España", value: 96 },
    { country: "Otros", value: 4 }
  ],
  topics: [
    "pedro jaén", "dermatólogo", "grupo pedro jaén", "madrid", "piel",
    "clínica", "estética", "doctor pedro jaén", "fundación pedro jaén"
  ],
  languages: [
    { code: "es", label: "Español", pct: 98.0 },
    { code: "en", label: "Inglés", pct: 1.3 },
    { code: "de", label: "Alemán", pct: 0.7 }
  ],
  sources: [
    { source: "News/Blogs", pct: 64.4 },
    { source: "Vimeo", pct: 27.5 },
    { source: "Web", pct: 8.1 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "larazon.es", domain: "larazon.es" },
    { title: "okdiario.com", domain: "okdiario.com" },
    { title: "lavozdegalicia.es", domain: "lavozdegalicia.es" },
    { title: "vogue.es", domain: "vogue.es" }
  ],
  topInfluencers: [
    { name: "Marca", platform: "News" },
    { name: "El Mundo", platform: "News" },
    { name: "La Vanguardia", platform: "News" }
  ]
};


// ===== Helpers =====
const lastMonthsSerieAcido = (months, mapFn) => {
  const now = new Date();
  return Array.from({ length: months }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (months - 1 - i), 1);
    return mapFn(d.toISOString(), i);
  });
};
const lastWeeksSeriesAcido = (weeks, mapFn) => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - (weeks - 1) * 7);
  return Array.from({ length: weeks }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return mapFn(d.toISOString(), i);
  });
};

// ===== 30 días =====
export const acidoHialuronico_30d = {
  kpis: {
    mentions: {
      value: 2100,
      deltaPct: 139.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        value: [150, 120, 210, 550][i] ?? 100
      }))
    },
    reach: {
      value: 115_200_000,
      deltaPct: 1100.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        value: [8_000_000, 12_000_000, 25_000_000, 62_000_000][i] ?? 8_000_000
      }))
    },
    sentiment: {
      positive: 15.6,
      neutral: 77.0,
      negative: 7.4,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        positive: [12, 14, 18, 16][i] ?? 14,
        neutral: [80, 78, 73, 76][i] ?? 76,
        negative: [8, 8, 9, 8][i] ?? 8
      }))
    }
  },
  demographics: {
    gender: { female: 58.7, male: 41.3 },
    age: [
      { range: "25-34", pct: 64.3 },
      { range: "35-44", pct: 25.0 },
      { range: "45-54", pct: 7.1 },
      { range: "55-64", pct: 3.6 }
    ]
  },
  geo: [
    { country: "España", value: 90 },
    { country: "Otros", value: 10 }
  ],
  topics: [
    "ácido hialurónico", "estética", "cirugía", "cirugía plástica", "medicina estética",
    "pecho", "injerto capilar", "clínicas", "piel", "tratamiento", "botox", "exfoliación"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 95.1 },
    { code: "en", label: "English", pct: 1.9 },
    { code: "pt", label: "Portuguese", pct: 1.1 },
    { code: "ja", label: "Japanese", pct: 0.5 },
    { code: "it", label: "Italian", pct: 0.4 }
  ],
  sources: [
    { source: "Web", pct: 48.4 },
    { source: "News/Blogs", pct: 37.9 },
    { source: "X", pct: 13.5 },
    { source: "Vimeo", pct: 0.1 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "abc.es", domain: "abc.es" },
    { title: "elpais.com", domain: "elpais.com" },
    { title: "topdoctors.es", domain: "topdoctors.es" },
    { title: "grok", domain: "grok.com" },
    { title: "eventbrite.com", domain: "eventbrite.com" }
  ],
  topInfluencers: []
};

// ===== 6 meses =====
export const acidoHialuronico_6m = {
  kpis: {
    mentions: {
      value: 5700,
      deltaPct: 15.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: i === 25 ? 600 : (i % 5 === 0 ? 260 : 140)
      }))
    },
    reach: {
      value: 200_200_000,
      deltaPct: 70.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: i === 25 ? 85_000_000 : 6_000_000 + (i % 6) * 1_000_000
      }))
    },
    sentiment: {
      positive: 20.8,
      neutral: 74.0,
      negative: 5.2,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        positive: 20 + (i % 4),
        neutral: 75 - (i % 4),
        negative: 5 + (i % 2) * 0.2
      }))
    }
  },
  demographics: {
    gender: { female: 56.8, male: 43.2 },
    age: [
      { range: "25-34", pct: 65.6 },
      { range: "35-44", pct: 24.1 },
      { range: "45-54", pct: 6.9 },
      { range: "55-64", pct: 3.4 }
    ]
  },
  geo: [
    { country: "España", value: 88 },
    { country: "Otros", value: 12 }
  ],
  topics: [
    "ácido hialurónico", "cirugía estética", "medicina estética", "injerto capilar",
    "tratamientos", "piel", "facial", "clínicas", "botox", "lifting"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 97.4 },
    { code: "en", label: "English", pct: 0.9 },
    { code: "pt", label: "Portuguese", pct: 0.4 },
    { code: "sk", label: "Slovak", pct: 0.2 },
    { code: "ja", label: "Japanese", pct: 0.2 }
  ],
  sources: [
    { source: "News/Blogs", pct: 54.3 },
    { source: "Web", pct: 40.4 },
    { source: "X", pct: 4.8 },
    { source: "Vimeo", pct: 0.5 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "elpais.com", domain: "elpais.com" },
    { title: "topdoctors.es", domain: "topdoctors.es" }
  ],
  topInfluencers: []
};

// ===== 1 año =====
export const acidoHialuronico_1y = {
  kpis: {
    mentions: {
      value: 11_400,
      deltaPct: 102.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        value: [900, 850, 700, 650, 800, 900, 1100, 1000, 1200, 1400, 1800, 1600][i]
      }))
    },
    reach: {
      value: 339_200_000,
      deltaPct: 35.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        value: [28, 30, 22, 20, 24, 26, 30, 28, 32, 36, 96, 17].map(v => v * 1_000_000)[i]
      }))
    },
    sentiment: {
      positive: 21.7,
      neutral: 73.0,
      negative: 5.3,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        positive: 20 + (i % 5),
        neutral: 74 - (i % 5),
        negative: 5 + (i % 3) * 0.2
      }))
    }
  },
  demographics: {
    gender: { female: 57.4, male: 42.6 },
    age: [
      { range: "25-34", pct: 65.6 },
      { range: "35-44", pct: 24.1 },
      { range: "45-54", pct: 6.9 },
      { range: "55-64", pct: 3.4 }
    ]
  },
  geo: [
    { country: "España", value: 87 },
    { country: "Otros", value: 13 }
  ],
  topics: [
    "hialurónico", "estética", "cirugía", "medicina estética", "tratamientos", "piel",
    "facial", "clínicas", "rejuvenecimiento", "botox"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 97.9 },
    { code: "en", label: "English", pct: 0.8 },
    { code: "ru", label: "Russian", pct: 0.2 },
    { code: "it", label: "Italian", pct: 0.2 },
    { code: "de", label: "German", pct: 0.2 }
  ],
  sources: [
    { source: "News/Blogs", pct: 66.4 },
    { source: "Web", pct: 30.8 },
    { source: "X", pct: 2.4 },
    { source: "Vimeo", pct: 0.4 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "eltiempo.es", domain: "eltiempo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "sport.es", domain: "sport.es" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" }
  ],
  topInfluencers: []
};

// ===== 5 años =====
export const acidoHialuronico_5y = {
  kpis: {
    mentions: {
      value: 32_500,
      deltaPct: 317.0,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        value: (i % 12 === 3 ? 1500 : 700) + (i % 5) * 30
      }))
    },
    reach: {
      value: 912_500_000,
      deltaPct: 473.0,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        value: (i % 48 === 47 ? 95_000_000 : 18_000_000 + (i % 12) * 1_000_000)
      }))
    },
    sentiment: {
      positive: 25.3,
      neutral: 68.2,
      negative: 6.5,
      series: lastMonthsSeries(60, (date, i) => ({
        date,
        positive: 24 + (i % 6),
        neutral: 70 - (i % 6),
        negative: 6 + (i % 4) * 0.2
      }))
    }
  },
  demographics: {
    gender: { female: 55.4, male: 44.6 },
    age: [
      { range: "25-34", pct: 62.5 },
      { range: "35-44", pct: 28.1 },
      { range: "45-54", pct: 6.3 },
      { range: "55-64", pct: 3.1 }
    ]
  },
  geo: [
    { country: "España", value: 85 },
    { country: "Otros", value: 15 }
  ],
  topics: [
    "medicina estética", "ácido hialurónico", "estética", "injerto capilar",
    "tratamientos", "clínicas", "piel", "botox", "cirugía plástica"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 97.7 },
    { code: "en", label: "English", pct: 1.2 },
    { code: "de", label: "German", pct: 0.4 },
    { code: "it", label: "Italian", pct: 0.3 },
    { code: "ru", label: "Russian", pct: 0.1 }
  ],
  sources: [
    { source: "News/Blogs", pct: 76.5 },
    { source: "Web", pct: 22.1 },
    { source: "X", pct: 0.8 },
    { source: "Vimeo", pct: 0.5 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "eltiempo.es", domain: "eltiempo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "who.int", domain: "who.int" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "sport.es", domain: "sport.es" },
    { title: "abc.es", domain: "abc.es" }
  ],
  topInfluencers: []
};

// ===== 10 años =====
export const acidoHialuronico_10y = {
  kpis: {
    mentions: {
      value: 40_200,
      deltaPct: 1.0,
      series: lastMonthsSeries(120, (date, i) => ({
        date,
        value: 300 + (i % 12) * 20 + (i % 48 === 47 ? 1200 : 0)
      }))
    },
    reach: {
      value: 1_100_000_000,
      deltaPct: 630.0,
      series: lastMonthsSeries(120, (date, i) => ({
        date,
        value: 10_000_000 + (i % 12) * 1_000_000 + (i % 48 === 47 ? 85_000_000 : 0)
      }))
    },
    sentiment: {
      positive: 24.0,
      neutral: 69.1,
      negative: 6.9,
      series: lastMonthsSeries(120, (date, i) => ({
        date,
        positive: 23 + (i % 7),
        neutral: 70 - (i % 7),
        negative: 6 + (i % 5) * 0.2
      }))
    }
  },
  demographics: {
    gender: { female: 54.4, male: 45.6 },
    age: [
      { range: "25-34", pct: 62.5 },
      { range: "35-44", pct: 28.1 },
      { range: "45-54", pct: 6.3 },
      { range: "55-64", pct: 3.1 }
    ]
  },
  geo: [
    { country: "España", value: 83 },
    { country: "Otros", value: 17 }
  ],
  topics: [
    "ácido hialurónico", "estética", "medicina", "cirugía estética", "clínicas",
    "piel", "vitamina", "tratamientos", "cirugía plástica"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 97.5 },
    { code: "en", label: "English", pct: 1.5 },
    { code: "de", label: "German", pct: 0.3 },
    { code: "it", label: "Italian", pct: 0.3 },
    { code: "ru", label: "Russian", pct: 0.1 }
  ],
  sources: [
    { source: "News/Blogs", pct: 77.2 },
    { source: "Web", pct: 21.7 },
    { source: "X", pct: 0.7 },
    { source: "Vimeo", pct: 0.5 }
  ],
  topMentions: [
    { title: "marca.com", domain: "marca.com" },
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "eltiempo.es", domain: "eltiempo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "who.int", domain: "who.int" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "sport.es", domain: "sport.es" },
    { title: "abc.es", domain: "abc.es" }
  ],
  topInfluencers: []
};



export const reviewsData = {
  locations: [
    {
      id: "serrano143",
      name: "Serrano 143 (Madrid)",
      ratingAvg: 4.7,
      totalReviews: 2600,
      sentimentPct: { pos: 88, neu: 6, neg: 6 },
      businessReplyPct: 42,
      topicsRank: ["trato", "profesionalidad", "resultados", "seguimiento", "recepción"],
      employeesTop: [
        "Dr. Pedro Jaén",
        "Dra. Natalia Jiménez",
        "Dra. María Marcos",
        "Dr. Luis Ríos",
        "Dra. Alba Sánchez"
      ],
      reviews: [
        {
          id: "ser143-001",
          user: "Juliana Guzmán",
          source: "Google",
          rating: 1,
          dateRel: "hace 2 días",
          text: "Tuve una experiencia muy decepcionante en esta clínica. Desde el principio todo fue un desorden y no obtuve el seguimiento que esperaba.",
          location: "Serrano 143 (Madrid)",
          topics: ["organización", "seguimiento"],
          mentions: [],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "ser143-002",
          user: "Natalia",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 días",
          text: "Acudo a tratar mi piel con la doctora Natalia Jiménez, increíble profesional, encantadora y cercana. El trato en la clínica excelente también.",
          location: "Serrano 143 (Madrid)",
          topics: ["trato", "resultados"],
          mentions: ["Dra. Natalia Jiménez"],
          helpful: 11,
          reach: 3500,
          businessReply: {
            dateRel: "hace 2 días",
            text: "¡Gracias Natalia! Nos alegra saber que confías en nuestro equipo dermatológico."
          }
        }
      ]
    },
    {
      id: "serrano166",
      name: "Serrano 166 (Madrid)",
      ratingAvg: 4.8,
      totalReviews: 390,
      sentimentPct: { pos: 84, neu: 8, neg: 8 },
      businessReplyPct: 39,
      topicsRank: ["trato", "profesionalidad", "amabilidad", "precio", "espera"],
      employeesTop: [
        "Dra. Teresa Armenta",
        "Dra. Lara Victoria Carreño",
        "Dra. Belén Alonso",
        "Amparo (esteticista)",
        "Dr. José Ramón Martínez"
      ],
      reviews: [
        {
          id: "ser166-001",
          user: "Vanesa V",
          source: "Google",
          rating: 5,
          dateRel: "hace una semana",
          text: "La doctora Teresa Armenta es una profesional increíble. Gracias a ella conseguí resultados visibles y un trato inmejorable.",
          location: "Serrano 166 (Madrid)",
          topics: ["resultados", "trato", "profesionalidad"],
          mentions: ["Dra. Teresa Armenta"],
          helpful: 6,
          reach: 1900,
          businessReply: {
            dateRel: "hace 5 días",
            text: "¡Nos alegra leer tu reseña! Gracias por compartir tu experiencia."
          }
        },
        {
          id: "ser166-002",
          user: "MAYTE NORIEGA VACAS",
          source: "Google",
          rating: 1,
          dateRel: "hace 3 meses",
          text: "Me cobraron 100 € sin avisar que la visita informativa tenía coste. Llevo una semana esperando que me llamen y aún nada.",
          location: "Serrano 166 (Madrid)",
          topics: ["precio", "atención al cliente"],
          mentions: [],
          helpful: 4,
          reach: 1200,
          businessReply: null
        }
      ]
    },
    {
      id: "cinca30",
      name: "Cinca 30 (Madrid)",
      ratingAvg: 4.7,
      totalReviews: 180,
      sentimentPct: { pos: 86, neu: 7, neg: 7 },
      businessReplyPct: 34,
      topicsRank: ["capilar", "profesionalidad", "trato", "resultados", "espera"],
      employeesTop: [
        "Dr. Daniel Ortega Quijano",
        "Dr. Adrián Imbernón",
        "Dra. Rocío Gil",
        "Dr. Diego Buendía",
        "Dra. Ángela Hermosa"
      ],
      reviews: [
        {
          id: "cin30-001",
          user: "Adrian Gonzalez Castro",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 semanas",
          text: "La atención es muy profesional y de alta calidad. Explicaciones claras y detalladas, muy satisfecho con la consulta.",
          location: "Cinca 30 (Madrid)",
          topics: ["profesionalidad", "trato"],
          mentions: [],
          helpful: 5,
          reach: 1800,
          businessReply: null
        },
        {
          id: "cin30-002",
          user: "Lola G.G",
          source: "Google",
          rating: 1,
          dateRel: "hace 3 meses",
          text: "Escribo esta reseña para que mejoren su diagnóstico y atención. No me sentí escuchada en la consulta.",
          location: "Cinca 30 (Madrid)",
          topics: ["diagnóstico", "trato"],
          mentions: [],
          helpful: 3,
          reach: 1500,
          businessReply: null
        }
      ]
    },
    {
      id: "cinca27",
      name: "Cinca 27 (Madrid)",
      ratingAvg: 3.8,
      totalReviews: 27,
      sentimentPct: { pos: 60, neu: 10, neg: 30 },
      businessReplyPct: 20,
      topicsRank: ["tricología", "precio", "trato", "organización", "espera"],
      employeesTop: [
        "Dr. Daniel Ortega",
        "Dra. Cristina Pindado",
        "Dr. Juan Jiménez",
        "Dr. Saceda",
        "Dr. Jorge Planas"
      ],
      reviews: [
        {
          id: "cin27-001",
          user: "Luis",
          source: "Google",
          rating: 1,
          dateRel: "hace 5 meses",
          text: "Esperaba un trato más profesional. La atención fue fría y con poca empatía, no repetiré.",
          location: "Cinca 27 (Madrid)",
          topics: ["trato", "empatía"],
          mentions: [],
          helpful: 2,
          reach: 900,
          businessReply: null
        },
        {
          id: "cin27-002",
          user: "Marisol Muñoz",
          source: "Google",
          rating: 5,
          dateRel: "hace 11 meses",
          text: "El Dr. Daniel Ortega es un gran profesional, siempre atento y claro en sus explicaciones. Muy contenta con los resultados.",
          location: "Cinca 27 (Madrid)",
          topics: ["profesionalidad", "resultados"],
          mentions: ["Dr. Daniel Ortega"],
          helpful: 4,
          reach: 1300,
          businessReply: {
            dateRel: "hace 10 meses",
            text: "¡Muchas gracias por tu confianza, Marisol! Nos alegra que estés satisfecha."
          }
        }
      ]
    },
    {
      id: "alcobendas",
      name: "Alcobendas (La Moraleja)",
      ratingAvg: 4.7,
      totalReviews: 393,
      sentimentPct: { pos: 83, neu: 9, neg: 8 },
      businessReplyPct: 37,
      topicsRank: ["trato", "profesionalidad", "organización", "láser", "recepción"],
      employeesTop: [
        "Dra. Vanja",
        "Dra. María Asunción Ballester",
        "Dra. Izaskun Astoreca",
        "Dr. Adrián Imbernón",
        "Dra. Pantic"
      ],
      reviews: [
        {
          id: "alc-001",
          user: "Carmen Castillo Parejo",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 semanas",
          text: "Atención excelente. Lucía gestionó todo rápidamente y la Dra. María Asunción Ballester fue muy profesional y amable.",
          location: "Alcobendas (La Moraleja)",
          topics: ["trato", "profesionalidad"],
          mentions: ["Dra. María Asunción Ballester"],
          helpful: 5,
          reach: 1600,
          businessReply: null
        },
        {
          id: "alc-002",
          user: "Noelia Perez",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "El servicio de facturación ha sido pésimo. Tras múltiples llamadas y reclamaciones, aún no me han enviado la factura.",
          location: "Alcobendas (La Moraleja)",
          topics: ["facturación", "atención al cliente"],
          mentions: [],
          helpful: 7,
          reach: 2000,
          businessReply: {
            dateRel: "hace 3 semanas",
            text: "Lamentamos la incidencia. Nuestro equipo de administración se pondrá en contacto contigo."
          }
        }
      ]
    },
    {
      id: "total",
      name: "Total Empresa",
      ratingAvg: 4.5,
      totalReviews: 3590,
      sentimentPct: { pos: 82, neu: 9, neg: 9 },
      businessReplyPct: 36,
      topicsRank: ["trato", "profesionalidad", "resultados", "capilar", "recepción"],
      employeesTop: [
        "Dr. Pedro Jaén",
        "Dr. Daniel Ortega",
        "Dra. Natalia Jiménez",
        "Dra. Vanja",
        "Dra. Teresa Armenta"
      ],
      reviews: []
    }
  ]
};

// ===== Helpers =====
const lastMonthsSeriesDerma = (months, mapFn) => {
  const now = new Date();
  return Array.from({ length: months }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (months - 1 - i), 1);
    return mapFn(d.toISOString(), i);
  });
};
const lastWeeksSeriesDerma = (weeks, mapFn) => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - (weeks - 1) * 7);
  return Array.from({ length: weeks }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return mapFn(d.toISOString(), i);
  });
};

// ===== 30 días (realista) =====
export const dermaData_30d = {
  kpis: {
    mentions: {
      value: 95,
      deltaPct: 28.0,
      series: lastWeeksSeriesDerma(4, (date, i) => ({ date, value: [18, 22, 21, 34][i] ?? 18 }))
    },
    reach: {
      value: 1_200_000,
      deltaPct: 12.5,
      series: lastWeeksSeriesDerma(4, (date, i) => ({ date, value: [250_000, 260_000, 270_000, 420_000][i] ?? 250_000 }))
    },
    sentiment: {
      positive: 24.0,
      neutral: 70.0,
      negative: 6.0,
      series: lastWeeksSeriesDerma(4, (date, i) => ({
        date,
        positive: [20, 22, 24, 30][i] ?? 22,
        neutral: [72, 71, 70, 66][i] ?? 70,
        negative: [8, 7, 6, 4][i] ?? 6
      }))
    }
  },
  demographics: {
    gender: { female: 74.0, male: 26.0 },
    age: [
      { range: "18-24", pct: 13 },
      { range: "25-34", pct: 38 },
      { range: "35-44", pct: 27 },
      { range: "45-54", pct: 15 },
      { range: "55-64", pct: 5 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 88 },
    { country: "México", value: 4 },
    { country: "Argentina", value: 3 },
    { country: "Italia", value: 3 },
    { country: "Portugal", value: 2 }
  ],
  topics: ["dermatología", "piel", "piel seca", "rejuvenecimiento", "clínica", "tratamientos", "láser"],
  languages: [
    { code: "es", label: "Español", pct: 91.0 },
    { code: "it", label: "Italiano", pct: 3.0 },
    { code: "pt", label: "Portugués", pct: 2.5 },
    { code: "ru", label: "Ruso", pct: 1.8 },
    { code: "de", label: "Alemán", pct: 1.7 }
  ],
  sources: [
    { source: "News/Blogs", pct: 56.0 },
    { source: "Web", pct: 27.0 },
    { source: "Reddit", pct: 15.0 },
    { source: "Vimeo", pct: 1.0 },
    { source: "X", pct: 1.0 }
  ],
  topMentions: [
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "abc.es", domain: "abc.es" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "topdoctors.es", domain: "topdoctors.es" },
    { title: "laroche-posay.es", domain: "laroche-posay.es" }
  ],
  topInfluencers: [
    { name: "El Mundo", platform: "News" },
    { name: "La Vanguardia", platform: "News" },
    { name: "TopDoctors España", platform: "Web" }
  ]
};

// ===== 6 meses (realista) =====
export const dermaData_6m = {
  kpis: {
    mentions: {
      value: 230,
      deltaPct: 41.0,
      series: lastWeeksSeriesDerma(26, (date, i) => ({
        date,
        value: i % 6 === 4 ? 18 : i > 20 ? 12 : 7
      }))
    },
    reach: {
      value: 5_100_000,
      deltaPct: 63.0,
      series: lastWeeksSeriesDerma(26, (date, i) => ({
        date,
        value: i % 7 === 5 ? 380_000 : 160_000
      }))
    },
    sentiment: {
      positive: 22.5,
      neutral: 70.0,
      negative: 7.5,
      series: lastWeeksSeriesDerma(26, (date, i) => ({
        date,
        positive: 18 + (i % 8 === 0 ? 6 : 3),
        neutral: 72 - (i % 8 === 0 ? 2 : 1),
        negative: 9 - (i % 8 === 0 ? 1 : 0)
      }))
    }
  },
  demographics: {
    gender: { female: 74.0, male: 26.0 },
    age: [
      { range: "18-24", pct: 12 },
      { range: "25-34", pct: 37 },
      { range: "35-44", pct: 28 },
      { range: "45-54", pct: 16 },
      { range: "55-64", pct: 5 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 89 },
    { country: "México", value: 4 },
    { country: "Argentina", value: 3 },
    { country: "Italia", value: 2 },
    { country: "Portugal", value: 2 }
  ],
  topics: ["dermatólogo", "piel", "rejuvenecimiento", "acné", "peeling químico", "láser", "tratamientos"],
  languages: [
    { code: "es", label: "Español", pct: 91.0 },
    { code: "it", label: "Italiano", pct: 3.0 },
    { code: "pt", label: "Portugués", pct: 2.7 },
    { code: "ru", label: "Ruso", pct: 1.8 },
    { code: "de", label: "Alemán", pct: 1.5 }
  ],
  sources: [
    { source: "News/Blogs", pct: 55.0 },
    { source: "Web", pct: 27.5 },
    { source: "Reddit", pct: 16.0 },
    { source: "Vimeo", pct: 1.0 },
    { source: "X", pct: 0.5 }
  ],
  topMentions: [
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "topdoctors.es", domain: "topdoctors.es" }
  ],
  topInfluencers: [
    { name: "El Mundo Salud", platform: "News" }
  ]
};

// ===== 1 año (realista) =====
export const dermaData_1y = {
  kpis: {
    mentions: {
      value: 480,
      deltaPct: 62.0,
      series: lastMonthsSeriesDerma(12, (date, i) => ({
        date,
        value: [20, 22, 25, 28, 31, 35, 38, 40, 45, 55, 66, 75][i] ?? 30
      }))
    },
    reach: {
      value: 9_200_000,
      deltaPct: 85.0,
      series: lastMonthsSeriesDerma(12, (date, i) => ({
        date,
        value: [300_000, 320_000, 350_000, 420_000, 500_000, 600_000, 650_000, 700_000, 820_000, 900_000, 1_050_000, 1_290_000][i] ?? 400_000
      }))
    },
    sentiment: {
      positive: 21.0,
      neutral: 71.0,
      negative: 8.0,
      series: lastMonthsSeriesDerma(12, (date, i) => ({
        date,
        positive: 18 + Math.min(i * 0.4, 6),
        neutral: 74 - Math.min(i * 0.3, 5),
        negative: 8 + (i % 5 === 0 ? 1 : 0)
      }))
    }
  },
  demographics: {
    gender: { female: 75.0, male: 25.0 },
    age: [
      { range: "18-24", pct: 12 },
      { range: "25-34", pct: 38 },
      { range: "35-44", pct: 27 },
      { range: "45-54", pct: 16 },
      { range: "55-64", pct: 5 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 90 },
    { country: "México", value: 3 },
    { country: "Argentina", value: 3 },
    { country: "Italia", value: 2 },
    { country: "Portugal", value: 2 }
  ],
  topics: ["dermatología", "piel", "piel grasa", "piel seca", "rejuvenecimiento", "cremas", "láser"],
  languages: [
    { code: "es", label: "Español", pct: 91.0 },
    { code: "it", label: "Italiano", pct: 3.1 },
    { code: "pt", label: "Portugués", pct: 2.8 },
    { code: "ru", label: "Ruso", pct: 1.1 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 55.5 },
    { source: "Web", pct: 26.5 },
    { source: "Reddit", pct: 17.0 },
    { source: "Vimeo", pct: 0.6 },
    { source: "X", pct: 0.4 }
  ],
  topMentions: [
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "topdoctors.es", domain: "topdoctors.es" },
    { title: "laroche-posay.es", domain: "laroche-posay.es" }
  ],
  topInfluencers: [
    { name: "ABC Salud", platform: "News" },
    { name: "La Roche-Posay (ES)", platform: "Web" }
  ]
};

// ===== 5 años (realista, coherente con 10y) =====
export const dermaData_5y = {
  kpis: {
    mentions: {
      value: 1_300,
      deltaPct: 240.0,
      series: lastMonthsSeriesDerma(60, (date, i) => ({
        date,
        value: i < 24 ? 6 : i < 42 ? 12 : (i % 5 === 0 ? 28 : 20)
      }))
    },
    reach: {
      value: 22_000_000,
      deltaPct: 140.0,
      series: lastMonthsSeriesDerma(60, (date, i) => ({
        date,
        value: i < 24 ? 120_000 : i < 42 ? 250_000 : (i % 6 === 2 ? 900_000 : 500_000)
      }))
    },
    sentiment: {
      positive: 20.5,
      neutral: 71.5,
      negative: 8.0,
      series: lastMonthsSeriesDerma(60, (date, i) => ({
        date,
        positive: 18 + (i % 10 === 0 ? 6 : 3),
        neutral: 72 - (i % 10 === 0 ? 2 : 1),
        negative: 9 - (i % 10 === 0 ? 1 : 0)
      }))
    }
  },
  demographics: {
    gender: { female: 75.0, male: 25.0 },
    age: [
      { range: "18-24", pct: 11 },
      { range: "25-34", pct: 37 },
      { range: "35-44", pct: 29 },
      { range: "45-54", pct: 16 },
      { range: "55-64", pct: 5 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 90 },
    { country: "México", value: 3 },
    { country: "Argentina", value: 3 },
    { country: "Italia", value: 2 },
    { country: "Portugal", value: 2 }
  ],
  topics: ["dermatólogo", "piel", "rejuvenecimiento", "clínica", "acné", "manchas", "peeling químico", "láser"],
  languages: [
    { code: "es", label: "Español", pct: 90.8 },
    { code: "it", label: "Italiano", pct: 3.2 },
    { code: "pt", label: "Portugués", pct: 2.9 },
    { code: "ru", label: "Ruso", pct: 1.1 },
    { code: "de", label: "Alemán", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 55.0 },
    { source: "Web", pct: 26.8 },
    { source: "Reddit", pct: 17.2 },
    { source: "Vimeo", pct: 0.6 },
    { source: "X", pct: 0.4 }
  ],
  topMentions: [
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "topdoctors.es", domain: "topdoctors.es" },
    { title: "laroche-posay.es", domain: "laroche-posay.es" }
  ],
  topInfluencers: [
    { name: "El Mundo", platform: "News" },
    { name: "La Vanguardia", platform: "News" }
  ]
};

// ===== 10 años (datos de tus capturas) =====
export const dermaData_10y = {
  kpis: {
    mentions: {
      value: 1_900,          // 1.9K
      deltaPct: 2500.0,      // “+2.5K%” aproximado
      series: lastMonthsSeriesDerma(120, (date, i) => ({
        date,
        // baja actividad y crecimiento progresivo con picos al final (≈ 100-150)
        value: Math.max(0, Math.floor( (i < 84 ? i * 0.05 : (i - 70) * 0.9) + (i % 15 === 0 ? 25 : 0) ))
      }))
    },
    reach: {
      value: 37_400_000,     // 37.4M
      deltaPct: 959.0,       // +959%
      series: lastMonthsSeriesDerma(120, (date, i) => ({
        date,
        value: Math.floor( (i < 84 ? 80_000 : 120_000) + (i > 100 ? (i - 100) * 120_000 : 0) + (i % 24 === 12 ? 2_200_000 : 0) )
      }))
    },
    sentiment: {
      positive: 20.1,
      neutral: 71.9, // 100 - (20.1 + 8.0)
      negative: 8.0,
      series: lastMonthsSeriesDerma(120, (date, i) => ({
        date,
        positive: 16 + (i % 12 === 0 ? 6 : 3),
        neutral: 74 - (i % 10 === 0 ? 3 : 1),
        negative: 7 + (i % 18 === 0 ? 3 : 1)
      }))
    }
  },
  demographics: {
    gender: { female: 75.0, male: 25.0 },
    age: [
      { range: "18-24", pct: 12 },
      { range: "25-34", pct: 38 },
      { range: "35-44", pct: 27 },
      { range: "45-54", pct: 16 },
      { range: "55-64", pct: 5 },
      { range: "65+", pct: 2 }
    ]
  },
  geo: [
    { country: "España", value: 90 },
    { country: "Italia", value: 3 },
    { country: "Portugal", value: 3 },
    { country: "México", value: 2 },
    { country: "Argentina", value: 2 }
  ],
  topics: [
    "dermatólogo", "piel", "piel seca", "rejuvenecimiento", "clínica", "dermatología",
    "facial", "manchas", "acné", "láser", "peeling químico", "tratamientos", "cuidado"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 90.9 },
    { code: "it", label: "Italian", pct: 3.2 },
    { code: "pt", label: "Portuguese", pct: 2.9 },
    { code: "ru", label: "Russian", pct: 1.1 },
    { code: "de", label: "German", pct: 1.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 54.5 },
    { source: "Web", pct: 26.2 },
    { source: "Reddit", pct: 18.6 },
    { source: "Vimeo", pct: 0.5 },
    { source: "X", pct: 0.2 }
  ],
  topMentions: [
    { title: "elmundo.es", domain: "elmundo.es" },
    { title: "mundodeportivo.com", domain: "mundodeportivo.com" },
    { title: "lavanguardia.com", domain: "lavanguardia.com" },
    { title: "eleconomista.es", domain: "eleconomista.es" },
    { title: "abc.es", domain: "abc.es" },
    { title: "topdoctors.es", domain: "topdoctors.es" },
    { title: "laroche-posay.es", domain: "laroche-posay.es" }
  ],
  topInfluencers: [
    { name: "El Mundo", platform: "News" },
    { name: "Mundo Deportivo", platform: "News" },
    { name: "La Vanguardia", platform: "News" },
    { name: "TopDoctors España", platform: "Web" }
  ]
};


