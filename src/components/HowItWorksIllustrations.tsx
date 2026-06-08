import React from 'react';
import { motion } from 'framer-motion';

interface IllustrationProps {
  className?: string;
}

// Sparkle/Star helper component for SVGs
const Sparkle = ({ cx, cy, delay = 0, size = 6, color = '#3b82f6' }: { cx: number; cy: number; delay?: number; size?: number; color?: string }) => (
  <motion.path
    d={`M ${cx} ${cy - size} Q ${cx} ${cy} ${cx + size} ${cy} Q ${cx} ${cy} ${cx} ${cy + size} Q ${cx} ${cy} ${cx - size} ${cy} Q ${cx} ${cy} ${cx} ${cy - size}`}
    fill={color}
    initial={{ opacity: 0.3, scale: 0.8 }}
    animate={{ 
      opacity: [0.3, 1, 0.3], 
      scale: [0.8, 1.2, 0.8] 
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      delay, 
      ease: "easeInOut" 
    }}
  />
);

export const BookYourEventIllustration: React.FC<IllustrationProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 280 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
    >
      {/* Background Grid Lines (Subtle) */}
      <line x1="20" y1="160" x2="260" y2="160" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Leafy Plants on Left */}
      <g stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <path d="M30 160c-2-15-8-25-15-30M30 160c1-20 8-32 20-38" />
        <path d="M15 130c-5-2-8-8-5-12 3-4 8-1 10 3s-1 8-5 9z" fill="var(--bg-primary)" />
        <path d="M22 142c-2-5-8-6-11-2s-1 8 3 9 7-2 8-7z" fill="var(--bg-primary)" />
        <path d="M50 122c3-4 1-10-3-11s-8 3-7 8 6 6 10 3z" fill="var(--bg-primary)" />
        <path d="M38 135c4-3 4-9 0-11s-8 1-8 6 5 7 8 2z" fill="var(--bg-primary)" />
      </g>

      {/* Floating Web Browser Window (Top Left) */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Browser Shadow/Backdrop (Glass Effect) */}
        <rect x="45" y="25" width="115" height="75" rx="8" fill="var(--bg-secondary)" stroke="var(--border-light)" strokeWidth="1.5" />
        
        {/* Browser Top Bar */}
        <line x1="45" y1="42" x2="160" y2="42" stroke="var(--border-light)" strokeWidth="1.5" />
        
        {/* Browser Dots */}
        <circle cx="55" cy="33" r="2.5" fill="#ef4444" />
        <circle cx="63" cy="33" r="2.5" fill="#f59e0b" />
        <circle cx="71" cy="33" r="2.5" fill="#10b981" />
        
        {/* Browser Content Outlines */}
        <rect x="55" y="52" width="65" height="8" rx="2" fill="var(--border-light)" />
        <rect x="55" y="66" width="95" height="24" rx="4" fill="none" stroke="var(--border-light)" strokeWidth="1" />
        <line x1="62" y1="73" x2="100" y2="73" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="62" y1="81" x2="85" y2="81" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="120" y="71" width="22" height="14" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
        
        {/* Ticket Blue badge/circle on Browser corner */}
        <circle cx="155" cy="65" r="10" fill="#3b82f6" stroke="var(--bg-primary)" strokeWidth="1.5" />
        <path d="M152 65l2 2 4-4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      {/* Relaxed Sitting Girl on Beanbag Chair (Right Side) */}
      <g>
        {/* Beanbag Chair */}
        <path 
          d="M145 155c0-10 8-22 24-26 12-3 26-1 36 6 10 7 14 18 15 20 1 2-5 5-10 5H150c-3 0-5-2-5-5z" 
          fill="var(--bg-secondary)" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
        
        {/* Girl: Legs (White Pants) */}
        <path 
          d="M178 128c12-3 28 8 36 15 6 5 13 8 20 7 3-1 6-2 7 1s-2 5-6 6c-8 2-17-2-24-7l-26-17c-3-2-5-5-7-5z" 
          fill="var(--bg-primary)" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        {/* Left Leg/Foot detail */}
        <path 
          d="M182 135c10 5 22 15 28 20 3 2 6 2 9-1s0-4-3-6c-6-4-18-13-26-17" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        {/* Sneakers */}
        <rect x="238" y="130" width="10" height="6" rx="2" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" transform="rotate(10 238 130)" />
        <rect x="216" y="146" width="10" height="6" rx="2" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" transform="rotate(25 216 146)" />

        {/* Girl: Sweater/Torso (Blue Fill, White Outline) */}
        <path 
          d="M167 104c3 0 10 5 12 8 2 3 5 12 1 18-3 5-10 7-14 4s-6-10-5-15c1-5 3-15 6-15z" 
          fill="#3b82f6" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
        
        {/* Girl: Head & Hair */}
        <circle cx="163" cy="91" r="8" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
        <path 
          d="M158 87c-3 2-4 7-3 10 1 2 2 0 3-2 1-3 3-5 5-5 3 0 4 3 3 5s-1 5 1 3c2-2 1-8-2-10-3-2-5-2-7-1z" 
          fill="var(--text-primary)" 
        />
        {/* Ponytail/Bun */}
        <circle cx="154" cy="91" r="3" fill="var(--text-primary)" />

        {/* Girl: Arms holding Tablet/Phone */}
        <path 
          d="M178 116c-3-2-8 3-10 6-2 3-1 7 2 7 3 0 6-4 8-8s1-4 0-5z" 
          fill="var(--bg-primary)" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
        />
        <path 
          d="M176 112l10 5c2 1 2 3 0 4l-8 4" 
          fill="none" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        {/* Device (Smartphone/Tablet) */}
        <rect x="184" y="110" width="8" height="12" rx="1.5" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.2" transform="rotate(15 184 110)" />
      </g>

      {/* Decorative Sparkles & Nodes */}
      <Sparkle cx={210} cy={50} delay={0.2} size={6} />
      <Sparkle cx={235} cy={85} delay={1.2} size={5} color="#ffffff" />
      <Sparkle cx={35} cy={115} delay={0.7} size={4} />
      <circle cx="225" cy="110" r="2" fill="#3b82f6" />
      <circle cx="185" cy="45" r="2.5" fill="#3b82f6" />
      
      {/* Event Link Line (Subtle connecting element) */}
      <path d="M142 80c10-5 20-5 25 2" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
    </svg>
  );
};

