import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const [, , languageArgument, slugArgument, ...titleParts] = process.argv;

if (["--help", "-h"].includes(languageArgument) || !languageArgument || !slugArgument) {
  console.log('Uso: npm run article:new -- <pt|en> <slug> "Título do artigo"');
  console.log('Exemplo: npm run article:new -- pt automacao-com-criterio "Automação com critério"');
  process.exit(languageArgument ? 0 : 1);
}

const languageAliases = new Map([
  ["en", { frontmatter: "en", directory: "en" }],
  ["pt", { frontmatter: "pt-BR", directory: "pt" }],
  ["pt-br", { frontmatter: "pt-BR", directory: "pt" }],
]);
const language = languageAliases.get(languageArgument.toLowerCase());

if (!language) {
  console.error('Idioma inválido. Use "pt" ou "en".');
  process.exit(1);
}

const slug = slugArgument.toLowerCase();
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("O slug deve conter apenas letras sem acento, números e hífens.");
  process.exit(1);
}

const title = titleParts.join(" ") || "Título do artigo";
const directory = path.resolve("src/content/notes", language.directory);
const filePath = path.join(directory, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`O arquivo já existe: ${path.relative(process.cwd(), filePath)}`);
  process.exit(1);
}

const now = new Date();
const today = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");
const copy = language.frontmatter === "en"
  ? {
      description: "Explain in one sentence why this article matters.",
      opening: "Write the opening here.",
      firstHeading: "First point",
      firstBody: "Develop the idea with examples, evidence, and context.",
      closingHeading: "What this changes",
      closingBody: "Close with a practical implication or an open question.",
    }
  : {
      description: "Escreva em uma frase por que este artigo importa.",
      opening: "Escreva aqui a abertura do artigo.",
      firstHeading: "Primeiro ponto",
      firstBody: "Desenvolva a ideia com exemplos, evidências e contexto.",
      closingHeading: "O que isso muda",
      closingBody: "Feche com a implicação prática ou a pergunta que permanece aberta.",
    };
const content = `---
title: ${JSON.stringify(title)}
description: "${copy.description}"
publishedAt: ${today}
language: ${language.frontmatter}
translationKey: ${slug}
category: applications
format: note
featured: false
draft: true
sources: []
---

${copy.opening}

## ${copy.firstHeading}

${copy.firstBody}

## ${copy.closingHeading}

${copy.closingBody}
`;

await mkdir(directory, { recursive: true });
await writeFile(filePath, content, { encoding: "utf8", flag: "wx" });

console.log(`Rascunho criado: ${path.relative(process.cwd(), filePath)}`);
console.log('Edite o texto e troque "draft: true" por "draft: false" para publicar.');
