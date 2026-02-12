import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, Search, PenTool, BookOpen, Package } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Seleção',
    description:
      'Avaliamos cada manuscrito com atenção à originalidade, qualidade literária e potencial de impacto cultural.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Revisão',
    description:
      'Processo rigoroso de revisão editorial, garantindo precisão linguística e coerência narrativa.',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Design',
    description:
      'Criação de capas e projetos gráficos que traduzem a essência de cada obra.',
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Produção',
    description:
      'Impressão em papel de qualidade com acabamento cuidadoso e atenção aos detalhes.',
  },
  {
    icon: Package,
    number: '05',
    title: 'Distribuição',
    description:
      'Disponibilização em livrarias físicas e digitais, alcançando leitores em todo o Brasil.',
  },
];

export function Process() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
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
          <span className="micro-label block mb-4">Processo Editorial</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA] mb-4">
            Do manuscrito ao livro
          </h2>
          <p className="text-[#B8B2A6] max-w-2xl mx-auto">
            Cada obra passa por um processo cuidadoso de curadoria e produção,
            garantindo a excelência que nossos leitores merecem.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-[#C9A04C]/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-[#0B0B0D] border-2 border-[#C9A04C] flex items-center justify-center group hover:bg-[#C9A04C] transition-colors">
                  <step.icon
                    size={24}
                    className="text-[#C9A04C] group-hover:text-[#0B0B0D] transition-colors"
                  />
                </div>

                {/* Number */}
                <div className="text-center mb-3">
                  <span className="font-serif text-3xl text-[#C9A04C]/40">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#F4F1EA] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#B8B2A6] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
