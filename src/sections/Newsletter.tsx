import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Send } from 'lucide-react';

export function Newsletter() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative py-24 bg-[#0B0B0D]"
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0B0B0D]/80 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-[#C9A04C]/40 mb-8">
            <Mail size={28} className="text-[#C9A04C]" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] text-[#F4F1EA] mb-4">
            Receba novidades e lançamentos.
          </h2>

          {/* Body */}
          <p className="text-[#B8B2A6] text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-10 max-w-lg mx-auto">
            Uma newsletter independente sobre literatura, tradução e ideias—sem
            spam, com respeito ao seu tempo.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/60 focus:border-[#C9A04C] focus:outline-none transition-colors text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                'Inscrito!'
              ) : (
                <>
                  Assinar
                  <Send size={14} />
                </>
              )}
            </button>
          </form>

          {/* Microcopy */}
          <p
            className={`mt-6 text-[#B8B2A6]/60 text-xs transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Você pode cancelar a qualquer momento.{' '}
            <a href="#" className="underline hover:text-[#C9A04C]">
              Leia nossa política de privacidade.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
