import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  title, 
  description, 
  icon,
  delay = 0 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: delay * 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="mb-4 text-[#0A1128]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-[#0A1128]">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </motion.div>
  );
};

export default AnimatedCard;