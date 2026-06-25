# Resume — Portfólio de Lucas Menezes Teixeira

Site pessoal de currículo e portfólio profissional, construído com Next.js. Apresenta perfil, habilidades, experiência, educação e projetos com suporte bilíngue (PT/EN).

## Stack

- **Next.js 16** (App Router)
- **React 19** + JSX
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** (animações)

## Funcionalidades

- Página única com navegação por âncoras e scroll suave
- Alternância de idioma (português / inglês)
- Modal de contato via [FormSubmit](https://formsubmit.co)
- Modal de detalhes dos projetos
- **Download do CV** em PDF (versão PT ou EN conforme idioma ativo)

## Estrutura

```
src/
  app/page.jsx      # Página principal
  data/
    pt-BR.js        # Conteúdo em português
    en.js           # Conteúdo em inglês
  lib/cv.js         # Caminhos dos PDFs para download
  components/ui/    # Button, Card (shadcn)
public/
  me.png            # Foto do perfil
  cv/
    CV-Lucas-Teixeira-pt.pdf
    CV-Lucas-Teixeira-en.pdf
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build e deploy

```bash
npm run build
npm run start
```

## Atualizar o CV em PDF

Os PDFs são arquivos estáticos em `public/cv/`, mantidos manualmente:

| Arquivo | Idioma |
|---------|--------|
| `CV-Lucas-Teixeira-pt.pdf` | Português |
| `CV-Lucas-Teixeira-en.pdf` | Inglês |

Para alterar o currículo em PDF, substitua o arquivo correspondente. Se usar um nome diferente, atualize os caminhos em `src/lib/cv.js`.

O conteúdo exibido no site (`src/data/`) é independente dos PDFs — alterações no site não atualizam o PDF automaticamente.

## Editar conteúdo do site

Todo o texto do portfólio fica em `src/data/pt-BR.js` e `src/data/en.js`. Mantenha os dois arquivos sincronizados ao adicionar ou alterar informações.

Ícones de habilidades e projetos são mapeados em `getSkillStyle()` e `getProjectIcon()` dentro de `src/app/page.jsx`.

## Deploy

Compatível com [Vercel](https://vercel.com) e qualquer host que suporte Next.js.

## Licença

Projeto pessoal — uso livre para referência, sem garantias.
