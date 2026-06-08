import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowUpRight
} from 'lucide-react';

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
    <path d="M5,3.23c-0.27,0.27-0.42,0.73-0.42,1.35v14.84c0,0.62,0.15,1.08,0.42,1.35L5.07,20.8L13.8,12.07v-0.15L5.07,3.2L5,3.23z" fill="#00C0FF"/>
    <path d="M16.71,14.98l-2.91-2.91v-0.15l2.91-2.91l0.07,0.04l3.44,1.96c0.98,0.56,0.98,1.47,0,2.03l-3.44,1.96L16.71,14.98z" fill="#FFC107"/>
    <path d="M5.07,20.8L13.8,12.07l2.91,2.91L6.2,20.89C5.58,21.25,5.18,21.13,5.07,20.8z" fill="#FF3B30"/>
    <path d="M5.07,3.2L6.2,3.11l10.51,5.98l-2.91,2.91L5.07,3.2C5.18,2.87,5.58,2.75,6.2,3.11z" fill="#4CD964"/>
  </svg>
);

const AppleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
  </svg>
);
import howItWorks1 from '../assets/how-it-works-1.jpg';
import howItWorks2 from '../assets/how-it-works-2.jpg';
import howItWorks3 from '../assets/how-it-works-3.jpg';
import experienceEventsGif from '../assets/experience-events.gif';
import partnerDashboardImg from '../assets/partner-dashboard.jpg';
import { mockEvents } from '../data/mock_events';
import type { EventData } from '../data/mock_events';
import { GlassCard } from '../components/GlassCard';
import { CustomButton } from '../components/CustomButton';
import './HomeView.css';

