# Plano operacional — do protótipo ao site no ar

**Projeto:** site pessoal internacional de Luis Coelho Ramos  
**Versão:** 1.0  
**Data:** 30 de agosto de 2026  
**Meta recomendada:** publicar até 20 de setembro de 2026, mantendo uma margem antes da viagem à Europa em outubro  
**Idioma principal:** inglês  
**Idioma secundário:** português brasileiro em `/pt/`

---

## 1. Resultado final esperado

Ao final deste plano, teremos:

- um site pessoal construído com Astro, TypeScript, CSS e Markdown;
- inglês na raiz do domínio e português em `/pt/`;
- homepage, Notes, Work, Journey, About e Privacy;
- páginas próprias para artigos;
- PedeAqui e ICTQ Foton como centro da apresentação;
- formação e pesquisa científica apresentadas como fundamento da atuação atual;
- currículo disponível para download;
- SEO internacional com `canonical`, `hreflang`, sitemap e metadados sociais;
- RSS em inglês e português;
- imagens otimizadas e site responsivo;
- política de privacidade em ambos os idiomas;
- formulário de contato e, se aprovado, newsletter;
- código versionado no GitHub;
- implantação automática no Cloudflare Workers;
- domínio `.com`, HTTPS e redirecionamentos configurados;
- documentação para publicar novos textos sem reconstruir o site.

---

## 2. Decisões técnicas já tomadas

| Tema | Decisão |
|---|---|
| Framework | Astro |
| Linguagem de componentes | TypeScript |
| Estilo | CSS moderno, sem framework visual inicialmente |
| Conteúdo | Markdown; MDX apenas quando um artigo exigir componentes especiais |
| Site | Estático por padrão |
| Idioma principal | Inglês sem prefixo |
| Português | `/pt/` |
| Hospedagem | Cloudflare Workers com arquivos estáticos |
| Repositório | GitHub |
| Analytics | Cloudflare Web Analytics ou nenhum no primeiro lançamento |
| Banco de dados | Nenhum na primeira versão |
| CMS | Nenhum na primeira versão; conteúdo dentro do repositório |
| Newsletter | Integração externa, somente depois de escolher o provedor |

Astro continuará sendo um gerador estático. Não instalaremos o adaptador de renderização do Cloudflare enquanto o site não precisar de funções no servidor. Isso reduz complexidade, superfície de ataque e manutenção.

---

## 3. Como Luis e Codex trabalharão juntos

### Responsabilidade de Luis

- decidir posicionamento, domínio e informações públicas;
- fornecer fotografias, logos e materiais com autorização de uso;
- confirmar fatos, cargos, datas e afirmações institucionais;
- revisar a voz dos textos em inglês e português;
- criar e controlar contas externas;
- realizar login, autenticação em dois fatores e pagamentos;
- aprovar cada marco visual antes do próximo;
- dar a palavra final sobre o que pode ser divulgado sobre PedeAqui e Foton.

### Responsabilidade do Codex

- organizar o repositório;
- instalar e configurar o projeto, mediante aprovação quando necessária;
- transformar o protótipo em componentes Astro;
- implementar as duas versões linguísticas;
- criar o sistema de artigos;
- tratar e integrar as imagens fornecidas;
- escrever rascunhos e traduções;
- implementar SEO, acessibilidade, RSS e sitemap;
- executar verificações, testes e builds;
- preparar e realizar a implantação técnica autorizada;
- documentar publicação e manutenção;
- preservar arquivos e mudanças existentes.

### Responsabilidade conjunta

- revisar a homepage;
- escolher a fotografia principal;
- escrever os quatro textos de lançamento;
- decidir o que será traduzido;
- revisar política de privacidade e formulário;
- testar o site no celular e no computador;
- aprovar a versão de produção.

### Regra de segurança

Luis não deve colar no chat:

- senhas;
- códigos de autenticação em dois fatores;
- chaves de API;
- tokens do GitHub ou Cloudflare;
- credenciais do domínio;
- credenciais do PedeAqui ou ICTQ Foton;
- dados pessoais de clientes ou associados.

Logins serão feitos diretamente nos serviços. Segredos técnicos, se existirem, serão inseridos em variáveis de ambiente ou no painel do provedor e nunca versionados.

### Ciclo de cada etapa

1. Luis autoriza a etapa.
2. Codex inspeciona o estado atual.
3. Codex implementa as mudanças.
4. Codex executa testes proporcionais ao risco.
5. Codex entrega um resumo e uma forma de revisar.
6. Luis envia feedback concreto.
7. Codex corrige e valida novamente.
8. Criamos um ponto de controle no Git.

Feedback visual útil deve mencionar página, dispositivo e elemento. Exemplo:

> Na homepage em inglês, no celular, o título ocupa linhas demais. Quero diminuir aproximadamente 10% e manter “decisions that matter” na mesma linha se houver espaço.

---

## 4. Estado atual do projeto

Já existem:

- `BRIEF_SITE_PESSOAL.md`;
- `prototype/index.html`, com a versão inglesa principal;
- `prototype/pt/index.html`, com a versão em português;
- `prototype/styles.css`;
- `prototype/DIRECAO_VISUAL.md`;
- `luis_coelho_cv_en.pdf`.

No computador atual:

