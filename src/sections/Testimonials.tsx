import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

// 🔥 DEPOIMENTOS DEFINIDOS AQUI MESMO (SEM DEPENDER DE books.ts)
const testimonials = [
  {
    id: 1,
    name: 'Ana L.',
    role: 'Leitor de O Poeta e o Tigre',
    content: 'A tradução de O Poeta e o Tigre é sensível e precisa—um convite à leitura atenta.',
    avatar: 'A'
  },
  {
    id: 2,
    name: 'Pedro M.',
    role: 'Leitor de Afelandra',
    content: 'Afelandra me fez relembrar por que amo fantasia épica.',
    avatar: 'P'
  },
  {
    id: 3,
    name: 'Julia R.',
    role: 'Leitora da Loxias Apollo',
    content: 'Edições lindas, com cuidado em cada detalhe.',
    avatar: 'J'
  }
];

export function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#0B0B0D] border-t border-[#C9A04C]/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="micro-label block mb-4">Depoimentos</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA]">
            O que os leitores dizem
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-[#1a1a1a] p-8 rounded-sm border border-[#C9A04C]/10 hover:border-[#C9A04C]/30 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="text-[#C9A04C]/20 mb-6" size={32} />
              
              {/* Content */}
              <p className="text-[#B8B2A6] mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A04C]/10 flex items-center justify-center">
                  <span className="text-[#C9A04C] font-serif text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-[#F4F1EA]">{testimonial.name}</h4>
                  <p className="text-xs text-[#B8B2A6]/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}