import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Unlock, 
  Lock, 
  UserX, 
  Server
} from 'lucide-react';
import { mockEvents } from '../data/mock_events';
import { GlassCard } from '../components/GlassCard';
import { CustomButton } from '../components/CustomButton';
import { FaceScanner } from '../components/FaceScanner';

interface RegisteredTicket {
  eventId: string;
  eventTitle: string;
  ticketId: string;
  faceToken: string;
  faceImage: string;
  quantity: number;
  ticketType: 'General' | 'VIP';
}

interface GateSimulatorViewProps {
  registeredTickets: RegisteredTicket[];
  onViewChange: (view: string) => void;
}

export const GateSimulatorView: React.FC<GateSimulatorViewProps> = ({ registeredTickets, onViewChange }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(mockEvents[0].id);
  const [gateStatus, setGateStatus] = useState<'standby' | 'scanning' | 'granted' | 'denied'>('standby');
  const [scannerStatus, setScannerStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
  const [matchedTicket, setMatchedTicket] = useState<RegisteredTicket | null>(null);

  // Auto-select event if user has a ticket
  useEffect(() => {
    if (registeredTickets.length > 0) {
      setSelectedEventId(registeredTickets[0].eventId);
    }
  }, [registeredTickets]);

  const handleCapture = (_faceToken: string) => {
    // Search for a ticket matching the selected event
    const ticket = registeredTickets.find(tkt => tkt.eventId === selectedEventId);
    
    setTimeout(() => {
      if (ticket) {
        setScannerStatus('success');
        setGateStatus('granted');
        setMatchedTicket(ticket);
      } else {
        setScannerStatus('failed');
        setGateStatus('denied');
        setMatchedTicket(null);
      }
    }, 1500); // Simulate matching delay
  };

  const handleReset = () => {
    setGateStatus('standby');
    setScannerStatus('idle');
    setMatchedTicket(null);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto 40px', textAlign: 'left' }}>
      
      {/* View Header */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
          Biometric Gate Entry Terminal
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Simulate walking up to the event gate. Our system will check your face coordinates against the event ticketing ledger.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Left Column: Scanner Camera Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              SELECT ENTRANCE GATE
            </label>
            <select
              value={selectedEventId}
              onChange={(e) => {
                setSelectedEventId(e.target.value);
                handleReset();
              }}
              disabled={gateStatus === 'scanning'}
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '12px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontFamily: 'var(--font-sans)',
                width: '100%',
                outline: 'none',
                cursor: gateStatus === 'scanning' ? 'not-allowed' : 'pointer'
              }}
            >
              {mockEvents.map(evt => (
                <option key={evt.id} value={evt.id} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                  {evt.title} Gate
                </option>
              ))}
            </select>
          </div>

          <FaceScanner 
            onCapture={handleCapture}
            status={scannerStatus}
            setStatus={(status) => {
              setScannerStatus(status);
              if (status === 'scanning') {
                setGateStatus('scanning');
              } else if (status === 'idle') {
                handleReset();
              }
            }}
            pinkLaser={matchedTicket?.ticketType === 'VIP'}
          />
        </div>

        {/* Right Column: Gate Controller Status Output */}
        <GlassCard 
          style={{ 
            height: '100%', 
            minHeight: '440px',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            background: gateStatus === 'granted' 
              ? 'rgba(16, 185, 129, 0.02)' 
              : gateStatus === 'denied' 
                ? 'rgba(239, 68, 68, 0.02)' 
                : 'var(--glass-bg)',
            borderColor: gateStatus === 'granted' 
              ? 'rgba(16, 185, 129, 0.2)' 
              : gateStatus === 'denied' 
                ? 'rgba(239, 68, 68, 0.2)' 
                : 'var(--glass-border)'
          }}
        >
          {/* STANDBY STATE */}
          {gateStatus === 'standby' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'var(--glass-bg)', 
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)'
                }}
              >
                <Lock size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>GATE ARMED</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '220px' }}>
                  Please click "Initialize Face Detection" to begin authentication scan.
                </p>
              </div>
            </div>
          )}

          {/* SCANNING / MATCHING STATE */}
          {gateStatus === 'scanning' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{ position: 'relative' }}>
                {/* Rotating scanner ring animation */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    border: '2px dashed var(--accent-cyber)',
                    position: 'absolute',
                    top: -5,
                    left: -5
                  }}
                />
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'rgba(6, 182, 212, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyber)'
                  }}
                >
                  <Server size={32} />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>MATCHING LEDGERS</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '220px' }}>
                  Querying Whooppe biometric token database...
                </p>
              </div>
            </div>
          )}

          {/* GRANTED STATE */}
          {gateStatus === 'granted' && matchedTicket && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                }}
              >
                <Unlock size={32} />
              </motion.div>
              <div>
                <h3 style={{ fontSize: '22px', color: '#10b981', fontWeight: 800, marginBottom: '6px' }}>
                  ACCESS GRANTED
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  GATE TURNSTILE UNLOCKED
                </span>
                
                {/* Visual matching user ticket info */}
                <div 
                  style={{ 
                    marginTop: '24px', 
                    padding: '16px', 
                    borderRadius: '12px', 
                    background: 'var(--glass-bg)', 
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '13px',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Event:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{matchedTicket.eventTitle}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Ticket ID:</span>
                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{matchedTicket.ticketId}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Pass Class:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{matchedTicket.ticketType}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Guests:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{matchedTicket.quantity} Pax</strong>
                  </div>
                </div>
              </div>

              <CustomButton variant="secondary" onClick={handleReset}>
                Reset Gate Terminal
              </CustomButton>
            </div>
          )}

          {/* DENIED STATE */}
          {gateStatus === 'denied' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  border: '2px solid #ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ef4444',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
                }}
              >
                <UserX size={32} />
              </motion.div>
              <div>
                <h3 style={{ fontSize: '22px', color: '#ef4444', fontWeight: 800, marginBottom: '6px' }}>
                  ACCESS DENIED
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  NO VALID ACCREDITATION FOUND
                </span>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '240px', marginInline: 'auto' }}>
                  There is no registered ticket associated with your facial scan for this event.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center' }}>
                <CustomButton variant="secondary" onClick={handleReset}>
                  Try Again
                </CustomButton>
                <CustomButton variant="primary" onClick={() => onViewChange('home')}>
                  Book Ticket
                </CustomButton>
              </div>
            </div>
          )}
        </GlassCard>

      </div>
    </div>
  );
};