- Git está instalado;
- Node.js 24.20.0 e npm 11.19.0 foram instalados e validados em 30 de agosto de 2026;
- a base Astro estática com TypeScript estrito foi criada na raiz do projeto;
- as rotas `/` e `/pt/` já são geradas pelo build;
- a newsletter está configurada como recurso desativado;
- GitHub CLI ainda não está instalado;
- ainda não existe uma implantação pública;
- o formulário inativo foi removido do protótipo; a implementação Astro não renderiza inscrição enquanto não houver provedor.

---

# Fase 0 — decisões e materiais de Luis

## Passo 0.1 — confirmar o nome público

**Responsável:** Luis  
**Decisão aprovada:** usar `Luis Coelho Ramos`, sem acento, como marca pública em todos os idiomas. Usar `Luis Henrique Coelho Ramos` em currículo, candidaturas universitárias, biografia formal e metadados acadêmicos. `Luis Coelho` permanece como forma curta em conversas.

Confirmar:

- nome no cabeçalho;
- nome no currículo;
- nome do domínio;
- nome no LinkedIn;
- assinatura de e-mail.

**Critério de conclusão:** concluído em 30 de agosto de 2026.

## Passo 0.2 — escolher o domínio

**Responsável:** Luis, com pesquisa e apoio do Codex.

Criar uma lista em ordem de preferência, começando por:

1. `luiscoelhoramos.com`;
2. `luiscoelho.com`;
3. `luishcoelho.com`;
4. outra opção curta e internacional.

Regras:

- priorizar `.com`;
- evitar hífen e números;
- evitar nome ligado exclusivamente ao PedeAqui ou Foton;
- evitar domínios difíceis de pronunciar em inglês;
- não comprar antes de verificar preço de aquisição e renovação;
- não publicar a lista completa de alternativas enquanto a compra não estiver concluída.

**Ação de Luis:** selecionar de três a cinco opções após a pesquisa.  
**Ação do Codex:** verificar conflitos, clareza, histórico público e implicações de SEO.  
**Ação de Luis:** comprar o domínio escolhido em conta própria, registrar os dados corretamente, ativar renovação automática e proteger a conta com 2FA. O domínio ainda não foi comprado; esta compra é uma etapa obrigatória antes da publicação final.

**Critério de conclusão:** domínio registrado e acesso protegido com 2FA.

## Passo 0.3 — criar ou confirmar contas

**Responsável:** Luis.

Contas necessárias:

- GitHub;
- Cloudflare;
- registrador do domínio, se diferente do Cloudflare;
- serviço de e-mail ou encaminhamento para o domínio;
- serviço de newsletter, apenas se desejado no lançamento.

Recomendações:

- ativar autenticação em dois fatores;
- guardar códigos de recuperação em local seguro;
- usar contas pessoais controladas por Luis, não contas de terceiros;
- não conceder acesso institucional do Foton ao projeto pessoal;
- não misturar contas de produção do PedeAqui com o site pessoal.

**Critério de conclusão:** GitHub e Cloudflare criados; domínio comprado antes da implantação final da Fase 12.

## Passo 0.4 — definir contato público

**Responsável:** Luis.

Decisão pendente. Escolher:

- e-mail provisório para o lançamento;
- e-mail definitivo no domínio, por exemplo `hello@dominio.com` ou `luis@dominio.com`;
- se o endereço atual do Outlook continuará visível;
- se haverá formulário ou apenas link de e-mail.

**Recomendação:** depois da compra do domínio, usar `luis@dominio.com` como contato principal e encaminhar para a caixa já utilizada. Enquanto a decisão estiver pendente, o site não exibirá endereço inventado nem formulário sem destino.

## Passo 0.5 — preparar fotografias

**Responsável:** Luis fornece; Codex seleciona, recorta e otimiza.

Luis forneceu duas fotografias de autoria e edição próprias. `IMG_5208.jpg` foi selecionada para o hero; `IMG_5361.JPG` não será publicada na forma atual por ter resolução inferior e marcas visíveis no fundo. Materiais adicionais desejáveis:

- um retrato vertical principal, idealmente com pelo menos 2000 × 2600 px;
- uma fotografia horizontal trabalhando ou em contexto profissional;
- uma fotografia relacionada ao PedeAqui;
- uma fotografia de evento ou atividade do ICTQ Foton;
- duas ou três fotografias da trajetória internacional;
- logos oficiais do PedeAqui e Foton em SVG ou PNG de alta resolução, com permissão de uso.

Para cada imagem, informar:

- quem produziu;
- se pode ser publicada;
- local e ano aproximado;
- pessoas presentes;
- crédito necessário;
- contexto para o texto alternativo.

Não enviar imagens contendo:

- dados pessoais visíveis;
- telas com credenciais;
- informações internas;
- clientes sem autorização;
- documentos, crachás ou QR Codes sensíveis.

**Critério de conclusão:** pasta de imagens aprovada e com origem documentada.

## Passo 0.6 — confirmar fatos públicos

**Responsável:** Luis.

Confirmar por escrito:

- cargo exato no ICTQ Foton em português e inglês;
- data de início no Foton;
- cargo exato no PedeAqui;
- data de início do PedeAqui;
- descrição pública da participação técnica;
- links oficiais das duas organizações;
- informações que não podem ser divulgadas — decisão atual: não publicar dados sensíveis, credenciais, informações pessoais de clientes, dados internos ou métricas não autorizadas;
- situação e descrição da investigação em criptografia pós-quântica;
- datas de Rússia, Portugal e Japão;
- como comunicar a ida à Europa em outubro — decisão atual: não mencionar no hero; atualizar About/Journey quando a mudança se concretizar;
- quais informações acadêmicas podem ser exibidas.

