import type { TriviaDefinition } from "./types";

export const harryPotterTrivia: TriviaDefinition = {
  id: "harry_potter",
  title: {
    en: "Farlander PotterTrivia",
    es: "Farlander PotterTrivia",
  },
  description: {
    en: "Trivia about the Harry Potter universe.",
    es: "Trivia sobre el universo de Harry Potter.",
  },

  coverImageUrl: "/cinetrivia/Sorting_Hat.png",

  // 🎨 Fondo pergamino mágico
  background:
    "radial-gradient(circle at top, #f4e1b5 0%, #d4b073 40%, #5b3a1a 100%)",

  questions: [
    {
      id: "hp1",
      text: {
        en: "Which Hogwarts house does Harry belong to?",
        es: "¿A qué casa de Hogwarts pertenece Harry?",
      },
      options: {
        en: ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"],
        es: ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"],
      },
      correctIndex: 3,
    },
    {
      id: "hp2",
      text: {
        en: "What is the name of Harry’s owl?",
        es: "¿Cómo se llama la lechuza de Harry?",
      },
      options: {
        en: ["Crookshanks", "Fang", "Hedwig", "Scabbers"],
        es: ["Crookshanks", "Fang", "Hedwig", "Scabbers"],
      },
      correctIndex: 2,
    },
    {
      id: "hp3",
      text: {
        en: "Who is the Half-Blood Prince?",
        es: "¿Quién es el Príncipe Mestizo?",
      },
      options: {
        en: ["Dumbledore", "Snape", "Voldemort", "Sirius Black"],
        es: ["Dumbledore", "Snape", "Voldemort", "Sirius Black"],
      },
      correctIndex: 1,
    },
    {
      id: "hp4",
      text: {
        en: "From which platform does the Hogwarts Express depart?",
        es: "¿De qué andén sale el tren hacia Hogwarts?",
      },
      options: {
        en: ["9", "10", "9 3/4", "8 1/2"],
        es: ["9", "10", "9 3/4", "8 1/2"],
      },
      correctIndex: 2,
    },
    {
      id: "hp5",
      text: {
        en: "What is the name of Harry’s godfather?",
        es: "¿Cómo se llama el padrino de Harry?",
      },
      options: {
        en: ["Remus Lupin", "Sirius Black", "Arthur Weasley", "Lucius Malfoy"],
        es: ["Remus Lupin", "Sirius Black", "Arthur Weasley", "Lucius Malfoy"],
      },
      correctIndex: 1,
    },
    {
      id: "hp6",
      text: {
        en: "What is the name of the Weasleys’ house?",
        es: "¿Cómo se llama la casa de los Weasley?",
      },
      options: {
        en: ["The Burrow", "The Nest", "The Warren", "The Den"],
        es: ["The Burrow", "The Nest", "The Warren", "The Den"],
      },
      correctIndex: 0,
    },
    {
      id: "hp7",
      text: {
        en: "What is Hermione’s Patronus?",
        es: "¿Cuál es el Patronus de Hermione?",
      },
      options: {
        en: ["Otter", "Fox", "Rabbit", "Cat"],
        es: ["Otter", "Fox", "Rabbit", "Cat"],
      },
      correctIndex: 0,
    },
    {
      id: "hp8",
      text: {
        en: "Which object chooses a wizard’s house?",
        es: "¿Qué objeto elige la casa del mago?",
      },
      options: {
        en: ["Elder Wand", "Sorting Hat", "Crystal Ball", "Goblet of Fire"],
        es: ["Elder Wand", "Sorting Hat", "Crystal Ball", "Goblet of Fire"],
      },
      correctIndex: 1,
    },
    {
      id: "hp9",
      text: {
        en: "Who kills Dumbledore?",
        es: "¿Quién mata a Dumbledore?",
      },
      options: {
        en: ["Voldemort", "Bellatrix", "Snape", "Draco"],
        es: ["Voldemort", "Bellatrix", "Snape", "Draco"],
      },
      correctIndex: 2,
    },
    {
      id: "hp10",
      text: {
        en: "What is the name of Voldemort’s snake?",
        es: "¿Cómo se llama la serpiente de Voldemort?",
      },
      options: {
        en: ["Aragog", "Nagini", "Basilisk", "Morgana"],
        es: ["Aragog", "Nagini", "Basilisk", "Morgana"],
      },
      correctIndex: 1,
    },
  ],

  ranks: [
    {
      minScore: 0,
      title: { en: "Lost Muggle", es: "Muggle Perdido" },
      imageUrl: {
        en: "/cinetrivia/Rango1_potter-EN.png",
        es: "/cinetrivia/Rango1_potter-ES.png",
      },
    },
    {
      minScore: 3,
      title: { en: "First Year Wizard", es: "Alumno de Primero" },
      imageUrl: {
        en: "/cinetrivia/Rango2_potter-EN.png",
        es: "/cinetrivia/Rango2_potter-ES.png",
      },
    },
    {
      minScore: 6,
      title: { en: "Hogwarts Graduate", es: "Graduado de Hogwarts" },
      imageUrl: {
        en: "/cinetrivia/Rango3_potter-EN.png",
        es: "/cinetrivia/Rango3_potter-ES.png",
      },
    },
    {
      minScore: 8,
      title: { en: "Master Wizard", es: "Mago Maestro" },
      imageUrl: {
        en: "/cinetrivia/Rango4_potter-EN.png",
        es: "/cinetrivia/Rango4_potter-ES.png",
      },
    },
    {
      minScore: 10,
      title: { en: "Dumbledore Tier", es: "Nivel Dumbledore" },
      imageUrl: {
        en: "/cinetrivia/Rango5_potter-EN.png",
        es: "/cinetrivia/Rango5_potter-ES.png",
      },
    },
  ],
};
