
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-xilas-secondary/30 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-xilas-text/60 font-light">© 2025 Xilas. Bütün hüquqlar qorunur.</p>
          </div>
          <div className="flex space-x-5">
            <a 
              href="#" 
              className="text-xilas-text/60 hover:text-xilas-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-xilas-text/60 hover:text-xilas-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
