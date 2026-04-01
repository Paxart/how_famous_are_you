// app/cinetrivia/data/types.ts

export type SupportedLanguage = "en" | "es";

export type QuestionOptions = {
  en: string[];
  es: string[];
};

export type Question = {
  id: string;
  text: {
    en: string;
    es: string;
  };
  imageUrl?: string;
  options: QuestionOptions;
  correctIndex: number;
};

export type RankDefinition = {
  minScore: number;
  title: {
    en: string;
    es: string;
  };
  imageUrl?: {
    en: string;
    es: string;
  };
};

export type TriviaDefinition = {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  coverImageUrl: string;
  background?: string;
  questions: Question[];
  ranks: RankDefinition[];
};