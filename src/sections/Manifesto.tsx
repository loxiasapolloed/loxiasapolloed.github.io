import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Manifesto() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-24 bg-[#222222] text-[#F4F1EA] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0D]/70 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/bg/3.webp`}
          alt="Fundo manifesto"
          className={`w-full h-full object-cover object-center transition-transform duration-[2s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-[#C9A04C]/5 mix-blend-overlay" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6">
        {/* Citação de abertura */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-serif text-2xl md:text-3xl italic text-[#C9A04C]">
            "A Verdade não é Luz sem Sombra."
          </p>
        </div>

        {/* Corpo do Manifesto */}
        <div
          className={`space-y-6 text-[#B8B2A6] leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-lg text-[#F4F1EA]">
            Não esperamos permissão para existir.
          </p>

          <p>
            Escrevemos porque há verdades que não cabem em silêncio — e livros que não nascem para agradar mercados, mas para desafiar esquecimentos.
          </p>

          <p>
            Recusamos a naturalização da escassez: como se fosse normal que o conhecimento seja caro, distante, reservado a poucos. E recusamos, sobretudo, a ilusão de que o abandono do livro no Brasil seja fruto da indiferença do povo.
          </p>

          <p className="text-[#F4F1EA] font-serif text-xl mt-8">
            Por isso, agimos:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[#B8B2A6]">
            <li>Publicamos obras com preços acessíveis;</li>
            <li>Oferecemos formatos múltiplos para todos os leitores;</li>
            <li>Traduzimos clássicos esquecidos com fidelidade;</li>
            <li>Mantemos controle total sobre nossa produção.</li>
          </ul>

          <p className="text-lg text-[#F4F1EA] mt-8">
            Existimos porque escrevemos.
          </p>

          <p className="font-serif text-xl italic text-[#C9A04C] text-center my-8">
            ler com rigor,<br />
            comprar com consciência,<br />
            e exigir que o conhecimento não seja negado a quem o busca.
          </p>

          {/* Assinatura */}
          <div className="border-t border-[#C9A04C]/20 mt-12 pt-8 text-center">
            <p className="font-serif text-xl text-[#C9A04C] mb-2">
              — Loxias Apollo Produções Literárias —
            </p>
            <p className="text-[#B8B2A6] italic">
              Publicamos o que o mundo precisa ler
            </p>
            <p className="text-[#B8B2A6]/70 text-sm mt-2">
              — não o que o mercado permite vender.
            </p>
            
            <div className="mt-8">
              <Link 
                to="/manifesto"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A04C]/30 text-[#C9A04C] hover:bg-[#C9A04C]/10 transition-all rounded-lg"
              >
                <span>Ler Manifesto Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}