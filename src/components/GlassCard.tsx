import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  style,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.01,
        borderColor: "var(--glass-border-hover)"
      }}
      className={`glass ${className}`}
      style={{ 
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      onClick={onClick}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
};
