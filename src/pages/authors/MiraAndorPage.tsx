import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

export function MiraAndorPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F4F1EA] pt-20">
      {/* Navegação */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#C9A04C]/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/#autores"
            className="inline-flex items-center gap-2 text-[#B8B2A6] hover:text-[#C9A04C] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Autores</span>
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C9A04C]/20 to-[#C9A04C]/5 border-2 border-[#C9A04C]/30 flex items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl text-[#C9A04C]">M</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#C9A04C] mb-2">Mira Andor</h1>
          <p className="text-[#B8B2A6] text-lg">Fantasia Épica • Trilogia Afelandra</p>
        </header>

        {/* Biografia */}
        <div className="space-y-6 text-[#B8B2A6] leading-relaxed">
          <p className="text-xl text-[#F4F1EA] font-light">
            Arquiteta de mundos, criadora de mitologias que ecoam as perguntas mais antigas da humanidade.
          </p>

          <p>
            Mira Andor é a mente por trás da <strong className="text-[#F4F1EA]">Trilogia Afelandra</strong>, 
            saga de fantasia épica que constrói universos complexos onde magia, política e existencialismo 
            se entrelaçam. Sua escrita é marcada pela construção meticulosa de sistemas mágicos coerentes 
            e por personagens que carregam o peso de escolhas impossíveis.
          </p>

          <p>
            Formada em Filosofia, Mira traz para a fantasia questões éticas e metafísicas que transcendem 
            o gênero, criando narrativas que funcionam tanto como aventura quanto como meditação sobre 
            poder, identidade e liberdade. O mundo de Afelandra nasceu de dez anos de worldbuilding, 
            resultando em uma mitologia própria com línguas construídas, genealogias reais e mapas 
            geologicamente plausíveis.
          </p>

          <div className="bg-[#222222] border border-[#C9A04C]/20 rounded-lg p-6 my-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#C9A04C]" />
              <h3 className="font-serif text-xl text-[#C9A04C]">Obras na Loxias Apollo</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Trilogia Afelandra — Volume 1 (3 amostras disponíveis)</span>
              </li>
            </ul>
          </div>

          <p className="italic border-l-2 border-[#C9A04C] pl-4 text-[#B8B2A6]/80">
            "A fantasia não é fuga da realidade, mas amplificação de suas possibilidades — 
            um laboratório onde testamos o que somos capazes de ser."
          </p>
        </div>

        {/* Botão de retorno */}
        <div className="mt-12 text-center">
          <Link 
            to="/#autores"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-lg text-[#C9A04C] hover:bg-[#C9A04C]/20 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Autores</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
