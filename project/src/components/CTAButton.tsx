import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  text: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = '' }) => {
  return (
    <motion.a
      href="https://wa.me/5511965125686?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20agente%20de%20IA"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg shadow-lg hover:bg-[#1DA851] transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};

export default CTAButton;