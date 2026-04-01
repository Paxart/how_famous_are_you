// app/cinetrivia/data/tarantino.ts
import type { TriviaDefinition } from "./types";

export const tarantinoTrivia: TriviaDefinition = {
  id: "tarantino",
  title: {
    en: "Farlander TarantinoTrivia",
    es: "Farlander TarantinoTrivia",
  },
  description: {
    en: "Hardcore questions from Quentin Tarantino’s movie universe.",
    es: "Preguntas hardcore del universo cinematográfico de Tarantino.",
  },

  // Icono cuadrado del pie
  coverImageUrl: "/cinetrivia/tarantino_icon.png",

  // Fondo estilo Tarantino (dorado / naranja / rojo sangre)
  background:
    "radial-gradient(circle at top, #facc15 0%, #f97316 25%, #b91c1c 55%, #020617 90%)",

  // ---------------------------------------------------------------------------
  // 20 PREGUNTAS (5 CON IMAGEN INTERCALADAS)
  // ---------------------------------------------------------------------------
  questions: [
    // 1) Hawthorne Grill – Pulp Fiction (TEXTO)
    {
      id: "t1",
      text: {
        en: `In "Pulp Fiction", which diner do Pumpkin and Honey Bunny try to rob?`,
        es: `En “Pulp Fiction”, ¿qué cafetería intentan atracar Pumpkin y Honey Bunny?`,
      },
      options: {
        en: [
          "Jackrabbit Slim’s",
          "Big Kahuna Burger",
          "Hawthorne Grill",
          "Red Apple Diner",
        ],
        es: [
          "Jackrabbit Slim’s",
          "Big Kahuna Burger",
          "Hawthorne Grill",
          "Red Apple Diner",
        ],
      },
      correctIndex: 2,
    },

    // 2) Gogo Yubari (IMAGEN)
    {
      id: "t2",
      text: {
        en: "Who is this deadly schoolgirl armed with a meteor hammer?",
        es: "¿Quién es esta colegiala mortal armada con un martillo meteoro?",
      },
      imageUrl: "/cinetrivia/questions/taran1-gogo.png",
      options: {
        en: ["Gogo Yubari", "O-Ren Ishii", "Sofie Fatale", "Elle Driver"],
        es: ["Gogo Yubari", "O-Ren Ishii", "Sofie Fatale", "Elle Driver"],
      },
      correctIndex: 0,
    },

    // 3) Red Apple cigarettes (TEXTO)
    {
      id: "t3",
      text: {
        en: "Which fake cigarette brand appears again and again in Tarantino’s movies?",
        es: "¿Qué marca falsa de cigarrillos aparece una y otra vez en las pelis de Tarantino?",
      },
      options: {
        en: ["Big Kahuna", "Red Apple", "Lucky Star", "Jackrabbit Slim"],
        es: ["Big Kahuna", "Red Apple", "Lucky Star", "Jackrabbit Slim"],
      },
      correctIndex: 1,
    },

    // 4) Ordell Robbie (IMAGEN)
    {
      id: "t4",
      text: {
        en: "This crime mastermind appears in “Jackie Brown”. What is his name?",
        es: "Este cerebro criminal aparece en “Jackie Brown”. ¿Cuál es su nombre?",
      },
      imageUrl: "/cinetrivia/questions/taran2-ordell.png",
      options: {
        en: ["Marsellus Wallace", "Ordell Robbie", "Louis Gara", "Drexl Spivey"],
        es: ["Marsellus Wallace", "Ordell Robbie", "Louis Gara", "Drexl Spivey"],
      },
      correctIndex: 1,
    },

    // 5) La Louisiane – bar (TEXTO)
    {
      id: "t5",
      text: {
        en: "What is the name of the bar where the tense basement card game takes place in “Inglourious Basterds”?",
        es: "¿Cómo se llama el bar donde ocurre la tensa partida de cartas en el sótano en “Inglourious Basterds”?",
      },
      options: {
        en: ["Le Gamaar", "La Louisiane", "The Underground", "Chez Shosanna"],
        es: ["Le Gamaar", "La Louisiane", "The Underground", "Chez Shosanna"],
      },
      correctIndex: 1,
    },

    // 6) Donny Donowitz (IMAGEN)
    {
      id: "t6",
      text: {
        en: "What is the name of this brutal member of the Basterds?",
        es: "¿Cómo se llama este brutal miembro de los Basterds?",
      },
      imageUrl: "/cinetrivia/questions/taran3-donny.png",
      options: {
        en: [
          "Hugo Stiglitz",
          "Sgt. Wilhelm Wicki",
          "Donny Donowitz",
          "Dieter Hellstrom",
        ],
        es: [
          "Hugo Stiglitz",
          "Sgt. Wilhelm Wicki",
          "Donny Donowitz",
          "Dieter Hellstrom",
        ],
      },
      correctIndex: 2,
    },

    // 7) Black Mamba – Kill Bill (TEXTO)
    {
      id: "t7",
      text: {
        en: 'In "Kill Bill", what is the codename of The Bride within the Deadly Viper Assassination Squad?',
        es: 'En “Kill Bill”, ¿cuál es el nombre en clave de The Bride dentro del Deadly Viper Assassination Squad?',
      },
      options: {
        en: ["Copperhead", "Cottonmouth", "California Mountain Snake", "Black Mamba"],
        es: ["Copperhead", "Cottonmouth", "California Mountain Snake", "Black Mamba"],
      },
      correctIndex: 3,
    },

    // 8) Clarence Worley (IMAGEN)
    {
      id: "t8",
      text: {
        en: "Who is this protagonist from “True Romance” (written by Tarantino)?",
        es: "¿Quién es este protagonista de “True Romance” (escrita por Tarantino)?",
      },
      imageUrl: "/cinetrivia/questions/taran4-clarence.png",
      options: {
        en: ["Mickey Knox", "Butch Coolidge", "Clarence Worley", "Vincent Vega"],
        es: ["Mickey Knox", "Butch Coolidge", "Clarence Worley", "Vincent Vega"],
      },
      correctIndex: 2,
    },

    // 9) Mr. Blonde movie (TEXTO)
    {
      id: "t9",
      text: {
        en: "Mr. Blonde, the sadistic professional, appears in which Tarantino film?",
        es: "Mr. Blonde, el profesional sádico, aparece en qué película de Tarantino?",
      },
      options: {
        en: ["Pulp Fiction", "Reservoir Dogs", "Jackie Brown", "Death Proof"],
        es: ["Pulp Fiction", "Reservoir Dogs", "Jackie Brown", "Death Proof"],
      },
      correctIndex: 1,
    },

    // 10) Mr. Blue (IMAGEN)
    {
      id: "t10",
      text: {
        en: "This is one of the original Reservoir Dogs. What is his color name?",
        es: "Este es uno de los Reservoir Dogs originales. ¿Cuál es su nombre de color?",
      },
      imageUrl: "/cinetrivia/questions/taran5-mrblue.png",
      options: {
        en: ["Mr. Brown", "Mr. Orange", "Mr. Black", "Mr. Blue"],
        es: ["Mr. Brown", "Mr. Orange", "Mr. Black", "Mr. Blue"],
      },
      correctIndex: 3,
    },

    // 11) Django – Candyland (TEXTO)
    {
      id: "t11",
      text: {
        en: 'What is the name of Calvin Candie’s plantation in "Django Unchained"?',
        es: '¿Cómo se llama la plantación de Calvin Candie en “Django Unchained”?',
      },
      options: {
        en: ["Shady Oaks", "Candyland", "Greenville", "Everglade"],
        es: ["Shady Oaks", "Candyland", "Greenville", "Everglade"],
      },
      correctIndex: 1,
    },

    // 12) Death Proof – car (TEXTO)
    {
      id: "t12",
      text: {
        en: 'In "Death Proof", what is Stuntman Mike’s main weapon?',
        es: 'En “Death Proof”, ¿cuál es el arma principal de Stuntman Mike?',
      },
      options: {
        en: [
          "A machete",
          "A reinforced Chevy Nova",
          "A sawn-off shotgun",
          "A chain whip",
        ],
        es: [
          "Un machete",
          "Un Chevy Nova reforzado",
          "Una escopeta recortada",
          "Una cadena",
        ],
      },
      correctIndex: 1,
    },

    // 13) Undercover cop color (TEXTO)
    {
      id: "t13",
      text: {
        en: 'In "Reservoir Dogs", which color is the undercover cop?',
        es: 'En “Reservoir Dogs”, ¿qué color tiene el policía infiltrado?',
      },
      options: {
        en: ["Mr. White", "Mr. Orange", "Mr. Pink", "Mr. Brown"],
        es: ["Mr. White", "Mr. Orange", "Mr. Pink", "Mr. Brown"],
      },
      correctIndex: 1,
    },

    // 14) Jackie Brown – airline (TEXTO)
    {
      id: "t14",
      text: {
        en: 'In "Jackie Brown", for which airline does Jackie work?',
        es: 'En “Jackie Brown”, ¿para qué aerolínea trabaja Jackie?',
      },
      options: {
        en: ["Oceanic", "Cabo Air", "VistaSky", "Global Atlantic"],
        es: ["Oceanic", "Cabo Air", "VistaSky", "Global Atlantic"],
      },
      correctIndex: 1,
    },

    // 15) Like a Virgin monologue (TEXTO)
    {
      id: "t15",
      text: {
        en: 'In which movie do the characters debate the meaning of Madonna’s "Like a Virgin" in the opening scene?',
        es: '¿En qué película debaten los personajes sobre el significado de "Like a Virgin" de Madonna en la escena inicial?',
      },
      options: {
        en: ["Pulp Fiction", "Reservoir Dogs", "True Romance", "Four Rooms"],
        es: ["Pulp Fiction", "Reservoir Dogs", "True Romance", "Four Rooms"],
      },
      correctIndex: 1,
    },

    // 16) Adrenaline shot (TEXTO)
    {
      id: "t16",
      text: {
        en: 'In "Pulp Fiction", what does Vincent stab into Mia’s chest to revive her?',
        es: 'En “Pulp Fiction”, ¿qué le clava Vincent en el pecho a Mia para reanimarla?',
      },
      options: {
        en: ["An insulin shot", "An adrenaline shot", "A morphine shot", "Naloxone"],
        es: ["Una inyección de insulina", "Una inyección de adrenalina", "Morfina", "Naloxona"],
      },
      correctIndex: 1,
    },

    // 17) De Niro – Louis Gara (TEXTO)
    {
      id: "t17",
      text: {
        en: 'Which character is played by Robert De Niro in "Jackie Brown"?',
        es: '¿Qué personaje interpreta Robert De Niro en “Jackie Brown”?',
      },
      options: {
        en: ["Ordell Robbie", "Max Cherry", "Louis Gara", "Beaumont Livingston"],
        es: ["Ordell Robbie", "Max Cherry", "Louis Gara", "Beaumont Livingston"],
      },
      correctIndex: 2,
    },

    // 18) Bounty Law – OUATIH (TEXTO)
    {
      id: "t18",
      text: {
        en: 'In "Once Upon a Time in Hollywood", which TV western made Rick Dalton famous?',
        es: 'En “Once Upon a Time in Hollywood”, ¿qué serie del Oeste hizo famoso a Rick Dalton?',
      },
      options: {
        en: ["Lancer", "Gunsmoke", "Bounty Law", "The Bounty Hour"],
        es: ["Lancer", "Gunsmoke", "Bounty Law", "The Bounty Hour"],
      },
      correctIndex: 2,
    },

    // 19) Butch’s watch (TEXTO)
    {
      id: "t19",
      text: {
        en: 'In "Pulp Fiction", what precious object does Butch go back to his apartment to retrieve?',
        es: 'En “Pulp Fiction”, ¿qué objeto valioso hace que Butch vuelva a su apartamento?',
      },
      options: {
        en: [
          "His boxing gloves",
          "His father’s gold watch",
          "The Bad Motherfucker wallet",
          "The briefcase",
        ],
        es: [
          "Sus guantes de boxeo",
          "El reloj de oro de su padre",
          "La cartera Bad Motherfucker",
          "El maletín",
        ],
      },
      correctIndex: 1,
    },

    // 20) Tarantino cameo – Jimmie (TEXTO)
    {
      id: "t20",
      text: {
        en: 'Tarantino himself appears in "Pulp Fiction". Which character does he play?',
        es: 'El propio Tarantino aparece en “Pulp Fiction”. ¿Qué personaje interpreta?',
      },
      options: {
        en: ["Lance", "Marvin", "Brett", "Jimmie Dimmick"],
        es: ["Lance", "Marvin", "Brett", "Jimmie Dimmick"],
      },
      correctIndex: 3,
    },
  ],

  // ---------------------------------------------------------------------------
  // RANGOS (10) – NOMBRES Y RUTAS QUE TIENES EN LA CARPETA
  // ---------------------------------------------------------------------------
  ranks: [
    {
      minScore: 0,
      title: { en: "Background Extra", es: "Background Extra" },
      imageUrl: {
        en: "/cinetrivia/Rango_1_tarantino_EN.png",
        es: "/cinetrivia/Rango_1_tarantino_EN.png",
      },
    },
    {
      minScore: 2,
      title: { en: "Lost Civilian", es: "Lost Civilian" },
      imageUrl: {
        en: "/cinetrivia/Rango_2_tarantino_EN.png",
        es: "/cinetrivia/Rango_2_tarantino_EN.png",
      },
    },
    {
      minScore: 4,
      title: { en: "Runaway Criminal", es: "Runaway Criminal" },
      imageUrl: {
        en: "/cinetrivia/Rango_3_tarantino_EN.png",
        es: "/cinetrivia/Rango_3_tarantino_EN.png",
      },
    },
    {
      minScore: 6,
      title: { en: "Grindhouse Fan", es: "Grindhouse Fan" },
      imageUrl: {
        en: "/cinetrivia/Rango_4_tarantino_EN.png",
        es: "/cinetrivia/Rango_4_tarantino_EN.png",
      },
    },
    {
      minScore: 8,
      title: { en: "Mr. Pink Survivor", es: "Mr. Pink Survivor" },
      imageUrl: {
        en: "/cinetrivia/Rango_5_tarantino_EN.png",
        es: "/cinetrivia/Rango_5_tarantino_EN.png",
      },
    },
    {
      minScore: 10,
      title: { en: "Kill Bill Fanatic", es: "Kill Bill Fanatic" },
      imageUrl: {
        en: "/cinetrivia/Rango_6_tarantino_EN.png",
        es: "/cinetrivia/Rango_6_tarantino_EN.png",
      },
    },
    {
      minScore: 12,
      title: { en: "Django Unchained", es: "Django Unchained" },
      imageUrl: {
        en: "/cinetrivia/Rango_7_tarantino_EN.png",
        es: "/cinetrivia/Rango_7_tarantino_EN.png",
      },
    },
    {
      minScore: 14,
      title: { en: "Nazi Killer", es: "Nazi Killer" },
      imageUrl: {
        en: "/cinetrivia/Rango_8_tarantino_EN.png",
        es: "/cinetrivia/Rango_8_tarantino_EN.png",
      },
    },
    {
      minScore: 16,
      title: { en: "The Wolf – Problem Solver", es: "The Wolf – Problem Solver" },
      imageUrl: {
        en: "/cinetrivia/Rango_9_tarantino_EN.png",
        es: "/cinetrivia/Rango_9_tarantino_EN.png",
      },
    },
    {
      minScore: 18,
      title: { en: "Say “WHAT” Again", es: "Say “WHAT” Again" },
      imageUrl: {
        en: "/cinetrivia/Rango_10_tarantino_EN.png",
        es: "/cinetrivia/Rango_10_tarantino_EN.png",
      },
    },
  ],
};