# Site pessoal — Luis Coelho Ramos

Site pessoal bilíngue construído com Astro e TypeScript. O inglês fica na raiz e o português em `/pt/`.

Rotas editoriais já preparadas:

- `/notes/` e `/pt/notas/` para o arquivo cronológico;
- `/notes/reading/` e `/pt/notas/leituras/` para livros, papers e artigos lidos.

O catálogo bibliográfico bilíngue fica em `src/content/reading/`, com um único registro JSON por obra. O modelo em
`templates/reading-note.md` é reservado às futuras notas autorais em Markdown.

## Publicar artigos

O editor escolhido para escrever os artigos é o Obsidian. O repositório pode ser aberto como um vault no outro notebook e sincronizado pelo GitHub Desktop, sem uso obrigatório do terminal.

Como alternativa, crie um rascunho em português com:

```bash
npm run article:new -- pt meu-artigo "Título do artigo"
```

Use `en` no lugar de `pt` para escrever em inglês. O arquivo nasce como rascunho; depois da revisão, mudar `draft: true` para `draft: false` inclui a página, a listagem e o RSS no próximo build. O site ainda não está no ar, então a publicação pública começará somente após a configuração do deploy.

O fluxo completo e todos os campos disponíveis estão em [`PUBLICANDO_ARTIGOS.md`](./PUBLICANDO_ARTIGOS.md).

## Publicação

O site é publicado pelo GitHub Pages. Cada push na branch `main` executa o build do Astro e envia os arquivos estáticos por meio do workflow `.github/workflows/deploy.yml`.

Antes da configuração de um domínio próprio, o endereço previsto é:

```text
https://coooelho.github.io/
```

Para fazer a primeira publicação pelo site do GitHub:

1. abra o repositório `PersonalWebSite`;
2. entre em **Settings → General**;
3. em **Repository name**, troque `PersonalWebSite` por `coooelho.github.io` e confirme em **Rename**;
4. ainda em **Settings**, abra **Pages**;
5. em **Build and deployment → Source**, escolha **GitHub Actions**;
6. abra a aba **Actions** e execute o workflow **Deploy to GitHub Pages**, ou envie um commit para `main`;
7. ao final da execução, abra o endereço exibido na etapa `deploy`.

O nome `coooelho.github.io` transforma o repositório no site principal da conta e elimina o prefixo que apareceria no endereço de um repositório comum.

Depois de renomear o repositório, atualize o endereço remoto deste projeto e envie os commits preparados:

```bash
git remote set-url origin https://github.com/coooelho/coooelho.github.io.git
git push origin main
```

No plano GitHub Free, o repositório precisa ser público para usar o GitHub Pages. Repositórios privados exigem um plano compatível.

Quando houver um domínio, cadastre a variável `PUBLIC_SITE_URL` nas variáveis do repositório e configure o domínio em **Settings → Pages**.

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

- ativar GitHub Pages com GitHub Actions nas configurações do repositório;
- renomear o repositório para `coooelho.github.io`;
- enviar a versão atual para a branch `main` e validar a primeira publicação;
- comprar o domínio pessoal;
- depois da compra, cadastrar `PUBLIC_SITE_URL` como variável do repositório;
- decidir o e-mail público;
- fotografia principal integrada; `IMG_5361.JPG` permanece fora da publicação por apresentar marcas no fundo;
- ativar a newsletter somente depois de configurar o provedor em `src/config/site.ts`;
- publicar uma landing page do PedeAqui antes de ligar `pedeaqui.ia` no site pessoal.
