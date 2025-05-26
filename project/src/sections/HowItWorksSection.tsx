import React from 'react';
import { MessageSquare, Calendar, HeadsetIcon } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorksSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="como-funciona">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#0A1128] mb-4"
            variants={itemVariants}
          >
            Como Funciona
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            variants={itemVariants}
          >
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <AnimatedCard 
            title="Agendamento inteligente" 
            description="Consultas, reuniões ou avaliações marcadas de maneira automática e humanizada."
            icon={<MessageSquare size={48} />}
            delay={0}
          />
          <AnimatedCard 
            title="Suporte automatizado" 
            description="Respostas rápidas e completas 100% humanizadas para as dúvidas mais frequentes dos seus clientes."
            icon={<Calendar size={48} />}
            delay={1}
          />
          <AnimatedCard 
            title="Qualificação de lead" 
            description="Nosso agente qualifica seu lead conhecendo melhor suas necessidades e aumentando seu nível de consciência para facilitar a conversão."
            icon={<HeadsetIcon size={48} />}
            delay={2}
          />
        </div>

        <div className="text-center">
          <CTAButton text="TESTE AGORA MESMO" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;