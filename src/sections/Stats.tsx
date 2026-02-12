import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    value: '25+',
    label: 'Livros Publicados',
    description: 'Obras de qualidade editorial',
  },
  {
    icon: Users,
    value: '12',
    label: 'Autores',
    description: 'Talentos nacionais e internacionais',
  },
  {
    icon: Globe,
    value: '8',
    label: 'Países',
    description: 'Traduções de literatura mundial',
  },
  {
    icon: Award,
    value: '5',
    label: 'Prêmios',
    description: 'Reconhecimento literário',
  },
];

export function Stats() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0B0B0D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="micro-label block mb-4">Nossos Números</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA]">
            Uma história de dedicação
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 border border-[#C9A04C]/20 hover:border-[#C9A04C]/50 transition-all duration-700 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <stat.icon
                size={32}
                className="mx-auto mb-4 text-[#C9A04C] group-hover:scale-110 transition-transform"
              />
              <div className="font-serif text-[clamp(36px,4vw,48px)] text-[#F4F1EA] mb-2">
                {stat.value}
              </div>
              <div className="text-[#F4F1EA] font-medium mb-1">{stat.label}</div>
              <div className="text-[#B8B2A6] text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
