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
      value: 10,
      deltaPct: 67.0,
      series: lastWeeksSeries(4, (date, i) => ({ date, value: [0, 3, 2, 5][i] ?? 0 }))
    },
    reach: {
      value: 5_800_000,
      deltaPct: 25000.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        value: [200_000, 400_000, 600_000, 5_200_000][i] ?? 50_000
      }))
    },
    sentiment: {
      positive: 20.0,
      neutral: 80.0,
      negative: 0.0,
      series: lastWeeksSeries(4, (date, i) => ({
        date,
        positive: [0, 40, 0, 35][i] ?? 0,
        neutral: 100,
        negative: 0
      }))
    }
  },
  demographics: {
    gender: { male: 50.0, female: 50.0 },
    age: [
      { range: "25-34", pct: 50 },
      { range: "45-54", pct: 50 }
    ]
  },
  geo: [
    { country: "España", value: 60 },
    { country: "Estados Unidos", value: 30 },
    { country: "México", value: 10 }
  ],
  topics: ["cita", "cif", "doctor", "esquivel", "dirección", "agenda"],
  languages: [
    { code: "es", label: "Español", pct: 70.0 },
    { code: "en", label: "Inglés", pct: 20.0 },
    { code: "fr", label: "Francés", pct: 10.0 }
  ],
  sources: [
    { source: "Web", pct: 70.0 },
    { source: "X", pct: 30.0 }
  ],
  topMentions: [
    { title: "moovitapp.com", domain: "moovitapp.com" },
    { title: "doctoralia.com.mx", domain: "doctoralia.com.mx" },
    { title: "empresite.eleconomista.es", domain: "empresite.eleconomista.es" },
    { title: "einforma.com", domain: "einforma.com" },
    { title: "iberinform.es", domain: "iberinform.es" },
    { title: "doctoralia.co", domain: "doctoralia.co" }
  ],
  topInfluencers: [
    { name: "Abraham E. Vela Dib", platform: "X" },
    { name: "Michaela West, MD, PhD", platform: "X" },
    { name: "Elena Terrones", platform: "X" }
  ]
};

// ===== 6 meses =====
export const socialListeningData_6m = {
  kpis: {
    mentions: {
      value: 33,
      deltaPct: 120.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: (i % 5 === 0 ? 4 : i === 24 ? 9 : 2)
      }))
    },
    reach: {
      value: 5_800_000,
      deltaPct: 128700.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        value: i === 24 ? 5_100_000 : 40_000
      }))
    },
    sentiment: {
      positive: 48.5,
      neutral: 51.5,
      negative: 0.0,
      series: lastWeeksSeries(26, (date, i) => ({
        date,
        positive: i === 24 ? 65 : 45,
        neutral: 55,
        negative: 0
      }))
    }
  },
  demographics: {
    gender: { female: 66.7, male: 33.3 },
    age: [
      { range: "25-34", pct: 50 },
      { range: "45-54", pct: 50 }
    ]
  },
  geo: [
    { country: "España", value: 55 },
    { country: "Estados Unidos", value: 32 },
    { country: "México", value: 6 },
    { country: "Francia", value: 4 },
    { country: "Italia", value: 3 }
  ],
  topics: [
    "clínicas esquivel", "clinica esquivel", "esquivel", "doctor esquivel",
    "barcelona", "bilbao", "madrid", "valencia", "cita", "dirección"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 72.7 },
    { code: "en", label: "English", pct: 24.2 },
    { code: "fr", label: "French", pct: 3.0 }
  ],
  sources: [
    { source: "News/Blogs", pct: 54.5 },
    { source: "Web", pct: 33.3 },
    { source: "X", pct: 9.1 },
    { source: "Vimeo", pct: 3.0 }
  ],
  topMentions: [
    { title: "moovitapp.com", domain: "moovitapp.com" },
    { title: "doctoralia.com.mx", domain: "doctoralia.com.mx" },
    { title: "empresite.eleconomista.es", domain: "empresite.eleconomista.es" },
    { title: "einforma.com", domain: "einforma.com" },
    { title: "mindworkstx.com", domain: "mindworkstx.com" },
    { title: "iberinform.es", domain: "iberinform.es" },
    { title: "doctoralia.co", domain: "doctoralia.co" },
    { title: "familyallergy.com", domain: "familyallergy.com" }
  ],
  topInfluencers: [
    { name: "Abraham E. Vela Dib", platform: "X" }
  ]
};

