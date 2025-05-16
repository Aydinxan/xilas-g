
import React from 'react';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Hero Image - placeholder with food waste reduction illustration */}
          <div className="mb-10 opacity-0 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500" 
              alt="Təbiət və qida" 
              className="rounded-xl shadow-lg mx-auto"
              width={800}
              height={500}
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-200">
            Xilaskar olmağa hazırsan?
          </h1>
          
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animate-delay-300">
            Xilas artıq qalan, lakin tam yararlı qidaların israf edilməsinin qarşısını almağa və onları daha sərfəli və ekoloji təmiz şəkildə insanlara çatdırmağa çalışır.
          </p>
          
          <div className="opacity-0 animate-fade-in animate-delay-400">
            <WaitlistForm />
          </div>

          <div className="mt-16 opacity-0 animate-fade-in animate-delay-400">
            <p className="text-sm text-xilas-text/70 mb-3">Tezliklə</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center border border-xilas-secondary/30 px-4 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M18 20.621A10.742 10.742 0 0 1 12.044 22C6.58 22 2 17.978 2 13s4.58-9 10.044-9C16.481 4 20.621 7.206 21.456 11.5"></path>
                  <path d="M15 9l-2-2" />
                  <path d="M15 9h-3a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-3" />
                  <path d="M9 17l2 2" />
                  <path d="m22 16-3 3 3 3" />
                </svg>
                App Store
              </div>
              <div className="flex items-center border border-xilas-secondary/30 px-4 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