**Critério de conclusão:** ficha factual revisada por Luis.

## Passo 0.7 — consultar o Instituto Foton

**Responsável:** Luis.

Confirmar, se a governança institucional exigir:

- uso do logo;
- nomenclatura inglesa do instituto;
- nomenclatura inglesa do cargo;
- descrição das atribuições internacionais;
- referência à pesquisa pós-quântica;
- necessidade de aviso de opiniões pessoais.

Luis confirmou que o uso do nome, logo e descrição do Foton está autorizado. Ainda será necessário receber os arquivos oficiais do logo.

**Nomenclatura aprovada em 30 de agosto de 2026:** `Vice President for International Strategy and Partnerships`, em inglês, e `Vice-Presidente de Estratégia e Parcerias Internacionais`, em português. A forma curta será `VP, International Strategy & Partnerships`.

O site não precisa de aprovação institucional integral, mas não deve sugerir que opiniões pessoais são posições oficiais.

---

# Fase 1 — ambiente técnico e controle de versão

## Passo 1.1 — instalar Node.js

**Responsável:** Codex executa; Luis aprova instalação quando solicitado.

Usaremos Node.js 22 em versão compatível com o Astro atual. A documentação do Cloudflare informa que Astro 6 e 7 exigem Node.js 22.12.0 ou posterior.

Verificações:

```bash
node --version
npm --version
```

O Node será instalado por um método versionado e reproduzível. Não reutilizaremos um pacote antigo apenas por estar disponível no sistema.

**Critério de conclusão:** `node` e `npm` funcionam e a versão é registrada no projeto.

## Passo 1.2 — criar a estrutura do projeto

**Responsável:** Codex.

Antes de criar o Astro:

- preservar `prototype/` como referência;
- preservar brief, direção visual e currículo;
- criar a aplicação sem sobrescrever os artefatos;
- decidir se o código ficará na raiz ou em uma subpasta limpa;
- criar `.gitignore` antes de instalar dependências.

Entradas mínimas do `.gitignore`:

```text
node_modules/
dist/
.astro/
.wrangler/
.env
.env.*
!.env.example
```

## Passo 1.3 — iniciar Git

**Responsável:** Codex.

Passos:

1. inicializar o repositório;
2. verificar arquivos que serão versionados;
3. confirmar que não existem segredos;
4. criar o primeiro commit com brief e protótipo;
5. usar commits por marco, não um único commit gigante.

Commits sugeridos:

```text
docs: add international personal site brief
feat: scaffold Astro site
feat: add bilingual content architecture
feat: implement editorial homepage
feat: add notes and RSS
chore: configure Cloudflare deployment
```

**Critério de conclusão:** estado inicial recuperável por Git.

## Passo 1.4 — criar repositório no GitHub

**Responsável:** Luis cria ou autoriza; Codex conecta e envia.

Recomendação:

- iniciar como repositório privado;
- nome sugerido: `personal-site` ou `luis-coelho-site`;
- não adicionar README ou `.gitignore` pelo GitHub se já existirem localmente;
- tornar público apenas se Luis desejar mostrar o código.

**Critério de conclusão:** repositório remoto conectado e primeiro push concluído.

---

# Fase 2 — criação do projeto Astro

## Passo 2.1 — criar o projeto

**Responsável:** Codex.

Configuração pretendida:

- TypeScript em modo estrito;
- saída estática;
- sem React;
- sem banco de dados;
- sem CMS;
- sem biblioteca CSS;
- sem JavaScript no cliente por padrão.

## Passo 2.2 — instalar integrações oficiais

**Responsável:** Codex.

Integrações previstas:

- `@astrojs/sitemap`;
- `@astrojs/rss`;
- `@astrojs/mdx`, somente se algum texto precisar de componente especial;
- Wrangler como dependência de desenvolvimento para implantação.

Não instalaremos pacotes apenas porque são populares. Cada dependência deve resolver uma necessidade concreta.

## Passo 2.3 — criar scripts padronizados

**Responsável:** Codex.

O `package.json` deverá oferecer:

```text
npm run dev       → desenvolvimento local
npm run check     → validação de Astro e TypeScript
npm run build     → build de produção
npm run preview   → revisão do build
npm run deploy    → implantação no Cloudflare
```

## Passo 2.4 — configurar o Cloudflare para arquivos estáticos

**Responsável:** Codex.

Criar `wrangler.jsonc` apontando para `./dist`. O primeiro lançamento não precisa de renderização no servidor nem do adaptador `@astrojs/cloudflare`.

**Critério de conclusão da Fase 2:** página mínima Astro abre localmente, passa em `check` e gera `dist/`.

---

# Fase 3 — arquitetura bilíngue

## Passo 3.1 — configurar idiomas

**Responsável:** Codex.

Configuração:

```text
defaultLocale: en
locales: en, pt-br
prefixDefaultLocale: false
```

Resultado:

```text
/                 inglês
/about/           inglês
/notes/           inglês
/pt/              português
/pt/sobre/        português
/pt/notas/        português
```

Não haverá redirecionamento automático por IP ou navegador.

## Passo 3.2 — criar dicionário de interface

**Responsável:** Codex; Luis revisa.

O dicionário terá apenas textos de interface:

- navegação;
- botões;
- datas;
- rótulos;
- mensagens do formulário;
- rodapé;
- textos de acessibilidade.

Artigos e biografias não serão armazenados em um grande arquivo de tradução; terão conteúdos próprios por idioma.

