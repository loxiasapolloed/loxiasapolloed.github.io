# Loxias Apollo

![Loxias Apollo](https://img.shields.io/badge/Loxias%20Apollo-Editora%20Independente-0B0B0D?style=for-the-badge&labelColor=C9A04C)

Site oficial da **Loxias Apollo**, editora independente de literatura local e mundial. Especializada em ficção histórica, traduções de grandes obras da literatura mundial e literatura jovem com profundidade crítica.

🔗 **Live Demo**: [https://mjk5fafl6ujus.ok.kimi.link](https://mjk5fafl6ujus.ok.kimi.link)

---

## ✨ Características

- 🎨 **Design elegante** - Identidade visual sofisticada com paleta preta e dourada
- 📱 **Totalmente responsivo** - Adaptado para desktop, tablet e mobile
- ⚡ **Performance otimizada** - Build com Vite para carregamento rápido
- 🎭 **Animações suaves** - Transições e revelações ao scroll
- 🖼️ **Imagens geradas por IA** - Capas e ilustrações exclusivas
- 📚 **Catálogo interativo** - Filtros por categoria e navegação intuitiva

---

## 🛠️ Tecnologias

- **Framework**: [React](https://react.dev/) 19
- **Build Tool**: [Vite](https://vitejs.dev/) 7
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Fontes**: Cormorant Garamond + Inter (Google Fonts)

---

## 📁 Estrutura do Projeto

```
my-app/
├── public/
│   └── images/
│       ├── books/          # Capas dos livros (2:3)
│       └── featured/       # Imagens de destaque (2:3)
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   └── ui/             # Componentes shadcn/ui
│   ├── data/
│   │   └── books.ts        # Dados dos livros
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── sections/           # Seções da página
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── FeaturedBook.tsx
│   │   ├── Authors.tsx
│   │   ├── ReadingExperience.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Catalog.tsx
│   │   └── Testimonials.tsx
│   ├── types/
│   │   └── index.ts        # Tipos TypeScript
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/loxias-apollo.git
cd loxias-apollo
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

---

## 🌐 Deploy

### GitHub Pages

1. **Configure o `vite.config.ts`**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/loxias-apollo/', // Nome do seu repositório
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

2. **Instale o gh-pages**

```bash
npm install gh-pages --save-dev
```

3. **Adicione os scripts no `package.json`**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📚 Como Adicionar Livros

### 1. Edite o arquivo `src/data/books.ts`

Adicione um novo objeto ao array `books`:

```typescript
{
  id: 'meu-livro',
  title: 'Título do Livro',
  author: 'Nome do Autor',
  category: 'obras-autorais', // ou 'traducoes', 'ficcao-historica', 'jovem', 'jovem-18'
  genre: ['Fantasia', 'Épico'],
  pages: 320,
  year: 2024,
  synopsis: 'Descrição do livro...',
  coverImage: '/images/books/meu-livro.jpg',
  featuredImage: '/images/featured/meu-livro.jpg',
  isNew: true,        // Opcional: destaca como lançamento
  isTranslation: false, // Opcional: marca como tradução
  cta: {
    primary: 'Comprar',
    secondary: 'Ler amostra'
  }
}
```

### 2. Adicione as imagens

- **Capa do livro**: `public/images/books/meu-livro.jpg` (proporção 2:3)
- **Imagem de destaque**: `public/images/featured/meu-livro.jpg` (proporção 2:3)

### 3. Categorias disponíveis

| Categoria | Label exibido |
|-----------|---------------|
| `obras-autorais` | Obras Autorais |
| `traducoes` | Traduções |
| `ficcao-historica` | Ficção Histórica |
| `jovem` | Jovem |
| `jovem-18` | Jovem +18 |

---

## 🎨 Identidade Visual

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Background Principal | `#0B0B0D` | Fundo do site |
| Background Secundário | `#6E2B2B` | Seção Manifesto |
| Dourado (Accent) | `#C9A04C` | Botões, destaques, linhas |
| Texto Principal | `#F4F1EA` | Títulos, textos |
| Texto Secundário | `#B8B2A6` | Legendas, metadados |

### Tipografia

- **Títulos**: Cormorant Garamond (serif)
- **Corpo**: Inter (sans-serif)

---

## 📸 Imagens

### Capas de Livros

- **Formato**: JPG
- **Proporção**: 2:3 (ex: 600x900px)
- **Estilo**: Design editorial profissional
- **Local**: `public/images/books/`

### Imagens de Destaque

- **Formato**: JPG
- **Proporção**: 2:3 (ex: 800x1200px)
- **Estilo**: Cenários temáticos, tratamento monocromático com tom quente
- **Local**: `public/images/featured/`

### Geração de Imagens com IA

As imagens deste projeto foram geradas usando IA. Para criar novas imagens no mesmo estilo, use prompts como:

```
Capa de livro de [gênero], [descrição do tema], 
design editorial elegante, cores escuras com detalhes dourados, 
atmosfera [mood], estilo capa de livro profissional
```

---

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Visualiza build localmente |
| `npm run lint` | Executa ESLint |
| `npm run deploy` | Deploy para GitHub Pages |

---

## 📝 Licença

Este projeto é propriedade da **Loxias Apollo Editora**.

---

## 🤝 Contato

- **Email**: contato@loxiasapollo.com.br
- **Website**: [loxiasapollo.com.br](http://loxiasapollo.com.br)
- **Instagram**: @loxiasapollo

---

<p align="center">
  <strong>Loxias Apollo</strong><br>
  <em>Editora independente de literatura local e mundial</em><br>
  <sub>Leituras que deixam marcas.</sub>
</p>
