import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToManifesto = () => {
    const element = document.querySelector('#manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const element = document.querySelector('#catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-pinned relative">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/35 via-[#0B0B0D]/50 to-[#0B0B0D]/75 z-10" />
        <img
          src="/site/public/images/bg/obrigado-bg.webp"
          alt="Mãos segurando um livro aberto"
          className="w-full h-full object-cover img-monochrome"
        />
        <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1
          className={`font-serif text-[clamp(44px,8vw,76px)] text-[#F4F1EA] text-center leading-[0.9] tracking-tight transition-all duration-1000 delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          LOXIAS APOLLO
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 font-sans text-[clamp(14px,1.5vw,18px)] text-[#B8B2A6] text-center max-w-xl tracking-wide transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Editora independente de literatura local e mundial.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button onClick={scrollToCatalog} className="btn-primary">
            Explorar o catálogo
          </button>
          <button onClick={scrollToManifesto} className="btn-secondary">
            Conhecer autores
          </button>
        </div>
      </div>

      {/* Bottom Right Microcopy */}
      <div
        className={`absolute bottom-[4vh] right-[4vw] z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-[#B8B2A6] text-xs tracking-[0.12em]">
          Leituras que deixam marcas.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToManifesto}
          className="text-[#C9A04C] hover:text-[#D4AA5A] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
