// app/cinetrivia/data/movies.ts
import type { TriviaDefinition } from "./types";

export const moviesTrivia: TriviaDefinition = {
  id: "movies",
  title: {
    en: "Farlander CineTrivia",
    es: "Farlander CineTrivia",
  },
  description: {
    en: "General movie questions.",
    es: "Preguntas de cine general.",
  },

  coverImageUrl: "/cinetrivia/Taza_Farlander.png",

  background: "radial-gradient(circle at top, #2e0f07 0%, #000000 70%)",

  questions: [
    {
      id: "m1",
      text: {
        en: "Who directed the movie 'Inception'?",
        es: "¿Quién dirigió la película 'Inception'?",
      },
      options: {
        en: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"],
        es: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"],
      },
      correctIndex: 2,
    },
    {
      id: "m2",
      text: {
        en: "Which movie won Best Picture in 1994?",
        es: "¿Qué película ganó el Oscar a Mejor Película en 1994?",
      },
      options: {
        en: ["Pulp Fiction", "Forrest Gump", "The Lion King", "The Shawshank Redemption"],
        es: ["Pulp Fiction", "Forrest Gump", "The Lion King", "The Shawshank Redemption"],
      },
      correctIndex: 1,
    },
    {
      id: "m3",
      text: {
        en: "Who played Jack in Titanic?",
        es: "¿Qué actor interpretó a Jack en Titanic?",
      },
      options: {
        en: ["Matt Damon", "Leonardo DiCaprio", "Brad Pitt", "Keanu Reeves"],
        es: ["Matt Damon", "Leonardo DiCaprio", "Brad Pitt", "Keanu Reeves"],
      },
      correctIndex: 1,
    },
    {
      id: "m4",
      text: {
        en: "Which saga includes the character 'Darth Vader'?",
        es: "¿A qué saga pertenece 'Darth Vader'?",
      },
      options: {
        en: ["Lord of the Rings", "Star Wars", "Star Trek", "Alien"],
        es: ["Lord of the Rings", "Star Wars", "Star Trek", "Alien"],
      },
      correctIndex: 1,
    },
    {
      id: "m5",
      text: {
        en: "In The Matrix, what color pill does Neo choose?",
        es: "En Matrix, ¿qué píldora elige Neo?",
      },
      options: {
        en: ["Blue", "Red", "Green", "White"],
        es: ["Blue", "Red", "Green", "White"],
      },
      correctIndex: 1,
    },
    {
      id: "m6",
      text: {
        en: "Which director is known for explosions?",
        es: "¿Qué director es famoso por las explosiones?",
      },
      options: {
        en: ["Michael Bay", "Woody Allen", "Spielberg", "Nolan"],
        es: ["Michael Bay", "Woody Allen", "Spielberg", "Nolan"],
      },
      correctIndex: 0,
    },
    {
      id: "m7",
      text: {
        en: "What year was 'Jurassic Park' released?",
        es: "¿En qué año se estrenó 'Jurassic Park'?",
      },
      options: {
        en: ["1990", "1991", "1993", "1995"],
        es: ["1990", "1991", "1993", "1995"],
      },
      correctIndex: 2,
    },
    {
      id: "m8",
      text: {
        en: "Which movie features the line 'Here's Johnny!'?",
        es: "¿Qué película incluye la frase '¡Aquí está Johnny!'?",
      },
      options: {
        en: ["The Shining", "Saw", "Halloween", "Psycho"],
        es: ["The Shining", "Saw", "Halloween", "Psycho"],
      },
      correctIndex: 0,
    },
    {
      id: "m9",
      text: {
        en: "Which character says 'I'll be back'?",
        es: "¿Qué personaje dice 'Volveré'?",
      },
      options: {
        en: ["Rambo", "Terminator", "Rocky", "John Wick"],
        es: ["Rambo", "Terminator", "Rocky", "John Wick"],
      },
      correctIndex: 1,
    },
    {
      id: "m10",
      text: {
        en: "Which film features a DeLorean time machine?",
        es: "¿Qué película muestra un DeLorean como máquina del tiempo?",
      },
      options: {
        en: ["Back to the Future", "Timecop", "Looper", "Interstellar"],
        es: ["Back to the Future", "Timecop", "Looper", "Interstellar"],
      },
      correctIndex: 0,
    },
  ],

  ranks: [
    {
      minScore: 0,
      title: { en: "Casual Watcher", es: "Espectador Casual" },
      imageUrl: {
        en: "/cinetrivia/Taza_Farlander.png",
        es: "/cinetrivia/Taza_Farlander.png",
      },
    },
    {
      minScore: 5,
      title: { en: "Movie Enthusiast", es: "Amante del Cine" },
      imageUrl: {
        en: "/cinetrivia/Taza_Farlander.png",
        es: "/cinetrivia/Taza_Farlander.png",
      },
    },
    {
      minScore: 8,
      title: { en: "Cinema Master", es: "Maestro del Cine" },
      imageUrl: {
        en: "/cinetrivia/Taza_Farlander.png",
        es: "/cinetrivia/Taza_Farlander.png",
      },
    },
  ],
};
