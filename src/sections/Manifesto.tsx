import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Manifesto() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="section-pinned relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0D]/55 z-10" />
        <img
          src="https://site/public/images/bg/3.jpeg"
          alt="Pilha de livros antigos"
          className={`w-full h-full object-cover img-monochrome transition-transform duration-[1.5s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        {/* Vertical Rule */}
        <div
          className={`absolute left-[6vw] top-[18vh] w-px h-[64vh] bg-[#C9A04C]/65 origin-top transition-transform duration-1000 ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          }`}
        />

        {/* Text Content */}
        <div className="pl-[8vw] pr-6 max-w-xl">
          {/* Micro Label */}
          <span
            className={`micro-label block mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Manifesto
          </span>

          {/* Headline */}
          <h2
            className={`font-serif text-[clamp(32px,4vw,52px)] text-[#F4F1EA] leading-[1] mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Publicamos o que o mundo precisa ler.
          </h2>

          {/* Body */}
          <p
            className={`text-[#B8B2A6] text-[clamp(14px,1.2vw,16px)] leading-relaxed mb-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ficção histórica, traduções de grandes obras da literatura mundial e
            literatura jovem com profundidade crítica. Cada livro é uma jornada
            única.
          </p>

          {/* CTA */}
          <button
            className={`inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-all duration-700 delay-500 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="font-sans text-sm tracking-wider uppercase">
              Leia nosso manifesto
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
