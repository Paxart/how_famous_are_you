// app/api/frames/cinetrivia/questions.ts

export type CineQuestion = {
  id: number;
  question: string;
  options: string[];
  correct: string;
};

export const QUESTIONS: CineQuestion[] = [
  {
    id: 1,
    question: "Which movie has the highest box office of all time?",
    options: ["Avatar (2009)", "Avengers: Endgame", "Titanic", "Star Wars: TFA"],
    correct: "Avatar (2009)",
  },
  {
    id: 2,
    question: "Who directed 'Inception'?",
    options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"],
    correct: "Christopher Nolan",
  },
  {
    id: 3,
    question: "Which film won Best Picture at the Oscars 2020?",
    options: ["1917", "Parasite", "Joker", "Ford v Ferrari"],
    correct: "Parasite",
  },
  {
    id: 4,
    question: "In which year was 'The Matrix' released?",
    options: ["1996", "1999", "2001", "2003"],
    correct: "1999",
  },
];

export function getQuestionForToday(): CineQuestion {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return QUESTIONS[dayOfYear % QUESTIONS.length];
}
