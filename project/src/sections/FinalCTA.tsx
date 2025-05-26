import React from 'react';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Bot className="h-16 w-16 text-[#0A1128]" />
              <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1128] mb-6">
            Pronto para transformar seu atendimento com IA?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Agende uma demonstração gratuita e veja como nosso agente de IA pode revolucionar seu atendimento, 
            transformando-o em um canal de vendas, agendamentos e suporte altamente eficiente.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <CTAButton 
              text="TESTE AGORA" 
              className="text-lg md:px-8 md:py-4"
            />
          </motion.div>
          
          <p className="mt-6 text-sm text-gray-500">
                      </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;