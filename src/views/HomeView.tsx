import React from 'react';
import { motion } from 'framer-motion';


const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path d="M5,3.23c-0.27,0.27-0.42,0.73-0.42,1.35v14.84c0,0.62,0.15,1.08,0.42,1.35L5.07,20.8L13.8,12.07v-0.15L5.07,3.2L5,3.23z" fill="#00C0FF"/>
    <path d="M16.71,14.98l-2.91-2.91v-0.15l2.91-2.91l0.07,0.04l3.44,1.96c0.98,0.56,0.98,1.47,0,2.03l-3.44,1.96L16.71,14.98z" fill="#FFC107"/>
    <path d="M5.07,20.8L13.8,12.07l2.91,2.91L6.2,20.89C5.58,21.25,5.18,21.13,5.07,20.8z" fill="#FF3B30"/>
    <path d="M5.07,3.2L6.2,3.11l10.51,5.98l-2.91,2.91L5.07,3.2C5.18,2.87,5.58,2.75,6.2,3.11z" fill="#4CD964"/>
  </svg>
);

import howItWorks1 from '../assets/how-it-works-1.jpg';
import platformText from '../assets/platform-text.png';
import howItWorks2 from '../assets/how-it-works-2.jpg';
import howItWorks3 from '../assets/how-it-works-3.jpg';

import partnerDashboardImg from '../assets/partner-dashboard.jpg';
import { mockEvents } from '../data/mock_events';
import type { EventData } from '../data/mock_events';

import { CustomButton } from '../components/CustomButton';
import './HomeView.css';

interface HomeViewProps {
  onSelectEvent: (event: EventData) => void;
  onViewChange: (view: string) => void;
  onOpenAllEvents: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectEvent, onOpenAllEvents }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* 1. Hero Landing Section */}
      <section className="hero-container">
        {/* Blue Spot in the left bottom corner */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-250px',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%)',
            filter: 'blur(50px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-text-block"
        >
          <h1 className="hero-title-main">
            Skip The Queue <br />
            <span>Walk Right In</span>
          </h1>
          <span className="hero-subtitle-main">NO QUEUE. NO PAPER. NO FRICTION</span>
          
          <div className="hero-btn-container">
            <button 
              className="hero-get-app-btn"
              onClick={() => {
                alert("Get the app modal or redirect");
              }}
            >
              GET THE APP
            </button>
          </div>
        </motion.div>

        {/* Smartphone Simulator Outline */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="phone-graphic-container"
        >
          <div style={{
            width: '240px',
            height: '480px',
            border: '10px solid #1a1a1a',
            borderRadius: '40px',
            position: 'relative',
            background: '#ffffff',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            {/* Dynamic Island / Notch */}
            <div style={{
              width: '75px',
              height: '20px',
              backgroundColor: '#1a1a1a',
              borderRadius: '10px',
              marginTop: '10px'
            }} />
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
            className="how-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="how-illustration-container">
              <img src={howItWorks1} alt="Book Your Event" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">Book Your Event</h3>
            <p className="how-step-desc">Browse events and purchase<br/>tickets through the Whooppe app.</p>
          </motion.div>

          <motion.div 
            className="how-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="how-illustration-container">
              <img src={howItWorks2} alt="Register Your Face" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">Register Your Face</h3>
            <p className="how-step-desc">One-time biometric enrollment<br/>via the app..</p>
          </motion.div>

          <motion.div 
            className="how-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="how-illustration-container">
              <img src={howItWorks3} alt="Walk Right In" className="how-illustration-image" />
            </div>
            <h3 className="how-step-title">Walk Right In</h3>
            <p className="how-step-desc">Scan the face at the venue and you<br/>are in. No Ticket. No hassel</p>
          </motion.div>
        </div>
      </section>

      {/* 3. Upcoming Events Section */}
      <section className="screenshot-events-section" id="upcoming-events">
        <div className="screenshot-events-header">
          <h2 className="screenshot-events-title">UPCOMING EVENTS</h2>
          <div className="screenshot-events-view-all">
            <CustomButton 
              variant="black" 
              onClick={() => onOpenAllEvents()}
            >
              View All
            </CustomButton>
          </div>
        </div>

        <div className="screenshot-events-slider-container">
          <div className="screenshot-events-track" onTouchStart={() => {}}>
            {[...mockEvents.slice(0, 5), ...mockEvents.slice(0, 5)].map((evt, idx) => (
              <div key={`${evt.id}-${idx}`} className="screenshot-event-card" onClick={() => onSelectEvent(evt)}>
                <div className="screenshot-event-image-wrapper">
                  <img src={evt.image} alt={evt.title} className="screenshot-event-image" />
                  <div className="screenshot-event-rating">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span className="rating-star">★</span>
                      <span>{idx % 2 === 0 ? '8.4' : '8.2'}</span>
                    </div>
                    <div className="rating-votes">{idx % 2 === 0 ? '12.3K' : '10.6K'} votes</div>
                  </div>
                </div>
                <div className="screenshot-event-info">
                  <h3 className="screenshot-event-title">Voltage<br/>Festival 2026</h3>
                  <p className="screenshot-event-date">7:00 PM, 01 June 2026</p>
                  <p className="screenshot-event-place" style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>From: Delhi NCR</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience Events ticketless - App Promo Banner */}
      <section style={{ marginBottom: '-80px' }}>
        <div className="app-promo-banner">
          <div className="app-promo-content-left">
            <h2 className="app-promo-title-center">Experience Events, Ticketless</h2>
            <img 
              src={platformText} 
              alt="India's Smart Facial Recognition Event Ticketing Platform" 
              style={{ width: '100%', maxWidth: '500px', filter: 'invert(1) brightness(2)', opacity: 0.9 }} 
            />
            <p className="app-promo-desc-center">
              Download the Whooppe app and enter any event with just your face.
            </p>
          </div>
          
          <div className="app-promo-right-container">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" width="24" height="24" style={{ borderRadius: '4px' }} />
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
            Focus On The Event. <br />
            We'll <span className="partner-title-blue">Handle The Entry.</span>
          </h2>
          <p className="partner-desc">Reduce queues, streamline verification , and deliver a smoother experience from arrival to access.</p>
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
