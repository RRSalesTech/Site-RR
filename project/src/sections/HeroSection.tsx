import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundPosition: 'center 25%'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Otimize seu atendimento com Agentes de Inteligência Artificial personalizados
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Reduza custos e ganhe mais tempo automatizando seu atendimento com IA!
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <CTAButton 
              text="TESTE AGORA MESMO" 
              className="text-lg md:px-8 md:py-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;