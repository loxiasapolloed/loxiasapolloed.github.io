import type { Book, Author, Testimonial } from '@/types';

export const books: Book[] = [
  {
    id: 'afelandra-1',
    title: 'Afelandra',
    author: 'Mira Andor',
    category: 'jovem-18',
    genre: ['Fantasia', 'Épico', 'Jovem Adulto'],
    pages: 380,
    year: 2020,
    synopsis: 'Primeiro volume da trilogia de fantasia épica que se passa no reino de Afelandra, onde magia e política se entrelaçam. Para jovens adultos.',
    coverImage: '/images/books/afelandra-1.jpg',
    featuredImage: '/images/featured/afelandra.jpg',
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'afelandra-2',
    title: 'Afelandra – Volume II',
    author: 'Mira Andor',
    category: 'jovem-18',
    genre: ['Fantasia', 'Épico', 'Jovem Adulto'],
    pages: 420,
    year: 2021,
    synopsis: 'Segundo volume da trilogia, onde os conflitos se intensificam e alianças são testadas no reino mágico de Afelandra. Para jovens adultos.',
    coverImage: '/images/books/afelandra-2.jpg',
    featuredImage: '/images/featured/afelandra.jpg',
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'afelandra-3',
    title: 'Afelandra – Volume III',
    author: 'Mira Andor',
    category: 'jovem-18',
    genre: ['Fantasia', 'Épico', 'Jovem Adulto'],
    pages: 450,
    year: 2022,
    synopsis: 'Conclusão épica da trilogia, onde o destino de Afelandra é decidido em uma batalha final entre luz e sombra. Para jovens adultos.',
    coverImage: '/images/books/afelandra-3.jpg',
    featuredImage: '/images/featured/afelandra.jpg',
    isNew: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'poeta-tigre',
    title: 'O Poeta e o Tigre',
    author: 'Nakajima Atsushi',
    category: 'traducoes',
    genre: ['Tradução', 'Contos Japoneses', 'Literatura'],
    pages: 240,
    year: 2023,
    synopsis: 'Sete contos do mestre japonês Nakajima Atsushi, traduzidos com fidelidade ao espírito original e acompanhados de ensaios analíticos sobre sua obra.',
    coverImage: '/images/books/poeta-tigre.jpg',
    featuredImage: '/images/featured/poeta-tigre.jpg',
    isTranslation: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'peonia',
    title: 'A Peônia',
    author: 'Tang Xianzu',
    category: 'traducoes',
    genre: ['Tradução', 'Teatro Chinês', 'Clássico'],
    pages: 160,
    year: 2023,
    synopsis: 'Tradução e adaptação de três cenas da obra clássica chinesa de Tang Xianzu, com ensaios sobre o teatro oriental.',
    coverImage: '/images/books/peonia.jpg',
    featuredImage: '/images/featured/peonia.jpg',
    isTranslation: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'diario-cassandra',
    title: 'Diário de Cassandra: caso Melinoe',
    author: 'Samantha Tovo',
    category: 'obras-autorais',
    genre: ['Thriller', 'Mitologia', 'Psicológico'],
    pages: 320,
    year: 2023,
    synopsis: 'Um thriller psicológico que mistura mitologia grega com investigação criminal contemporânea.',
    coverImage: '/images/books/diario-cassandra.jpg',
    featuredImage: '/images/featured/cassandra.jpg',
    isNew: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'floresta-deuses',
    title: 'A Floresta dos Deuses',
    author: 'Balis Sruoga',
    category: 'traducoes',
    genre: ['Tradução', 'Mitologia', 'Clássico'],
    pages: 280,
    year: 2022,
    synopsis: 'Tradução da obra clássica de Balis Sruoga, explorando mitologia e natureza em uma narrativa profunda sobre a relação entre humanos e divindades.',
    coverImage: '/images/books/floresta-deuses.jpg',
    featuredImage: '/images/featured/floresta.jpg',
    isTranslation: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'musa-negra',
    title: 'À Musa Negra',
    author: 'Samantha Tovo',
    category: 'obras-autorais',
    genre: ['Poesia', 'Criatividade', 'Coletânea'],
    pages: 120,
    year: 2022,
    synopsis: 'Coletânea de poemas que exploram a criatividade, a inspiração e os processos criativos através de uma perspectiva contemporânea.',
    coverImage: '/images/books/musa-negra.jpg',
    featuredImage: '/images/featured/musa.jpg',
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'tanto-mar',
    title: 'Tanto Mar - Enzo chega ao poder',
    author: 'Gustavo Tovo',
    category: 'ficcao-historica',
    genre: ['Ficção Histórica', 'Brasil Colônia', 'Jovem'],
    pages: 180,
    year: 2023,
    synopsis: 'Primeiro livro da Série Brasil Colônia. Em 1500, um adolescente do Rio vira capitão de caravela. Ele acredita em diálogo. O século XVI acredita em pragmatismo. Quem vai vencer?',
    coverImage: '/images/books/tanto-mar.jpg',
    featuredImage: '/images/featured/tanto-mar.jpg',
    isNew: true,
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  },
  {
    id: 'lavanderia',
    title: 'Crônicas de uma Lavanderia',
    author: 'Mira Andor',
    category: 'obras-autorais',
    genre: ['Crônicas', 'Drama', 'Cotidiano'],
    pages: 220,
    year: 2021,
    synopsis: 'Histórias interligadas sobre personagens cujas vidas se cruzam em uma lavanderia de bairro.',
    coverImage: '/images/books/lavanderia.jpg',
    featuredImage: '/images/featured/lavanderia.jpg',
    cta: {
      primary: 'Comprar',
      secondary: 'Ler amostra'
    }
  }
];

export const authors: Author[] = [
  {
    id: 'mira-andor',
    name: 'Mira Andor',
    bio: 'Autora de fantasia épica e crônicas contemporâneas. Criadora do universo de Afelandra.',
    books: ['afelandra-1', 'afelandra-2', 'afelandra-3', 'lavanderia']
  },
  {
    id: 'samantha-tovo',
    name: 'Samantha Tovo',
    bio: 'Tradutora e autora. Especialista em literatura japonesa e chinesa.',
    books: ['poeta-tigre', 'peonia', 'diario-cassandra', 'musa-negra']
  },
  {
    id: 'gustavo-tovo',
    name: 'Gustavo Tovo',
    bio: 'Autor de ficção histórica. Criador da Série Brasil Colônia.',
    books: ['tanto-mar', 'floresta-deuses']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'A tradução de O Poeta e o Tigre é sensível e precisa—um convite à leitura atenta.',
    author: 'Ana L.',
    book: 'O Poeta e o Tigre'
  },
  {
    id: '2',
    quote: 'Afelandra me fez relembrar por que amo fantasia épica.',
    author: 'Pedro M.',
    book: 'Afelandra'
  },
  {
    id: '3',
    quote: 'Edições lindas, com cuidado em cada detalhe.',
    author: 'Julia R.'
  }
];

export const featuredBooks = ['afelandra-2', 'poeta-tigre', 'peonia', 'tanto-mar'];

export const categoryLabels: Record<string, string> = {
  'obras-autorais': 'Obras Autorais',
  'traducoes': 'Traduções',
  'ficcao-historica': 'Ficção Histórica',
  'jovem': 'Jovem',
  'jovem-18': 'Jovem +18'
};
