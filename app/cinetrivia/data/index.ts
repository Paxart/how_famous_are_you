// app/cinetrivia/data/index.ts
import type { TriviaDefinition } from "./types";
import { homeAloneChristmasTrivia } from "./homeAloneChristmas";
import { moviesTrivia } from "./movies";
import { harryPotterTrivia } from "./harryPotter";
import { tarantinoTrivia } from "./tarantino";
import { pixarTrivia } from "./pixar";

export const trivias: TriviaDefinition[] = [
  homeAloneChristmasTrivia, // 🎄 SPECIAL (el primero)
  pixarTrivia,
  tarantinoTrivia,
  harryPotterTrivia,
  moviesTrivia,
];
