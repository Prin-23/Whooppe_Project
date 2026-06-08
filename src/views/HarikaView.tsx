import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, ShieldAlert, Award, Compass, Heart } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { CustomButton } from '../components/CustomButton';

export const HarikaView: React.FC = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [likes, setLikes] = useState(148);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto 40px', textAlign: 'left' }}>
      
      {/* Page Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <span 
          style={{ 
            fontSize: '12px', 
            fontWeight: 800, 
            letterSpacing: '0.15em', 
            color: 'var(--accent-secondary)', 
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px'
          }}
        >
          <Sparkles size={14} />
          PREMIUM MEMBERSHIP
        </span>
        <h2 style={{ fontSize: '44px', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px' }}>
          Harika VIP Experience
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', marginInline: 'auto' }}>
          Welcome to the elite tier of biometric ticketing. Unlock access speed, high-fidelity lounges, and seamless entries.
        </p>
      </div>

      {/* Grid of VIP Benefits */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        <GlassCard 
          delay={0.1}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            background: 'linear-gradient(185deg, rgba(236, 72, 153, 0.05) 0%, rgba(0, 0, 0, 0) 100%)' 
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
            <Trophy size={22} />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>Priority Lanes</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Access dedicated Harika biometric scanner gates at event entrances with zero wait times.
          </p>
        </GlassCard>

        <GlassCard 
          delay={0.2}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            background: 'linear-gradient(185deg, rgba(139, 92, 246, 0.05) 0%, rgba(0, 0, 0, 0) 100%)' 
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
            <Award size={22} />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>VIP Lounge Passes</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Check into exclusive festival lounges using just your face scan credential. No wristbands required.
          </p>
        </GlassCard>

        <GlassCard 
          delay={0.3}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            background: 'linear-gradient(185deg, rgba(6, 182, 212, 0.05) 0%, rgba(0, 0, 0, 0) 100%)' 
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyber)' }}>
            <Compass size={22} />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>NFT Biometric Drops</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Receive collectible digital assets and artist access privileges sent directly to your facial register identity.
          </p>
        </GlassCard>
      </div>

      {/* Interactive Member accreditation Badge Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
        
        {/* Interactive Badge representation */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '420px',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, #1b183a 0%, #0c081e 50%, #03010b 100%)',
              border: '2px solid rgba(236, 72, 153, 0.25)',
              boxShadow: '0 20px 50px rgba(236, 72, 153, 0.15), 0 0 30px rgba(139, 92, 246, 0.1)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Glowing gold ring background visual */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '-20%', 
                left: '-20%', 
                width: '140%', 
                height: '140%', 
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} 
            />

            {/* Badge Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ec4899', letterSpacing: '0.1em' }}>HARIKA SOCIETY</span>
              <Sparkles size={18} style={{ color: '#f59e0b' }} />
            </div>

            {/* Hologram Scanner Area */}
            <div 
              style={{ 
                width: '160px', 
                height: '160px', 
                borderRadius: '50%', 
                border: '1.5px dashed rgba(236, 72, 153, 0.4)',
                marginInline: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 10
              }}
            >
              <svg viewBox="0 0 100 100" width="90" height="90" style={{ fill: 'none', stroke: isJoined ? '#10b981' : '#ec4899', strokeWidth: '1.5', transition: 'stroke 0.5s ease' }}>
                <path d="M50 22 A12 12 0 0 1 50 46 A24 24 0 0 1 74 72 H26 A24 24 0 0 1 50 46 Z" />
                <circle cx="50" cy="34" r="5" fill={isJoined ? 'rgba(16, 185, 129, 0.15)' : 'rgba(236, 72, 153, 0.15)'} />
              </svg>
              {/* Pulse Scanner lasers */}
              <div 
                style={{ 
                  position: 'absolute', 
                  width: '90%', 
                  height: '2px', 
                  background: isJoined ? '#10b981' : '#ec4899',
                  boxShadow: isJoined ? '0 0 8px #10b981' : '0 0 8px #ec4899',
                  animation: 'scan-laser 3s infinite linear',
                  pointerEvents: 'none'
                }} 
              />
            </div>

            {/* Member Card Details */}
            <div style={{ zIndex: 10, textAlign: 'center' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                {isJoined ? 'Accredited Member' : 'Anonymous Guest'}
              </h4>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {isJoined ? 'HASH_ID // 7F8E-HARIKA' : 'STATUS // UNREGISTERED'}
              </span>
            </div>

            {/* Likes count indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
              <button 
                onClick={handleLike}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: hasLiked ? '#ec4899' : 'var(--text-muted)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                <Heart size={14} fill={hasLiked ? '#ec4899' : 'none'} />
                <span>{likes} Members Liked</span>
              </button>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>V1.2</span>
            </div>
          </motion.div>
        </div>

        {/* Member Action Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 700 }}>Exclusive Lounge Enrollment</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Accredit your face signature to the Harika priority listing to simulate a VIP gate credential. 
            Once compiled, test this credential on the Gate Entry Simulator.
          </p>

          <div>
            <CustomButton 
              variant={isJoined ? "secondary" : "cyber"} 
              onClick={() => {
                setIsJoined(!isJoined);
              }}
            >
              {isJoined ? "Revoke VIP Clearance" : "Accredit VIP Face Scanner"}
            </CustomButton>
          </div>

          <div style={{ background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.15)', padding: '16px', borderRadius: '12px', display: 'flex', gap: '12px' }}>
            <ShieldAlert size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              <strong>Accreditation Token:</strong> Enrolling into Harika VIP logs a simulated global session cookie enabling bypass clearance codes inside the simulator.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
