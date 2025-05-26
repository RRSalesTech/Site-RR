import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="h-8 w-8 text-[#0A1128]" />
          <span className="ml-2 text-xl font-bold text-[#0A1128]">R&R Sales Tech</span>
        </div>
        <a 
          href="https://wa.me/5511965125686?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20agente%20de%20IA"
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
            scrolled 
              ? 'bg-[#0A1128] text-white hover:bg-[#132043]' 
              : 'bg-white text-[#0A1128] hover:bg-gray-100'
          }`}
        >
          <span>Fale Conosco</span>
        </a>
      </div>
    </header>
  );
};

export default Header;