import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export function ReadingExperienceWithAuthors() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  const authors = [
    {
      name: 'Mira Andor',
      role: 'Mistery',
      works: 'Trilogia Afelandra',
      slug: 'mira-andor',
      initial: 'M'
    },
    {
      name: 'Samantha Tovo',
      role: 'Filosofia e Mitopoética',
      works: 'Diário de Cassandra',
      slug: 'samantha-tovo',
      initial: 'S'
    },
    {
      name: 'Gustavo Tovo',
      role: 'Ficção Histórica',
      works: 'Série Brasil Colônia',
      slug: 'gustavo-tovo',
      initial: 'G'
    },
  ];

  return (
    <section
      id="autores"
      ref={sectionRef}
      className="section-pinned relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0B0D]/70 z-10" />
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
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full pl-[8vw] pr-6 lg:pr-[8vw]">
          
          {/* Header - Leituras que deixam marcas */}
          <div className="mb-12">
            <h2
              className={`font-serif text-[clamp(32px,4vw,52px)] text-[#F4F1EA] leading-[1] mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Leituras que deixam marcas.
            </h2>
            
            <p
              className={`text-[#B8B2A6] text-[clamp(14px,1.2vw,16px)] leading-relaxed max-w-xl transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Edições cuidadosas, traduções fieis e narrativas que resistem ao tempo.
            </p>
          </div>

          {/* Seção de Autores */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Lista de Autores */}
            <div>
              <span
                className={`micro-label block mb-6 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Autores
              </span>

              <p
                className={`text-[#B8B2A6] text-[clamp(14px,1.2vw,16px)] leading-relaxed mb-8 max-w-md transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                De tradutores dedicados a narradores que constroem universos—nossos autores são o coração da editora.
              </p>

              {/* Author List */}
              <div className="space-y-4 mb-8">
                {authors.map((author, index) => (
                  <Link
                    key={author.name}
                    to={`/autores/${author.slug}`}
                    className={`flex items-center gap-4 p-4 bg-[#0B0B0D]/50 backdrop-blur-sm border border-[#C9A04C]/20 hover:border-[#C9A04C]/50 hover:bg-[#C9A04C]/10 transition-all duration-500 group ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#C9A04C]/20 flex items-center justify-center text-[#C9A04C] font-serif text-lg">
                      {author.initial}
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
                  </Link>
                ))}
              </div>

              {/* CTA Autores Traduzidos */}
              <Link
                to="/autores/traduzidos"
                className={`inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-all duration-700 delay-700 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="font-sans text-sm tracking-wider uppercase">
                  Ver autores traduzidos
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Espaço reservado ou citação */}
            <div
              className={`hidden lg:flex flex-col justify-center h-full transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <blockquote className="border-l-2 border-[#C9A04C] pl-6">
                <p className="font-serif text-2xl md:text-3xl text-[#F4F1EA] italic leading-relaxed mb-4">
                  "Ler é resistir. É afirmar que, apesar de tudo, ainda somos capazes de nos surpreender."
                </p>
                <cite className="text-[#C9A04C] not-italic">
                  — Loxias Apollo
                </cite>
              </blockquote>

              {/* Decorative Element */}
              <div className="mt-12 flex items-center gap-4">
                <div className="w-16 h-px bg-[#C9A04C]/40" />
                <BookOpen size={20} className="text-[#C9A04C]" />
                <div className="w-16 h-px bg-[#C9A04C]/40" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