## Passo 3.3 — modelar traduções de artigos

Cada texto terá uma chave compartilhada, por exemplo:

```yaml
translationKey: quantum-for-leaders
language: en
```

e:

```yaml
translationKey: quantum-for-leaders
language: pt-br
```

Isso permitirá:

- alternar para a tradução equivalente;
- gerar `hreflang` corretamente;
- avisar quando não existe tradução;
- evitar que o botão de idioma leve sempre à homepage.

## Passo 3.4 — definir política de tradução

**Responsável:** Luis decide com recomendação do Codex.

Recomendação:

- páginas institucionais sempre nos dois idiomas;
- quatro textos de lançamento nos dois idiomas;
- artigos ligados a Foton, universidades e atuação internacional prioritariamente em inglês e português;
- diários locais do PedeAqui podem existir apenas em português;
- nunca publicar tradução automática sem revisão humana de Luis.

**Critério de conclusão da Fase 3:** alternância EN/PT preserva a página equivalente e gera URLs válidas.

---

# Fase 4 — design system e componentes

## Passo 4.1 — transformar o CSS do protótipo em sistema

**Responsável:** Codex.

Separar:

- tokens de cor;
- tipografia;
- espaçamento;
- layout;
- componentes;
- estilos de artigo;
- responsividade;
- estados de foco e interação.

## Passo 4.2 — hospedar fontes no próprio site

**Responsável:** Codex.

Na produção, Newsreader e IBM Plex Sans devem ser servidas localmente, em vez de depender de chamadas do navegador ao Google Fonts. Isso melhora controle, estabilidade e privacidade.

Verificar:

- licença de cada fonte;
- subconjuntos realmente necessários;
- pesos 400, 500 e 600;
- formato WOFF2;
- `font-display: swap`;
- comportamento quando a fonte ainda não carregou.

## Passo 4.3 — criar componentes

Componentes iniciais:

```text
BaseLayout
SEOHead
Header
LanguageSwitch
Footer
Hero
FeaturedNote
NoteCard
RoleCard
ScientificFoundation
Timeline
NewsletterForm
ArticleHeader
ArticleBody
Sources
Disclosure
TranslationLink
```

## Passo 4.4 — integrar imagens

**Responsável:** Codex; Luis aprova cortes.

Usar os componentes de imagem do Astro para:

- criar tamanhos responsivos;
- gerar formatos eficientes;
- impedir deslocamento de layout;
- manter texto alternativo;
- evitar servir uma fotografia de vários megabytes no celular.

## Passo 4.5 — substituir o marcador LCR

Testar de duas a três opções de retrato no hero. Luis revisará:

- enquadramento;
- seriedade;
- proximidade;
- coerência internacional;
- integração com as órbitas gráficas;
- resultado em celular.

**Critério de conclusão da Fase 4:** homepage reproduz a direção aprovada em desktop e celular com fotografia real.

---

# Fase 5 — páginas e conteúdo estruturado

## Passo 5.1 — criar páginas obrigatórias

### Inglês

- `/`;
- `/notes/`;
- `/notes/reading/`;
- `/work/`;
- `/journey/`;
- `/about/`;
- `/privacy/`;
- `/404.html`.

### Português

- `/pt/`;
- `/pt/notas/`;
- `/pt/notas/leituras/`;
- `/pt/atuacao/`;
- `/pt/trajetoria/`;
- `/pt/sobre/`;
- `/pt/privacidade/`.

## Passo 5.2 — criar a coleção de notas

Campos previstos:

```text
title
description
publishedAt
updatedAt
language
translationKey
category
format
featured
draft
heroImage
heroImageAlt
sources
disclosure
readingId
```

O schema deve impedir build quando um texto obrigatório estiver sem título, data, idioma ou descrição.

`Reading / Leituras` continuará como subcategoria editorial de Notes, mas usará duas coleções técnicas. `reading`
guardará uma única ficha bibliográfica JSON por obra, compartilhada pelos dois idiomas; `notes` guardará as notas
autorais em Markdown. Uma nota de leitura se liga à obra por `readingId`, evitando duplicação de autores, DOI e status.

Campos da coleção bibliográfica:

```text
title
titlePt
description.en
description.pt
type
creators
creatorRole
sourceUrl
publicationYear
publicationYearApproximate
identifier
venue
status
addedAt
finishedAt
```

Os tipos aceitos serão `book`, `paper`, `article` e `conference-paper`.

## Passo 5.3 — criar páginas de artigos

Cada artigo terá:

- título;
- descrição;
- data de publicação e atualização;
- tempo de leitura;
- categoria e formato;
- texto alternativo da imagem;
- indicação de tradução;
- fontes;
- aviso de conflito ou vínculo quando aplicável;
- notas relacionadas;
- RSS e metadados sociais.

## Passo 5.4 — criar páginas de Atuação

PedeAqui e Foton aparecerão como organizações independentes.

### PedeAqui

Deve explicar:

- problema atendido;
- produto;
- papel de fundador e co-CEO;
- liderança de produto e evolução técnica;
- base inicial desenvolvida por terceiro, apenas no nível de detalhe necessário;
- estágio atual que puder ser divulgado;
- link oficial quando existir.

O domínio atual `pedeaqui.ia` é usado pelo painel do restaurante e não será ligado ao site pessoal enquanto não houver uma página pública adequada. Antes disso, planejar no projeto do PedeAqui:

