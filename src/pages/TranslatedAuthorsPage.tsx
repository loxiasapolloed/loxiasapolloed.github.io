import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, BookOpen } from 'lucide-react';

interface TranslatedAuthor {
  id: string;
  name: string;
  originalName?: string;
  nationality: string;
  period: string;
  bio: string;
  works: string[];
}

const translatedAuthors: TranslatedAuthor[] = [
  {
    id: 'poeta-tigre',
    name: 'O Poeta e o Tigre',
    originalName: 'The Poet and the Tiger',
    nationality: 'Inglaterra / Índia',
    period: 'Século XX',
    bio: 'Autor misterioso da tradição poética anglo-indiana, cujos versos exploram a tensão entre a civilização e a natureza selvagem. Sua obra, redescoberta em arquivos coloniais, revela uma sensibilidade única que mistura metafísica oriental e simbolismo europeu.',
    works: ['O Poeta e o Tigre (edição bilíngue)']
  },
  {
    id: 'placeholder-1',
    name: 'Em breve',
    nationality: '—',
    period: '—',
    bio: 'Novas traduções serão anunciadas em breve. A Loxias Apollo está em processo de curadoria de clássicos esquecidos da literatura mundial.',
    works: ['Em preparação']
  }
];

export function TranslatedAuthorsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F4F1EA] pt-20">
      {/* Navegação */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#C9A04C]/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#B8B2A6] hover:text-[#C9A04C] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Home</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A04C]/10 border border-[#C9A04C]/30 mb-6">
            <Globe className="w-8 h-8 text-[#C9A04C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#C9A04C] mb-4 tracking-tight">
            Autores Traduzidos
          </h1>
          <p className="text-[#B8B2A6] text-lg max-w-2xl mx-auto">
            Vozes estrangeiras que ecoam em língua portuguesa. 
            Clássicos esquecidos resgatados com fidelidade e cuidado editorial.
          </p>
        </header>

        {/* Grid de Autores */}
        <div className="grid md:grid-cols-2 gap-8">
          {translatedAuthors.map((author) => (
            <article 
              key={author.id}
              className="bg-gradient-to-br from-[#222222] to-[#1a1a1a] border border-[#C9A04C]/10 rounded-xl overflow-hidden hover:border-[#C9A04C]/30 transition-all duration-300"
            >
              {/* Imagem/Avatar */}
              <div className="h-48 bg-gradient-to-br from-[#C9A04C]/10 to-[#C9A04C]/5 flex items-center justify-center border-b border-[#C9A04C]/10">
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border-2 border-[#C9A04C]/30 flex items-center justify-center">
                  <span className="font-serif text-3xl text-[#C9A04C]">
                    {author.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-serif text-2xl text-[#F4F1EA] mb-1">
                      {author.name}
                    </h2>
                    {author.originalName && (
                      <p className="text-[#B8B2A6]/60 text-sm italic">
                        {author.originalName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#C9A04C]/10 text-[#C9A04C] text-sm rounded-full">
                    {author.nationality}
                  </span>
                  <span className="px-3 py-1 bg-[#C9A04C]/10 text-[#C9A04C] text-sm rounded-full">
                    {author.period}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-[#B8B2A6] leading-relaxed mb-6">
                  {author.bio}
                </p>

                {/* Obras */}
                <div className="border-t border-[#C9A04C]/10 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-[#C9A04C]" />
                    <span className="text-[#C9A04C] font-medium text-sm">Obras na Loxias Apollo</span>
                  </div>
                  <ul className="space-y-1">
                    {author.works.map((work, idx) => (
                      <li key={idx} className="text-[#B8B2A6] text-sm pl-6">
                        • {work}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#C9A04C]/5 via-[#C9A04C]/10 to-[#C9A04C]/5 border border-[#C9A04C]/20 rounded-xl">
          <p className="text-[#B8B2A6] mb-4">
            Quer sugerir algum autor esquecido para tradução?
          </p>
          <a 
            href="mailto:contato@loxiasapollo.com.br"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-lg text-[#C9A04C] hover:bg-[#C9A04C]/20 transition-all"
          >
            <span>Entre em contato</span>
          </a>
        </div>

        {/* Botão de retorno */}
        <div className="mt-12 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-lg text-[#C9A04C] hover:bg-[#C9A04C]/20 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
