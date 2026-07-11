import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { CustomButton } from './CustomButton';
interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [activeTab, setActiveTab] = useState(currentView);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentView !== 'home') {
      setActiveTab(currentView);
      return;
    }

    const handleScroll = () => {
      const eventsEl = document.getElementById('upcoming-events');
      const contactEl = document.getElementById('app-footer');
      
      if (contactEl && contactEl.getBoundingClientRect().top <= 300) {
        setActiveTab('contact');
      } else if (eventsEl && eventsEl.getBoundingClientRect().top <= 300) {
        setActiveTab('events');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollClose, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, [isMobileMenuOpen]);

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
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px', marginLeft: 'auto' }}>
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeTab === 'home' ? 'nav-link-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onViewChange('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#events" 
                className={`nav-link ${activeTab === 'events' ? 'nav-link-active' : ''}`}
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
                className={`nav-link ${activeTab === 'harika' ? 'nav-link-active' : ''}`}
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
                href="#blog" 
                className={`nav-link ${activeTab === 'blog' ? 'nav-link-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onViewChange('blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeTab === 'contact' ? 'nav-link-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onViewChange('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="desktop-nav-btn" style={{ display: 'flex', alignItems: 'center' }}>
          <CustomButton 
            variant="black" 
            onClick={() => {
              alert("Whooppe App Download initiated! Available for iOS & Android.");
            }}
          >
            GET THE APP
          </CustomButton>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Menu"
        >
          <div className="mobile-menu-glow"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
            <path d="M4 12H20" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 6H20" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 18H20" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-dropdown-menu"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ul className="mobile-nav-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onViewChange('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
              </li>
              <li>
                <a href="#events" onClick={(e) => { e.preventDefault(); onViewChange('home'); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Events</a>
              </li>
              <li>
                <a href="#harika" onClick={(e) => { e.preventDefault(); onViewChange('harika'); setIsMobileMenuOpen(false); }}>Harika</a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => { e.preventDefault(); onViewChange('blog'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Blog</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onViewChange('contact'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Contact Us</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
