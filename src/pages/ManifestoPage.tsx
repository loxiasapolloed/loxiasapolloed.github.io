import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, Feather, BookOpen, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F4F1EA] pt-20">
      {/* Navegação de Retorno */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#C9A04C]/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#B8B2A6] hover:text-[#C9A04C] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar para a Home</span>
          </Link>
        </div>
      </nav>

      {/* Conteúdo do Manifesto */}
      <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A04C]/10 border border-[#C9A04C]/30 mb-6">
            <Feather className="w-8 h-8 text-[#C9A04C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#C9A04C] mb-4 tracking-tight">
            Manifesto
          </h1>
          <p className="text-[#B8B2A6] text-lg italic">
            Loxias Apollo Edições
          </p>
        </header>

        {/* Citação de Abertura */}
        <blockquote className="relative py-8 px-6 md:px-12 bg-gradient-to-r from-[#C9A04C]/5 via-[#C9A04C]/10 to-[#C9A04C]/5 border-l-4 border-[#C9A04C] rounded-r-lg mb-16">
          <Quote className="absolute top-4 left-4 w-8 h-8 text-[#C9A04C]/30" />
          <p className="font-serif text-2xl md:text-3xl text-[#C9A04C] italic text-center relative z-10">
            "A verdade não é luz sem sombra."
          </p>
        </blockquote>

        {/* Introdução */}
        <section className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-xl text-[#F4F1EA] font-light leading-loose">
            Não esperamos permissão para existir.
          </p>
          
          <p className="text-[#B8B2A6] leading-relaxed mt-6">
            Escrevemos porque há verdades que não cabem em silêncio — e livros que não nascem para agradar mercados, mas para desafiar esquecimentos.
          </p>
          
          <p className="text-[#B8B2A6] leading-relaxed mt-6">
            Nós, da <strong className="text-[#F4F1EA]">Loxias Apollo Edições</strong>, recusamos a ideia de que criar é um privilégio a ser regulado por burocracias que nada devolvem à cultura.
          </p>
        </section>

        {/* Seção de Recusa */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-[#C9A04C]" />
            <h2 className="font-serif text-2xl text-[#C9A04C]">Recusamos</h2>
          </div>
          
          <div className="space-y-6 text-[#B8B2A6] leading-relaxed">
            <p>
              Recusamos a naturalização da escassez: como se fosse normal que o conhecimento seja caro, distante, reservado a poucos. E recusamos, sobretudo, a ilusão de que o abandono do livro no Brasil seja fruto da indiferença do povo.
            </p>
            
            <p className="text-[#F4F1EA] font-medium">
              É fruto do abandono estatal.
            </p>
            
            <p>
              É o resultado de décadas sem políticas reais de formação de leitores — trocadas por campanhas efêmeras; de bibliotecas esquecidas, escolas sem acervos, editais inacessíveis; e de um sistema que cobra pelo direito de existir como autor, exigindo que se pague por um número — o ISBN — que, em quase todo o mundo civilizado, é gratuito, pois reconhece-se que identificar uma obra não é um favor burocrático, mas um direito daquele que cria.
            </p>
            
            <p>
              Essa taxa não financia a leitura. Não alimenta bibliotecas. Não forma professores.
            </p>
            
            <p className="text-[#F4F1EA] italic border-l-2 border-[#C9A04C] pl-4">
              Ela apenas sustenta a ilusão de que a cultura precisa de guardiões — quando, na verdade, precisa de portas abertas.
            </p>
          </div>
        </section>

        {/* Seção Os Números */}
        <section className="mb-12 bg-[#222222] border border-[#C9A04C]/20 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-[#C9A04C]" />
            <h2 className="font-serif text-2xl text-[#C9A04C]">Os números confirmam o que já sentimos</h2>
          </div>
          
          <p className="text-[#B8B2A6] mb-6 italic">
            Segundo a Pesquisa Retratos da Leitura no Brasil (2023):
          </p>
          
          <ul className="space-y-4 mb-6">
            {[
              'Apenas 57% da população com 5 anos ou mais leu um livro inteiro no último ano;',
              'O leitor ativo lê, em média, 2,4 obras por ano;',
              '63% dos lares brasileiros não têm nenhum livro de lazer — apenas materiais escolares, quando há.'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#B8B2A6]">
                <span className="text-[#C9A04C] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-[#C9A04C]/20 pt-6 space-y-4">
            <p className="text-[#F4F1EA] font-medium">
              Mas esses dados não revelam falta de desejo.
            </p>
            <p className="text-[#C9A04C] font-serif text-xl">
              Revelam ausência de acesso.
            </p>
            <p className="text-[#B8B2A6] italic">
              Revelam que transformamos a criação em luxo — e o conhecimento, em artigo de elite.
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-[#C9A04C]/5 border border-[#C9A04C]/20 rounded-lg">
            <p className="text-[#B8B2A6] text-sm leading-relaxed">
              Mas, como nos ensinam os existencialistas, não basta denunciar a má-fé do sistema. É na consciência da injustiça e na ação concreta contra ela que se constrói liberdade. E, como lembra Aristóteles, a virtude não é teoria — é hábito, prática constante, vigilância sobre nossas escolhas e domínio sobre nossas criações.
            </p>
          </div>
        </section>

        {/* Seção Por isso, agimos */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-[#C9A04C]" />
            <h2 className="font-serif text-2xl text-[#C9A04C]">Por isso, agimos:</h2>
          </div>
          
          <ul className="space-y-4">
            {[
              'Publicamos obras com preços acessíveis, calculados para sustentar o selo — nunca para enriquecer intermediários;',
              'Oferecemos formatos múltiplos (impresso, digital, conteúdos complementares) para alcançar desde o estudante até o pesquisador;',
              'Traduzimos clássicos esquecidos com fidelidade ao espírito original, não à conveniência comercial;',
              'Mantemos controle total sobre nossa produção, recusando modelos que tratam a palavra como mercadoria descartável.'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#B8B2A6] leading-relaxed">
                <span className="text-[#C9A04C] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Chamada Principal */}
        <section className="bg-gradient-to-br from-[#C9A04C]/10 via-[#C9A04C]/5 to-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-xl p-8 md:p-12 text-center my-16">
          <BookOpen className="w-12 h-12 text-[#C9A04C] mx-auto mb-6" />
          <p className="font-serif text-2xl md:text-3xl text-[#F4F1EA] mb-6">
            Existimos porque escrevemos.
          </p>
          <p className="text-[#B8B2A6] mb-8">
            E convidamos você — leitor, tradutor, pensador — a participar dessa resistência ativa:
          </p>
          <p className="font-serif text-xl md:text-2xl text-[#C9A04C] italic leading-relaxed">
            ler com rigor,<br />
            comprar com consciência,<br />
            e exigir que o conhecimento não seja negado a quem o busca com boa vontade.
          </p>
        </section>

        {/* Assinatura */}
        <footer className="text-center pt-8 border-t border-[#C9A04C]/20">
          <p className="font-serif text-xl text-[#C9A04C] mb-2">
            — Loxias Apollo Produções Literárias —
          </p>
          <p className="text-[#B8B2A6] italic mb-2">
            Publicamos o que o mundo precisa ler
          </p>
          <p className="text-[#B8B2A6]/70 text-sm">
            — não o que o mercado permite vender.
          </p>
        </footer>

        {/* Botão de Retorno */}
        <div className="mt-16 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-lg text-[#C9A04C] hover:bg-[#C9A04C]/20 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Home</span>
          </Link>
        </div>
      </article>
    </div>
  );
}