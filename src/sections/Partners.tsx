import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: 'Livraria Cultura', initials: 'LC' },
  { name: 'Amazon Brasil', initials: 'AZ' },
  { name: 'Saraiva', initials: 'SV' },
  { name: 'Kindle', initials: 'KD' },
  { name: 'Kobo', initials: 'KB' },
  { name: 'Google Play', initials: 'GP' },
];

export function Partners() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#0B0B0D] border-y border-[#C9A04C]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="micro-label">Onde Encontrar Nossos Livros</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 border border-[#C9A04C]/30 flex items-center justify-center text-[#C9A04C]/50 font-serif text-lg lg:text-xl group-hover:border-[#C9A04C] group-hover:text-[#C9A04C] transition-all cursor-pointer">
                {partner.initials}
              </div>
              <p className="text-center text-[#B8B2A6]/60 text-xs mt-2 group-hover:text-[#B8B2A6] transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
