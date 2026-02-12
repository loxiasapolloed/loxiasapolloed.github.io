import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Como posso comprar os livros da Loxias Apollo?',
    answer:
      'Nossos livros estão disponíveis nas principais livrarias do país, como Livraria Cultura, Saraiva e Amazon. Também vendemos diretamente pelo nosso site com envio para todo o Brasil.',
  },
  {
    question: 'Vocês aceitam manuscritos de autores iniciantes?',
    answer:
      'Sim! Avaliamos manuscritos de autores em qualquer estágio de carreira. O importante é a qualidade da obra e sua contribuição para a literatura. Envie seu material pelo formulário de contato.',
  },
  {
    question: 'Quanto tempo leva para publicar um livro?',
    answer:
      'O processo editorial completo leva em média 6 a 12 meses, dependendo da complexidade da obra. Isso inclui revisão, diagramação, design de capa e produção.',
  },
  {
    question: 'Os livros têm versão digital (e-book)?',
    answer:
      'Sim! A maioria dos nossos títulos está disponível em formato e-book nas principais plataformas: Kindle, Kobo, Google Play Livros e Apple Books.',
  },
  {
    question: 'Como funciona o processo de tradução?',
    answer:
      'Trabalhamos com tradutores especializados em cada idioma e gênero literário. Cada tradução passa por revisão técnica e literária para garantir fidelidade ao original.',
  },
  {
    question: 'Posso solicitar uma amostra antes de comprar?',
    answer:
      'Sim! Oferecemos amostras gratuitas da maioria dos nossos títulos. Basta acessar a página do livro e clicar em "Ler Amostra" para baixar os primeiros capítulos.',
  },
];

export function FAQ() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0B0B0D]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="micro-label block mb-4">Dúvidas</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-[#B8B2A6]">
            Não encontrou o que procurava? Entre em contato conosco.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#C9A04C]/20 transition-all duration-700 ${
                openIndex === index ? 'border-[#C9A04C]/50' : ''
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-serif text-lg text-[#F4F1EA] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#C9A04C] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-[#B8B2A6] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-colors"
          >
            <MessageCircle size={18} />
            <span className="font-sans text-sm tracking-wider uppercase">
              Fale conosco
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