export const RegisterYourFaceIllustration: React.FC<IllustrationProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 280 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
    >
      {/* Background Grid Lines (Subtle) */}
      <line x1="20" y1="160" x2="260" y2="160" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Camera Corner Focus Marks */}
      <path d="M125 40h-8v-8M125 120h-8v8M205 40h8v-8M205 120h8v8" stroke="var(--border-light)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Face Profiler Guy on Left (Facing Right) */}
      <g>
        {/* Body/Hoodie (Blue Fill, White Outline) */}
        <path 
          d="M100 160v-18c0-8 6-15 15-18 6-2 15-4 17-10 1-2-1-6-3-6h-6c-10 0-18-6-18-15v-5c0-1 0-2 1-3-4-2-7-6-7-11 0-3 1-5 2-7-5-3-8-9-8-15 0-12 9-22 20-22 8 0 16 5 19 12h2c5 0 9 2 12 5l-8 23c-1 3-3 5-6 6l-6 2c-3 1-5 4-5 7v1c0 8-3 13-9 16l-8 4c-5 2-8 7-8 13v19" 
          fill="#3b82f6" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
        
        {/* Head/Face Outline */}
        <path 
          d="M126 102c4 0 7-3 7-7v-3c2-1 3-3 2-5-1-1-2-1-2-1v-4c4-1 6-5 5-9 0-3-2-5-5-6v-6c0-6-5-10-10-10" 
          fill="var(--bg-primary)" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        
        {/* Hair Outline (Sleek Outline + Dark Fill) */}
        <path 
          d="M110 65c2-10 10-14 18-12 5 2 7 7 6 11-1 3-3 4-6 4-3 0-5-2-5-5 0-3-3-4-5-3-2 1-2 4 0 6 2 2 1 5-2 5-3 0-5-3-6-6z" 
          fill="var(--text-primary)" 
        />
      </g>

      {/* Floating Smartphone Scanner (Center/Right) */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        {/* Phone Body */}
        <rect x="142" y="45" width="55" height="100" rx="10" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.8" />
        
        {/* Phone Screen Notch */}
        <rect x="162" y="45" width="15" height="5" rx="2.5" fill="var(--text-primary)" />
        
        {/* Face Scan Mesh Outline inside Phone */}
        <g stroke="#3b82f6" strokeWidth="1" opacity="0.8">
          <circle cx="170" cy="85" r="16" strokeDasharray="3 3" />
          <path d="M170 65v40M150 85h40" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Face scan nodes */}
          <circle cx="170" cy="77" r="1.5" fill="#3b82f6" />
          <circle cx="160" cy="85" r="1.5" fill="#3b82f6" />
          <circle cx="180" cy="85" r="1.5" fill="#3b82f6" />
          <circle cx="170" cy="93" r="1.5" fill="#3b82f6" />
          {/* Scanning Box Bracket */}
          <path d="M157 73h4v-4M157 97h4v4M183 73h-4v-4M183 97h-4v4" stroke="var(--text-primary)" strokeWidth="1" />
        </g>

        {/* Biometric Scanning Line Moving Up/Down */}
        <motion.line 
          x1="147" y1="60" x2="192" y2="60" 
          stroke="#3b82f6" strokeWidth="2" 
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Security Shield Lock (Bottom Right) */}
      <motion.g
        initial={{ scale: 0.9, opacity: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        transform="translate(205, 115)"
      >
        <path d="M12 2L2 6v6c0 5.5 4.5 10 10 10s10-4.5 10-10V6l-10-4z" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.5" />
        {/* Lock inside shield */}
        <rect x="9" y="11" width="6" height="5" rx="1" fill="#3b82f6" stroke="var(--text-primary)" strokeWidth="1" />
        <path d="M10 11V9a2 2 0 0 1 4 0v2" stroke="var(--text-primary)" strokeWidth="1" fill="none" />
      </motion.g>

      {/* Face-to-Phone Biometric Scan Dotted Lines */}
      <g stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6">
        <path d="M135 80l12-5M135 90l12 2M135 70l12-12" />
      </g>

      {/* Decorative Sparkles & Nodes */}
      <Sparkle cx={80} cy={40} delay={0.5} size={5} />
      <Sparkle cx={230} cy={50} delay={1.5} size={6} />
      <Sparkle cx={70} cy={110} delay={0.9} size={4} color="#ffffff" />
      <circle cx="215" cy="85" r="2.5" fill="#3b82f6" />
      <circle cx="95" cy="75" r="2" fill="#3b82f6" />
    </svg>
  );
};

