// app/cinetrivia/data/homeAloneChristmas.ts
import type { TriviaDefinition } from "./types";

export const homeAloneChristmasTrivia: TriviaDefinition = {
  id: "home-alone-christmas",

  title: {
    en: "Home Alone: Christmas Trivia",
    es: "Solo en Casa: Trivial de Navidad",
  },

  description: {
    en: "A Christmas trivia based on the first two Home Alone movies. No parents, no burglars… just you.",
    es: "Un trivial navideño basado en las dos primeras pelis de Solo en Casa. Sin padres, sin ladrones… solo tú.",
  },

  // Logo / icono del especial
  coverImageUrl: "/cinetrivia/specials/home-alone-christmas/logo.png",

  // Fondo navideño ochentero
  background:
    "radial-gradient(circle at top, #16a34a 0%, #dc2626 35%, #7c2d12 60%, #020617 95%)",

  // ---------------------------------------------------------------------------
  // 20 PREGUNTAS (8 CON IMAGEN, INTERCALADAS)
  // ---------------------------------------------------------------------------
  questions: [
    // 1 (IMAGEN) – Kevin solo
    {
      id: "ha01",
      text: {
        es: "¿En qué momento Kevin se da cuenta de que está solo en casa?",
        en: "When does Kevin realize he is home alone?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q01.jpg",
      options: {
        es: [
          "Al despertarse y no oír a nadie",
          "Cuando ve el vuelo despegar",
          "Cuando llama a la policía",
          "Cuando abre los regalos",
        ],
        en: [
          "When he wakes up and hears no one",
          "When he sees the plane taking off",
          "When he calls the police",
          "When he opens the presents",
        ],
      },
      correctIndex: 0,
    },

    // 2 (TEXTO)
    {
      id: "ha02",
      text: {
        es: "¿Cómo se llaman los ladrones de Solo en Casa?",
        en: "What are the burglars called in Home Alone?",
      },
      options: {
        es: ["Los Ladrones Mojados", "Los Ladrones Pegajosos", "Los Rateros", "Los Fantasmas"],
        en: ["The Wet Bandits", "The Sticky Bandits", "The Raccoons", "The Ghosts"],
      },
      correctIndex: 0,
    },

    // 3 (IMAGEN) – Pizza Night
    {
      id: "ha03",
      text: {
        es: "¿Qué comida se prepara Kevin para su primera noche solo?",
        en: "What food does Kevin prepare for his first night alone?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q03.jpg",
      options: {
        es: ["Espaguetis", "Hamburguesa", "Pizza con refresco", "Macarrones con queso"],
        en: ["Spaghetti", "Burger", "Pizza and soda", "Mac and cheese"],
      },
      correctIndex: 2,
    },

    // 4 (TEXTO)
    {
      id: "ha04",
      text: {
        es: "¿Qué deseo pide Kevin al principio de la película?",
        en: "What wish does Kevin make at the beginning of the movie?",
      },
      options: {
        es: [
          "Que no sea Navidad",
          "Que su familia desaparezca",
          "Tener más regalos",
          "Ir solo de vacaciones",
        ],
        en: [
          "That it wasn’t Christmas",
          "That his family would disappear",
          "To get more presents",
          "To go on vacation alone",
        ],
      },
      correctIndex: 1,
    },

    // 5 (IMAGEN) – Aftershave
    {
      id: "ha05",
      text: {
        es: "¿Qué producto usa Kevin imitando a su padre?",
        en: "What product does Kevin use pretending to be his father?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q05.jpg",
      options: {
        es: ["Colonia", "Aftershave", "Espuma de afeitar", "Gel para el pelo"],
        en: ["Cologne", "Aftershave", "Shaving foam", "Hair gel"],
      },
      correctIndex: 1,
    },

    // 6 (TEXTO)
    {
      id: "ha06",
      text: {
        es: "¿Dónde viaja la familia de Kevin en la primera película?",
        en: "Where does Kevin’s family travel in the first movie?",
      },
      options: {
        es: ["Londres", "Roma", "París", "Nueva York"],
        en: ["London", "Rome", "Paris", "New York"],
      },
      correctIndex: 2,
    },

    // 7 (IMAGEN) – Trampas
    {
      id: "ha07",
      text: {
        es: "¿Qué objeto utiliza Kevin como trampa en la escalera?",
        en: "What object does Kevin use as a trap on the stairs?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q07.jpg",
      options: {
        es: ["Clavos", "Coches de juguete", "Pegamento", "Latas de pintura"],
        en: ["Nails", "Toy cars", "Glue", "Paint cans"],
      },
      correctIndex: 1,
    },

    // 8 (TEXTO)
    {
      id: "ha08",
      text: {
        es: "¿Cómo se llama el vecino que Kevin teme al principio?",
        en: "What is the name of the neighbor Kevin fears?",
      },
      options: {
        es: ["Old Marley", "Mr. Duncan", "Mr. Murphy", "Uncle Frank"],
        en: ["Old Man Marley", "Mr. Duncan", "Mr. Murphy", "Uncle Frank"],
      },
      correctIndex: 0,
    },

    // 9 (IMAGEN) – Película falsa
    {
      id: "ha09",
      text: {
        es: "¿Qué frase famosa dice el gánster de la peli falsa?",
        en: "What famous line does the gangster say in the fake movie?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q09.jpg",
      options: {
        es: [
          "Keep the change, ya filthy animal",
          "Say hello to my little friend",
          "Merry Christmas, ya filthy animal",
          "You talking to me?",
        ],
        en: [
          "Keep the change, ya filthy animal",
          "Say hello to my little friend",
          "Merry Christmas, ya filthy animal",
          "You talking to me?",
        ],
      },
      correctIndex: 0,
    },

    // 10 (TEXTO)
    {
      id: "ha10",
      text: {
        es: "¿Dónde se desarrolla la mayor parte de la segunda película?",
        en: "Where does most of the second movie take place?",
      },
      options: {
        es: ["Chicago", "Los Ángeles", "Nueva York", "Boston"],
        en: ["Chicago", "Los Angeles", "New York", "Boston"],
      },
      correctIndex: 2,
    },

    // 11 (IMAGEN) – Hotel Plaza
    {
      id: "ha11",
      text: {
        es: "¿En qué hotel se aloja Kevin en Nueva York?",
        en: "Which hotel does Kevin stay at in New York?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q11.jpg",
      options: {
        es: ["Plaza Hotel", "Hilton", "Ritz", "Empire Hotel"],
        en: ["Plaza Hotel", "Hilton", "Ritz", "Empire Hotel"],
      },
      correctIndex: 0,
    },

    // 12 (TEXTO)
    {
      id: "ha12",
      text: {
        es: "¿Cómo consigue Kevin dinero en el hotel?",
        en: "How does Kevin get money at the hotel?",
      },
      options: {
        es: [
          "Con la tarjeta de su padre",
          "Trabajando",
          "Ganando una apuesta",
          "Robando",
        ],
        en: [
          "Using his father’s credit card",
          "Working",
          "Winning a bet",
          "Stealing",
        ],
      },
      correctIndex: 0,
    },

    // 13 (IMAGEN) – Palomas
    {
      id: "ha13",
      text: {
        es: "¿Quién ayuda a Kevin en Central Park?",
        en: "Who helps Kevin in Central Park?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q13.jpg",
      options: {
        es: ["La mujer de las palomas", "Un policía", "Un turista", "El conserje"],
        en: ["The pigeon lady", "A police officer", "A tourist", "The concierge"],
      },
      correctIndex: 0,
    },

    // 14 (TEXTO)
    {
      id: "ha14",
      text: {
        es: "¿Qué instrumento toca la mujer de las palomas?",
        en: "What instrument does the pigeon lady play?",
      },
      options: {
        es: ["Violín", "Flauta", "Arpa", "Acordeón"],
        en: ["Violin", "Flute", "Harp", "Accordion"],
      },
      correctIndex: 0,
    },

    // 15 (IMAGEN) – Trampa pintura
    {
      id: "ha15",
      text: {
        es: "¿Qué cae por la escalera en una de las trampas?",
        en: "What falls down the stairs in one of Kevin’s traps?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q15.jpg",
      options: {
        es: ["Sillas", "Latas de pintura", "Libros", "Cajas"],
        en: ["Chairs", "Paint cans", "Books", "Boxes"],
      },
      correctIndex: 1,
    },

    // 16 (TEXTO)
    {
      id: "ha16",
      text: {
        es: "¿Qué hace la madre de Kevin para volver a casa?",
        en: "What does Kevin’s mother do to get back home?",
      },
      options: {
        es: [
          "Viaja en coche",
          "Toma un autobús",
          "Viaja con una banda de música",
          "Vuela en helicóptero",
        ],
        en: [
          "Drives",
          "Takes a bus",
          "Travels with a polka band",
          "Flies by helicopter",
        ],
      },
      correctIndex: 2,
    },

    // 17 (TEXTO)
    {
      id: "ha17",
      text: {
        es: "¿Qué animal aparece frecuentemente en la segunda película?",
        en: "Which animal appears frequently in the second movie?",
      },
      options: {
        es: ["Palomas", "Perros", "Gatos", "Caballos"],
        en: ["Pigeons", "Dogs", "Cats", "Horses"],
      },
      correctIndex: 0,
    },

    // 18 (IMAGEN) – Final
    {
      id: "ha18",
      text: {
        es: "¿Dónde se produce el enfrentamiento final con los ladrones?",
        en: "Where does the final confrontation with the burglars happen?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q18.jpg",
      options: {
        es: ["En la casa", "En el hotel", "En una casa abandonada", "En Central Park"],
        en: ["At the house", "At the hotel", "In an abandoned house", "In Central Park"],
      },
      correctIndex: 2,
    },

    // 19 (TEXTO)
    {
      id: "ha19",
      text: {
        es: "¿Qué aprende Kevin al final de las películas?",
        en: "What does Kevin learn by the end of the movies?",
      },
      options: {
        es: [
          "A gastar dinero",
          "A valorar a su familia",
          "A vivir solo",
          "A pelear",
        ],
        en: [
          "How to spend money",
          "To value his family",
          "To live alone",
          "To fight",
        ],
      },
      correctIndex: 1,
    },

    // 20 (IMAGEN) – Navidad final
    {
      id: "ha20",
      text: {
        es: "¿En qué fecha transcurren las dos películas?",
        en: "During which holiday do both movies take place?",
      },
      imageUrl: "/cinetrivia/specials/home-alone-christmas/questions/q20.jpg",
      options: {
        es: ["Halloween", "Acción de Gracias", "Navidad", "Año Nuevo"],
        en: ["Halloween", "Thanksgiving", "Christmas", "New Year"],
      },
      correctIndex: 2,
    },
  ],

  // ---------------------------------------------------------------------------
  // RANGOS (7)
  // ---------------------------------------------------------------------------
  ranks: [
    {
      minScore: 0,
      title: { es: "Lost Farlander", en: "Lost Farlander" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank1.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank1.png",
      },
    },
    {
      minScore: 4,
      title: { es: "Pizza Night Farlander", en: "Pizza Night Farlander" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank2.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank2.png",
      },
    },
    {
      minScore: 7,
      title: { es: "Aftershave Farlander", en: "Aftershave Farlander" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank3.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank3.png",
      },
    },
    {
      minScore: 10,
      title: { es: "Trap Master Farlander", en: "Trap Master Farlander" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank4.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank4.png",
      },
    },
    {
      minScore: 13,
      title: { es: "Pigeon Friend Farlander", en: "Pigeon Friend Farlander" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank5.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank5.png",
      },
    },
    {
      minScore: 16,
      title: { es: "Home Alone Legend", en: "Home Alone Legend" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank6.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank6.png",
      },
    },
    {
      minScore: 18,
      title: { es: "Christmas Movie Icon", en: "Christmas Movie Icon" },
      imageUrl: {
        es: "/cinetrivia/specials/home-alone-christmas/ranks/rank7.png",
        en: "/cinetrivia/specials/home-alone-christmas/ranks/rank7.png",
      },
    },
  ],
};
