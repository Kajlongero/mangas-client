export type LangName = {
  en: string;
  es: string;
};

export interface ComicShownOptions {
  id: string | number;
  name: LangName;
}

export const comicShownOptions: ComicShownOptions[] = [
  {
    id: 1,
    name: {
      en: "Description",
      es: "Descripción",
    },
  },
  {
    id: 2,
    name: {
      en: "Chapters",
      es: "Capítulos",
    },
  },
  {
    id: 3,
    name: {
      en: "Comments",
      es: "Comentarios",
    },
  },
];
