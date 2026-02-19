import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BookPage } from './pages/BookPage';
import { BlogPage } from './pages/BlogPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { GustavoTovoPage } from './pages/authors/GustavoTovoPage';
import { SamanthaTovoPage } from './pages/authors/SamanthaTovoPage';
import { MiraAndorPage } from './pages/authors/MiraAndorPage';
import { TranslatedAuthorsPage } from './pages/TranslatedAuthorsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AcervoPage } from './pages/AcervoPage';

import { Hero } from './sections/Hero';
import { Manifesto } from './sections/Manifesto';
import { Catalog } from './sections/Catalog';
import { VisualizadorLivros } from './sections/VisualizadorLivros'; 
import { ReadingExperienceWithAuthors } from './sections/ReadingExperienceWithAuthors';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-cream flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <div id="top" />
                  <Hero />
                  <Manifesto />
                  <div id="catalogo" />
                  <Catalog />
                  <VisualizadorLivros />
                  <div id="acervo" />
                  <div id="autores" />
                  <ReadingExperienceWithAuthors />
                  <Testimonials />
                  <Newsletter />
                </>
              } 
            />
            <Route path="/livro/:id" element={<BookPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/manifesto" element={<ManifestoPage />} />
            <Route path="/autores/gustavo-tovo" element={<GustavoTovoPage />} />
            <Route path="/autores/samantha-tovo" element={<SamanthaTovoPage />} />
            <Route path="/autores/mira-andor" element={<MiraAndorPage />} />
            <Route path="/autores/traduzidos" element={<TranslatedAuthorsPage />} />
            <Route path="/acervo" element={<AcervoPage />} />
            <Route path="/privacidade" element={<PrivacyPolicyPage />} />
            <Route 
              path="*" 
              element={
                <div className="text-center py-32">
                  <h1 className="font-serif text-4xl text-gold mb-4">Página não encontrada</h1>
                  <a href="/teste/" className="text-stone hover:text-gold">Voltar para a home</a>
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;