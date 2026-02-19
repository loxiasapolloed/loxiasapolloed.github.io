import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Link, useParams } from 'react-router-dom';
import { books } from '../data/books';
import { ArrowLeft, Calendar, FileText, Globe, BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (id) {
    const foundBook = books.find(b => b.id === id);
    setBook(foundBook || null);
  }
  
  setLoading(false);
}, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="bg-dark text-cream min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold border-r-2 border-gold/20 mx-auto mb-4"></div>
            <p className="text-stone">Carregando livro...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!book) {
    return (
      <>
        <Header />
        <div className="bg-dark text-cream min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="font-serif text-3xl text-gold mb-4">Livro não encontrado</h1>
            <p className="text-stone mb-8">
              O livro que você está procurando não está disponível no catálogo.
            </p>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 bg-gold text-dark px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold/90 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para o catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-dark text-cream min-h-screen py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* VOLTAR */}
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-stone hover:text-gold transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Voltar ao catálogo</span>
          </Link>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* ───── ESQUERDA - CAPA ───── */}
            <div className="space-y-6">
              <div className="sticky top-32">
                <div className="relative">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full max-w-md mx-auto shadow-2xl border border-gold/10"
                  />
                  {book.isNew && (
                    <span className="absolute top-4 left-4 bg-gold text-dark px-4 py-2 text-xs uppercase tracking-wider font-medium">
                      Novo
                    </span>
                  )}
                </div>

                {/* BOTÕES DE AÇÃO MOBILE/LATERAL */}
                <div className="mt-8 space-y-4">
                  {book.sampleUrl && (
                    <a
                      href={book.sampleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border border-gold/40 text-gold px-6 py-4 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                    >
                      <FileText size={16} />
                      Ler amostra (PDF)
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ───── DIREITA - INFORMAÇÕES ───── */}
            <div className="space-y-8">
              
              {/* TÍTULO E AUTOR */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-gold mb-3">
                  {book.title}
                </h1>
                {book.subtitle && (
                  <h2 className="font-serif text-xl text-cream/80 italic mb-4">
                    {book.subtitle}
                  </h2>
                )}
                <p className="text-xl text-stone">
                  {book.author}
                </p>
              </div>

              {/* GÊNEROS */}
              <div className="flex flex-wrap gap-2">
                {book.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 bg-burgundy/20 text-stone text-xs uppercase tracking-wider border border-gold/10"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* SINOPSE */}
              <div className="prose prose-invert max-w-none">
                <h3 className="font-serif text-2xl text-cream mb-4">Sinopse</h3>
                <div className="text-stone leading-relaxed whitespace-pre-line">
                  {book.synopsis}
                </div>
              </div>

              {/* FICHA TÉCNICA */}
              <div className="border-y border-gold/20 py-6 space-y-3">
                <h3 className="font-serif text-xl text-cream mb-4">Ficha técnica</h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {book.pages && (
                    <>
                      <span className="text-stone/60">Páginas</span>
                      <span className="text-cream">{book.pages}</span>
                    </>
                  )}
                  {book.year && (
                    <>
                      <span className="text-stone/60">Ano</span>
                      <span className="text-cream">{book.year}</span>
                    </>
                  )}
                  {book.isbn && (
                    <>
                      <span className="text-stone/60">ISBN</span>
                      <span className="text-cream font-mono text-xs">{book.isbn}</span>
                    </>
                  )}
                  {book.dimensions && (
                    <>
                      <span className="text-stone/60">Dimensões</span>
                      <span className="text-cream">{book.dimensions}</span>
                    </>
                  )}
                  {book.format && (
                    <>
                      <span className="text-stone/60">Formato</span>
                      <span className="text-cream">{book.format}</span>
                    </>
                  )}
                </div>
              </div>

              {/* LINKS DE COMPRA */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-cream mb-4">Onde comprar</h3>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {book.buyLinks.amazon && (
                    <a
                      href={book.buyLinks.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gold text-dark px-4 py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold/90 transition-colors"
                    >
                      <ShoppingCart size={16} />
                      Amazon
                    </a>
                  )}
                  {book.buyLinks.kindle && (
                    <a
                      href={book.buyLinks.kindle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-4 py-3 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                    >
                      <BookOpen size={16} />
                      Kindle
                    </a>
                  )}
                  {book.buyLinks.kobo && (
                    <a
                      href={book.buyLinks.kobo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-4 py-3 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                    >
                      <BookOpen size={16} />
                      Kobo
                    </a>
                  )}
                  {book.buyLinks.googlePlay && (
                    <a
                      href={book.buyLinks.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-4 py-3 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                    >
                      <Globe size={16} />
                      Google Play
                    </a>
                  )}
                  {book.buyLinks.editora && (
                    <a
                      href={book.buyLinks.editora}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-4 py-3 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors sm:col-span-2"
                    >
                      <ShoppingCart size={16} />
                      Compre direto da editora
                    </a>
                  )}
                </div>
              </div>

              {/* AVISO DE AMOSTRA (se não tiver PDF) */}
              {!book.sampleUrl && (
                <p className="text-stone/50 text-sm text-center pt-4">
                  Amostra em PDF disponível em breve.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
