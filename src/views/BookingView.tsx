import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Ticket, 
  Video, 
  Calendar, 
  MapPin, 
  ShieldCheck,
  QrCode,
  Sparkles
} from 'lucide-react';
import type { EventData } from '../data/mock_events';
import { GlassCard } from '../components/GlassCard';
import { CustomButton } from '../components/CustomButton';
import { FaceScanner } from '../components/FaceScanner';

interface BookingViewProps {
  event: EventData;
  onCancel: () => void;

  onViewChange: (view: string) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ event, onCancel, onViewChange }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [ticketType, setTicketType] = useState<'General' | 'VIP'>('General');
  const [scannerStatus, setScannerStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
  const [capturedFaceToken, setCapturedFaceToken] = useState<string>('');
  const [capturedFaceImage, setCapturedFaceImage] = useState<string>('');

  const getPriceMultiplier = () => {
    return ticketType === 'VIP' ? 2 : 1;
  };

  const getPrice = () => {
    return event.numericPrice * getPriceMultiplier() * quantity;
  };

  const handleCapture = (faceToken: string, faceImage: string) => {
    setCapturedFaceToken(faceToken);
    setCapturedFaceImage(faceImage);
  };

  const handleProceedToPayment = () => {
    setStep(2);
  };

  const handleFinishBooking = () => {
    if (!capturedFaceToken) {
      alert("Please capture your face scan first to generate a biometric ticket.");
      return;
    }
    

    
    setStep(3);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto 40px', textAlign: 'left' }}>
      
      {/* Header back navigation */}
      {step < 3 && (
        <button 
          onClick={onCancel}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: '24px',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ChevronLeft size={16} />
          Back to Events
        </button>
      )}

      {/* Booking Header */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
          {step === 3 ? 'Booking Complete!' : `Book Ticket: ${event.title}`}
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          {step === 1 && 'Configure your admission passes.'}
          {step === 2 && 'Register your biometric identity to enable ticketless face entry.'}
          {step === 3 && 'Show your face at the event gate to walk right in.'}
        </p>
      </div>

      {/* Progress Steps Indicators */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        <div style={{ flexGrow: 1, height: '4px', background: step >= 1 ? 'var(--accent-primary)' : 'var(--border-light)', borderRadius: '2px' }} />
        <div style={{ flexGrow: 1, height: '4px', background: step >= 2 ? 'var(--accent-secondary)' : 'var(--border-light)', borderRadius: '2px' }} />
        <div style={{ flexGrow: 1, height: '4px', background: step >= 3 ? '#10b981' : 'var(--border-light)', borderRadius: '2px' }} />
      </div>

      {/* STEP 1: Pass Configuration */}
      {step === 1 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
          {/* Main selection forms */}
          <GlassCard style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Ticket type selector */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                SELECT ADMISSION CLASS
              </label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div 
                  onClick={() => setTicketType('General')}
                  style={{
                    flex: 1,
                    padding: '20px',
                    borderRadius: '12px',
                    border: '2px solid',
                    borderColor: ticketType === 'General' ? 'var(--accent-primary)' : 'var(--border-light)',
                    background: ticketType === 'General' ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <Ticket size={24} style={{ color: 'var(--accent-primary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)', marginBottom: '4px' }}>General Admission</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Standard event gate access.</div>
                </div>

                <div 
                  onClick={() => setTicketType('VIP')}
                  style={{
                    flex: 1,
                    padding: '20px',
                    borderRadius: '12px',
                    border: '2px solid',
                    borderColor: ticketType === 'VIP' ? 'var(--accent-secondary)' : 'var(--border-light)',
                    background: ticketType === 'VIP' ? 'rgba(236, 72, 153, 0.05)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <Sparkles size={24} style={{ color: 'var(--accent-secondary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)', marginBottom: '4px' }}>VIP Lounge Pass</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Priority biometric gate access + lounge zones.</div>
                </div>
              </div>
            </div>

            {/* Quantity select */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                TICKET QUANTITY
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--glass-bg)',
                    color: 'var(--text-primary)',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: '20px', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button 
                  disabled={quantity >= 5}
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--glass-bg)',
                    color: 'var(--text-primary)',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: quantity >= 5 ? 'not-allowed' : 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  +
                </button>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>(Max 5 tickets per person)</span>
              </div>
            </div>

            <CustomButton variant="primary" onClick={handleProceedToPayment}>
              Proceed to Biometric Registration
            </CustomButton>
          </GlassCard>

          {/* Pricing summary sidebar card */}
          <GlassCard style={{ background: event.gradient, display: 'flex', flexDirection: 'column', gap: '20px', border: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                {event.category}
              </span>
              <h3 style={{ fontSize: '22px', color: '#fff', lineHeight: 1.2 }}>{event.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calendar size={14} style={{ color: 'rgba(255,255,255,0.6)' }} />
                <span>{event.date} at {event.time}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={14} style={{ color: 'rgba(255,255,255,0.6)' }} />
                <span>{event.location}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                <span>Base ({ticketType})</span>
                <span>{event.price} x {quantity}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 800, color: '#fff', paddingTop: '8px' }}>
                <span>Total Cost</span>
                <span>₹{getPrice().toLocaleString('en-IN')}</span>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* STEP 2: Biometric Face Scan */}
      {step === 2 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Face Scanner Component Integration */}
          <div>
            <FaceScanner 
              onCapture={handleCapture}
              status={scannerStatus}
              setStatus={setScannerStatus}
              pinkLaser={ticketType === 'VIP'}
            />
          </div>

          {/* Scanner instructions */}
          <GlassCard style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Video size={18} style={{ color: 'var(--accent-cyber)' }} />
              Facial Enrollment Guide
            </h3>
            
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>Provide Camera Permissions:</strong> When prompted, grant secure browser access to your device camera.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>Position your Face:</strong> Align your face centered within the circular scan targets.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>Maintain Neutral Expression:</strong> Ensure clear lighting, look straight ahead, and hold still for 3 seconds during scanning.
              </li>
            </ol>

            <div style={{ background: 'rgba(6, 182, 212, 0.03)', border: '1px solid rgba(6, 182, 212, 0.15)', padding: '16px', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-cyber)', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Biometric Data Privacy:</strong> 
                Your facial vector maps are encrypted locally. No media feeds are sent or stored on our external servers.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <CustomButton variant="secondary" onClick={() => setStep(1)} disabled={scannerStatus === 'scanning'}>
                Back to Selection
              </CustomButton>
              <CustomButton 
                variant="primary" 
                onClick={handleFinishBooking}
                disabled={scannerStatus !== 'success'}
              >
                Accredit & Book Ticket
              </CustomButton>
            </div>
          </GlassCard>
        </div>
      )}

      {/* STEP 3: Ticket Pass Generated */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          {/* Biometric Accredit Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px 28px', 
              borderRadius: '100px', 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              fontWeight: 700,
              fontSize: '15px'
            }}
          >
            <ShieldCheck size={18} />
            BIOMETRIC SECURE TICKET ACTIVE
          </motion.div>

          {/* Premium Glass Ticket Pass Layout */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              width: '100%',
              maxWidth: '480px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'linear-gradient(185deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Ticket Header */}
            <div style={{ padding: '24px', background: event.gradient, position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              {/* Overlay elements */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)' }} />
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
                  WHOOPPE BIOMETRIC PASS
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginTop: '4px', lineHeight: 1.1 }}>{event.title}</h3>
              </div>
              <div 
                style={{ 
                  padding: '6px 12px', 
                  borderRadius: '100px', 
                  background: 'rgba(255,255,255,0.15)', 
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#fff'
                }}
              >
                {ticketType.toUpperCase()}
              </div>
            </div>

            {/* Ticket Body: Biometric Photo & Details */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', alignItems: 'center' }}>
                {/* Captured Face Photo Frame */}
                <div 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    background: '#09081e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    position: 'relative'
                  }}
                >
                  {capturedFaceImage ? (
                    <img 
                      src={capturedFaceImage} 
                      alt="Captured Face" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} 
                    />
                  ) : (
                    /* Hologram representation if webcam fallback is active */
                    <svg viewBox="0 0 100 100" width="80" height="80" style={{ fill: 'none', stroke: 'rgba(16, 185, 129, 0.4)', strokeWidth: '1.5' }}>
                      <path d="M50 20 A15 15 0 0 1 50 50 A26 26 0 0 1 76 80 H24 A26 26 0 0 1 50 50 Z" />
                      <circle cx="50" cy="35" r="8" fill="rgba(16, 185, 129, 0.1)" />
                    </svg>
                  )}
                  {/* Subtle target box overlay */}
                  <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1px solid #10b981', borderLeft: '1px solid #10b981' }} />
                  <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1px solid #10b981', borderRight: '1px solid #10b981' }} />
                  <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1px solid #10b981', borderLeft: '1px solid #10b981' }} />
                  <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1px solid #10b981', borderRight: '1px solid #10b981' }} />
                </div>

                {/* Ticket key metadata */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', fontWeight: 600 }}>TICKET ACCREDITATION ID</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fff', fontSize: '14px' }}>
                      {`TKT_${capturedFaceToken.split('_').pop()?.toUpperCase()}`}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px', fontWeight: 600 }}>ATTENDEE METRIC</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{quantity} Pass{quantity > 1 ? 'es' : ''} ({ticketType} Admission)</span>
                  </div>
                </div>
              </div>

              {/* Event logistics details */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '16px', 
                  background: 'rgba(255,255,255,0.01)', 
                  border: '1px solid rgba(255,255,255,0.03)', 
                  padding: '16px', 
                  borderRadius: '12px',
                  fontSize: '13px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={14} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={14} style={{ color: 'var(--accent-secondary)' }} />
                  <span 
                    style={{ 
                      color: 'var(--text-secondary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '160px'
                    }}
                  >
                    {event.location}
                  </span>
                </div>
              </div>

              {/* QR and Scan Instructions */}
              <div style={{ borderTop: '1px dashed rgba(255,255,255,0.08)', paddingTop: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <QrCode size={40} style={{ color: 'var(--text-muted)' }} />
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  This ticket has been bound to your face. At the gate, simply walk up to the Whooppe entry terminal camera. 
                  No physical or mobile ticket scans required.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
            <CustomButton variant="secondary" onClick={onCancel}>
              Browse Events
            </CustomButton>
          </div>
        </div>
      )}

    </div>
  );
};
