
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className} transition-all hover:scale-105 duration-300`}>
      <div className="relative">
        <div className="absolute inset-0 bg-xilas-primary rounded-full blur-md scale-110 opacity-30"></div>
        <div className="bg-xilas-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl relative">
          X
        </div>
      </div>
      <div className="ml-2">
        <span className="text-xilas-primary font-bold text-2xl tracking-tight">Xilas</span>
        <span className="block text-xs text-xilas-text/60 -mt-1">Qida xilaskarı</span>
      </div>
    </div>
  );
};

export default Logo;
