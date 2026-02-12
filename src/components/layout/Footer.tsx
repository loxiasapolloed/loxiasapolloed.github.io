import { Mail, Instagram, BookOpen } from 'lucide-react';

const footerLinks = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Autores', href: '#autores' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
  { label: 'Termos', href: '#' },
  { label: 'Privacidade', href: '#' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#0B0B0D] border-t border-[#C9A04C]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl text-[#F4F1EA] mb-4">
              Fale com a gente.
            </h3>
            <p className="text-[#B8B2A6] text-sm leading-relaxed mb-6">
              Dúvidas, parcerias ou sugestões? Envie uma mensagem.
            </p>
            <a
              href="mailto:loxias.apollo.ed@gmail.com"
              className="inline-flex items-center gap-2 text-[#C9A04C] hover:text-[#D4AA5A] transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">loxias.apollo.ed@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="micro-label mb-6">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#B8B2A6] hover:text-[#C9A04C] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="micro-label mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A04C]/40 flex items-center justify-center text-[#C9A04C] hover:bg-[#C9A04C] hover:text-[#0B0B0D] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A04C]/40 flex items-center justify-center text-[#C9A04C] hover:bg-[#C9A04C] hover:text-[#0B0B0D] transition-all"
                aria-label="Blog"
              >
                <BookOpen size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#C9A04C]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B8B2A6] text-xs">
            © 2026 Loxias Apollo. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-[#F4F1EA]">
            Loxias Apollo
          </p>
        </div>
      </div>
    </footer>
  );
}
