import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/5511965125686?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20agente%20de%20IA"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition-colors duration-300"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;