// ===== 1 año =====
export const socialListeningData_1y = {
  kpis: {
    mentions: {
      value: 48,
      deltaPct: 66.0,
      series: lastMonthsSeries(12, (date, i) => ({ date, value: i === 10 ? 12 : 2 }))
    },
    reach: {
      value: 5_900_000,
      deltaPct: 8700.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        value: i === 10 ? 5_200_000 : 40_000
      }))
    },
    sentiment: {
      positive: 45.8,
      neutral: 54.2,
      negative: 0.0,
      series: lastMonthsSeries(12, (date, i) => ({
        date,
        positive: i === 10 ? 62 : 45,
        neutral: 55,
        negative: 0
      }))
    }
  },
  demographics: {
    gender: { female: 66.7, male: 33.3 },
    age: [
      { range: "25-34", pct: 50 },
      { range: "45-54", pct: 50 }
    ]
  },
  geo: [
    { country: "España", value: 52 },
    { country: "Estados Unidos", value: 35 },
    { country: "México", value: 6 },
    { country: "Italia", value: 4 },
    { country: "Francia", value: 3 }
  ],
  topics: [
    "clinica esquivel", "clínicas esquivel", "esquivel", "doctor esquivel",
    "madrid", "barcelona", "bilbao", "valencia"
  ],
  languages: [
    { code: "es", label: "Spanish", pct: 72.9 },
    { code: "en", label: "English", pct: 25.0 },
    { code: "fr", label: "French", pct: 2.1 }
  ],
  sources: [
    { source: "News/Blogs", pct: 56.3 },
    { source: "Web", pct: 33.3 },
    { source: "X", pct: 6.3 },
    { source: "Vimeo", pct: 2.1 },
    { source: "Reddit", pct: 2.1 }
  ],
  topMentions: [
    { title: "moovitapp.com", domain: "moovitapp.com" },
    { title: "doctoralia.com.mx", domain: "doctoralia.com.mx" },
    { title: "empresite.eleconomista.es", domain: "empresite.eleconomista.es" },
    { title: "einforma.com", domain: "einforma.com" },
    { title: "mindworkstx.com", domain: "mindworkstx.com" },
    { title: "iberinform.es", domain: "iberinform.es" },
    { title: "doctoralia.co", domain: "doctoralia.co" },
    { title: "vitals.com", domain: "vitals.com" }
  ],
  topInfluencers: [
    { name: "Hola Magazine", platform: "News" },
    { name: "Lecturas", platform: "News" },
    { name: "Semana", platform: "News" }
  ]
};

// ===== 5 años =====
export const socialListeningData_5y = {
  kpis: {
    mentions: { value: 147, deltaPct: 242.0, series: lastMonthsSeries(60, (date, i) => ({ date, value: i % 10 === 0 ? 15 : 3 })) },
    reach: { value: 13_700_000, deltaPct: 22.0, series: lastMonthsSeries(60, (date, i) => ({ date, value: i % 30 === 0 ? 5_200_000 : 50_000 })) },
    sentiment: { positive: 30.6, neutral: 65.3, negative: 4.1, series: lastMonthsSeries(60, (date, i) => ({ date, positive: i % 30 === 0 ? 40 : 30, neutral: 60, negative: 4 })) }
  },
  demographics: {
    gender: { female: 66.7, male: 33.3 },
    age: [
      { range: "25-34", pct: 50 },
      { range: "45-54", pct: 50 }
    ]
  },
  geo: [
    { country: "España", value: 52 },
    { country: "Estados Unidos", value: 35 },
    { country: "México", value: 6 },
    { country: "Italia", value: 4 },
    { country: "Rumanía", value: 3 }
  ],
  topics: ["camilo esquivel", "doctor esquivel", "clínica esquivel", "madrid", "bilbao", "barcelona", "opiniones"],
  languages: [
    { code: "es", label: "Spanish", pct: 52.4 },
    { code: "en", label: "English", pct: 29.3 },
    { code: "it", label: "Italian", pct: 5.4 },
    { code: "de", label: "German", pct: 4.8 },
    { code: "ro", label: "Romanian", pct: 2.7 }
  ],
  sources: [
    { source: "News/Blogs", pct: 62.6 },
    { source: "Web", pct: 33.3 },
    { source: "X", pct: 2.0 },
    { source: "Reddit", pct: 1.4 },
    { source: "Vimeo", pct: 0.7 }
  ],
  topMentions: [
    { title: "mapquest.com", domain: "mapquest.com" },
    { title: "moovitapp.com", domain: "moovitapp.com" },
    { title: "hola.com", domain: "hola.com" },
    { title: "lecturas.com", domain: "lecturas.com" },
    { title: "semana.es", domain: "semana.es" },
    { title: "stanfordhealthcare.org", domain: "stanfordhealthcare.org" },
    { title: "okdiario.com", domain: "okdiario.com" },
    { title: "doctoralia.com.mx", domain: "doctoralia.com.mx" },
    { title: "empresite.eleconomista.es", domain: "empresite.eleconomista.es" }
  ],
  topInfluencers: [
    { name: "Hola Magazine", platform: "News" },
    { name: "Lecturas", platform: "News" },
    { name: "Semana", platform: "News" }
  ]
};

// ===== 10 años =====
export const socialListeningData_10y = {
  kpis: {
    mentions: {
      value: 190,
      deltaPct: 2.0,
      series: lastMonthsSeries(120, (date, i) => ({ date, value: Math.floor(70 + Math.random() * 30) }))
    },
    reach: {
      value: 24_000_000,
      deltaPct: 7800.0,
      series: lastMonthsSeries(120, (date, i) => ({ date, value: Math.floor(2_000_000 + Math.random() * 800_000) }))
    },
    sentiment: {
      positive: 26.5,
      neutral: 66.3,
      negative: 7.2,
      series: lastMonthsSeries(120, (date, i) => ({
        date,
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
    "camilo", "esquivel", "clínicas esquivel", "carla barber", "madrid", "valencia",
    "bilbao", "opiniones", "labios", "botox", "coolsculpting", "láser", "resultados"
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
