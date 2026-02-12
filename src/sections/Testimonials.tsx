import { useScrollReveal } from '@/hooks/useScrollReveal';
import { testimonials } from '@/data/books';
import { Quote } from 'lucide-react';

export function Testimonials() {
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
          <span className="micro-label block mb-4">Depoimentos</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA]">
            O que os leitores dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 border border-[#C9A04C]/20 hover:border-[#C9A04C]/40 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#0B0B0D] flex items-center justify-center">
                <Quote size={16} className="text-[#C9A04C]" />
              </div>

              {/* Quote */}
              <p className="text-[#F4F1EA] text-[clamp(15px,1.1vw,17px)] leading-relaxed mb-6 font-serif italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A04C]/20 flex items-center justify-center text-[#C9A04C] font-serif">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[#F4F1EA] text-sm font-medium">
                    {testimonial.author}
                  </p>
                  {testimonial.book && (
                    <p className="text-[#B8B2A6] text-xs">
                      Leitor de {testimonial.book}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
