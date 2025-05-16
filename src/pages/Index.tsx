
import React from 'react';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-xilas-background">
      <header className="w-full py-6 relative z-10">
        <div className="container mx-auto px-4">
          <Logo className="mx-auto sm:mx-0" />
        </div>
      </header>
      
      <main className="flex-grow">
        <Hero />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
