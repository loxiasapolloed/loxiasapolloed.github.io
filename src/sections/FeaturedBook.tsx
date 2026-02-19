import { books } from '@/data/books';

export function FeaturedBook() {
  // Pega o primeiro livro que tem featuredImage OU o primeiro livro da lista
  const featuredBook = books.find(book => book.featuredImage) || books[0];
  
  // Se não tiver NENHUM livro, não renderiza nada
  if (!featuredBook) {
    return null;
  }

  return (
    <section className="py-16 bg-dark border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-gold mb-4">Destaque</h2>
            <h3 className="text-2xl text-cream mb-2">{featuredBook.title}</h3>
            <p className="text-stone mb-4">{featuredBook.author}</p>
            <p className="text-cream/80">{featuredBook.synopsis}</p>
          </div>
          <div>
            <img 
              src={featuredBook.featuredImage || featuredBook.coverImage}
              alt={featuredBook.title}
              className="w-full max-w-md mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}