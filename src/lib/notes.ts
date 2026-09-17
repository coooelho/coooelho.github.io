import type { CollectionEntry } from "astro:content";
import { withBase } from "./paths";

export type Note = CollectionEntry<"notes">;
export type NoteLanguage = Note["data"]["language"];
export type NoteCategory = Note["data"]["category"];

const categoryLabels = {
  en: {
    pedeaqui: "PedeAqui",
    foton: "ICTQ Foton",
    research: "Research",
    business: "Business",
    books: "Books",
    articles: "Articles",
  },
  "pt-BR": {
    pedeaqui: "PedeAqui",
    foton: "ICTQ Foton",
    research: "Pesquisa",
    business: "Negócios",
    books: "Livros",
    articles: "Artigos",
  },
} as const;

const formatLabels = {
  en: {
    signal: "Signal",
    note: "Note",
    analysis: "Analysis",
    "building-journal": "Building journal",
    thesis: "Thesis",
    "reading-note": "Reading note",
  },
  "pt-BR": {
    signal: "Sinal",
    note: "Nota",
    analysis: "Análise",
    "building-journal": "Diário de construção",
    thesis: "Tese",
    "reading-note": "Nota de leitura",
  },
} as const;

const topicLabels = {
  en: {
    pedeaqui: "PedeAqui",
    foton: "ICTQ Foton",
    research: "Research",
    business: "Business",
    books: "Books",
    articles: "Articles",
    "frontier-science": "Frontier science",
    "quantum-computing": "Quantum computing",
    "quantum-technologies": "Quantum technologies",
    "artificial-intelligence": "Artificial intelligence",
    partnerships: "Partnerships",
    "international-cooperation": "International cooperation",
  },
  "pt-BR": {
    pedeaqui: "PedeAqui",
    foton: "ICTQ Foton",
    research: "Pesquisa",
    business: "Negócios",
    books: "Livros",
    articles: "Artigos",
    "frontier-science": "Ciência de fronteira",
    "quantum-computing": "Computação quântica",
    "quantum-technologies": "Tecnologias quânticas",
    "artificial-intelligence": "Inteligência artificial",
    partnerships: "Parcerias",
    "international-cooperation": "Cooperação internacional",
  },
} as const;

const categoryPaths = {
  en: {
    pedeaqui: "/work/pedeaqui/",
    foton: "/work/foton/",
    research: "/notes/research/",
    business: "/notes/business/",
    books: "/reading/books/",
    articles: "/reading/articles/",
  },
  "pt-BR": {
    pedeaqui: "/pt/atuacao/pedeaqui/",
    foton: "/pt/atuacao/foton/",
    research: "/pt/notas/pesquisa/",
    business: "/pt/notas/negocios/",
    books: "/pt/leituras/livros/",
    articles: "/pt/leituras/artigos/",
  },
} as const;

const categoryValues = new Set<string>(Object.keys(categoryPaths.en));

export function getNoteSlug(note: Note) {
  return note.id.split("/").at(-1) ?? note.id;
}

export function getNoteArchivePath(note: Note) {
  return withBase(categoryPaths[note.data.language][note.data.category]);
}

export function getNotePath(note: Note) {
  return `${getNoteArchivePath(note)}${getNoteSlug(note)}/`;
}

export function isWorkNote(note: Note) {
  return note.data.category === "pedeaqui" || note.data.category === "foton";
}

export function isReadingNote(note: Note) {
  return note.data.category === "books" || note.data.category === "articles";
}

export function hasTopic(note: Note, topic: string) {
  return note.data.category === topic || note.data.tags.includes(topic);
}

export function isCategoryTopic(topic: string): topic is NoteCategory {
  return categoryValues.has(topic);
}

export function getTopicLabel(topic: string, language: NoteLanguage) {
  const knownLabels = topicLabels[language] as Record<string, string>;
  if (knownLabels[topic]) return knownLabels[topic];

  const words = topic.replace(/-/g, " ");
  return words.charAt(0).toLocaleUpperCase(language) + words.slice(1);
}

export function getTopicPath(topic: string, language: NoteLanguage) {
  if (isCategoryTopic(topic)) return withBase(categoryPaths[language][topic]);
  return withBase(language === "en" ? `/topics/${topic}/` : `/pt/topicos/${topic}/`);
}

export function getCategoryLabel(note: Note) {
  return categoryLabels[note.data.language][note.data.category];
}

export function getFormatLabel(note: Note) {
  return formatLabels[note.data.language][note.data.format];
}

export function getNoteDate(note: Note) {
  return note.data.publishedAt.toLocaleDateString(note.data.language, {
    dateStyle: "long",
    timeZone: "UTC",
  });
}

export function findTranslation(note: Note, notes: Note[]) {
  if (!note.data.translationKey) return undefined;

  return notes.find(
    (candidate) =>
      candidate.id !== note.id &&
      candidate.data.translationKey === note.data.translationKey &&
      candidate.data.language !== note.data.language,
  );
}
