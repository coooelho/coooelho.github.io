# Protótipo da homepage

Protótipo visual estático da página pessoal de Luis Coelho Ramos, baseado no brief estratégico.

## Abrir

Abra [`index.html`](./index.html) diretamente no navegador.

Para servir localmente de qualquer pasta, aponte explicitamente para a raiz do projeto:

```bash
python3 -m http.server 8010 --bind 127.0.0.1 --directory /home/link/Documentos/site
```

Versão principal em inglês:

```text
http://localhost:8010/prototype/
```

Versão em português:

```text
http://localhost:8010/prototype/pt/
```

## Arquivos

- `index.html`: versão principal da homepage em inglês;
- `pt/index.html`: versão integral da homepage em português;
- `styles.css`: sistema visual e comportamento responsivo;
- `DIRECAO_VISUAL.md`: decisões de tipografia, cores, fotografia e motivos gráficos.

## Observações

- o bloco `LCR` é um marcador para a futura fotografia principal;
- os artigos e links internos são conteúdo de demonstração;
- o formulário de e-mail ainda não envia dados;
- Newsreader e IBM Plex Sans são carregadas pelo Google Fonts;
- o protótipo não usa JavaScript.
- português e inglês são páginas independentes, ligadas pelo seletor PT/EN;
- a versão final deve manter URLs próprias (`/` e `/pt/`) e metadados `hreflang`.
