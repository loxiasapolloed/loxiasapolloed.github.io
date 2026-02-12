import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Authors() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  const authors = [
    {
      name: 'Mira Andor',
      role: 'Fantasia Épica',
      works: 'Trilogia Afelandra',
    },
    {
      name: 'Samantha Tovo',
      role: 'Tradução & Poesia',
      works: 'O Poeta e o Tigre',
    },
    {
      name: 'Gustavo Tovo',
      role: 'Ficção Histórica',
      works: 'Série Brasil Colônia',
    },
  ];

  return (
    <section
      id="autores"
      ref={sectionRef}
      className="section-pinned relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0D]/60 z-10" />
        <img
          src="site/public/images/bg/2.jpeg"
          alt="Escritor trabalhando"
          className={`w-full h-full object-cover img-monochrome transition-all duration-[1.5s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="pl-[8vw] pr-6 max-w-2xl">
          {/* Micro Label */}
          <span
            className={`micro-label block mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Autores
          </span>

          {/* Headline */}
          <h2
            className={`font-serif text-[clamp(32px,4vw,52px)] text-[#F4F1EA] leading-[1] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Conheça os autores por trás das obras.
          </h2>

          {/* Body */}
          <p
            className={`text-[#B8B2A6] text-[clamp(14px,1.2vw,16px)] leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            De tradutores dedicados a narradores que constroem universos—nossos
            autores são o coração da editora.
          </p>

          {/* Author List */}
          <div className="space-y-4 mb-10">
            {authors.map((author, index) => (
              <div
                key={author.name}
                className={`flex items-center gap-4 p-4 border border-[#C9A04C]/20 hover:border-[#C9A04C]/50 transition-all duration-500 cursor-pointer group ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-[#C9A04C]/20 flex items-center justify-center text-[#C9A04C] font-serif text-lg">
                  {author.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="text-[#F4F1EA] font-serif text-lg group-hover:text-[#C9A04C] transition-colors">
                    {author.name}
                  </h4>
                  <p className="text-[#B8B2A6] text-xs">
                    {author.role} • {author.works}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#C9A04C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className={`inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-all duration-700 delay-700 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="font-sans text-sm tracking-wider uppercase">
              Ver todos os autores
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
