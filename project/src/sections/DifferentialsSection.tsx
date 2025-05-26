import React from 'react';
import { Mic, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DifferentialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Mic size={32} />,
      title: "IA que reconhece voz e imagem",
      description: "Nossa tecnologia avançada permite que o agente compreenda comandos de voz e processe imagens para uma interação mais natural e completa."
    },
    {
      icon: <Users size={32} />,
      title: "Scripts personalizados e humanizados",
      description: "Respostas que parecem humanas, adaptadas ao tom de voz e à personalidade da sua marca, garantindo uma experiência consistente para seus clientes."
    },
    {
      icon: <BarChart size={32} />,
      title: "Setup rápido e relatórios de performance",
      description: "Implementação simples e acompanhamento detalhado com métricas que mostram o impacto real no seu negócio."
    }
  ];

  return (
    <section className="py-16 md:py-24" id="diferenciais">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1128] mb-6">Nossos Diferenciais</h2>
            <p className="text-lg text-gray-700 mb-8">
              O que torna a tecnologia da R&R Sales Tech única no mercado? Um agente de IA que vai além do básico.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 p-3 bg-[#0A1128] text-white rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A1128] mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;