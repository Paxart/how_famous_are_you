// data/trivias.ts

export type TriviaQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export type TriviaConfig = {
  id: string;
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  imageUrl: string;
  theme: { primary: string; secondary: string };
  feedback: {
    correct: { en: string[]; es: string[] };
    wrong: { en: string[]; es: string[] };
  };
  ranks: { min: number; max: number; en: string; es: string }[];
  questions: { en: TriviaQuestion[]; es: TriviaQuestion[] };
};

export const TRIVIAS: Record<string, TriviaConfig> = {
  cine: {
    id: "cine",
    title: {
      en: "Farlander CineTrivia",
      es: "Farlander CineTrivia",
    },
    tagline: {
      en: "Lights, camera… knowledge!",
      es: "¡Luces, cámara… conocimiento!",
    },
    imageUrl: "https://criptomonedas.live/wp-content/uploads/2025/11/cinetrivia.png",

    theme: {
      primary: "#f59e0b",
      secondary: "#b45309",
    },

    feedback: {
      correct: {
        en: ["🎬 Oscar-worthy!", "🍿 Popcorn well deserved."],
        es: ["🎬 ¡De Oscar!", "🍿 Palomitas bien ganadas."],
      },
      wrong: {
        en: ["Box office flop…", "Farlander is disappointed…"],
        es: ["Fracaso en taquilla…", "Farlander está un poco triste…"],
      },
    },

    ranks: [
      { min: 0, max: 3, en: "Background extra", es: "Extra de fondo" },
      { min: 4, max: 7, en: "Supporting actor", es: "Actor secundario" },
      { min: 8, max: 10, en: "Main star", es: "Superestrella" },
    ],

    questions: {
      en: [
        {
          question: "Which movie has the highest box office of all time?",
          options: ["Avatar (2009)", "Titanic", "Avengers: Endgame", "Star Wars: TFA"],
          correctIndex: 0,
        },
        {
          question: "Who directed 'Inception'?",
          options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"],
          correctIndex: 1,
        },
        {
          question: "Which film won Best Picture at the Oscars 2020?",
          options: ["1917", "Parasite", "Joker", "Ford v Ferrari"],
          correctIndex: 1,
        },
        {
          question: "In 'The Matrix', what color pill does Neo take?",
          options: ["Blue", "Green", "Red", "Yellow"],
          correctIndex: 2,
        },
        {
          question: "What is the name of the ring in 'The Lord of the Rings'?",
          options: ["The One Ring", "Soul Ring", "Ring of Fire", "Sauron's Crown"],
          correctIndex: 0,
        },
        {
          question: "Who is Luke Skywalker's father?",
          options: ["Obi-Wan Kenobi", "Mace Windu", "Darth Vader", "Yoda"],
          correctIndex: 2,
        },
        {
          question: "Which of these is NOT a Pixar movie?",
          options: ["Toy Story", "Inside Out", "Shrek", "Ratatouille"],
          correctIndex: 2,
        },
        {
          question: "In which year was 'Back to the Future' released?",
          options: ["1985", "1990", "1979", "1989"],
          correctIndex: 0,
        },
        {
          question: "What weapon is iconic for Indiana Jones?",
          options: ["Katana", "Whip", "Bow", "Axe"],
          correctIndex: 1,
        },
        {
          question: "What is the name of the hotel in 'The Shining'?",
          options: ["Overlook Hotel", "Bates Motel", "The Majestic", "The Continental"],
          correctIndex: 0,
        },
      ],

      es: [
        {
          question: "¿Qué película tiene la mayor recaudación de la historia?",
          options: [
            "Avatar (2009)",
            "Titanic",
            "Vengadores: Endgame",
            "Star Wars: El despertar de la Fuerza",
          ],
          correctIndex: 0,
        },
        {
          question: "¿Quién dirigió 'Origen' ('Inception')?",
          options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"],
          correctIndex: 1,
        },
        {
          question: "¿Qué película ganó el Óscar a Mejor Película en 2020?",
          options: ["1917", "Parásitos", "Joker", "Le Mans '66"],
          correctIndex: 1,
        },
        {
          question: "En 'Matrix', ¿de qué color es la pastilla que toma Neo?",
          options: ["Azul", "Verde", "Roja", "Amarilla"],
          correctIndex: 2,
        },
        {
          question: "¿Cómo se llama el anillo de 'El Señor de los Anillos'?",
          options: ["El Anillo Único", "Anillo del Alma", "Anillo de Fuego", "La Corona de Sauron"],
          correctIndex: 0,
        },
        {
          question: "¿Quién es el padre de Luke Skywalker?",
          options: ["Obi-Wan Kenobi", "Mace Windu", "Darth Vader", "Yoda"],
          correctIndex: 2,
        },
        {
          question: "¿Cuál de estas NO es una película de Pixar?",
          options: ["Toy Story", "Del Revés (Inside Out)", "Shrek", "Ratatouille"],
          correctIndex: 2,
        },
        {
          question: "¿En qué año se estrenó 'Regreso al Futuro'?",
          options: ["1985", "1990", "1979", "1989"],
          correctIndex: 0,
        },
        {
          question: "¿Qué arma es icónica de Indiana Jones?",
          options: ["Katana", "Látigo", "Arco", "Hacha"],
          correctIndex: 1,
        },
        {
          question: "¿Cómo se llama el hotel de 'El Resplandor'?",
          options: [
            "Hotel Overlook",
            "Motel Bates",
            "The Majestic",
            "The Continental",
          ],
          correctIndex: 0,
        },
      ],
    },
  },
};
