import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Languages, Ticket } from 'lucide-react';
import type { EventData } from '../data/mock_events';
import './DownloadAppModal.css';

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path d="M5,3.23c-0.27,0.27-0.42,0.73-0.42,1.35v14.84c0,0.62,0.15,1.08,0.42,1.35L5.07,20.8L13.8,12.07v-0.15L5.07,3.2L5,3.23z" fill="#00C0FF"/>
    <path d="M16.71,14.98l-2.91-2.91v-0.15l2.91-2.91l0.07,0.04l3.44,1.96c0.98,0.56,0.98,1.47,0,2.03l-3.44,1.96L16.71,14.98z" fill="#FFC107"/>
    <path d="M5.07,20.8L13.8,12.07l2.91,2.91L6.2,20.89C5.58,21.25,5.18,21.13,5.07,20.8z" fill="#FF3B30"/>
    <path d="M5.07,3.2L6.2,3.11l10.51,5.98l-2.91,2.91L5.07,3.2C5.18,2.87,5.58,2.75,6.2,3.11z" fill="#4CD964"/>
  </svg>
);

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventData | null;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="download-app-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="download-app-modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="download-modal-title">Voltage Festival 2026</h2>
            
            <div className="download-modal-body">
              <div className="download-modal-image-container">
                <img src={event.image} alt="Voltage Festival 2026" className="download-modal-image" />
              </div>
              
              <div className="download-modal-details">
                <div className="download-modal-info-list">
                  <div className="download-modal-info-item">
                    <Calendar size={20} />
                    <span>01 June 2026</span>
                  </div>
                  <div className="download-modal-info-item">
                    <Clock size={20} />
                    <span>7:00 PM</span>
                  </div>
                  <div className="download-modal-info-item">
                    <MapPin size={20} />
                    <span>Delhi NCR, Noida</span>
                  </div>
                  <div className="download-modal-info-item">
                    <Languages size={20} />
                    <span>English, Hindi</span>
                  </div>
                  <div className="download-modal-info-item">
                    <Ticket size={20} />
                    <span>₹499 Onwards</span>
                  </div>
                </div>

                <div className="download-modal-divider"></div>

                <div className="download-modal-action-section">
                  <p className="download-modal-action-text">Download the App To Book The Ticket</p>
                  <div className="download-modal-badges">
                    <a href="#playstore" className="app-store-badge-dark" onClick={(e) => { e.preventDefault(); alert("Redirecting to Google Play Store..."); }}>
                      <GooglePlayIcon />
                      <div className="badge-text-col">
                        <span className="badge-small">Get It On</span>
                        <span className="badge-large">Google Play</span>
                      </div>
                    </a>
                    <a href="#appstore" className="app-store-badge-dark" onClick={(e) => { e.preventDefault(); alert("Redirecting to Apple App Store..."); }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" width="24" height="24" style={{ borderRadius: '4px' }} />
                      <div className="badge-text-col">
                        <span className="badge-small">Get It On</span>
                        <span className="badge-large">App Store</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
