import React from 'react';
import { Logo } from './Logo';
import { CustomButton } from './CustomButton';
import { Monitor, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, theme, toggleTheme }) => {
  return (
    <header className="navbar glass">
      <a 
        href="#" 
        className="logo-container" 
        onClick={(e) => {
          e.preventDefault();
          onViewChange('home');
        }}
      >
        <Logo />
      </a>
      
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${currentView === 'home' ? 'nav-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onViewChange('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#events" 
              className={`nav-link ${currentView === 'events' ? 'nav-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onViewChange('home');
                // Allow time to render home view before scrolling
                setTimeout(() => {
                  document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Events
            </a>
          </li>
          <li>
            <a 
              href="#harika" 
              className={`nav-link ${currentView === 'harika' ? 'nav-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onViewChange('harika');
              }}
            >
              Harika
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${currentView === 'contact' ? 'nav-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('app-footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a 
              href="#simulator" 
              className={`nav-link ${currentView === 'simulator' ? 'nav-link-active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              onClick={(e) => {
                e.preventDefault();
                onViewChange('simulator');
              }}
            >
              <Monitor size={14} />
              Gate Simulator
            </a>
          </li>
        </ul>
      </nav>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            outline: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--glass-bg-hover)';
            e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'none';
          }}
          title={theme === 'dark' ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} style={{ color: '#f59e0b' }} />
              ) : (
                <Moon size={18} style={{ color: '#8b5cf6' }} />
              )}
            </motion.div>
          </AnimatePresence>
        </button>

        <CustomButton 
          variant="primary" 
          onClick={() => {
            alert("Whooppe App Download initiated! Available for iOS & Android.");
          }}
        >
          GET THE APP
        </CustomButton>
      </div>
    </header>
  );
};
