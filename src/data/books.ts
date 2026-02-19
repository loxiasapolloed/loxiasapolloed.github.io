// src/data/books.ts
const BASE_URL = import.meta.env.BASE_URL || '/teste/';

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  category: string;
  genre: string[];
  coverImage: string;
  featuredImage?: string;
  synopsis: string;
  sampleUrl?: string;
  buyLinks: {
    amazon?: string;
    kindle?: string;
    kobo?: string;
    googlePlay?: string;
    editora?: string;
  };
  pages?: number;
  year?: number;
  isbn?: string;
  isNew?: boolean;
  isTranslation?: boolean;
  dimensions?: string;
  format?: string;
}
       

  
export const books: Book[] = [

// Diário de Cassandra
  {
    id: 'diario-cassandra',
    title: 'Diário de Cassandra',
    author: 'Samantha Tovo',
    category: 'obras-autorais',
    genre: ['Thriller'],
    coverImage: `${BASE_URL}images/books/diario-cassandra.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },

  // À Musa da Noite
  {
    id: 'musadanoite',
    title: 'De Lóxias À Musa da Noite',
    author: 'Samantha Tovo',
    category: 'obras-autorais',
    genre: ['Poesia'],
    coverImage: `${BASE_URL}images/books/musadanoite.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },

  {
    id: 'ovelha-pink',
    title: 'A Ovelha Pink : Vai Ler A Vida Ao Amanhecer Vazio',
    author: 'Gustavo Tovo',
    category: 'obras-autorais',
    genre: ['Fábula Contemporânea', 'Literatura Brasileira'],
    coverImage: `${BASE_URL}images/books/ovelhapink.webp`,
    featuredImage: `${BASE_URL}images/featured/ovelhapink.webp`,
    synopsis: `Ao amanhecer, uma ovelha cor-de-rosa decide caminhar pela margem do rio.
No caminho, encontra ovelhas de todas as cores: a vermelha intensa, a laranja inquieta, a amarela que já desistiu de tentar, a verde que quase desaparece na paisagem, a azul que observa em silêncio, a anil precisa, e a violeta que parece ter sido tudo antes de se tornar outra coisa.

Cada encontro é simples. Conversas breves. Gestos cotidianos. Nenhuma grande lição declarada. Nenhuma moral explícita.

Mas algo se transforma.

Em Ovelha Pink vai ler a vida ao amanhecer vazio, Gustavo Tovo constrói uma narrativa delicada sobre identidade, diferença e percepção — um percurso que pode ser lido como aventura, como fábula contemporânea ou como um pequeno mapa emocional das cores que nos atravessam.

Um livro para leitores que preferem descobrir sozinhos o que cada encontro significa.`,
    sampleUrl: `${BASE_URL}samples/ovelha-pink.pdf`,
    buyLinks: {
      amazon: 'https://amzn.to/...',
      kindle: 'https://amazon.com.br/...',
      editora: 'https://loxiasapollo.com.br/teste/comprar/ovelha-pink'
    },
    pages: 96,
    year: 2026,
    isbn: '978-65-00-XXXXX-X',
    isNew: false,
    dimensions: '20x20 cm',
    format: 'Capa comum'
  },
  
     // Crônicas de uma Lavanderia
  {
    id: 'lavanderia',
    title: 'Crônicas de uma Lavanderia',
    author: 'Mira Andor',
    category: 'obras-autorais',
    genre: ['Crônicas'],
    coverImage: `${BASE_URL}images/books/lavanderia.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },
  
    {
    id: '1-afelandra',
    title: 'Afelandra - Volume I',
    author: 'Mira Andor',
    category: 'obras-autorais',
    genre: ['Novela'],
    coverImage: `${BASE_URL}images/books/1-afelandra.webp`,
    synopsis: 'Sinopse em breve.',
  },
  {
    id: '2-afelandra',
    title: 'Afelandra - Volume II',
    author: 'Mira Andor',
    category: 'obras-autorais',
    genre: ['Novela'],
    coverImage: `${BASE_URL}images/books/2-afelandra.webp`,
    synopsis: 'Sinopse em breve.',
  },
     
      {
    id: '3-afelandra',
    title: 'Afelandra - Volume III',
    author: 'Mira Andor',
    category: 'obras-autorais',
    genre: ['Novela'],
    coverImage: `${BASE_URL}images/books/3-afelandra.webp`,
    synopsis: 'Sinopse em breve.',
  },
  
  // Enzo - Volume 1
  {
    id: 'enzo1',
    title: 'Enzo - Livro 1',
    author: 'Gustavo Tovo',
    category: 'obras-autorais',
    genre: ['Ficção Histórica'],
    coverImage: `${BASE_URL}images/books/enzo1.jpg`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },
  // Enzo - Volume 2
  {
    id: 'enzo2',
    title: 'Enzo - Livro 2',
    author: 'Gustavo Tovo',
    category: 'obras-autorais',
    genre: ['Ficção Histórica'],
    coverImage: `${BASE_URL}images/books/enzo2.jpg`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },
  // Enzo - Volume 3
  {
    id: 'enzo3',
    title: 'Enzo - Livro 3',
    author: 'Gustavo Tovo',
    category: 'obras-autorais',
    genre: ['Ficção Histórica'],
    coverImage: `${BASE_URL}images/books/enzo3.jpg`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },

  // Insaciabilidade - Volume I
  {
    id: 'I-insaciabilidade',
    title: 'Insaciabilidade - Volume I',
    author: 'Autor a definir',
    category: 'obras-autorais',
    genre: ['Literatura'],
    coverImage: `${BASE_URL}images/books/I-insaciabilidade.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },
  // Insaciabilidade - Volume II
  {
    id: 'II-insaciabilidade',
    title: 'Insaciabilidade - Volume II',
    author: 'Autor a definir',
    category: 'obras-autorais',
    genre: ['Literatura'],
    coverImage: `${BASE_URL}images/books/II-insaciabilidade.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: false,
  },
 
   // A Floresta dos Deuses
  {
    id: 'forest',
    title: 'A Floresta dos Deuses',
    author: 'Balis Sruoga',
    category: 'traducoes',
    genre: ['Tradução', 'Mitologia'],
    coverImage: `${BASE_URL}images/books/forest.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: true,
  },

  // O Poeta e o Tigre
  {
    id: 'poeta-tigre',
    title: 'O Poeta e o Tigre',
    author: 'Nakajima Atsushi',
    category: 'traducoes',
    genre: ['Contos Japoneses', 'Tradução'],
    coverImage: `${BASE_URL}images/books/poeta-tigre.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: true,
  },
   
  // Peônias
  {
    id: 'Peonias',
    title: 'Peônias',
    author: 'Tang Xianzu',
    category: 'traducoes',
    genre: ['Teatro Chinês', 'Tradução'],
    coverImage: `${BASE_URL}images/books/Peonias.webp`,
    synopsis: 'Sinopse em breve.',
    isNew: false,
    isTranslation: true,
  },
];
