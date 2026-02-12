export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'obras-autorais' | 'traducoes' | 'ficcao-historica' | 'jovem' | 'jovem-18';
  genre: string[];
  pages: number;
  year: number;
  synopsis: string;
  coverImage: string;
  featuredImage: string;
  isNew?: boolean;
  isTranslation?: boolean;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  photo?: string;
  books: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  book?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
