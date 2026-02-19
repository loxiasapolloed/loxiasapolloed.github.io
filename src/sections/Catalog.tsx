import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { books } from '@/data/books';
import { ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';

const DESTAQUES_IDS = [
  'ovelha-pink',
  'diario-cassandra',
  'musadanoite',
  'forest',
  'poeta-tigre',
  'Peonias',
];

export function Catalog() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const destaques = books.filter(book => DESTAQUES_IDS.includes(book.id));
  const vitrineBooks = destaques.length > 0 ? destaques : books.slice(0, 6);
  const currentBook = vitrineBooks[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % vitrineBooks.length);
  }, [vitrineBooks.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + vitrineBooks.length) % vitrineBooks.length);
  }, [vitrineBooks.length]);

  const canGoNext = currentIndex < vitrineBooks.length - 1;
  const canGoPrev = currentIndex > 0;

  return (
    <section
      id="destaques"
      ref={sectionRef}
      className="relative py-24 bg-[#0B0B0D] overflow-hidden"
    >
      {/* Background Image Local */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0D]/80 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/bg/6.webp`}
          alt="Fundo vitrine"
          className={`w-full h-full object-cover object-center transition-transform duration-[2s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-[#C9A04C]/5 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="micro-label block mb-4">Destaques da Editora</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA]">
            Vitrine de Lançamentos
          </h2>
          <p className="text-[#B8B2A6] mt-4 max-w-xl mx-auto">
            Navegue pelos nossos títulos em destaque. Use as setas para explorar.
          </p>
        </div>

        {/* Card Principal */}
        <div 
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2a2a35] shadow-2xl">
            <div className="grid lg:grid-cols-5 gap-0">
              
              {/* Imagem do Livro */}
              <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                <div 
                  className={`absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-[#2a2a35] to-[#1a1a20] transition-opacity duration-500 ${
                    loadedImages[currentBook.id] ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {imageErrors[currentBook.id] ? '❌' : '📖'}
                </div>

                {!imageErrors[currentBook.id] && (
                  <img
                    src={currentBook.coverImage}
                    alt={currentBook.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      loadedImages[currentBook.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [currentBook.id]: true }))}
                    onError={() => setImageErrors(prev => ({ ...prev, [currentBook.id]: true }))}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1a1a1a]/80" />
                
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {currentBook.isNew && (
                    <span className="px-3 py-1.5 bg-[#C9A04C] text-[#0B0B0D] text-xs font-bold tracking-wider uppercase rounded-full shadow-lg">
                      ✨ Lançamento
                    </span>
                  )}
                  {currentBook.isTranslation && (
                    <span className="px-3 py-1.5 bg-[#0B0B0D]/80 backdrop-blur text-[#C9A04C] text-xs font-bold tracking-wider uppercase border border-[#C9A04C] rounded-full">
                      Tradução
                    </span>
                  )}
                </div>
              </div>

              {/* Informações */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-[#C9A04C] text-sm tracking-wider uppercase">
                    {currentBook.genre[0]}
                  </span>
                </div>

                <h3 className="font-serif text-3xl lg:text-4xl text-[#F4F1EA] mb-3 leading-tight">
                  {currentBook.title}
                </h3>

                <p className="text-[#B8B2A6] text-lg mb-6 italic">
                  por {currentBook.author}
                </p>

                <p className="text-[#B8B2A6]/80 leading-relaxed mb-8 line-clamp-4 lg:line-clamp-6">
                  {currentBook.synopsis || 'Sinopse em breve.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    to={`/livro/${currentBook.id}`}
                    className="btn-primary flex items-center justify-center gap-2 py-3 px-6"
                  >
                    <BookOpen size={18} />
                    Ver detalhes
                  </Link>
                  
                  {currentBook.sampleUrl && (
                    <Link
                      to={`/livro/${currentBook.id}#amostra`}
                      className="flex items-center justify-center gap-2 py-3 px-6 border border-[#C9A04C]/40 text-[#C9A04C] hover:bg-[#C9A04C]/10 transition-colors rounded"
                    >
                      <Clock size={18} />
                      Ler amostra
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                canGoPrev 
                  ? 'text-[#C9A04C] hover:bg-[#C9A04C]/10 cursor-pointer' 
                  : 'text-[#B8B2A6]/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={24} />
              <span className="hidden sm:inline text-sm tracking-wider uppercase">Anterior</span>
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                {vitrineBooks.map((book, idx) => (
                  <button
                    key={book.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-3 h-3 bg-[#C9A04C] rounded-full' 
                        : 'w-2 h-2 bg-[#C9A04C]/30 hover:bg-[#C9A04C]/50 rounded-full'
                    }`}
                    title={book.title}
                  />
                ))}
              </div>
              <span className="text-[#B8B2A6]/60 text-sm">
                {currentIndex + 1} de {vitrineBooks.length}
              </span>
            </div>

            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                canGoNext 
                  ? 'text-[#C9A04C] hover:bg-[#C9A04C]/10 cursor-pointer' 
                  : 'text-[#B8B2A6]/30 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline text-sm tracking-wider uppercase">Próximo</span>
              <ChevronRight size={24} />
            </button>
          </div>

          {!canGoNext && (
            <div className="text-center mt-4">
              <button
                onClick={() => setCurrentIndex(0)}
                className="text-[#C9A04C]/60 hover:text-[#C9A04C] text-sm transition-colors"
              >
                ↻ Voltar ao primeiro
              </button>
            </div>
          )}
        </div>

        {/* Link para acervo */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            to="/acervo"
            className="inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#F4F1EA] transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase border-b border-[#C9A04C]/30 group-hover:border-[#C9A04C] transition-colors">
              Ver todos os {books.length} títulos no acervo
            </span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}