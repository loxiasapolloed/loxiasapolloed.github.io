import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Função para scroll suave ao elemento com offset do header
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handler para links de navegação
  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (target === 'top') {
      // Scroll ao topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (location.pathname === '/') {
      // Se já está na home, scroll direto
      scrollToElement(target);
    } else {
      // Se está em outra página (/blog, /livro/:id), navega para home com hash
      navigate('/#' + target);
    }
  };

  // Efeito para lidar com hash na URL ao carregar/mudar
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const targetId = location.hash.replace('#', '');
      // Aguarda o DOM renderizar completamente
      setTimeout(() => {
        scrollToElement(targetId);
      }, 150);
    }
  }, [location]);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO - Click leva ao topo */}
          <a 
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.svg`}
              alt="Loxias Apollo"
              className="h-12 md:h-20 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-serif text-lg md:text-xl text-cream hidden sm:block">
              Loxias Apollo
            </span>
          </a>

          {/* DESKTOP MENU - SEM ACERVO */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Início - scroll ao topo */}
            <a 
              href="#top"
              onClick={(e) => handleNavClick(e, 'top')}
              className="text-stone hover:text-gold transition-colors font-medium cursor-pointer"
            >
              Início
            </a>
            
            {/* Catálogo - âncora para #catalogo */}
            <a 
              href="#catalogo"
              onClick={(e) => handleNavClick(e, 'catalogo')}
              className="text-stone hover:text-gold transition-colors font-medium cursor-pointer"
            >
              Catálogo
            </a>
            
            {/* Autores - âncora para #autores */}
            <a 
              href="#autores"
              onClick={(e) => handleNavClick(e, 'autores')}
              className="text-stone hover:text-gold transition-colors font-medium cursor-pointer"
            >
              Autores
            </a>
            
            {/* Blog - link para página /blog */}
            <Link 
              to="/blog"
              className="text-stone hover:text-gold transition-colors font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button 
            className="md:hidden text-cream p-2 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU - SEM ACERVO */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20 bg-dark/95 backdrop-blur-md absolute left-0 right-0 top-full shadow-lg">
            <nav className="flex flex-col gap-2 px-4">
              <a 
                href="#top"
                onClick={(e) => handleNavClick(e, 'top')}
                className="text-stone hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
              >
                Início
              </a>
              
              <a 
                href="#catalogo"
                onClick={(e) => handleNavClick(e, 'catalogo')}
                className="text-stone hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
              >
                Catálogo
              </a>
              
              <a 
                href="#autores"
                onClick={(e) => handleNavClick(e, 'autores')}
                className="text-stone hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
              >
                Autores
              </a>
              
              <Link 
                to="/blog"
                className="text-stone hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}