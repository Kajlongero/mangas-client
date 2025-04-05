type NameLangs = {
  en: string;
  es: string;
};

type AuthLinks = {
  id: number;
  name: NameLangs;
  path: string;
};

export const authLinks: AuthLinks[] = [
  {
    id: 1,
    name: {
      en: "About us",
      es: "Acerca de nosotros",
    },
    path: "/about",
  },
  {
    id: 2,
    name: {
      en: "Terms of use",
      es: "Terminos de uso",
    },
    path: "/terms",
  },
  {
    id: 3,
    name: {
      en: "Contact",
      es: "Contacto",
    },
    path: "/contact",
  },
  {
    id: 4,
    name: {
      en: "Report a problem",
      es: "Reportar un problema",
    },
    path: "/problems/report",
  },
];
