# Como escrever e publicar artigos

Cada artigo é um arquivo Markdown em `src/content/notes/en/` ou `src/content/notes/pt/`. O nome do arquivo vira o endereço público. Por exemplo, `src/content/notes/pt/automacao-com-criterio.md` será publicado em `/pt/notas/automacao-com-criterio/`.

## Fluxo escolhido: Obsidian

O Obsidian será o editor principal dos artigos. No outro notebook:

1. clone o repositório com o GitHub Desktop;
2. no Obsidian, escolha **Open folder as vault** e abra a pasta do repositório;
3. ative o plugin nativo **Templates** e selecione a pasta `templates`;
4. crie a nota dentro de `src/content/notes/pt/` ou `src/content/notes/en/`;
5. insira o modelo `artigo-pt` ou `article-en` e escreva normalmente;
6. use o GitHub Desktop para fazer commit e push, sem precisar do terminal.

A pasta `.obsidian/` fica fora do Git para que preferências e plugins de um notebook não alterem a configuração do outro.

O site ainda não está no ar. Enquanto o GitHub Pages não for ativado, enviar um artigo ao GitHub apenas guarda e sincroniza o conteúdo. Depois da primeira publicação, um push na branch `main` com `draft: false` atualizará o site automaticamente.

## Criar um rascunho pelo terminal — opcional

Use o comando:

```bash
npm run article:new -- pt automacao-com-criterio "Automação com critério"
```

Para um artigo em inglês:

```bash
npm run article:new -- en automation-with-judgment "Automation with judgment"
```

O comando é apenas uma alternativa aos modelos do Obsidian. Ele cria o arquivo com `draft: true`. Rascunhos são validados pelo projeto, mas não aparecem nas páginas geradas nem no RSS.

## Escrever e revisar

O texto começa depois do segundo `---`. Use Markdown normal:

```markdown
## Título de seção

Um parágrafo com **ênfase** e um [link](https://example.com).

> Uma citação curta.
```

Antes do texto ficam os metadados:

- `title`: título exibido na página;
- `description`: resumo usado na listagem e nos mecanismos de busca;
- `publishedAt`: data de publicação no formato `AAAA-MM-DD`;
- `language`: `en` ou `pt-BR`;
- `translationKey`: mesmo identificador nas duas versões do mesmo artigo;
- `category`: escolha o filtro principal da nota: `pedeaqui`, `foton`, `reading`, `visits-partnerships` ou `frontiers`;
- `format`: `signal`, `note`, `analysis`, `building-journal`, `thesis` ou `reading-note`;
- `featured`: reserva o artigo para futuros destaques da homepage;
- `draft`: controla se o artigo está público;
- `sources`: lista opcional de URLs citadas;
- `disclosure`: aviso opcional sobre vínculo ou conflito de interesse;
- `updatedAt`: data opcional da última atualização;
- `readingId`: identificador da obra no catálogo; use-o nas notas de leitura para exibir automaticamente título, autoria, ano, descrição e fonte original.

As notas de leitura aparecem no arquivo geral sob o filtro **Notas de leitura**. A página **Obras lidas** permanece como catálogo e passa a apontar para seu comentário sempre que houver uma nota publicada com o mesmo `readingId`.

Se houver imagem principal, coloque o arquivo em `src/assets/notes/` e acrescente:

```yaml
heroImage: ../../../assets/notes/nome-da-imagem.jpg
heroImageAlt: "Descrição objetiva da imagem."
```

## Conferir localmente

Em um terminal, execute:

```bash
npm run dev
```

Abra `http://localhost:4321`. Enquanto `draft` estiver como `true`, o artigo não terá uma página pública. Para revisar a página pronta antes do envio ao site, mude temporariamente para `false` e rode:

```bash
npm run check
npm run build
```

## Marcar como pronto para publicação

Revise título, resumo, data, fontes e eventuais informações confidenciais. Depois troque:

```yaml
draft: true
```

por:

```yaml
draft: false
```

O próximo build passa a gerar automaticamente a página, o item na listagem de notas e a entrada no RSS. Se existir uma tradução publicada com o mesmo `translationKey`, o seletor de idioma leva diretamente à versão equivalente. Isso ficará público somente depois que a implantação do site estiver configurada.

Os feeds ficam em `/rss.xml` e `/pt/rss.xml`.