1. inventariar as rotas e integrações que hoje dependem do domínio;
2. mover o painel para um subdomínio como `app.pedeaqui.ia` ou `painel.pedeaqui.ia`;
3. preservar autenticação, callbacks, APIs e links existentes durante a migração;
4. publicar uma landing page institucional na raiz `pedeaqui.ia`;
5. configurar redirecionamentos e testar clientes atuais;
6. somente então adicionar o link público no site de Luis.

Essa migração é um projeto separado e não deve bloquear o lançamento do site pessoal. Até sua conclusão, a página de atuação apresentará o PedeAqui sem botão para o painel.

### ICTQ Foton

Deve explicar:

- o que é um ICTQ;
- missão do instituto;
- cargo de Vice President for International Strategy and Partnerships;
- cooperação científica;
- posicionamento e financiamento internacional;
- caminhos de mercado para tecnologias quânticas;
- link para o site institucional;
- aviso de opiniões pessoais.

## Passo 5.5 — criar a página About

Ordem:

1. atuação atual;
2. tese de ciência aplicada;
3. experiência empresarial;
4. fundamento científico;
5. trajetória internacional;
6. idiomas;
7. ida à Europa;
8. currículo e contato.

A formação acadêmica apoiará a narrativa, sem substituir o presente.

## Passo 5.6 — criar a página Journey

Marcos:

- trabalho inicial na empresa familiar;
- UFRGS e iniciação científica;
- Rússia;
- Portugal;
- Japão;
- gestão e venda da empresa familiar;
- campanha eleitoral;
- ICTQ Foton;
- PedeAqui;
- criptografia pós-quântica;
- Europa em 2026.

**Critério de conclusão da Fase 5:** todas as páginas existem nos dois idiomas, mesmo que alguns textos ainda estejam em revisão.

---

# Fase 6 — conteúdo de lançamento

## Passo 6.1 — fechar o texto da homepage

**Responsável:** Codex redige; Luis aprova cada afirmação.

Revisar:

- hero;
- descrição dos cargos;
- PedeAqui;
- Foton;
- fundamento científico;
- ida à Europa;
- chamada para notas;
- newsletter;
- biografia curta.

## Passo 6.2 — produzir quatro textos fundamentais

Recomendação:

1. **From frontier science to real-world application**  
   **Da ciência de fronteira à aplicação real**

2. **What building AI for restaurants is teaching me about automation**  
   **O que construir IA para restaurantes está me ensinando sobre automação**

3. **Quantum computing for leaders: what to watch without falling for the hype**  
   **Computação quântica para líderes: o que observar sem cair no hype**

4. **The cost of starting too many projects**  
   **O custo de começar projetos demais**

Fluxo de cada texto:

1. Luis fornece fatos, experiências e opinião em tópicos ou áudio transcrito.
2. Codex cria a primeira estrutura.
3. Luis corrige intenção, tom e fatos.
4. Codex pesquisa fontes primárias quando necessário.
5. Codex redige a versão final no idioma original.
6. Codex cria a tradução.
7. Luis revisa a tradução.
8. Codex formata e testa no site.

## Passo 6.3 — revisar riscos de publicação

Antes de publicar qualquer texto:

- remover dados de clientes;
- remover métricas não autorizadas;
- não divulgar vulnerabilidades;
- não divulgar contratos ou negociações;
- distinguir opinião pessoal de posição institucional;
- citar fontes primárias;
- indicar incerteza;
- evitar declarações acadêmicas ou técnicas maiores que as evidências.

## Passo 6.4 — atualizar o currículo ligado ao site

**Responsável:** Luis aprova; Codex pode preparar a versão editável.

Alinhar:

- `Founder & Co-CEO — Product and Technology` no PedeAqui;
- descrição precisa de código herdado e reestruturação;
- `Vice President for International Strategy and Partnerships` no ICTQ Foton;
- mesma frase de posicionamento do site;
- mesmo domínio e e-mail;
- links clicáveis;
- datas e nomes consistentes.

**Critério de conclusão da Fase 6:** homepage e quatro textos aprovados nos dois idiomas; currículo coerente.

---

# Fase 7 — contato, newsletter e privacidade

## Passo 7.1 — decidir se a newsletter entra no lançamento

**Decisão aprovada:** lançar o site sem newsletter pública e ativá-la depois. A interface e a configuração ficarão prontas, porém ocultas, até existir provedor e URL válidos.

### Implementação do primeiro lançamento

- criar um componente de inscrição reutilizável;
- controlar sua exibição por uma configuração desativada por padrão;
- não renderizar formulário, `iframe` ou scripts de terceiros enquanto estiver desativado;
- oferecer RSS;
- manter contato por e-mail;
- ativar newsletter depois de quatro textos publicados.

### Preparação para Substack

- reservar, quando oportuno, uma publicação com nome e endereço coerentes com `Luis Coelho Ramos` ou `Applied Frontier`;
- configurar a conta em nome de Luis e protegê-la com 2FA;
- preparar descrição, e-mail de boas-vindas e política editorial;
- inserir no componente do site o formulário incorporado ou link oficial do Substack;
- testar inscrição, confirmação, entrega e cancelamento;
- atualizar a política de privacidade antes de tornar o componente visível;
- manter os artigos completos e seus URLs canônicos no site pessoal; usar o Substack principalmente como distribuição por e-mail e descoberta.

O formulário incorporado do Substack funciona em sites que aceitam `iframe`, mas sua personalização visual é limitada. Por isso, o componente será desacoplado: poderemos trocar o Substack por outro provedor sem reconstruir as páginas. Não deixaremos um formulário visualmente ativo que não envia dados.

