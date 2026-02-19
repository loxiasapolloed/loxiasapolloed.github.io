import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Clock, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  author: string;
}

export function BlogPage() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Usando RSS2JSON para converter feed do Substack
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://iotasubscrito.substack.com/feed'
        );
        
        if (!response.ok) throw new Error('Erro ao carregar feed');
        
        const data = await response.json();
        
        if (data.status !== 'ok') throw new Error('Feed inválido');
        
        // Processar posts
        const processedPosts = data.items.map((item: any) => {
          // Extrair imagem do conteúdo
          const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/);
          const thumbnail = imgMatch ? imgMatch[1] : null;
          
          // Limpar descrição (remover HTML e limitar)
          const cleanDesc = item.description
            .replace(/<[^>]*>/g, '')
            .substring(0, 200) + '...';
          
          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: cleanDesc,
            thumbnail,
            author: item.author || 'Loxias Apollo'
          };
        });
        
        setPosts(processedPosts);
      } catch (err) {
        setError('Não foi possível carregar os posts do Substack.');
        console.error('Erro no feed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-dark text-cream pt-20">
      {/* Navegação de Retorno */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-dark/90 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-stone hover:text-gold transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar para a Home</span>
          </Link>
          
          <a 
            href="https://iotasubscrito.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold/80 transition-colors"
          >
            <span>Ver no Substack</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </nav>

      {/* Conteúdo do Blog */}
      <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <BookOpen className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Reflexões sobre literatura, tradução e o ofício de editar. 
            Textos que acompanham nossas leituras e escolhas editoriais.
          </p>
        </header>

        {/* Estados de Loading/Error */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-4"></div>
            <p className="text-stone">Carregando posts...</p>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20 bg-white/5 rounded-lg border border-gold/20">
            <p className="text-stone mb-4">{error}</p>
            <a 
              href="https://iotasubscrito.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-all"
            >
              <span>Visitar Substack diretamente</span>
              <ExternalLink size={18} />
            </a>
          </div>
        )}

        {/* Grid de Posts */}
        {!loading && !error && (
          <div className="grid gap-8 md:gap-12">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Thumbnail */}
                  {post.thumbnail && (
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  {/* Conteúdo */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${post.thumbnail ? 'md:w-2/3' : 'w-full'}`}>
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-stone mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-gold" />
                        {formatDate(post.pubDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-gold" />
                        {post.author}
                      </span>
                    </div>
                    
                    {/* Título */}
                    <h2 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-stone leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    
                    {/* Link */}
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-medium group/link"
                    >
                      <span>Ler post completo</span>
                      <ExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footer com CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 rounded-xl">
          <p className="text-stone mb-4">
            Quer receber os novos posts diretamente no seu e-mail?
          </p>
          <a 
            href="https://iotasubscrito.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold/90 transition-all"
          >
            <span>Assinar Newsletter</span>
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Botão de Retorno */}
        <div className="mt-12 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}