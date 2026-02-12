import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { books, categoryLabels } from '@/data/books';
import type { Book } from '@/types';
import { ArrowRight, BookOpen } from 'lucide-react';

type Category = 'todos' | Book['category'];

export function Catalog() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  const categories: Category[] = [
    'todos',
    'obras-autorais',
    'traducoes',
    'ficcao-historica',
    'jovem',
    'jovem-18',
  ];

  const filteredBooks =
    activeCategory === 'todos'
      ? books
      : books.filter((book) => book.category === activeCategory);

  const handleBookClick = (bookId: string) => {
    // Por enquanto, apenas mostra um alerta. 
    // Quando implementar React Router, redireciona para /livro/:id
    alert(`Página de detalhes do livro ${bookId} - Em breve!`);
  };

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="relative py-24 bg-[#0B0B0D]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="micro-label block mb-4">Catálogo</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA]">
              Explore nossos livros
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? 'bg-[#C9A04C] text-[#0B0B0D]'
                    : 'border border-[#C9A04C]/40 text-[#B8B2A6] hover:border-[#C9A04C] hover:text-[#C9A04C]'
                }`}
              >
                {category === 'todos'
                  ? 'Todos'
                  : categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              onClick={() => handleBookClick(book.id)}
              className={`book-card group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              {/* Cover */}
              <div className="book-cover relative aspect-[3/4] mb-4 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover img-monochrome group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const keywords = encodeURIComponent(
                      `${book.genre[0]} book cover literature`
                    );
                    target.src = `https://source.unsplash.com/400x600/?${keywords}`;
                  }}
                />
                <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {book.isNew && (
                    <span className="px-2 py-1 bg-[#C9A04C] text-[#0B0B0D] text-[10px] font-sans font-medium tracking-wider uppercase">
                      Novo
                    </span>
                  )}
                  {book.isTranslation && (
                    <span className="px-2 py-1 bg-[#0B0B0D]/80 text-[#C9A04C] text-[10px] font-sans font-medium tracking-wider uppercase border border-[#C9A04C]/40">
                      Tradução
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B0B0D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="btn-primary text-xs flex items-center gap-2">
                    <BookOpen size={14} />
                    Ver detalhes
                  </button>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-serif text-lg text-[#F4F1EA] group-hover:text-[#C9A04C] transition-colors leading-tight mb-1">
                  {book.title}
                </h3>
                <p className="text-[#B8B2A6] text-sm mb-2">{book.author}</p>
                <div className="flex flex-wrap gap-1">
                  {book.genre.slice(0, 2).map((g) => (
                    <span
                      key={g}
                      className="text-[10px] text-[#B8B2A6]/70 tracking-wider uppercase"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-colors group">
            <span className="font-sans text-sm tracking-wider uppercase">
              Ver catálogo completo
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
