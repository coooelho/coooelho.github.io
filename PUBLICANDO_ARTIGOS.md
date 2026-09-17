# Como escrever e publicar artigos

Cada artigo é um arquivo Markdown em `src/content/notes/en/` ou `src/content/notes/pt/`. A categoria determina a seção e o endereço público:

| Conteúdo | `category` | Seção |
| --- | --- | --- |
| Construção do PedeAqui | `pedeaqui` | Trabalhos → PedeAqui |
| Atuação no ICTQ Foton | `foton` | Trabalhos → ICTQ Foton |
| Pesquisa científica própria | `research` | Notas → Pesquisa |
| Estratégia e negócios em geral | `business` | Notas → Negócios |
| Comentário sobre um livro lido | `books` | Leituras → Livros |
| Comentário sobre um artigo lido | `articles` | Leituras → Artigos |

## Fluxo escolhido: Obsidian

O Obsidian será o editor principal dos artigos. No outro notebook:

1. clone o repositório com o GitHub Desktop;
2. no Obsidian, escolha **Open folder as vault** e abra a pasta do repositório;
3. ative o plugin nativo **Templates** e selecione a pasta `templates`;
4. crie a nota dentro de `src/content/notes/pt/` ou `src/content/notes/en/`;
5. insira o modelo `artigo-pt` ou `article-en`; para uma leitura, use `reading-note`;
6. use o GitHub Desktop para fazer commit e push, sem precisar do terminal.

A pasta `.obsidian/` fica fora do Git para que preferências e plugins de um notebook não alterem a configuração do outro.

O site está publicado no GitHub Pages. Um push na branch `main` com `draft: false` atualiza o site automaticamente.

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
- `category`: define em qual uma das seis áreas da tabela a publicação aparecerá;
- `tags`: permite relacionar a publicação a vários assuntos e áreas ao mesmo tempo;
- `format`: `signal`, `note`, `analysis`, `building-journal`, `thesis` ou `reading-note`;
- `featured`: reserva o artigo para futuros destaques da homepage;
- `draft`: controla se o artigo está público;
- `sources`: lista opcional de URLs citadas;
- `disclosure`: aviso opcional sobre vínculo ou conflito de interesse;
- `updatedAt`: data opcional da última atualização;
- `readingId`: identificador da obra no catálogo; use-o nas notas de leitura para exibir automaticamente título, autoria, ano, descrição e fonte original.

O formato do texto pode continuar sendo uma nota ou um artigo. É a `category` que controla sua localização: textos sobre as duas organizações ficam em **Trabalhos**, pesquisa própria e negócios ficam em **Notas**, e comentários sobre obras lidas ficam em **Leituras**.

## Relacionar uma publicação a vários assuntos

`category` define apenas o endereço principal. Use `tags` para fazer o mesmo texto aparecer em outras áreas e criar páginas temáticas. Por exemplo, um artigo lido sobre computação quântica relacionado ao ICTQ Foton pode usar:

```yaml
category: articles
tags:
  - foton
  - frontier-science
  - quantum-computing
```

Esse texto terá endereço principal em **Leituras → Artigos**, também aparecerá em **Trabalhos → ICTQ Foton** e será encontrado nas páginas temáticas **Ciência de fronteira** e **Computação quântica**.

Outro exemplo, para uma colaboração entre as duas organizações:

```yaml
category: pedeaqui
tags:
  - foton
  - partnerships
```

Nesse caso, a publicação terá endereço principal no PedeAqui, mas aparecerá nas páginas do PedeAqui e do ICTQ Foton e no tema **Parcerias**. As tags devem usar letras minúsculas, números e hífens, sem espaços ou acentos.

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

O próximo build passa a gerar automaticamente a página, o item em **Notas** ou **Leituras** e a entrada no RSS. Se existir uma tradução publicada com o mesmo `translationKey`, o seletor de idioma leva diretamente à versão equivalente.

Os feeds ficam em `/rss.xml` e `/pt/rss.xml`.
