import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import BigCTA from './components/BigCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-bgDark min-h-screen selection:bg-primary selection:text-bgDark overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProducts />
        <About />
        <BigCTA />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
};

export default App;