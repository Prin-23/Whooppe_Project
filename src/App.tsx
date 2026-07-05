import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { BookingView } from './views/BookingView';

import { HarikaView } from './views/HarikaView';
import { ContactView } from './views/ContactView';
import type { EventData } from './data/mock_events';
import './App.css';
import logoImg from './assets/logo.png';
import logoTextImg from './assets/logo-text.png';



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

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Shared Footer Segment matching reference image layout */}
      <footer 
        id="app-footer"
        style={{
          marginTop: 'auto',
          backgroundColor: '#e3f0fc',
          color: '#111',
          padding: '40px 60px 20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          {/* Logo Left */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
            <img src={logoImg} alt="Logo" style={{ height: '120px' }} />
          </div>

          {/* QR Code Right */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ background: 'white', padding: '8px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/qr-code.png" alt="QR Code" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: '14px', marginTop: '12px', color: '#111' }}>Scan To Get the App</span>
          </div>
        </div>

        {/* Middle Links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '500', marginBottom: '30px', padding: '0 40px', color: '#111' }}>
          <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#list" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>List all Events</a>
          <a href="#contact" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</a>
          <a href="#about" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
        </div>

        {/* Separator Line */}
        <div style={{ height: '1px', backgroundColor: '#111', marginBottom: '20px', width: '100%' }}></div>

        {/* Bottom Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '0 40px' }}>
          <div style={{ fontSize: '13px', color: '#111' }}>
            2026 Copy Right @Thrillathon Innovation private limited
          </div>
          
          <div style={{ display: 'flex' }}>
            <img 
              src="/social-icons.png" 
              alt="Social Media Links" 
              style={{ height: '40px', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
