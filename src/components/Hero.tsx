
import React from 'react';
import WaitlistForm from './WaitlistForm';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 md:py-24 lg:py-28">
      <div className="absolute top-0 right-0 w-64 h-64 bg-xilas-accent/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-xilas-secondary/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Hero Image with enhanced styling */}
          <div className="mb-12 transform opacity-0 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-xilas-primary/10 rounded-xl blur-md -z-10 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Təbiət və qida" 
                className="rounded-xl shadow-lg mx-auto object-cover"
                width={800}
                height={500}
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                  <span className="text-xilas-primary font-semibold text-sm">Xilas • Qida israfına qarşı</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero title with enhanced typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 opacity-0 animate-fade-in animate-delay-200 tracking-tight">
            <span className="relative">
              <span className="relative z-10">Xilaskar olmağa</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-xilas-accent/50 -z-10 transform skew-x-3"></span>
            </span>{" "}
            hazırsan?
          </h1>
          
          {/* Subheading with better spacing */}
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animate-delay-300 leading-relaxed">
            Xilas artıq qalan, lakin tam yararlı qidaların israf edilməsinin qarşısını almağa və onları daha sərfəli və ekoloji təmiz şəkildə insanlara çatdırmağa çalışır.
          </p>
          
          {/* Waitlist form with animation */}
          <div className="opacity-0 animate-fade-in animate-delay-400">
            <WaitlistForm />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 opacity-0 animate-fade-in animate-delay-400 relative">
            <ArrowDown className="w-6 h-6 text-xilas-primary/50 absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block" />
            
            {/* App store section with improved styling */}
            <div className="relative">
              <p className="text-sm text-xilas-text/70 mb-4 font-medium">Tezliklə</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-5">
                <div className="flex items-center bg-white/50 backdrop-blur-sm border border-xilas-secondary/30 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-xilas-primary">
                    <path d="M18 20.621A10.742 10.742 0 0 1 12.044 22C6.58 22 2 17.978 2 13s4.58-9 10.044-9C16.481 4 20.621 7.206 21.456 11.5"></path>
                    <path d="M15 9l-2-2" />
                    <path d="M15 9h-3a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-3" />
                    <path d="M9 17l2 2" />
                    <path d="m22 16-3 3 3 3" />
                  </svg>
                  <span className="font-medium">App Store</span>
                </div>
                <div className="flex items-center bg-white/50 backdrop-blur-sm border border-xilas-secondary/30 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-xilas-primary">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span className="font-medium">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
