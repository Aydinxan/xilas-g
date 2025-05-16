
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-xilas-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl mr-2">
        X
      </div>
      <span className="text-xilas-primary font-bold text-2xl">Xilas</span>
    </div>
  );
};

export default Logo;