## Passo 7.2 — criar Privacy / Privacidade

**Responsável:** Codex prepara texto factual; Luis revisa e busca orientação jurídica se necessário.

Informar pelo menos:

- quem controla o site;
- e-mail de contato;
- quais dados são coletados;
- finalidade;
- base usada para o tratamento;
- serviço que recebe os dados;
- retenção;
- transferências internacionais relevantes;
- como solicitar acesso, correção ou exclusão;
- como retirar consentimento;
- como cancelar a newsletter;
- quais ferramentas de analytics são usadas;
- data da última atualização.

Como Luis planeja atuar internacionalmente e o site também atende brasileiros, o formulário deve ser revisado considerando GDPR e LGPD. Consentimento, quando usado, precisa ser claro, específico, informado e revogável. Esta etapa é implementação e organização de informações, não substitui aconselhamento jurídico.

## Passo 7.3 — escolher analytics

Recomendação inicial:

- Cloudflare Web Analytics com configuração revisada;
- nenhum pixel publicitário;
- nenhum rastreamento comportamental de terceiros;
- documentar o que for ativado;
- verificar necessidade de consentimento conforme a configuração real e a jurisdição.

Também é aceitável lançar sem analytics e ativá-lo depois.

**Critério de conclusão da Fase 7:** nenhum formulário morto; política acessível; coleta de dados documentada.

---

# Fase 8 — SEO, compartilhamento e detalhes técnicos

## Passo 8.1 — metadados

Cada página precisa de:

- título exclusivo;
- descrição;
- canonical absoluto;
- `hreflang` para inglês e português quando houver equivalência;
- `x-default` em inglês;
- Open Graph;
- Twitter/X card;
- imagem social;
- idioma correto no elemento `<html>`.

## Passo 8.2 — imagem social

Criar uma imagem 1200 × 630 para:

- homepage inglesa;
- homepage portuguesa;
- fallback de artigos;
- artigos principais, quando houver imagem própria.

## Passo 8.3 — arquivos de descoberta

Criar:

- `sitemap-index.xml` ou `sitemap-0.xml` gerado pelo Astro;
- `robots.txt`;
- RSS inglês;
- RSS português;
- favicon;
- ícone para dispositivos;
- manifesto somente se houver utilidade real.

## Passo 8.4 — URLs e redirecionamentos

Definir:

- domínio sem `www` como canonical;
- `www` redirecionando permanentemente para o domínio principal;
- `/en/` redirecionando para `/`, caso essa URL tenha sido compartilhada;
- padrão de barra final consistente;
- página 404 nos dois idiomas ou uma 404 bilíngue.

**Critério de conclusão da Fase 8:** previews de compartilhamento corretos e rotas rastreáveis.

---

# Fase 9 — testes antes da publicação

## Passo 9.1 — testes automatizados

**Responsável:** Codex.

Executar:

```bash
npm run check
npm run build
npm run preview
```

Adicionar verificações para:

- links internos quebrados;
- imagens ausentes;
- frontmatter inválido;
- traduções órfãs;
- canonical e `hreflang`;
- RSS;
- sitemap;
- arquivos grandes;
- segredos acidentalmente versionados.

## Passo 9.2 — acessibilidade

Revisar:

- navegação por teclado;
- foco visível;
- hierarquia de títulos;
- contraste;
- textos alternativos;
- nomes acessíveis de botões e formulários;
- mensagens de erro;
- preferência por movimento reduzido;
- tamanho de toque no celular;
- leitura com zoom de 200%.

## Passo 9.3 — responsividade

Testar no mínimo:

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px;
- orientação vertical e horizontal quando relevante.

Luis deverá testar em seu próprio celular, não apenas no navegador do computador.

## Passo 9.4 — performance

Verificar:

- imagens responsivas;
- fontes;
- CSS não utilizado;
- JavaScript enviado;
- estabilidade de layout;
- carregamento em conexão lenta;
- páginas de artigos longos.

## Passo 9.5 — revisão editorial e factual

Luis confirma:

- nomes;
- datas;
- cargos;
- locais;
- links;
- traduções;
- pronúncia implícita e naturalidade do inglês;
- limites entre opinião pessoal, PedeAqui e Foton;
- contato;
- currículo.

## Passo 9.6 — checklist de lançamento

- [ ] inglês é a raiz;
- [ ] português funciona em `/pt/`;
- [ ] seletor mantém página equivalente;
- [ ] quatro artigos estão publicados;
- [ ] formulário funciona ou foi removido;
- [ ] currículo abre;
- [ ] contato funciona;
- [ ] política de privacidade está acessível;
- [ ] 404 funciona;
- [ ] RSS funciona;
- [ ] sitemap funciona;
- [ ] nenhuma página contém texto de demonstração;
- [ ] nenhuma imagem é placeholder;
- [ ] nenhum segredo foi versionado;
- [ ] build está limpo;
- [ ] Luis aprovou desktop e celular.

**Critério de conclusão da Fase 9:** build candidato à produção aprovado por Luis.

---

# Fase 10 — implantação de prévia

## Passo 10.1 — autenticar Cloudflare

**Responsável:** Luis faz login; Codex executa o fluxo autorizado.

Não compartilhar token no chat. A autenticação será feita pelo mecanismo do Wrangler ou painel.

## Passo 10.2 — publicar em endereço temporário

**Responsável:** Codex.

