import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, User, ChevronRight } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  authorSlug: string;
  status: 'publicado' | 'em-breve' | 'preparacao';
  description?: string;
}

const acervo: Record<string, Book[]> = {
  'Mira Andor': [
    {
      id: 'afelandra-1',
      title: 'Afelandra',
      subtitle: 'Volume I',
      author: 'Mira Andor',
      authorSlug: 'mira-andor',
      status: 'publicado',
      description: 'Primeiro volume da épica trilogia de fantasia.'
    },
    {
      id: 'afelandra-2',
      title: 'Afelandra',
      subtitle: 'Volume II',
      author: 'Mira Andor',
      authorSlug: 'mira-andor',
      status: 'em-breve',
      description: 'Continuação da saga de Afelandra.'
    },
    {
      id: 'afelandra-3',
      title: 'Afelandra',
      subtitle: 'Volume III',
      author: 'Mira Andor',
      authorSlug: 'mira-andor',
      status: 'preparacao',
      description: 'Conclusão da trilogia.'
    },
    {
      id: 'lavanderia',
      title: 'Crônicas de uma Lavanderia',
      author: 'Mira Andor',
      authorSlug: 'mira-andor',
      status: 'em-breve',
      description: 'Narrativas cotidianas com toques de magia.'
    }
  ],
  'Samantha Tovo': [
    {
      id: 'loxias-musa',
      title: 'De Loxias para Musa da Noite',
      author: 'Samantha Tovo',
      authorSlug: 'samantha-tovo',
      status: 'publicado',
      description: 'Poesia que dialoga com a tradição clássica.'
    },
    {
      id: 'diario-cassandra',
      title: 'Diário de Cassandra',
      author: 'Samantha Tovo',
      authorSlug: 'samantha-tovo',
      status: 'publicado',
      description: 'A profetisa maldita narra seus dias.'
    },
    {
      id: 'peonias',
      title: 'Peônias',
      author: 'Samantha Tovo',
      authorSlug: 'samantha-tovo',
      status: 'publicado',
      description: 'Sobre a beleza efêmera e a memória.'
    },
    {
      id: 'poeta-tigre',
      title: 'O Poeta e o Tigre',
      author: 'Samantha Tovo',
      authorSlug: 'samantha-tovo',
      status: 'publicado',
      description: 'Tradução de obra anglo-indiana.'
    }
  ],
  'Gustavo Tovo': [
    {
      id: 'ovelha-pink',
      title: 'A Ovelha Pink vai ler a vida ao amanhecer vazio',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'publicado',
      description: 'Ficção histórica com tom existencial.'
    },
    {
      id: 'enzo-1',
      title: 'Enzo I',
      subtitle: 'Tanto Mar',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'publicado',
      description: 'Início da saga de Enzo na colônia.'
    },
    {
      id: 'enzo-2',
      title: 'Enzo II',
      subtitle: 'O Filho do Senhor de Engenho',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'em-breve',
      description: 'Continuação das aventuras de Enzo.'
    },
    {
      id: 'enzo-3',
      title: 'Enzo III',
      subtitle: 'Em Busca da Terra Sem Mal',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'preparacao',
      description: 'Conclusão da trilogia de Enzo.'
    },
    {
      id: 'floresta-deuses',
      title: 'Floresta dos Deuses',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'publicado',
      description: 'Mitos e lendas do Brasil colonial.'
    },
    {
      id: 'insaciabilidade-2',
      title: 'Insaciabilidade',
      subtitle: 'Volume II',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'em-breve',
      description: 'Segundo volume da série.'
    },
    {
      id: 'insaciabilidade-1',
      title: 'Insaciabilidade',
      subtitle: 'Volume I',
      author: 'Gustavo Tovo',
      authorSlug: 'gustavo-tovo',
      status: 'publicado',
      description: 'Primeiro volume da série.'
    }
  ]
};

const statusLabels = {
  'publicado': { text: 'Publicado', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  'em-breve': { text: 'Em breve', color: 'bg-[#C9A04C]/20 text-[#C9A04C] border-[#C9A04C]/30' },
  'preparacao': { text: 'Em preparação', color: 'bg-[#B8B2A6]/20 text-[#B8B2A6] border-[#B8B2A6]/30' }
};

export function AcervoPage() {
  const totalObras = Object.values(acervo).flat().length;

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
            <BookOpen className="w-8 h-8 text-[#C9A04C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#C9A04C] mb-4 tracking-tight">
            Acervo Completo
          </h1>
          <p className="text-[#B8B2A6] text-lg">
            {totalObras} obras • 3 autores • 1 editora independente
          </p>
        </header>

        {/* Lista por Autor */}
        <div className="space-y-16">
          {Object.entries(acervo).map(([authorName, books], authorIndex) => (
            <section 
              key={authorName}
              className="border-t border-[#C9A04C]/20 pt-12"
            >
              {/* Header do Autor */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A04C]/10 border border-[#C9A04C]/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-[#C9A04C]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#F4F1EA]">
                    {authorName}
                  </h2>
                  <Link 
                    to={`/autores/${books[0].authorSlug}`}
                    className="text-[#C9A04C] text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Ver biografia
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Grid de Livros */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, bookIndex) => (
                  <article 
                    key={book.id}
                    className="group bg-gradient-to-br from-[#222222] to-[#1a1a1a] border border-[#C9A04C]/10 rounded-xl overflow-hidden hover:border-[#C9A04C]/30 transition-all duration-300"
                  >
                    {/* Capa Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-[#C9A04C]/10 to-[#C9A04C]/5 flex items-center justify-center border-b border-[#C9A04C]/10 relative">
                      <div className="text-center p-4">
                        <span className="font-serif text-4xl text-[#C9A04C]/30">
                          {book.title.charAt(0)}
                        </span>
                      </div>
                      {/* Status Badge */}
                      <span className={`absolute top-3 right-3 px-2 py-1 text-xs border rounded-full ${statusLabels[book.status].color}`}>
                        {statusLabels[book.status].text}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-[#F4F1EA] group-hover:text-[#C9A04C] transition-colors mb-1">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                        <p className="text-[#B8B2A6] text-sm mb-2">
                          {book.subtitle}
                        </p>
                      )}
                      <p className="text-[#B8B2A6]/70 text-sm leading-relaxed">
                        {book.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#C9A04C]/5 via-[#C9A04C]/10 to-[#C9A04C]/5 border border-[#C9A04C]/20 rounded-xl">
          <p className="text-[#B8B2A6] mb-4">
            Quer conhecer mais sobre nossos autores?
          </p>
          <Link 
            to="/#autores"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A04C]/10 border border-[#C9A04C]/30 rounded-lg text-[#C9A04C] hover:bg-[#C9A04C]/20 transition-all"
          >
            <span>Ver perfis dos autores</span>
            <ChevronRight size={18} />
          </Link>
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
