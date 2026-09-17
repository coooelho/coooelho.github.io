import type { CollectionEntry } from "astro:content";
import { withBase } from "./paths";

export type Note = CollectionEntry<"notes">;
export type NoteLanguage = Note["data"]["language"];

const categoryLabels = {
  en: {
    frontiers: "Frontiers",
    applications: "Applications",
    building: "Building",
    reading: "Reading",
  },
  "pt-BR": {
    frontiers: "Fronteiras",
    applications: "Aplicações",
    building: "Construção",
    reading: "Leituras",
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

export function getNoteSlug(note: Note) {
  return note.id.split("/").at(-1) ?? note.id;
}

export function getNotePath(note: Note) {
  const slug = getNoteSlug(note);
  return withBase(note.data.language === "en" ? `/notes/${slug}/` : `/pt/notas/${slug}/`);
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
