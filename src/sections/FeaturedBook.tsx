import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Book } from '@/types';

interface FeaturedBookProps {
  book: Book;
  microLabel: string;
  layout: 'left' | 'right';
}

export function FeaturedBook({ book, microLabel, layout }: FeaturedBookProps) {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
  });

  const isLeft = layout === 'left';

  const handleViewDetails = () => {
    // Por enquanto, apenas mostra um alerta
    // Quando implementar React Router, redireciona para /livro/:id
    alert(`Página de detalhes do livro "${book.title}" - Em breve!`);
  };

  return (
    <section ref={sectionRef} className="section-pinned relative">
      {/* Image Panel */}
      <div
        className={`absolute ${
          isLeft ? 'left-0' : 'right-0'
        } top-0 w-[62vw] h-full overflow-hidden`}
      >
        <div
          className={`w-full h-full transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-60 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
          }`}
        >
          <img
            src={book.featuredImage}
            alt={book.title}
            className="w-full h-full object-cover img-monochrome"
            onError={(e) => {
              // Fallback to Unsplash if local image fails
              const target = e.target as HTMLImageElement;
              const keywords =
                {
                  'afelandra-2': 'fantasy landscape mountains ruins',
                  'poeta-tigre': 'japanese tiger ink brush art',
                  peonia: 'chinese garden pavilion flowers',
                  'tanto-mar': 'colonial harbor ships coastline',
                }[book.id] || 'book literature';
              target.src = `https://source.unsplash.com/800x1000/?${encodeURIComponent(keywords)}`;
            }}
          />
          <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
        </div>
      </div>

      {/* Divider Line */}
      <div
        className={`absolute ${
          isLeft ? 'left-[62vw]' : 'left-[38vw]'
        } top-0 w-px h-full bg-[#C9A04C]/35`}
      />

      {/* Text Panel */}
      <div
        className={`absolute ${
          isLeft ? 'right-0' : 'left-0'
        } top-0 w-[38vw] h-full bg-[#0B0B0D] flex items-center`}
      >
        <div
          className={`px-[4vw] transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-80 ${isLeft ? 'translate-x-10' : '-translate-x-10'}`
          }`}
        >
          {/* Micro Label */}
          <span
            className={`micro-label block mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ letterSpacing: isVisible ? '0.14em' : '0.22em' }}
          >
            {microLabel}
          </span>

          {/* Title */}
          <h2 className="font-serif text-[clamp(28px,3vw,44px)] text-[#F4F1EA] leading-[1] mb-4">
            {book.title.split(' ').map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + i * 50}ms` }}
              >
                {word}{' '}
              </span>
            ))}
          </h2>

          {/* Meta */}
          <p
            className={`text-[#B8B2A6] text-sm mb-6 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {book.author} • {book.genre.slice(0, 2).join(' • ')}
          </p>

          {/* Synopsis */}
          <p
            className={`text-[#B8B2A6] text-[clamp(13px,1vw,15px)] leading-relaxed mb-8 max-w-[26vw] transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {book.synopsis}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <button 
              onClick={handleViewDetails}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Ver detalhes
            </button>
            <button 
              onClick={handleViewDetails}
              className="btn-secondary text-xs py-2.5 px-6"
            >
              {book.cta.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
