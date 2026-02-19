import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText, Mail } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F4F1EA] pt-20">
      {/* Navegação */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#C9A04C]/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#B8B2A6] hover:text-[#C9A04C] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Home</span>
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A04C]/10 border border-[#C9A04C]/30 mb-6">
            <Shield className="w-8 h-8 text-[#C9A04C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#C9A04C] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-[#B8B2A6]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </header>

        {/* Introdução */}
        <section className="mb-10">
          <p className="text-[#B8B2A6] leading-relaxed">
            A <strong className="text-[#F4F1EA]">Loxias Apollo Produções Literárias</strong> 
            valoriza a privacidade de seus usuários e está comprometida em proteger 
            as informações pessoais coletadas. Esta política descreve como coletamos, 
            usamos, armazenamos e protegemos seus dados.
          </p>
        </section>

        {/* Seções */}
        <div className="space-y-8">
          
          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-[#C9A04C]" />
              <h2 className="font-serif text-xl text-[#C9A04C]">1. Informações Coletadas</h2>
            </div>
            <p className="text-[#B8B2A6] leading-relaxed mb-4">
              Coletamos apenas as informações necessárias para prestar nossos serviços:
            </p>
            <ul className="space-y-2 text-[#B8B2A6]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span><strong className="text-[#F4F1EA]">Newsletter:</strong> endereço de e-mail para envio de atualizações.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span><strong className="text-[#F4F1EA]">Formulário de contato:</strong> nome, e-mail, assunto e mensagem.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span><strong className="text-[#F4F1EA]">Navegação:</strong> dados técnicos como IP, navegador e sistema operacional (anônimos).</span>
              </li>
            </ul>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-[#C9A04C]" />
              <h2 className="font-serif text-xl text-[#C9A04C]">2. Uso das Informações</h2>
            </div>
            <p className="text-[#B8B2A6] leading-relaxed mb-4">
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="space-y-2 text-[#B8B2A6]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Enviar newsletters e comunicações sobre lançamentos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Responder solicitações feitas pelo formulário de contato.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Melhorar a experiência do usuário em nosso site.</span>
              </li>
            </ul>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-[#C9A04C]" />
              <h2 className="font-serif text-xl text-[#C9A04C]">3. Proteção de Dados</h2>
            </div>
            <p className="text-[#B8B2A6] leading-relaxed">
              Adotamos medidas de segurança técnicas e administrativas para proteger 
              suas informações contra acesso não autorizado, alteração, divulgação 
              ou destruição. Seus dados são armazenados em servidores seguros e 
              criptografados quando necessário.
            </p>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#C9A04C]" />
              <h2 className="font-serif text-xl text-[#C9A04C]">4. Seus Direitos</h2>
            </div>
            <p className="text-[#B8B2A6] leading-relaxed mb-4">
              Você tem o direito de:
            </p>
            <ul className="space-y-2 text-[#B8B2A6]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Acessar seus dados pessoais armazenados.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Solicitar correção de informações incorretas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Solicitar exclusão de seus dados (direito ao esquecimento).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A04C] mt-1">•</span>
                <span>Cancelar inscrição da newsletter a qualquer momento.</span>
              </li>
            </ul>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <h2 className="font-serif text-xl text-[#C9A04C] mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-[#B8B2A6] leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais 
              com terceiros, exceto quando necessário para cumprir obrigações legais 
              ou prestar serviços contratados (como envio de e-mails via serviços 
              de newsletter).
            </p>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <h2 className="font-serif text-xl text-[#C9A04C] mb-4">6. Cookies</h2>
            <p className="text-[#B8B2A6] leading-relaxed">
              Utilizamos cookies apenas para melhorar a navegação e analisar 
              tráfego anônimo. Você pode desativar cookies nas configurações do 
              seu navegador, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <h2 className="font-serif text-xl text-[#C9A04C] mb-4">7. Alterações nesta Política</h2>
            <p className="text-[#B8B2A6] leading-relaxed">
              Podemos atualizar esta política periodicamente. Recomendamos revisar 
              esta página regularmente. Alterações significativas serão comunicadas 
              via e-mail ou aviso no site.
            </p>
          </section>

          <section className="bg-[#222222] border border-[#C9A04C]/10 rounded-lg p-6">
            <h2 className="font-serif text-xl text-[#C9A04C] mb-4">8. Contato</h2>
            <p className="text-[#B8B2A6] leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato através do formulário no site ou pelo e-mail:{' '}
              <a href="mailto:contato@loxiasapollo.com.br" className="text-[#C9A04C] hover:underline">
                contato@loxiasapollo.com.br
              </a>
            </p>
          </section>
        </div>

        {/* Aceite */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#C9A04C]/5 via-[#C9A04C]/10 to-[#C9A04C]/5 border border-[#C9A04C]/20 rounded-xl text-center">
          <p className="text-[#B8B2A6] text-sm">
            Ao utilizar nosso site e serviços, você concorda com os termos desta 
            Política de Privacidade.
          </p>
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
      </article>
    </div>
  );
}
