import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CustomButton } from './CustomButton';
interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [activeTab, setActiveTab] = useState(currentView);

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
        <nav>
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
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomButton 
            variant="black" 
            onClick={() => {
              alert("Whooppe App Download initiated! Available for iOS & Android.");
            }}
          >
            GET THE APP
          </CustomButton>
        </div>
      </div>
    </header>
  );
};
