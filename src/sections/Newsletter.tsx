import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { Mail, Send, User, MessageSquare, Tag, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  // Estados da Newsletter
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estados do Formulário de Contato (JotForm)
  const [contactForm, setContactForm] = useState({
    'q15_fullName15[first]': '',
    'q15_fullName15[last]': '',
    q7_email: '',
    q16_assunto16: '',
    q4_message4: ''
  });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  // Verificar se houve retorno do JotForm (sucesso)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success') || window.location.href.includes('thank')) {
      setIsContactSubmitted(true);
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => setIsContactSubmitted(false), 8000);
    }
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm['q15_fullName15[first]'] || !contactForm['q15_fullName15[last]'] || 
        !contactForm.q7_email || !contactForm.q16_assunto16 || !contactForm.q4_message4) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.q7_email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    setIsContactSubmitting(true);
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative py-24 bg-[#0B0B0D]"
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0B0B0D]/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* COLUNA 1: FORMULÁRIO DE CONTATO (ESQUERDA) */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 border border-[#C9A04C]/40 mb-8">
              <MessageSquare size={28} className="text-[#C9A04C]" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] text-[#F4F1EA] mb-4">
              Entre em contato.
            </h2>

            {/* Body */}
            <p className="text-[#B8B2A6] text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-10 max-w-lg">
              Sugestões, parcerias, tirar dúvidas ou simplesmente trocar ideias sobre literatura.
              Responderemos em até 72 horas.
            </p>

            {/* Mensagem de Sucesso */}
            {isContactSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-green-400 font-medium mb-1">Mensagem enviada com sucesso!</h4>
                  <p className="text-green-300/80 text-sm">
                    Recebemos seu contato e responderemos em breve através do email informado.
                  </p>
                </div>
              </div>
            )}

            {/* Form Contato - JOTFORM */}
            <form
              action="https://submit.jotform.com/submit/260283048023651"
              method="post"
              name="form_260283048023651"
              onSubmit={handleContactSubmit}
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <input type="hidden" name="formID" value="260283048023651" />
              <input type="hidden" name="website" value="" />
              <input type="hidden" name="simple_spc" value="260283048023651-260283048023651" />

              {/* Nome Completo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A04C]/60" />
                  <input
                    type="text"
                    name="q15_fullName15[first]"
                    value={contactForm['q15_fullName15[first]']}
                    onChange={handleContactChange}
                    placeholder="Primeiro Nome *"
                    className="w-full pl-11 pr-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/60 focus:border-[#C9A04C] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="q15_fullName15[last]"
                    value={contactForm['q15_fullName15[last]']}
                    onChange={handleContactChange}
                    placeholder="Sobrenome *"
                    className="w-full px-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/60 focus:border-[#C9A04C] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A04C]/60" />
                <input
                  type="email"
                  name="q7_email"
                  value={contactForm.q7_email}
                  onChange={handleContactChange}
                  placeholder="Seu E-mail *"
                  className="w-full pl-11 pr-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/60 focus:border-[#C9A04C] focus:outline-none transition-colors text-sm"
                  required
                />
              </div>

              {/* Assunto */}
              <div className="relative">
                <Tag size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A04C]/60 pointer-events-none" />
                <select
                  name="q16_assunto16"
                  value={contactForm.q16_assunto16}
                  onChange={handleContactChange}
                  className="w-full pl-11 pr-4 py-3 bg-[#0B0B0D] border border-[#C9A04C]/40 text-[#F4F1EA] focus:border-[#C9A04C] focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled className="text-[#B8B2A6]/60">Selecione o Assunto *</option>
                  <option value="Dúvida">Dúvida sobre produtos/serviços</option>
                  <option value="Sugestão">Sugestão ou feedback</option>
                  <option value="Parceria">Proposta de parceria</option>
                  <option value="Suporte">Suporte técnico</option>
                  <option value="Outro">Outro assunto</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="relative">
                <textarea
                  name="q4_message4"
                  value={contactForm.q4_message4}
                  onChange={handleContactChange}
                  placeholder="Sua Mensagem *"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/60 focus:border-[#C9A04C] focus:outline-none transition-colors text-sm resize-none"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isContactSubmitting}
              >
                {isContactSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0B0B0D]/30 border-t-[#0B0B0D] rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={14} />
                  </>
                )}
              </button>

              {/* Microcopy */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#B8B2A6]/60 text-xs text-center">
                <span>Campos marcados com * são obrigatórios</span>
                <span className="hidden sm:inline">•</span>
                <span>Suas informações são mantidas em sigilo</span>
              </div>
            </form>
          </div>

          {/* COLUNA 2: NEWSLETTER (DIREITA) */}
          <div
            className={`transition-all duration-1000 delay-200 ${
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
            <p className="text-[#B8B2A6] text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-10 max-w-lg">
              Uma newsletter independente sobre literatura, tradução e ideias—sem
              spam, com respeito ao seu tempo.
            </p>

            {/* Form Newsletter */}
            <form
              onSubmit={handleNewsletterSubmit}
              className={`flex flex-col sm:flex-row gap-4 max-w-md transition-all duration-1000 delay-300 ${
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
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
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

            {/* Microcopy com Link para Política */}
            <p
              className={`mt-6 text-[#B8B2A6]/60 text-xs transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Você pode cancelar a qualquer momento.{' '}
              <Link to="/privacidade" className="underline hover:text-[#C9A04C]">
                Leia nossa política de privacidade.
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}