interface HomeViewProps {
  onSelectEvent: (event: EventData) => void;
  onViewChange: (view: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectEvent, onViewChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* 1. Hero Landing Section */}
      <section className="hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-text-block"
        >
          <span className="hero-subtitle-main">NO QUEUE. NO PAPER. NO FRICTION.</span>
          <h1 className="hero-title-main">
            Skip The Queue <br />
            <span>Walk Right In</span>
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '540px' }}>
            Experience events completely ticketless. Whooppe enables smart facial recognition 
            check-ins, verifying tickets at the gate in under a split-second.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <CustomButton 
              variant="primary" 
              icon={<ArrowRight size={16} />} 
              onClick={() => {
                document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Event Now
            </CustomButton>
            <CustomButton 
              variant="secondary" 
              onClick={() => onViewChange('simulator')}
            >
              Test Gate Scanner
            </CustomButton>
          </div>
        </motion.div>

        {/* Smartphone Simulator */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="phone-graphic-container"
        >
          <div className="phone-shell">
            <div className="phone-notch" />
            <div className="phone-screen-glow" />
            
            <div className="phone-face-scanner">
              <div className="phone-scan-line" />
              {/* Dynamic facial mesh overlay outline */}
              <svg 
                viewBox="0 0 100 100" 
                style={{ 
                  width: '65%', 
                  height: '65%', 
                  stroke: 'var(--accent-cyber)', 
                  strokeWidth: '1.5',
                  fill: 'none',
                  opacity: 0.7 
                }}
              >
                <path d="M50 15 A15 15 0 0 1 50 45 A28 28 0 0 1 78 80 H22 A28 28 0 0 1 50 45 Z" />
                {/* Connecting scan nodes */}
                <line x1="50" y1="15" x2="50" y2="45" strokeDasharray="3 3" />
                <line x1="35" y1="30" x2="65" y2="30" strokeDasharray="3 3" />
                <circle cx="50" cy="30" r="3" fill="var(--accent-cyber)" />
                <circle cx="35" cy="30" r="2" fill="var(--accent-cyber)" />
                <circle cx="65" cy="30" r="2" fill="var(--accent-cyber)" />
                <circle cx="50" cy="45" r="2" fill="var(--accent-cyber)" />
                <circle cx="50" cy="70" r="2" fill="var(--accent-cyber)" />
              </svg>
            </div>

            <div style={{ textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--accent-cyber)', fontWeight: 700 }}>
                WHOOPPE ID ACTIVE
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
                Biometric Pass Locked
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Face registration matches ticket tokens
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. How It Works Section */}
      <section className="how-it-works-section">
        <div style={{ textAlign: 'center', width: '100%' }}>
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="how-grid">
          <motion.div 
            className="how-step step-violet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="how-step-number">01</span>
            <div className="how-illustration-container">
              <img src={howItWorks1} alt="Book Your Event" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">
              Book Your Event
              <span className="title-underline" />
            </h3>
            <p className="how-step-desc">Browse events and purchase tickets through the Whooppe app.</p>
          </motion.div>

          <motion.div 
            className="how-step step-pink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="how-step-number">02</span>
            <div className="how-illustration-container">
              <img src={howItWorks2} alt="Register Your Face" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">
              Register Your Face
              <span className="title-underline" />
            </h3>
            <p className="how-step-desc">One-time biometric enrollment via the app.</p>
          </motion.div>

          <motion.div 
            className="how-step step-cyber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="how-step-number">03</span>
            <div className="how-illustration-container">
              <img src={howItWorks3} alt="Walk Right In" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">
              Walk Right In
              <span className="title-underline" />
            </h3>
            <p className="how-step-desc">One-time biometric enrollment via the app.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. Upcoming Events Section */}
      <section className="events-section" id="upcoming-events">
        <div className="events-header-row">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <p>Facial recognition entries enabled for all listed event partners.</p>
          </div>
          <CustomButton 
            variant="secondary" 
            onClick={() => {
              alert("Filters and complete events catalog list coming soon!");
            }}
          >
            View All
          </CustomButton>
        </div>

        <div className="events-carousel">
          {mockEvents.map((evt, idx) => (
            <GlassCard 
              key={evt.id} 
              className="event-card" 
              delay={idx * 0.1}
              onClick={() => onSelectEvent(evt)}
            >
              {/* Event Card Header Graphic */}
              <div className="event-card-banner">
                <img 
                  src={evt.image} 
                  alt={evt.title} 
                  className="event-card-image"
                />
                <div className="event-card-overlay" />
                <span className="event-card-category" style={{ position: 'relative', zIndex: 2 }}>{evt.category}</span>
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: 600, 
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    width: 'fit-content',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {evt.tagline}
                </span>
              </div>
              
              {/* Card Meta Content */}
              <div className="event-card-info">
                <div>
                  <h3 className="event-card-title">{evt.title}</h3>
                  <div className="event-card-meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={13} style={{ color: evt.accentColor }} />
                      <span>{evt.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={13} />
                      <span>{evt.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={13} />
                      <span style={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '220px'
                      }}>{evt.location}</span>
                    </div>
                  </div>
                </div>

                <div className="event-card-footer">
                  <div className="event-card-price">
                    {evt.price} <span>onwards</span>
                  </div>
                  <CustomButton 
                    variant="cyber" 
                    icon={<ArrowUpRight size={14} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEvent(evt);
                    }}
                  >
                    Book
                  </CustomButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. Experience Events ticketless - App Promo Banner */}
      <section>
        <div 
          className="app-promo-banner"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--banner-overlay-start, rgba(99, 102, 241, 0.7)), var(--banner-overlay-end, rgba(168, 85, 247, 0.5))), url(${experienceEventsGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          } as React.CSSProperties}
        >
          <div className="app-promo-content-left">
            <h2 className="app-promo-title-center">Experience Events, Ticketless</h2>
            <p className="app-promo-subtitle-center">
              India's Smart Facial Recognition Event Ticketing Platform
            </p>
            <p className="app-promo-desc-center">
              Download the Whooppe app and enter any event with just your face.
            </p>
          </div>
          
          <div className="app-promo-right-container">
            {/* Interactive QR Code Card */}
            <div 
              className="interactive-qr-card"
              onClick={() => alert("Upload QR ticket feature coming soon!")}
            >
              <div className="qr-scanner-frame">
                <div className="scan-corner top-left" />
                <div className="scan-corner top-right" />
                <div className="scan-corner bottom-left" />
                <div className="scan-corner bottom-right" />
                
                <div className="qr-scan-line" />
                
                <div className="qr-inner-content">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" className="qr-upload-icon">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  <span className="qr-action-text">Add QR</span>
                </div>
              </div>
            </div>

            {/* Badges Stack */}
            <div className="app-promo-badges-right">
              <a href="#playstore" className="app-store-badge" onClick={(e) => { e.stopPropagation(); e.preventDefault(); alert("Redirecting to Google Play Store..."); }}>
                <GooglePlayIcon />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', opacity: 0.7 }}>Get It On</span>
                  <span style={{ fontSize: '13px', fontWeight: 700 }}>Google Play</span>
                </div>
              </a>
              <a href="#appstore" className="app-store-badge" onClick={(e) => { e.stopPropagation(); e.preventDefault(); alert("Redirecting to Apple App Store..."); }}>
                <AppleLogo />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', opacity: 0.7 }}>get it on</span>
                  <span style={{ fontSize: '13px', fontWeight: 700 }}>App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Event Partner Section */}
      <section className="partner-section">
        <div className="partner-text-block">
          <span className="partner-badge">FOR EVENT PARTNER</span>
          <h2 className="partner-title">
            Focus On The Event <br />
            We'll <span className="partner-title-blue">Handle The Entry</span>
          </h2>
          <div>
            <CustomButton 
              variant="primary" 
              onClick={() => {
                alert("Partner registration portal coming soon!");
              }}
              className="partner-btn"
            >
              List your Show
            </CustomButton>
          </div>
        </div>

        {/* Dashboard Graphic */}
        <div className="partner-image-container">
          <img 
            src={partnerDashboardImg} 
            alt="Event Partner Dashboard Mockup" 
            className="partner-dashboard-image" 
          />
        </div>
      </section>

      {/* Footer is handled globally in App.tsx layout */}
    </div>
  );
};
