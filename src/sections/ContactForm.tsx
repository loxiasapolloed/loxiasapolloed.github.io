import { useState, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const subjects = [
  { value: '', label: 'Selecione um assunto' },
  { value: 'compra', label: 'Dúvida sobre compra' },
  { value: 'manuscrito', label: 'Envio de manuscrito' },
  { value: 'parceria', label: 'Proposta de parceria' },
  { value: 'imprensa', label: 'Imprensa e mídia' },
  { value: 'eventos', label: 'Eventos e palestras' },
  { value: 'outro', label: 'Outro assunto' },
];

export function ContactForm() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);

    // Simula o envio
    setTimeout(() => {
      setIsSuccess(true);
      toast.success('Mensagem enviada!', {
        description: 'Entraremos em contato em breve.',
      });
      formRef.current?.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      setIsSubmitting(false);
    }, 1500);

    // Para envio real via email, descomente o código abaixo:
    /*
    const mailtoLink = `mailto:loxias.apollo.ed@gmail.com?subject=${encodeURIComponent(
      `[${subject.toUpperCase()}] Contato de ${name}`
    )}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`
    )}`;
    window.location.href = mailtoLink;
    */
  };

  return (
    <section id="contato" ref={sectionRef} className="relative py-24 bg-[#0B0B0D]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="micro-label block mb-4">Contato</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#F4F1EA] mb-4">
            Fale com a gente
          </h2>
          <p className="text-[#B8B2A6] max-w-xl mx-auto">
            Tem alguma dúvida, sugestão ou quer enviar seu manuscrito? 
            Estamos aqui para ouvir você.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-[#F4F1EA] text-sm mb-2">
                Nome completo <span className="text-[#C9A04C]">*</span>
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8B2A6]"
                />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Seu nome"
                  className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/50 focus:border-[#C9A04C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#F4F1EA] text-sm mb-2">
                E-mail <span className="text-[#C9A04C]">*</span>
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8B2A6]"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/50 focus:border-[#C9A04C] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-[#F4F1EA] text-sm mb-2">
              Assunto <span className="text-[#C9A04C]">*</span>
            </label>
            <select
              name="subject"
              required
              className="w-full px-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] focus:border-[#C9A04C] focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              {subjects.map((subject) => (
                <option
                  key={subject.value}
                  value={subject.value}
                  className="bg-[#0B0B0D]"
                >
                  {subject.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#F4F1EA] text-sm mb-2">
              Mensagem <span className="text-[#C9A04C]">*</span>
            </label>
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-[#B8B2A6]"
              />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Escreva sua mensagem..."
                className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#C9A04C]/40 text-[#F4F1EA] placeholder:text-[#B8B2A6]/50 focus:border-[#C9A04C] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`btn-primary flex items-center gap-2 min-w-[200px] justify-center ${
                isSuccess ? 'bg-green-600 hover:bg-green-600' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle size={18} />
                  Enviado!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensagem
                </>
              )}
            </button>

            <p className="text-[#B8B2A6]/60 text-sm text-center sm:text-left">
              Ou envie direto para{' '}
              <a
                href="mailto:loxias.apollo.ed@gmail.com"
                className="text-[#C9A04C] hover:underline"
              >
                loxias.apollo.ed@gmail.com
              </a>
            </p>
          </div>
        </form>

        {/* Info Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-6 border border-[#C9A04C]/20 text-center">
            <h4 className="font-serif text-lg text-[#F4F1EA] mb-2">Resposta Rápida</h4>
            <p className="text-[#B8B2A6] text-sm">
              Respondemos em até 48 horas úteis
            </p>
          </div>
          <div className="p-6 border border-[#C9A04C]/20 text-center">
            <h4 className="font-serif text-lg text-[#F4F1EA] mb-2">Manuscritos</h4>
            <p className="text-[#B8B2A6] text-sm">
              Avaliamos todos os manuscritos recebidos
            </p>
          </div>
          <div className="p-6 border border-[#C9A04C]/20 text-center">
            <h4 className="font-serif text-lg text-[#F4F1EA] mb-2">Parcerias</h4>
            <p className="text-[#B8B2A6] text-sm">
              Abertos a propostas de colaboração
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
