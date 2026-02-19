import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Globe, Feather } from 'lucide-react';

export function GustavoTovoPage() {
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
            <span className="font-serif text-4xl md:text-5xl text-[#C9A04C]">G</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#C9A04C] mb-2">Gustavo Tovo</h1>
          <p className="text-[#B8B2A6] text-lg">Ficção Histórica • Série Brasil Colônia</p>
        </header>

        {/* Biografia */}
        <div className="space-y-6 text-[#B8B2A6] leading-relaxed">
          <p className="text-xl text-[#F4F1EA] font-light">
            Escritor e pesquisador dedicado à recuperação de narrativas esquecidas da história brasileira.
          </p>

          <p>
            Gustavo Tovo desenvolveu a <strong className="text-[#F4F1EA]">Série Brasil Colônia</strong>, 
            um projeto de ficção histórica que mergulha nas contradições, violências e resistências do 
            período colonial brasileiro. Sua escrita é marcada pelo rigor documental aliado à sensibilidade 
            literária, criando personagens complexos que habitam as interseções entre o poder colonial 
            e as culturas indígenas e africanas.
          </p>

          <p>
            Formado em História, Tovo dedica-se a desenterrar vozes silenciadas pelos manuais oficiais, 
            buscando nas cartas, nos processos judiciais e nos registros eclesiásticos as histórias de 
            quem viveu, amou e resistiu durante os séculos de dominação portuguesa.
          </p>

          <div className="bg-[#222222] border border-[#C9A04C]/20 rounded-lg p-6 my-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-[#C9A04C]" />
              <h3 className="font-serif text-xl text-[#C9A04C]">Obras na Loxias Apollo</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Série Brasil Colônia (em andamento)</span>
              </li>
            </ul>
          </div>

          <p className="italic border-l-2 border-[#C9A04C] pl-4 text-[#B8B2A6]/80">
            "A ficção histórica é uma forma de justiça: dar voz a quem a história oficial tentou silenciar."
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
