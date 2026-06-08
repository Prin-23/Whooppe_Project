import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { BookingView } from './views/BookingView';
import { GateSimulatorView } from './views/GateSimulatorView';
import { HarikaView } from './views/HarikaView';
import { Logo } from './components/Logo';
import type { EventData } from './data/mock_events';
import './App.css';

// Custom inline SVG icons to prevent casing export discrepancies
const MessageSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

interface RegisteredTicket {
  eventId: string;
  eventTitle: string;
  ticketId: string;
  faceToken: string;
  faceImage: string;
  quantity: number;
  ticketType: 'General' | 'VIP';
}

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [registeredTickets, setRegisteredTickets] = useState<RegisteredTicket[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSelectEvent = (event: EventData) => {
    setSelectedEvent(event);
    setCurrentView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (ticket: RegisteredTicket) => {
    // Add new ticket to registry
    setRegisteredTickets((prev) => [ticket, ...prev]);
  };

  return (
    <div className="app-container">
      {/* Fixed aesthetic backglow */}
      <div className="glow-bg" />

      {/* Shared Header Navigation */}
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        theme={theme}
        toggleTheme={toggleTheme}
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
            onBookingComplete={handleBookingComplete}
            onViewChange={setCurrentView}
          />
        )}

        {currentView === 'simulator' && (
          <GateSimulatorView 
            registeredTickets={registeredTickets} 
            onViewChange={setCurrentView} 
          />
        )}

        {currentView === 'harika' && (
          <HarikaView />
        )}
      </main>

      {/* Shared Footer Segment matching reference image layout */}
      <footer 
        id="app-footer"
        style={{
          marginTop: 'auto',
          padding: '60px 24px 30px',
          borderTop: '1px solid var(--border-light)',
          background: 'var(--footer-bg)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '30px'
          }}
        >
          {/* Branding Left */}
          <Logo size={42} />

          {/* Links Center-Right */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '48px', 
              flexWrap: 'wrap',
              fontSize: '14px' 
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '11px', letterSpacing: '0.05em' }}>NAVIGATE</span>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }} className="footer-link">Home</a>
              <a href="#events" onClick={(e) => { e.preventDefault(); setCurrentView('home'); setTimeout(() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="footer-link">Events</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('harika'); }} className="footer-link">Harika Club</a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '11px', letterSpacing: '0.05em' }}>LEGAL</span>
              <a href="#terms" onClick={(e) => e.preventDefault()} className="footer-link">Terms & Conditions</a>
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="footer-link">Privacy Policy</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '11px', letterSpacing: '0.05em' }}>PARTNERS</span>
              <a href="#list" onClick={(e) => e.preventDefault()} className="footer-link">List all Events</a>
              <a href="#contact" onClick={(e) => e.preventDefault()} className="footer-link">Contact Us</a>
              <a href="#about" onClick={(e) => e.preventDefault()} className="footer-link">About Us</a>
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright & Socials row */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            paddingTop: '24px',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            2026 Copy Right @Thrillathon Innovation private limited
          </span>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="#whatsapp" 
              onClick={(e) => e.preventDefault()} 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <MessageSquareIcon />
            </a>
            <a 
              href="#instagram" 
              onClick={(e) => e.preventDefault()} 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <InstagramIcon />
            </a>
            <a 
              href="#facebook" 
              onClick={(e) => e.preventDefault()} 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FacebookIcon />
            </a>
            <a 
              href="#twitter" 
              onClick={(e) => e.preventDefault()} 
              style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {/* Representing X/Twitter */}
              <GlobeIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
