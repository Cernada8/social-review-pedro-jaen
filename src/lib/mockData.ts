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

export const reviewsData = {
  locations: [
    // Añadido dentro de reviewsData.locations:

    {
      id: "fuenlabrada",
      name: "Fuenlabrada",
      ratingAvg: 4.8,
      totalReviews: 250,
      sentimentPct: { pos: 85, neu: 7, neg: 8 },
      businessReplyPct: 34,
      topicsRank: ["trato", "profesionalidad", "gestión", "tasación", "entrega"],
      employeesTop: [
        "Elena",
        "Víctor",
        "Moncef",
        "Henrique",
        "Yeray"
      ],
      reviews: [
        {
          id: "fue-001",
          user: "Raúl",
          source: "Google",
          rating: 5,
          dateRel: "hace 5 días",
          text: "El trato recibido por Elena en la compra del coche ha sido muy bueno. Siempre atenta a las preguntas que tenía.",
          location: "Fuenlabrada",
          topics: ["trato", "asesoramiento"],
          mentions: ["Elena"],
          helpful: 6,
          reach: 1800,
          businessReply: null
        },
        {
          id: "fue-002",
          user: "Khalma14",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Un verdadero placer el trato recibido. Raúl, con una profesionalidad excepcional, me supo guiar en todo momento.",
          location: "Fuenlabrada",
          topics: ["trato", "profesionalidad"],
          mentions: ["Raúl"],
          helpful: 9,
          reach: 2400,
          businessReply: null
        },
        {
          id: "fue-003",
          user: "Claudia",
          source: "Google",
          rating: 5,
          dateRel: "hace una semana",
          text: "Encantada con el trato de Elena, es toda una profesional. Gracias a ella compramos con total asesoramiento.",
          location: "Fuenlabrada",
          topics: ["trato", "asesoramiento"],
          mentions: ["Elena"],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "fue-004",
          user: "Daniel Chanona",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 meses",
          text: "Raúl fue honesto, directo y muy profesional. Me ofreció la mejor gestión posible.",
          location: "Fuenlabrada",
          topics: ["gestión", "profesionalidad"],
          mentions: ["Raúl"],
          helpful: 7,
          reach: 1900,
          businessReply: null
        },
        {
          id: "fue-005",
          user: "Moncef El Houmnani",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Llevé mi coche a tasar, trato muy profesional por parte del tasador. Muy recomendable.",
          location: "Fuenlabrada",
          topics: ["tasación", "profesionalidad"],
          mentions: ["Moncef"],
          helpful: 5,
          reach: 1600,
          businessReply: null
        }
      ]
    },

    {
      id: "paterna",
      name: "Valencia Paterna",
      ratingAvg: 4.0,
      totalReviews: 3900,
      sentimentPct: { pos: 68, neu: 10, neg: 22 },
      businessReplyPct: 28,
      topicsRank: ["trato", "gestión", "profesionalidad", "entrega", "transparencia"],
      employeesTop: [
        "Julián",
        "Tono",
        "Valeria",
        "Nicolás",
        "Alejandro"
      ],
      reviews: [
        {
          id: "pat-001",
          user: "Carla Agüera",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 semanas",
          text: "Desde el primer momento me atendieron Tono y Valeria con amabilidad, resolviendo todas mis dudas.",
          location: "Valencia Paterna",
          topics: ["trato", "asesoramiento"],
          mentions: ["Tono", "Valeria"],
          helpful: 10,
          reach: 2600,
          businessReply: null
        },
        {
          id: "pat-002",
          user: "Miller Gaona",
          source: "Google",
          rating: 1,
          dateRel: "hace 2 semanas",
          text: "Compramos un coche y al ir a recogerlo vimos fugas de aceite. Mala experiencia.",
          location: "Valencia Paterna",
          topics: ["transparencia", "postventa"],
          mentions: [],
          helpful: 11,
          reach: 3000,
          businessReply: null
        },
        {
          id: "pat-003",
          user: "Ángel Llop",
          source: "Google",
          rating: 5,
          dateRel: "hace una semana",
          text: "Muy buen trato en Ocasión Plus Paterna. Agradezco la atención a Alejandro, Julián y Valeria.",
          location: "Valencia Paterna",
          topics: ["trato", "profesionalidad"],
          mentions: ["Alejandro", "Julián", "Valeria"],
          helpful: 9,
          reach: 2400,
          businessReply: null
        },
        {
          id: "pat-004",
          user: "MARCH",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Estamos muy felices. El proceso desde la información hasta la entrega fue excelente.",
          location: "Valencia Paterna",
          topics: ["gestión", "entrega"],
          mentions: [],
          helpful: 6,
          reach: 1700,
          businessReply: null
        },
        {
          id: "pat-005",
          user: "Marisa Gracia Jiménez",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "El comercial Julio me aseguró cosas que luego no fueron ciertas. Muy mala experiencia.",
          location: "Valencia Paterna",
          topics: ["transparencia", "gestión"],
          mentions: ["Julio"],
          helpful: 8,
          reach: 2000,
          businessReply: null
        }
      ]
    }
    ,
    {
      id: "coruna",
      name: "A Coruña",
      ratingAvg: 4.4,
      totalReviews: 730,
      sentimentPct: { pos: 72, neu: 10, neg: 18 },
      businessReplyPct: 35,
      topicsRank: ["trato", "profesionalidad", "gestión", "precio", "entrega"],
      employeesTop: [
        "Johan Mena",
        "Germán Manjón",
        "Alejandro González",
        "Anthony David",
        "Naiborys"
      ],
      reviews: [
        {
          id: "cor-001",
          user: "Juliana Guzmán",
          source: "Google",
          rating: 1,
          dateRel: "hace 2 días",
          text: "A mis suegros, gente mayor y sin experiencia alguna en estos trámites, les contaron medias verdades con el tema de la reserva del coche.",
          location: "A Coruña",
          topics: ["transparencia", "trato"],
          mentions: [],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "cor-002",
          user: "Orlando Delgado",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Tuve una experiencia excelente. Johan me atendió fue super amable y carismático desde el primer momento, haciéndome sentir muy cómodo durante todo el proceso.",
          location: "A Coruña",
          topics: ["trato", "profesionalidad"],
          mentions: ["Johan Mena"],
          helpful: 11,
          reach: 3500,
          businessReply: {
            dateRel: "hace 3 semanas",
            text: "¡Gracias Orlando! Nos alegra saber que tu experiencia fue positiva."
          }
        },
        {
          id: "cor-003",
          user: "Pedro Alperi Vidal",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 semanas",
          text: "Todo muy bien la verdad, compré el coche en Ferrol y me atendió Jorge, súper majo y atento, tanto él como la chica de administración y el otro chico.",
          location: "A Coruña",
          topics: ["trato", "gestión"],
          mentions: ["Jorge"],
          helpful: 6,
          reach: 1900,
          businessReply: null
        },
        {
          id: "cor-004",
          user: "Erika Vazquez dacosta",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "Germán, muy poco profesional, te vende una cosa y todo palabrerías, queríamos vender nuestro coche y dos meses allí para nada… nunca coge el teléfono.",
          location: "A Coruña",
          topics: ["comunicación", "profesionalidad"],
          mentions: ["Germán"],
          helpful: 7,
          reach: 2000,
          businessReply: null
        },
        {
          id: "cor-005",
          user: "María Romasanta",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Acabo de vender ahí mi coche y lo recomiendo 100%. Valoran mejor que en otras empresas de compraventa y el chico que me atendió, Anthony, muy profesional.",
          location: "A Coruña",
          topics: ["tasación", "profesionalidad"],
          mentions: ["Anthony David"],
          helpful: 9,
          reach: 2800,
          businessReply: null
        },
        {
          id: "cor-006",
          user: "cinta g s",
          source: "Google",
          rating: 1,
          dateRel: "hace una semana",
          text: "Estaba contenta hasta que necesité cambiar el altavoz en garantía. Al día siguiente de comprarlo me di cuenta de que estaba roto. Después de un mes, sigo esperando.",
          location: "A Coruña",
          topics: ["garantía", "postventa"],
          mentions: [],
          helpful: 4,
          reach: 1200,
          businessReply: null
        },
        {
          id: "cor-007",
          user: "Abel fernández ferrero",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 meses",
          text: "Atendido por Germán Manjón, un gran profesional ya que te aconseja lo mejor posible con un trato educado y muy profesional. Totalmente recomendable.",
          location: "A Coruña",
          topics: ["trato", "asesoramiento"],
          mentions: ["Germán Manjón"],
          helpful: 5,
          reach: 1800,
          businessReply: null
        },
        {
          id: "cor-008",
          user: "Silvia Corral",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Solo quiero agradecer a OcasionPlus A Coruña el haber contratado a Silvia Corral. Su trato amable y profesional hizo todo el proceso muy fácil.",
          location: "A Coruña",
          topics: ["trato", "profesionalidad"],
          mentions: ["Silvia Corral"],
          helpful: 6,
          reach: 1600,
          businessReply: null
        }
      ]
    },
    {
      id: "vallehermoso",
      name: "Madrid Vallehermoso",
      ratingAvg: 4.4,
      totalReviews: 610,
      sentimentPct: { pos: 74, neu: 8, neg: 18 },
      businessReplyPct: 32,
      topicsRank: ["tasación", "trato", "profesionalidad", "rapidez", "precio"],
      employeesTop: [
        "Óscar Erdoiza",
        "José Carlos",
        "Diego",
        "David",
        "Samy"
      ],
      reviews: [
        {
          id: "val-001",
          user: "Raúl Rodrigo",
          source: "Google",
          rating: 1,
          dateRel: "hace 4 semanas",
          text: "Terrible experiencia para venderles mi coche. Lo peor es su procedimiento de que, tras firmar el acuerdo de compra venta, se quedan con tu coche unos días.",
          location: "Madrid Vallehermoso",
          topics: ["proceso", "gestión"],
          mentions: [],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "val-002",
          user: "Natividad Ruiz-Olivares",
          source: "Google",
          rating: 5,
          dateRel: "hace 4 meses",
          text: "Mención especial a Oscar, siempre atento a mis intereses e inquietudes, resolviendo todas mis dudas de forma amable. Nos acompañó en todo el proceso.",
          location: "Madrid Vallehermoso",
          topics: ["trato", "asesoramiento"],
          mentions: ["Óscar"],
          helpful: 11,
          reach: 3500,
          businessReply: null
        },
        {
          id: "val-003",
          user: "CRISTINA",
          source: "Google",
          rating: 5,
          dateRel: "hace 4 meses",
          text: "Rápido, sencillo y muy profesional! Acabo de vender mi coche y es donde mejor me han tratado, sin duda. José es fantástico, claro y resolutivo.",
          location: "Madrid Vallehermoso",
          topics: ["rapidez", "profesionalidad"],
          mentions: ["José"],
          helpful: 9,
          reach: 2800,
          businessReply: null
        },
        {
          id: "val-004",
          user: "Francisco Perez",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "Pésima experiencia. Llevo el coche y me dan una estimación de precio. Voy un mes después y me ofrecen un 35% menos con la excusa de que el mercado ha cambiado.",
          location: "Madrid Vallehermoso",
          topics: ["tasación", "transparencia"],
          mentions: [],
          helpful: 7,
          reach: 2000,
          businessReply: null
        },
        {
          id: "val-005",
          user: "Pelayo Rey",
          source: "Google",
          rating: 5,
          dateRel: "hace 6 meses",
          text: "Un sitio perfecto para vender el coche. El tasador Oscar fue muy amable y en seguida llegamos a un acuerdo. Se ocupó de todo el papeleo y a los tres días tenía el dinero.",
          location: "Madrid Vallehermoso",
          topics: ["tasación", "rapidez"],
          mentions: ["Óscar"],
          helpful: 10,
          reach: 3200,
          businessReply: null
        },
        {
          id: "val-006",
          user: "Zulma Peña",
          source: "Google",
          rating: 1,
          dateRel: "hace 5 meses",
          text: "NO LO RECOMIENDO! No le doy menos porque no hay. Alquilar coches en este lugar, los encargados son super groseros (Javier).",
          location: "Madrid Vallehermoso",
          topics: ["trato", "alquiler"],
          mentions: ["Javier"],
          helpful: 6,
          reach: 1900,
          businessReply: null
        },
        {
          id: "val-007",
          user: "Juan Bosco Pérez Conde",
          source: "Google",
          rating: 5,
          dateRel: "hace 5 meses",
          text: "Muy buena experiencia vendiendo mi coche. Óscar Erdoiza me atendió con amabilidad, honestidad y transparencia. Me ofrecieron un precio justo.",
          location: "Madrid Vallehermoso",
          topics: ["tasación", "transparencia"],
          mentions: ["Óscar Erdoiza"],
          helpful: 8,
          reach: 2400,
          businessReply: null
        },
        {
          id: "val-008",
          user: "Manuel Taberna",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Vendí un vehículo con Diego de Vallehermoso y, pese a todos los contratiempos, estoy muy satisfecho con su gestión y la venta. Muy recomendable.",
          location: "Madrid Vallehermoso",
          topics: ["gestión", "profesionalidad"],
          mentions: ["Diego"],
          helpful: 5,
          reach: 1600,
          businessReply: null
        }
      ]
    },
    {
      id: "terrassa",
      name: "Terrassa",
      ratingAvg: 4.2,
      totalReviews: 2000,
      sentimentPct: { pos: 70, neu: 10, neg: 20 },
      businessReplyPct: 30,
      topicsRank: ["trato", "profesionalidad", "tasación", "gestión", "postventa"],
      employeesTop: [
        "Javier Blanco",
        "Yolanda Gil",
        "Pablo",
        "Evelyn",
        "Bruno"
      ],
      reviews: [
        {
          id: "ter-001",
          user: "Eugenio Mayorgas",
          source: "Google",
          rating: 1,
          dateRel: "hace 3 semanas",
          text: "Acabo de visitar el concesionario AutoHero de Terrassa y mi experiencia ha sido extremadamente decepcionante.",
          location: "Terrassa",
          topics: ["atención", "servicio"],
          mentions: [],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "ter-002",
          user: "Eva Alcocer",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 meses",
          text: "Compré mi coche con la ayuda de Yolanda y no puedo estar más satisfecha. Me ofreció un servicio excelente, rápido y sencillo, explicándome toda la información.",
          location: "Terrassa",
          topics: ["trato", "asesoramiento"],
          mentions: ["Yolanda"],
          helpful: 11,
          reach: 3500,
          businessReply: null
        },
        {
          id: "ter-003",
          user: "Роман Янішевський",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 meses",
          text: "Quiero agradecer sinceramente a Javier Blanco, de la empresa Ocasión Plus, por su excelente atención y profesionalismo.",
          location: "Terrassa",
          topics: ["profesionalidad", "trato"],
          mentions: ["Javier Blanco"],
          helpful: 9,
          reach: 2800,
          businessReply: null
        },
        {
          id: "ter-004",
          user: "Sonia Grau Del Amo",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "Me siento estafada con esta empresa ya que fui a vender mi coche me lo tasaron por un precio y me comentaron que si lo dejaba en gestión de ventas me daban más.",
          location: "Terrassa",
          topics: ["tasación", "transparencia"],
          mentions: [],
          helpful: 7,
          reach: 2000,
          businessReply: null
        },
        {
          id: "ter-005",
          user: "Teresa",
          source: "Google",
          rating: 5,
          dateRel: "hace 3 semanas",
          text: "Quiero agradecer al equipo de Ocasión Plus Terrassa, especialmente a Pablo. Una persona super amable y profesional, que nos agilizó todos los trámites.",
          location: "Terrassa",
          topics: ["gestión", "profesionalidad"],
          mentions: ["Pablo"],
          helpful: 6,
          reach: 1900,
          businessReply: null
        },
        {
          id: "ter-006",
          user: "Oleguer Mas i Larrañeta",
          source: "Google",
          rating: 1,
          dateRel: "hace 3 semanas",
          text: "La atención post venta es pésima. Compré un coche allí y no ha dado más que problemas, he tenido que perseguirles semanas y meses para que los solventaran.",
          location: "Terrassa",
          topics: ["postventa", "garantía"],
          mentions: [],
          helpful: 10,
          reach: 3200,
          businessReply: null
        },
        {
          id: "ter-007",
          user: "Ana Chamorro",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 meses",
          text: "Hoy por fin he recibido mi Mini Cooper. Pablo ha sido mi asesor, y estoy muy contenta con el trato recibido.",
          location: "Terrassa",
          topics: ["trato", "entrega"],
          mentions: ["Pablo"],
          helpful: 8,
          reach: 2400,
          businessReply: null
        },
        {
          id: "ter-008",
          user: "Conchi Tejero",
          source: "Google",
          rating: 4,
          dateRel: "hace 3 semanas",
          text: "Nuestra experiencia en la venta de un coche fue muy positiva, nos atendió Yolanda Gil y lo gestionó muy rápido y bien. El coche nos lo tasaron por el valor que esperábamos!",
          location: "Terrassa",
          topics: ["tasación", "gestión"],
          mentions: ["Yolanda Gil"],
          helpful: 5,
          reach: 1600,
          businessReply: null
        }
      ]
    },
    {
      id: "torremolinos",
      name: "Málaga Torremolinos",
      ratingAvg: 4.3,
      totalReviews: 2200,
      sentimentPct: { pos: 73, neu: 9, neg: 18 },
      businessReplyPct: 33,
      topicsRank: ["trato", "profesionalidad", "tasación", "asesoramiento", "entrega"],
      employeesTop: [
        "Ezequiel",
        "Javier",
        "Rafael Hidalgo",
        "Juan Pablo",
        "Héctor"
      ],
      reviews: [
        {
          id: "tor-001",
          user: "Ray N. Ruíz Rodríguez",
          source: "Google",
          rating: 1,
          dateRel: "hace 5 días",
          text: "He adquirido un coche ahí y la verdad estoy decepcionado. Mal servicio al cliente, llamas y escribes y no atienden.",
          location: "Málaga Torremolinos",
          topics: ["comunicación", "postventa"],
          mentions: [],
          helpful: 8,
          reach: 2100,
          businessReply: null
        },
        {
          id: "tor-002",
          user: "leopoldo longa arias",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Muy buena experiencia comprando mi coche de segunda mano. Ezequiel ha sido muy atento y profesional en todo momento, explicando cada detalle con transparencia.",
          location: "Málaga Torremolinos",
          topics: ["trato", "transparencia"],
          mentions: ["Ezequiel"],
          helpful: 11,
          reach: 3500,
          businessReply: null
        },
        {
          id: "tor-003",
          user: "Mouad El jably",
          source: "Google",
          rating: 5,
          dateRel: "hace un mes",
          text: "Muy buena experiencia en este concesionario. Rafael fue atento desde el primer momento, explicó todo con mucha claridad y resolvió mis dudas sin prisas.",
          location: "Málaga Torremolinos",
          topics: ["trato", "asesoramiento"],
          mentions: ["Rafael"],
          helpful: 9,
          reach: 2800,
          businessReply: null
        },
        {
          id: "tor-004",
          user: "Lorena Jiménez",
          source: "Google",
          rating: 1,
          dateRel: "hace un mes",
          text: "Compré un Dacia Duster nuevo con toda la ilusión, pero la experiencia dejó mucho que desear. Desde el primer momento me mintieron con los plazos de entrega.",
          location: "Málaga Torremolinos",
          topics: ["entrega", "transparencia"],
          mentions: [],
          helpful: 7,
          reach: 2000,
          businessReply: null
        },
        {
          id: "tor-005",
          user: "Julia Leyte",
          source: "Google",
          rating: 5,
          dateRel: "hace 4 meses",
          text: "He ido a OcasionPlus de Torremolinos. Lo cierto es que estaba un poco indecisa, pero tuve la grandísima suerte de que me atendiera Javier. Es un gran profesional.",
          location: "Málaga Torremolinos",
          topics: ["profesionalidad", "asesoramiento"],
          mentions: ["Javier"],
          helpful: 10,
          reach: 3200,
          businessReply: null
        },
        {
          id: "tor-006",
          user: "Diego Lopez",
          source: "Google",
          rating: 1,
          dateRel: "hace 3 meses",
          text: "Estafadores. Tanto el vendedor Javier como el servicio de postventa. Llevé al mes el coche a Norauto para que le hagan un diagnóstico.",
          location: "Málaga Torremolinos",
          topics: ["postventa", "garantía"],
          mentions: ["Javier"],
          helpful: 6,
          reach: 1900,
          businessReply: null
        },
        {
          id: "tor-007",
          user: "Roberto Batista",
          source: "Google",
          rating: 5,
          dateRel: "hace 2 meses",
          text: "Mi experiencia en OCASIONPLUS fue espectacular, más aún con ayuda de Juan Pablo, ha sido excelente desde primer momento. Respondió todas mis dudas.",
          location: "Málaga Torremolinos",
          topics: ["trato", "asesoramiento"],
          mentions: ["Juan Pablo"],
          helpful: 8,
          reach: 2400,
          businessReply: null
        },
        {
          id: "tor-008",
          user: "maria reyes",
          source: "Google",
          rating: 5,
          dateRel: "hace 4 semanas",
          text: "Compré un coche la semana pasada y quedé muy feliz. Quiero agradecer la atención de Héctor, fue muy amable, un excelente servicio y siempre estuvo muy pendiente.",
          location: "Málaga Torremolinos",
          topics: ["trato", "servicio"],
          mentions: ["Héctor"],
          helpful: 5,
          reach: 1600,
          businessReply: null
        }
      ]
    },
    {
      id: "total",
      name: "Total Empresa",
      ratingAvg: 4.3,
      totalReviews: 5540,
      sentimentPct: { pos: 72, neu: 9, neg: 19 },
      businessReplyPct: 32,
      topicsRank: ["trato", "profesionalidad", "tasación", "gestión", "postventa"],
      employeesTop: [
        "Ezequiel",
        "Óscar Erdoiza",
        "Javier Blanco",
        "Johan Mena",
        "Germán Manjón"
      ],
      reviews: []
    }
  ]
};