export const WalkRightInIllustration: React.FC<IllustrationProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 280 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
    >
      {/* Background Grid Lines (Subtle) */}
      <line x1="20" y1="160" x2="260" y2="160" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Background Trees Outlines (Subtle Left/Right) */}
      <g stroke="var(--border-light)" strokeWidth="1" opacity="0.5">
        {/* Tree Left */}
        <path d="M35 160v-20M25 140c5-10 15-10 20 0s-5 15-20 0z" fill="var(--bg-primary)" />
        {/* Tree Right */}
        <path d="M245 160v-25M235 135c5-12 20-12 25 0s-10 18-25 0z" fill="var(--bg-primary)" />
      </g>

      {/* Turnstile Gate Barrier (Right Side) */}
      <g stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Gate Base pillar */}
        <rect x="200" y="80" width="12" height="80" rx="4" fill="var(--bg-secondary)" />
        {/* Scanner Head at Top */}
        <rect x="195" y="65" width="22" height="15" rx="3" fill="#3b82f6" />
        <circle cx="206" cy="72.5" r="3" fill="var(--bg-primary)" stroke="#3b82f6" strokeWidth="1" />
        {/* Turnstile bars/barrier gate */}
        <path d="M200 110H165M200 125H170" />
        <path d="M165 110v35M170 125v20" />
      </g>

      {/* Walking Boy (Center, Left-to-Right) */}
      <g>
        {/* Walking Body: Pants (Blue Fill, White Outline) */}
        <path 
          d="M102 110l-12 25c-2 4-8 1-6-3l10-25h14l8 24c2 6-5 9-8 4l-8-25" 
          fill="#3b82f6" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Sneakers */}
        <rect x="76" y="148" width="12" height="6" rx="2" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" transform="rotate(-15 76 148)" />
        <rect x="110" y="148" width="12" height="6" rx="2" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" transform="rotate(10 110 148)" />

        {/* Jacket/Torso (White Outline) */}
        <path 
          d="M90 78c0-5 5-8 12-8s12 3 12 8v32H90V78z" 
          fill="var(--bg-primary)" 
          stroke="var(--text-primary)" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
        {/* Backpack strap line */}
        <path d="M96 78c2 8 8 16 12 22" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Head & Hair */}
        <circle cx="102" cy="60" r="7" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
        <path 
          d="M98 56c-2 2-3 5-2 7 1 1 2-1 2-2 1-2 2-3 4-3 2 0 3 2 2 4s-1 4 1 2c2-2 1-6-2-8-2-1-4-1-5 0z" 
          fill="var(--text-primary)" 
        />

        {/* Walking Arm */}
        <path d="M104 78l8 12c1 2 4 1 3-1l-6-13" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Biometric Scanning Beam from Scanner Head (Cyan/Blue color) */}
      <motion.g
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Scanning beam radiating lines */}
        <path d="M195 72.5L118 60M195 72.5L120 70" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
        {/* Scanner radar light overlay */}
        <polygon points="195,72.5 110,50 110,80" fill="#3b82f6" fillOpacity="0.1" />
      </motion.g>

      {/* Decorative Sparkles & Nodes */}
      <Sparkle cx={60} cy={80} delay={0.3} size={5} />
      <Sparkle cx={140} cy={40} delay={1.1} size={6} />
      <Sparkle cx={225} cy={45} delay={0.7} size={4} color="#ffffff" />
      <circle cx="150" cy="90" r="2.5" fill="#3b82f6" />
      <circle cx="85" cy="50" r="2" fill="#3b82f6" />
    </svg>
  );
};
