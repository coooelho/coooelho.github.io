# Direção visual — Luis Coelho Ramos / Fronteira Aplicada

## Conceito escolhido

**Editorial científico, humano e contemporâneo.**

A identidade combina a legibilidade e a permanência de uma publicação editorial com pequenos sinais de ciência e tecnologia. O objetivo não é parecer uma startup, universidade ou laboratório, mas um espaço autoral capaz de transitar entre esses ambientes.

## Sistema tipográfico

### Newsreader

Uso: títulos, chamadas, citações e textos editoriais longos.

Razões:

- possui presença editorial sem parecer histórica ou conservadora;
- funciona bem em tamanhos grandes e em leitura longa;
- comunica reflexão e autoria;
- contrasta com a precisão da fonte de interface.

Fallback: Georgia e Times New Roman.

### IBM Plex Sans

Uso: navegação, metadados, botões, legendas, tabelas e textos funcionais.

Razões:

- foi desenhada para ambientes técnicos, mas permanece humana;
- oferece boa legibilidade em telas;
- conecta discretamente tecnologia, pesquisa e negócios;
- evita a aparência genérica de fontes comuns de startups.

Fallback: Arial e fontes sem serifa do sistema.

## Paleta

| Token | Cor | Papel |
|---|---|---|
| Papel | `#F4F0E6` | Fundo principal quente |
| Superfície | `#FBF9F4` | Cartões e áreas editoriais |
| Tinta | `#151918` | Texto principal |
| Cinza | `#656965` | Texto secundário |
| Linha | `#D8D1C4` | Divisórias e estrutura |
| Cobalto | `#264E86` | Marca, links e ações |
| Cobalto escuro | `#17385F` | Interação e gráficos |
| Cobalto pálido | `#DFE7F1` | Áreas de contexto |
| Âmbar | `#C27A2B` | Energia, pontos e destaques |
| Noite | `#101B22` | Seção de atuação |

### Significado

- **papel quente:** aproxima o site de cadernos, livros e reflexão;
- **cobalto:** remete a precisão, ciência e relações institucionais;
- **âmbar:** representa energia, fótons e transformação sem usar neon;
- **noite:** dá peso à atuação profissional e separa conteúdo de credenciais.

## Hierarquia visual

1. **Ideia principal:** título grande, serifado e com poucas palavras por linha.
2. **Explicação:** parágrafo editorial, com voz humana.
3. **Evidência:** cargos, projetos, datas e categorias em IBM Plex Sans.
4. **Ação:** uma chamada primária por seção.
5. **Detalhe científico:** linhas, órbitas, eixos e coordenadas usados com moderação.

## Fotografia

A página final deve substituir o bloco `LCR` do hero por um retrato real.

Características recomendadas:

- enquadramento vertical e relativamente próximo;
- ambiente real, não fundo corporativo artificial;
- luz natural ou lateral suave;
- roupa cotidiana bem cuidada;
- expressão atenta, não necessariamente sorrindo para a câmera;
- espaço negativo ao redor do rosto para acomodar os elementos orbitais;
- tratamento de cor pouco saturado, preservando tons de pele.

Fotografias secundárias podem mostrar:

- trabalho no PedeAqui;
- eventos e encontros do Instituto Foton;
- cadernos, livros e ambientes de estudo;
- registros da Rússia, de Portugal e do Japão;
- equipamentos e operações reais, sem imagens genéricas de banco.

## Motivos gráficos

### Permitidos

- linhas de trajetória;
- eixos cartesianos;
- órbitas abstratas;
- pequenas coordenadas e numeração editorial;
- diagramas criados a partir do conteúdo;
- monograma LCR, apenas se necessário.

### Evitar

- átomos genéricos;
- partículas neon;
- cabeças humanas com circuitos;
- fundos roxos de “IA”;
- telas de código usadas apenas como decoração;
- excesso de gradientes;
- efeitos futuristas que prejudiquem a leitura.

## Estrutura do protótipo

1. Cabeçalho com nome, publicação e navegação.
2. Hero com posicionamento, papéis atuais e retrato.
3. Artigo em destaque.
4. Lista de notas recentes.
5. Atuação no PedeAqui e no ICTQ Foton.
6. Fundamento científico conectado à atuação atual.
7. Linha do tempo da trajetória.
8. Apresentação pessoal.
9. Captura para a futura newsletter.
10. Rodapé com contato e transparência autoral.

## Comportamento responsivo

- no desktop, o hero equilibra texto e retrato;
- no tablet, o retrato passa para baixo do posicionamento;
- no celular, a navegação é simplificada e todo o conteúdo vira uma coluna;
- a trajetória horizontal torna-se vertical;
- os cartões de atuação são empilhados;
- o formulário de newsletter ganha botão de largura integral;
- interações respeitam a preferência por movimento reduzido.

## Internacionalização

- inglês é o idioma principal e ocupa a URL raiz;
- português brasileiro possui URL própria em `/pt/`;
- o seletor PT/EN permanece visível no cabeçalho;
- não haverá redirecionamento automático por localização ou idioma do navegador;
- títulos, descrições, datas, chamadas e metadados sociais devem ser localizados;
- as páginas equivalentes devem usar referências `hreflang` para português, inglês e `x-default`;
- **Applied Frontier** é o nome editorial principal; em português, torna-se “Fronteira Aplicada”;
- o nome pessoal, PedeAqui, ICTQ Foton e o eventual monograma LCR não são traduzidos.

## Pendências para a versão final

- selecionar ou produzir o retrato principal;
- decidir se “Luis” será escrito com ou sem acento em toda a marca;
- confirmar links oficiais do PedeAqui;
- substituir artigos fictícios pelos textos de lançamento;
- conectar o formulário a um serviço de newsletter;
- validar com o Instituto Foton a forma de apresentação do vínculo institucional.
