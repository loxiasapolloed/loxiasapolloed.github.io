import { Toaster } from 'sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Manifesto } from '@/sections/Manifesto';
import { FeaturedBook } from '@/sections/FeaturedBook';
import { Authors } from '@/sections/Authors';
import { ReadingExperience } from '@/sections/ReadingExperience';
import { Newsletter } from '@/sections/Newsletter';
import { Catalog } from '@/sections/Catalog';
import { Testimonials } from '@/sections/Testimonials';
import { Stats } from '@/sections/Stats';
import { Process } from '@/sections/Process';
import { Partners } from '@/sections/Partners';
import { FAQ } from '@/sections/FAQ';
import { ContactForm } from '@/sections/ContactForm';
import { books } from '@/data/books';

function App() {
  // Get featured books
  const afelandra = books.find((b) => b.id === 'afelandra-2') || books[0];
  const poetaTigre = books.find((b) => b.id === 'poeta-tigre') || books[1];
  const peonia = books.find((b) => b.id === 'peonia') || books[2];
  const tantoMar = books.find((b) => b.id === 'tanto-mar') || books[3];

  return (
    <div className="relative min-h-screen bg-[#0B0B0D]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Vignette */}
      <div className="vignette" />

      {/* Toast notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#0B0B0D',
            border: '1px solid rgba(201, 160, 76, 0.4)',
            color: '#F4F1EA',
          },
        }}
      />

      {/* Main Content */}
      <Header />
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Manifesto */}
        <Manifesto />

        {/* Section 3: Stats */}
        <Stats />

        {/* Section 4: Featured Book - Afelandra */}
        <FeaturedBook book={afelandra} microLabel="Destaque" layout="left" />

        {/* Section 5: Featured Book - O Poeta e o Tigre */}
        <FeaturedBook book={poetaTigre} microLabel="Tradução" layout="right" />

        {/* Section 6: Featured Book - A Peônia */}
        <FeaturedBook book={peonia} microLabel="Clássico" layout="left" />

        {/* Section 7: Featured Book - Tanto Mar */}
        <FeaturedBook book={tantoMar} microLabel="Ficção Histórica" layout="right" />

        {/* Section 8: Authors */}
        <Authors />

        {/* Section 9: Process */}
        <Process />

        {/* Section 10: Reading Experience */}
        <ReadingExperience />

        {/* Section 11: Partners */}
        <Partners />

        {/* Section 12: Newsletter */}
        <Newsletter />

        {/* Section 13: Catalog */}
        <Catalog />

        {/* Section 14: Testimonials */}
        <Testimonials />

        {/* Section 15: FAQ */}
        <FAQ />

        {/* Section 16: Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
