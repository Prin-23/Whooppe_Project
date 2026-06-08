import React from 'react';
import { motion } from 'framer-motion';
import './CustomButton.css';

interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'cyber';
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  icon,
  children,
  className = '',
  onClick,
  disabled,
  type = 'button'
}) => {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.99 }}
      className={`custom-btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </motion.button>
  );
};