Executar build e deploy para um domínio temporário `workers.dev`.

Essa prévia será usada para verificar:

- HTTPS;
- comportamento fora do computador local;
- carregamento de fontes e imagens;
- dispositivos reais;
- compartilhamento;
- links externos;
- formulários;
- analytics, se ativado.

## Passo 10.3 — revisão de aceitação

Luis revisa:

- homepage em inglês;
- homepage em português;
- um artigo em cada idioma;
- página About;
- PedeAqui;
- Foton;
- currículo;
- privacidade;
- celular e desktop.

Feedback deve ser enviado em uma única lista priorizada:

- bloqueador de lançamento;
- importante;
- melhoria posterior.

**Critério de conclusão da Fase 10:** prévia aprovada.

---

# Fase 11 — GitHub e implantação automática

## Passo 11.1 — conectar repositório ao Cloudflare

**Responsável:** Luis autoriza conexão; Codex configura.

Configurar o Cloudflare Workers Builds para:

- observar o repositório;
- instalar dependências;
- executar `npx astro build`;
- executar `npx wrangler deploy`;
- publicar quando a branch principal receber mudanças aprovadas.

## Passo 11.2 — definir fluxo de produção

Recomendação:

```text
branch de trabalho → revisão e testes → main → produção
```

Não editar diretamente a produção pelo painel.

## Passo 11.3 — testar implantação automática

Fazer uma alteração pequena e segura, enviar ao GitHub e confirmar:

- build iniciado;
- build concluído;
- site atualizado;
- logs disponíveis;
- possibilidade de retornar à versão anterior.

**Critério de conclusão da Fase 11:** push aprovado produz nova versão sem intervenção manual.

---

# Fase 12 — domínio e HTTPS

## Passo 12.1 — adicionar domínio ao Cloudflare

**Responsável:** Luis controla a conta; Codex orienta/configura.

Se o domínio estiver em outro registrador:

- adicionar a zona ao Cloudflare;
- conferir todos os registros DNS existentes;
- alterar nameservers somente após revisar e-mail e serviços associados;
- aguardar propagação.

## Passo 12.2 — conectar domínio ao Worker

O Cloudflare pode criar o registro DNS e emitir certificado para um Custom Domain ligado ao Worker.

Configurar:

- `dominio.com` como principal;
- `www.dominio.com` com redirecionamento;
- HTTPS;
- canonical final;
- URL final no Astro;
- sitemap e RSS com URLs finais.

## Passo 12.3 — configurar e-mail do domínio

Se houver e-mail próprio:

- criar endereço;
- configurar encaminhamento ou caixa;
- configurar SPF;
- configurar DKIM;
- configurar DMARC;
- enviar e receber mensagens de teste;
- não quebrar registros existentes ao alterar DNS.

## Passo 12.4 — validar propagação

Verificar:

- domínio principal;
- `www`;
- HTTPS;
- certificado;
- DNS;
- e-mail;
- redirecionamentos;
- canonical;
- sitemap;
- RSS.

**Critério de conclusão da Fase 12:** domínio público funciona com HTTPS e sem alertas.

---

# Fase 13 — lançamento

## Passo 13.1 — congelar conteúdo

Nas 24 horas anteriores:

- evitar mudanças grandes de layout;
- permitir apenas correções;
- gerar build final;
- registrar commit e versão;
- salvar checklist concluído.

## Passo 13.2 — publicar

**Responsável:** Codex executa; Luis autoriza.

Após o deploy:

- abrir páginas principais;
- testar os dois idiomas;
- testar de rede móvel;
- enviar formulário real;
- baixar currículo;
- testar compartilhamento;
- confirmar logs sem erros.

## Passo 13.3 — cadastrar mecanismos de busca

Criar ou configurar:

- Google Search Console;
- Bing Webmaster Tools, opcional;
- sitemap;
- propriedade correta do domínio.

## Passo 13.4 — atualizar presença pública

Atualizar:

- LinkedIn;
- currículo;
- assinatura de e-mail;
- perfil do Foton, quando apropriado;
- apresentações;
- QR Code de contato;
- bios de eventos.

Links internacionais apontam para a raiz. Links especificamente brasileiros podem apontar para `/pt/`.

## Passo 13.5 — anunciar

Publicação sugerida:

- explicar por que o site existe;
- apresentar a ideia de Applied Frontier;
- mencionar PedeAqui e ICTQ Foton;
- convidar para ler o manifesto;
- não anunciar apenas “meu site novo está no ar”.

**Critério de conclusão da Fase 13:** site público, verificado e divulgado.

---

# Fase 14 — primeiras 72 horas

## Monitorar

- erros 404;
- links quebrados;
- mensagens do formulário;
- inscrições;
- erros de build;
- comportamento em celular;
- compartilhamento social;
- indexação inicial;
- feedback de leitores em inglês e português.

## Corrigir imediatamente

- fatos incorretos;
- formulário sem entrega;
- problemas de HTTPS;
- páginas inacessíveis;
- links de tradução incorretos;
- currículo indisponível;
- exposição de dados ou informações internas.

## Adiar para backlog

- pequenas mudanças de cor;
- animações adicionais;
- novas categorias;
- busca avançada;
- comentários;
- CMS;
- login;
- área de membros.

---

# Fase 15 — operação contínua

## Publicar uma nova nota

Fluxo futuro:

