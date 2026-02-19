import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/35 via-[#0B0B0D]/50 to-[#0B0B0D]/75 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/bg/5.webp`}
          alt="Apollo moderno"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#C9A04C]/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 py-20 flex flex-col items-center justify-center text-center">
        
        {/* Logo */}
        <div
          className={`mb-6 md:mb-8 transition-all duration-1000 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/logo2.svg`}
            alt="Loxias Apollo"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
          />
        </div>

        {/* Subtitle */}
        <p
          className={`font-sans text-sm sm:text-base md:text-lg text-[#B8B2A6] text-center max-w-md md:max-w-xl tracking-wide mb-6 md:mb-10 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Editora Independente de Literatura Local e Mundial.
        </p>

        {/* CTAs - CORRIGIDO */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={() => scrollTo('#catalogo')} 
            className="btn-primary w-full sm:w-auto px-6 py-3 text-sm md:text-base"
          >
            Explorar o catálogo
          </button>
          <button 
            onClick={() => scrollTo('#autores')} 
            className="btn-secondary w-full sm:w-auto px-6 py-3 text-sm md:text-base"
          >
            Conhecer autores
          </button>
        </div>
      </div>

      {/* Bottom Right Microcopy - Escondido em mobile */}
      <div
        className={`hidden md:block absolute bottom-[4vh] right-[4vw] z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-[#B8B2A6] text-xs tracking-[0.12em]">
          Leituras que deixam marcas.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollTo('#manifesto')}
          className="text-[#C9A04C] hover:text-[#D4AA5A] transition-colors animate-bounce p-2"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}