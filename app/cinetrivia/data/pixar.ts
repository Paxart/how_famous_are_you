// app/cinetrivia/data/pixar.ts
// TRIVIA PIXAR – 20 PREGUNTAS COMPLETAS

import type { TriviaDefinition } from "./types";

// Rutas según tu estructura real
const PIXAR_ASSETS_BASE = "/cinetrivia/assets/pixar";
const PIXAR_IMG_BASE = "/cinetrivia/pixar";

export const pixarTrivia: TriviaDefinition = {
  id: "pixar",
  title: {
    en: "Pixar Challenge",
    es: "Pixar Challenge",
  },
  description: {
    en: "20 questions for true Pixar fans: Toy Story, Inside Out, Coco, Luca and more.",
    es: "20 preguntas para verdaderos fans de Pixar: Toy Story, Inside Out, Coco, Luca y más.",
  },

  // Logo principal
  coverImageUrl: `${PIXAR_ASSETS_BASE}/logo/pixar-logo-lamp.png`,

  // Fondo tipo cielo de Toy Story
  background:
    "radial-gradient(circle at top, #7ec8f5 0%, #bde9ff 40%, #ffffff 100%)",

  // ===================== PREGUNTAS (20) =====================
  questions: [
    // 1) TOY STORY – Woody amenazado (sin orden absurdo)
    {
      id: "pixar-q1",
      text: {
        en: "Which toy makes Woody feel threatened when he first arrives?",
        es: "¿Qué juguete hace que Woody se sienta amenazado cuando llega por primera vez?",
      },
      options: {
        en: ["Rex", "Slinky", "Buzz Lightyear", "Hamm"],
        es: ["Rex", "Slinky", "Buzz Lightyear", "Hamm"],
      },
      correctIndex: 2,
    },

    // 2) TOY STORY – símbolo de líder
    {
      id: "pixar-q2",
      text: {
        en: "What symbol proves Woody is the leader of the toys in Toy Story?",
        es: "¿Qué símbolo demuestra que Woody es el líder de los juguetes en Toy Story?",
      },
      options: {
        en: ["His boots", "His sheriff badge", "His rope", "His cowboy hat"],
        es: ["Sus botas", "Su placa de sheriff", "Su cuerda", "Su sombrero vaquero"],
      },
      correctIndex: 1,
    },

    // 3) RATATOUILLE – libro de Gusteau (imagen)
    {
      id: "pixar-q3",
      text: {
        en: "What does Gusteau's book mean to Remy?",
        es: "¿Qué significa el libro de Gusteau para Remy?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_ratatouille_book.png`,
      options: {
        en: [
          "A forbidden recipe",
          "Anyone can cook",
          "A family inheritance",
          "A secret code",
        ],
        es: [
          "Una receta prohibida",
          "Cualquiera puede cocinar",
          "Una herencia familiar",
          "Un código secreto",
        ],
      },
      correctIndex: 1,
    },

    // 4) INSIDE OUT – panel de control (imagen)
    {
      id: "pixar-q4",
      text: {
        en: "What does this control console belong to?",
        es: "¿A quién pertenece esta consola de control?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_inside_out_console.png`,
      options: {
        en: ["Joy", "Anger", "Riley", "Bing Bong"],
        es: ["Alegría", "Ira", "Riley", "Bing Bong"],
      },
      correctIndex: 2,
    },

    // 5) LUCA – sueño Vespa (imagen)
    {
      id: "pixar-q5",
      text: {
        en: "This Vespa dream belongs to which character?",
        es: "Este sueño con la Vespa pertenece a qué personaje?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_luca_vespa.png`,
      options: {
        en: ["Giulia", "Luca", "Massimo", "Alberto"],
        es: ["Giulia", "Luca", "Massimo", "Alberto"],
      },
      correctIndex: 1,
    },

    // 6) BRAVE – tapiz (imagen)
    {
      id: "pixar-q6",
      text: {
        en: "Which family is represented in this tapestry?",
        es: "¿Qué familia representa este tapiz?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_brave_tapestry.png`,
      options: {
        en: ["MacGuffin", "Dingwall", "DunBroch", "Macintosh"],
        es: ["MacGuffin", "Dingwall", "DunBroch", "Macintosh"],
      },
      correctIndex: 2,
    },

    // 7) COCO – nombre del perro
    {
      id: "pixar-q7",
      text: {
        en: "What is the name of Miguel's dog in Coco?",
        es: "¿Cómo se llama el perro de Miguel en Coco?",
      },
      options: {
        en: ["Pepita", "Dante", "Héctor", "Chicharrón"],
        es: ["Pepita", "Dante", "Héctor", "Chicharrón"],
      },
      correctIndex: 1,
    },

    // 8) COCO – puente (imagen)
    {
      id: "pixar-q8",
      text: {
        en: "What are the petals on this bridge made of?",
        es: "¿De qué están hechos los pétalos de este puente?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_coco_bridge.png`,
      options: {
        en: ["Roses", "Marigolds", "Sunflowers", "Lilies"],
        es: ["Rosas", "Cempasúchil", "Girasoles", "Lirios"],
      },
      correctIndex: 1,
    },

    // 9) INSIDE OUT – emoción al mando
    {
      id: "pixar-q9",
      text: {
        en: "Which emotion takes control first when Riley is born?",
        es: "¿Qué emoción toma el control primero cuando nace Riley?",
      },
      options: {
        en: ["Joy", "Fear", "Disgust", "Sadness"],
        es: ["Alegría", "Miedo", "Asco", "Tristeza"],
      },
      correctIndex: 0,
    },

    // 10) FINDING NEMO – tanque (imagen)
    {
      id: "pixar-q10",
      text: {
        en: "In Finding Nemo, where is this tank located?",
        es: "En Buscando a Nemo, ¿dónde está situado este acuario?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_nemo_tank.png`,
      options: {
        en: ["In a dentist's office", "In an aquarium shop", "In a school", "In a restaurant"],
        es: [
          "En la consulta de un dentista",
          "En una tienda de acuarios",
          "En un colegio",
          "En un restaurante",
        ],
      },
      correctIndex: 0,
    },

    // 11) UP – casa y globos (imagen)
    {
      id: "pixar-q11",
      text: {
        en: "What is Carl's main destination when he lifts his house with balloons?",
        es: "¿Cuál es el destino principal de Carl cuando eleva su casa con globos?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_up_house.png`,
      options: {
        en: ["Paradise Falls", "Angel Falls", "Spirit Mountain", "Everest Ridge"],
        es: ["Cataratas del Paraíso", "Cataratas del Ángel", "Montaña Espíritu", "Cresta del Everest"],
      },
      correctIndex: 0,
    },

    // 12) WALL·E – obsesión
    {
      id: "pixar-q12",
      text: {
        en: "What object from Earth does WALL·E treasure the most in his collection?",
        es: "¿Qué objeto de la Tierra aprecia más WALL·E en su colección?",
      },
      options: {
        en: ["A plant", "A ring box", "A Rubik's cube", "A VHS tape"],
        es: ["Una planta", "Una caja de anillo", "Un cubo de Rubik", "Una cinta VHS"],
      },
      correctIndex: 0,
    },

    // 13) MONSTERS, INC. – puerta (imagen)
    {
      id: "pixar-q13",
      text: {
        en: "Whose door is this in Monsters, Inc.?",
        es: "¿De quién es esta puerta en Monstruos, S.A.?",
      },
      imageUrl: `${PIXAR_IMG_BASE}/pixar_img_monsters_door.png`,
      options: {
        en: ["Boo", "Celia", "Roz", "George Sanderson"],
        es: ["Boo", "Celia", "Roz", "George Sanderson"],
      },
      correctIndex: 0,
    },

    // 14) THE INCREDIBLES – traje
    {
      id: "pixar-q14",
      text: {
        en: "Who designs the super suits for the Parr family?",
        es: "¿Quién diseña los súper trajes para la familia Parr?",
      },
      options: {
        en: ["Mirage", "Edna Mode", "Syndrome", "Evelyn Deavor"],
        es: ["Mirage", "Edna Moda", "Síndrome", "Evelyn Deavor"],
      },
      correctIndex: 1,
    },

    // 15) SOUL – mentor
    {
      id: "pixar-q15",
      text: {
        en: "In Soul, which soul is assigned to Joe as a 'problem case'?",
        es: "En Soul, ¿qué alma es asignada a Joe como 'caso problemático'?",
      },
      options: {
        en: ["Number 7", "22", "108", "99"],
        es: ["Número 7", "22", "108", "99"],
      },
      correctIndex: 1,
    },

    // 16) LUCA – secreto
    {
      id: "pixar-q16",
      text: {
        en: "What is Luca hiding from the humans in Portorosso?",
        es: "¿Qué es lo que Luca oculta a los humanos en Portorosso?",
      },
      options: {
        en: ["He is a sea monster", "He can breathe fire", "He is royal", "He can fly"],
        es: ["Que es un monstruo marino", "Que puede escupir fuego", "Que es de la realeza", "Que puede volar"],
      },
      correctIndex: 0,
    },

    // 17) BRAVE – destino
    {
      id: "pixar-q17",
      text: {
        en: "What does Merida want to change most about her life?",
        es: "¿Qué es lo que Mérida quiere cambiar más de su vida?",
      },
      options: {
        en: ["Her mother’s fate", "Her hair", "Her kingdom’s name", "Her archery teacher"],
        es: [
          "El destino de su madre",
          "Su pelo",
          "El nombre de su reino",
          "Su profesor de tiro con arco",
        ],
      },
      correctIndex: 0,
    },

    // 18) COCO – recordado
    {
      id: "pixar-q18",
      text: {
        en: "In Coco, what happens if no one in the living world remembers you?",
        es: "En Coco, ¿qué ocurre si nadie en el mundo de los vivos se acuerda de ti?",
      },
      options: {
        en: [
          "You become a spirit guide",
          "You move to a new land",
          "You disappear forever",
          "You turn into a marigold",
        ],
        es: [
          "Te conviertes en alebrije",
          "Te mudas a una nueva tierra",
          "Desapareces para siempre",
          "Te transformas en cempasúchil",
        ],
      },
      correctIndex: 2,
    },

    // 19) INSIDE OUT – memoria central
    {
      id: "pixar-q19",
      text: {
        en: "What do core memories represent in Inside Out?",
        es: "¿Qué representan las memorias centrales en Del revés (Inside Out)?",
      },
      options: {
        en: [
          "Random dreams",
          "Riley's fears",
          "Key moments that shape Riley’s personality",
          "Forgotten thoughts",
        ],
        es: [
          "Sueños aleatorios",
          "Los miedos de Riley",
          "Momentos clave que forman la personalidad de Riley",
          "Pensamientos olvidados",
        ],
      },
      correctIndex: 2,
    },

    // 20) TOY STORY – nombre en la bota
    {
      id: "pixar-q20",
      text: {
        en: "What does the name written under Woody's boot mean to him?",
        es: "¿Qué significa para Woody el nombre escrito bajo su bota?",
      },
      options: {
        en: ["His brand", "His owner", "His best friend", "His mission"],
        es: ["Su marca", "Su dueño", "Su mejor amigo", "Su misión"],
      },
      correctIndex: 1,
    },
  ],

  // ===================== RANGOS (10) =====================
  ranks: [
    {
      minScore: 0,
      title: { en: "THE LAMP", es: "THE LAMP" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-01-the-lamp.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-01-the-lamp.png`,
      },
    },
    {
      minScore: 3,
      title: { en: "BUCKET OF SOLDIERS", es: "BUCKET OF SOLDIERS" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-02-bucket-of-soldiers.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-02-bucket-of-soldiers.png`,
      },
    },
    {
      minScore: 5,
      title: { en: "HUGS & TRAUMA", es: "HUGS & TRAUMA" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-03-hugs-and-trauma.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-03-hugs-and-trauma.png`,
      },
    },
    {
      minScore: 8,
      title: { en: "TOTAL PANIC MODE", es: "TOTAL PANIC MODE" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-04-total-panic-mode.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-04-total-panic-mode.png`,
      },
    },
    {
      minScore: 11,
      title: { en: "CORE MEMORY: SAD", es: "CORE MEMORY: SAD" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-05-core-memory-sad.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-05-core-memory-sad.png`,
      },
    },
    {
      minScore: 13,
      title: { en: "WE DON'T TALK", es: "WE DON'T TALK" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-06-we-dont-talk.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-06-we-dont-talk.png`,
      },
    },
    {
      minScore: 15,
      title: { en: "SILENZIO BRUNO!", es: "SILENZIO BRUNO!" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-07-silenzio-bruno.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-07-silenzio-bruno.png`,
      },
    },
    {
      minScore: 17,
      title: { en: "NO CAPES!", es: "NO CAPES!" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-08-no-capes.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-08-no-capes.png`,
      },
    },
    {
      minScore: 19,
      title: { en: "LA FAMILIA MADRIGAL", es: "LA FAMILIA MADRIGAL" },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-09-la-familia-madrigal.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-09-la-familia-madrigal.png`,
      },
    },
    {
      minScore: 20,
      title: {
        en: "THERE'S A PIXAR EXPERT IN MY BOOT",
        es: "THERE'S A PIXAR EXPERT IN MY BOOT",
      },
      imageUrl: {
        en: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-10-pixar-expert.png`,
        es: `${PIXAR_ASSETS_BASE}/ranks/pixar-rank-10-pixar-expert.png`,
      },
    },
  ],
};

export default pixarTrivia;