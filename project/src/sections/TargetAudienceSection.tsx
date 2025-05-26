import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TargetAudienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const targets = [
    "Quer automatizar o atendimento da sua empresa sem perder o toque humano",
    "Precisa escalar agendamentos, suporte ou vendas",
    "Está pronta para transformar o WhatsApp em um canal de conversão",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A1128] text-white" id="para-quem">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">É para você que:</h2>
         
          <div className="space-y-6">
            {targets.map((target, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-[#132043] p-4 rounded-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mr-3" />
                <p className="text-lg">{target}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-lg italic">
              "A IA não está aqui para substituir humanos, mas para potencializar suas capacidades. 
              Nossa tecnologia permite que seus colaboradores foquem no que realmente importa: 
              estratégia e relacionamentos de alto valor."
            </p>
            <p className="mt-3 font-semibold">— Raphaela Oliveira (Fundadora da R&R Sales Tech)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;