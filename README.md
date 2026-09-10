# Site pessoal — Luis Coelho Ramos

Site pessoal bilíngue construído com Astro e TypeScript. O inglês fica na raiz e o português em `/pt/`.

Rotas editoriais já preparadas:

- `/notes/` e `/pt/notas/` para o arquivo cronológico;
- `/notes/reading/` e `/pt/notas/leituras/` para livros, papers e artigos lidos.

O catálogo bibliográfico bilíngue fica em `src/content/reading/`, com um único registro JSON por obra. O modelo em
`templates/reading-note.md` é reservado às futuras notas autorais em Markdown.

## Desenvolvimento

Requisitos:

- Node.js 24 ou posterior;
- npm 11 ou posterior.

Comandos:

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

O protótipo original permanece em `prototype/` como referência visual. A implementação ativa fica em `src/`.

## Configurações pendentes

- comprar o domínio pessoal;
- copiar `.env.example` para `.env` e preencher `PUBLIC_SITE_URL`;
- decidir o e-mail público;
- fotografia principal integrada; `IMG_5361.JPG` permanece fora da publicação por apresentar marcas no fundo;
- ativar a newsletter somente depois de configurar o provedor em `src/config/site.ts`;
- publicar uma landing page do PedeAqui antes de ligar `pedeaqui.ia` no site pessoal.
