import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { BookingView } from './views/BookingView';

import { HarikaView } from './views/HarikaView';
import { ContactView } from './views/ContactView';
import { BlogView } from './views/BlogView';
import type { EventData } from './data/mock_events';
import './App.css';
import logoImg from './assets/logo.png';




function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  const handleSelectEvent = (event: EventData) => {
    setSelectedEvent(event);
    setCurrentView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="app-container" style={{ backgroundColor: currentView === 'contact' ? '#000000' : 'transparent', transition: 'background-color 0.3s ease' }}>
      {/* Fixed aesthetic backglow */}
      <div className="glow-bg" />

      {/* Shared Header Navigation */}
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />

      {/* Main Responsive Routing Container */}
      <main className="main-content">
        {currentView === 'home' && (
          <HomeView 
            onSelectEvent={handleSelectEvent} 
            onViewChange={setCurrentView} 
          />
        )}
        
        {currentView === 'booking' && selectedEvent && (
          <BookingView 
            event={selectedEvent} 
            onCancel={() => setCurrentView('home')} 
            onViewChange={setCurrentView}
          />
        )}



        {currentView === 'harika' && (
          <HarikaView />
        )}

        {currentView === 'blog' && (
          <BlogView />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Shared Footer Segment matching reference image layout */}
      <footer id="app-footer" className="shared-footer">
        <div className="footer-top-row">
          {/* Logo Left */}
          <div className="footer-logo-container">
            <img src={logoImg} alt="Logo" className="footer-logo" />
          </div>

          {/* QR Code Right */}
          <div className="footer-qr-container">
            <div className="footer-qr-box">
              <img src="/qr-code.png" alt="QR Code" className="footer-qr-img" />
            </div>
            <span className="footer-qr-text">Scan To Get the App</span>
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-links-row">
          <a href="#terms" onClick={(e) => e.preventDefault()} className="footer-link-item">Terms & Conditions</a>
          <a href="#list" onClick={(e) => e.preventDefault()} className="footer-link-item">List all Events</a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="footer-link-item">Privacy Policy</a>
          <a href="#contact" onClick={(e) => e.preventDefault()} className="footer-link-item">Contact Us</a>
          <a href="#about" onClick={(e) => e.preventDefault()} className="footer-link-item">About Us</a>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            2026 Copy Right @Thrillathon Innovation private limited
          </div>
          
          <div className="footer-social-container">
            <img 
              src="/social-icons.png" 
              alt="Social Media Links" 
              className="footer-social-img" 
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
