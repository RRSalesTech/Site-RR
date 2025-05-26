import React from 'react';
import { Bot, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-3">
              <Bot className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">R&R Sales Tech</span>
            </div>
            <p className="text-gray-300 text-center md:text-left max-w-xs">
              Transformando seu atendimento com agentes de IA.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Contato</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:contato@rrsalestech.site" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@rrsalestech.site</span>
              </a>
              <a href="tel:+5511965125686" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 96512-5686</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} R&R Sales Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;