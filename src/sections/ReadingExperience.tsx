import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ReadingExperience() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section ref={sectionRef} className="section-pinned relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0B0D]/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1920&q=80"
          alt="Mãos segurando um livro"
          className={`w-full h-full object-cover img-monochrome transition-transform duration-[2s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Headline */}
        <h2
          className={`font-serif text-[clamp(36px,5vw,64px)] text-[#F4F1EA] leading-[0.95] mb-8 max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Leituras que deixam marcas.
        </h2>

        {/* Body */}
        <p
          className={`text-[#B8B2A6] text-[clamp(14px,1.3vw,18px)] leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Edições cuidadosas, traduções fieis e narrativas que resistem ao
          tempo. Para quem lê com atenção—e quer ser transformado.
        </p>

        {/* Decorative Element */}
        <div
          className={`mt-12 flex items-center gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-16 h-px bg-[#C9A04C]/40" />
          <div className="w-2 h-2 border border-[#C9A04C] rotate-45" />
          <div className="w-16 h-px bg-[#C9A04C]/40" />
        </div>

        {/* Link para autores traduzidos - SEPARADO do decorative element */}
        <div
          className={`mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/autores/traduzidos"
            className="inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#F4F1EA] transition-colors group"
          >
            <span className="hover:underline">Conhecer autores traduzidos</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}