1. criar arquivo Markdown;
2. preencher metadados;
3. escrever;
4. revisar fatos e fontes;
5. decidir se haverá tradução;
6. adicionar imagem e texto alternativo;
7. marcar como publicado;
8. executar testes;
9. fazer commit e push;
10. conferir deploy automático.

## Cadência recomendada

- uma nota ou análise a cada duas semanas;
- um diário de construção por mês;
- uma retrospectiva trimestral;
- revisão da estratégia após 90 dias.

## Manutenção mensal

- atualizar dependências com cuidado;
- verificar builds;
- revisar links externos;
- conferir domínio e e-mail;
- revisar métricas;
- exportar lista de newsletter quando o provedor permitir;
- fazer backup de imagens e conteúdo;
- atualizar o campo “Now”.

## Manutenção trimestral

- revisar homepage;
- remover informações desatualizadas;
- atualizar currículo;
- revisar privacidade e fornecedores;
- avaliar quais artigos merecem tradução;
- verificar se inglês continua sendo o idioma principal adequado;
- analisar convites, contatos e oportunidades gerados pelo site.

---

# 5. Calendário sugerido

## 30 de agosto a 3 de setembro

- decisões de domínio e nome;
- contas;
- materiais e fotografias;
- Node e Git;
- criação do Astro.

## 4 a 10 de setembro

- componentes;
- homepage;
- páginas bilíngues;
- sistema de notas;
- integração de imagens.

## 11 a 16 de setembro

- quatro textos;
- traduções;
- currículo;
- privacidade;
- SEO, RSS e sitemap.

## 17 a 19 de setembro

- testes;
- deploy temporário;
- revisão em dispositivos reais;
- correções.

## 20 de setembro

- domínio;
- deploy final;
- verificação;
- lançamento.

Esse calendário depende principalmente da velocidade de aprovação de textos, fotografias e domínio. A implementação técnica pode avançar em paralelo ao conteúdo.

---

# 6. Situação das decisões de Luis

| Item | Situação em 30 de agosto de 2026 |
|---|---|
| Nome público | Concluído: `Luis Coelho Ramos` |
| Nome formal | Concluído: `Luis Henrique Coelho Ramos` |
| Domínio pessoal | Pendente: pesquisar, escolher e comprar |
| Newsletter | Depois do lançamento; integração deve ficar pronta e desativada |
| Substack | Recomendado como canal de distribuição; conta ainda não criada |
| E-mail público | Pendente: decidir depois da escolha do domínio |
| PedeAqui | `pedeaqui.ia` hoje atende o painel; separar painel e landing page antes de criar link público |
| Foton | Uso de nome, logo e descrição autorizado |
| Fotografias | Concluído: duas recebidas; `IMG_5208.jpg` escolhida para o hero; autoria e edição de Luis |
| Confidencialidade | Não publicar dados sensíveis ou informações não autorizadas |
| Europa | Não mencionar no hero; atualizar a trajetória quando se concretizar |
| GitHub | Conta pessoal confirmada: `https://github.com/coooelho` |
| Cloudflare | Pendente: confirmar ou criar conta pessoal com 2FA |
| Instalação técnica | Autorizada e concluída |

Próximas ações exclusivas de Luis:

1. confirmar ou criar a conta pessoal no Cloudflare e ativar 2FA;
2. escolher o domínio com o Codex e concluir a compra;
3. decidir o endereço de e-mail depois da compra;
4. planejar separadamente a reorganização de `pedeaqui.ia`.

---

# 7. Primeira solicitação recomendada ao Codex

Depois de responder aos itens acima:

> Codex, pode iniciar as Fases 1 e 2. Preserve o brief e o protótipo, instale uma versão compatível do Node mediante minha aprovação, configure Git e converta a pasta em um projeto Astro estático com TypeScript estrito. Pare quando a página mínima estiver funcionando e os comandos de check e build passarem.

Depois:

> Codex, execute a Fase 3 e implemente a arquitetura bilíngue, com inglês na raiz e português em `/pt/`. Valide as rotas e os links entre traduções.

Em seguida:

> Codex, execute as Fases 4 e 5, transformando o protótipo aprovado em componentes Astro e páginas reais. Use placeholders somente onde ainda faltar uma imagem fornecida por mim e liste todos eles na entrega.

---

# 8. Fontes oficiais consultadas

- [OpenAI — casos de uso do Codex e fluxos revisáveis](https://learn.chatgpt.com/use-cases)
- [Astro — conteúdo em Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [Astro — internacionalização](https://docs.astro.build/en/guides/internationalization/)
- [Astro — sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro — imagens e assets](https://docs.astro.build/en/reference/modules/astro-assets/)
- [Astro — deploy no Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare — Astro no Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Cloudflare — Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Cloudflare — Web Analytics](https://developers.cloudflare.com/web-analytics/get-started/)
- [Node.js — downloads oficiais da versão 24](https://nodejs.org/dist/latest-v24.x/)
- [Substack — incorporar formulário de inscrição](https://support.substack.com/hc/en-us/articles/360041759232-Can-I-embed-a-signup-form-for-my-Substack-publication)
- [Substack — recomendações oficiais de SEO](https://support.substack.com/hc/en-us/articles/4407702258836-How-can-I-optimize-my-Substack-publication-for-SEO)
- [GitHub — adicionar projeto local ao GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [União Europeia — proteção de dados sob o GDPR](https://europa.eu/youreurope/business/governance-and-sustainability/digital-and-data-compliance/data-protection-gdpr/index_en.htm)
- [ANPD — perguntas frequentes sobre LGPD](https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes/perguntas-frequentes)
