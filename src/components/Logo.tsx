import React from 'react';
import logoImg from '../assets/logo.png';
import logoTextImg from '../assets/logo-text2.png';

interface LogoProps {
  size?: number;
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 60, className = '' }) => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        textDecoration: 'none'
      }} 
      className={className}
    >
      <img 
        src={logoImg} 
        alt="Whooppe Logo" 
        style={{ 
          height: `${size}px`, 
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          borderRadius: '4px'
        }} 
      />
      
      <img 
        src={logoTextImg} 
        alt="Whooppe" 
        className="logo-text-image"
        style={{ 
          height: `${size * 0.45}px`, 
          width: 'auto',
          display: 'block',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
};
