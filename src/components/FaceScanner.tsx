import React, { useRef, useEffect, useState } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

interface FaceScannerProps {
  onCapture: (faceToken: string, faceImage: string) => void;
  status: 'idle' | 'scanning' | 'success' | 'failed';
  setStatus: (status: 'idle' | 'scanning' | 'success' | 'failed') => void;
  pinkLaser?: boolean;
}

export const FaceScanner: React.FC<FaceScannerProps> = ({
  onCapture,
  status,
  setStatus,
  pinkLaser = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [hasCamera, setHasCamera] = useState<boolean | null>(null);
  const [scanStep, setScanStep] = useState<string>('Align face to begin');
  const [confidence, setConfidence] = useState<number>(0);
  const [scanProgress, setScanProgress] = useState<number>(0);

  // Simulated keypoints positions for the face mesh mapping overlay
  const mockKeypoints = [
    { top: '35%', left: '42%' }, { top: '35%', left: '58%' }, // Eyes
    { top: '48%', left: '50%' }, // Nose tip
    { top: '43%', left: '50%' }, // Nose bridge
    { top: '60%', left: '40%' }, { top: '62%', left: '50%' }, { top: '60%', left: '60%' }, // Mouth
    { top: '25%', left: '50%' }, // Forehead
    { top: '32%', left: '33%' }, { top: '45%', left: '30%' }, { top: '58%', left: '33%' }, // Left jaw
    { top: '32%', left: '67%' }, { top: '45%', left: '70%' }, { top: '58%', left: '67%' }, // Right jaw
    { top: '70%', left: '50%' } // Chin
  ];

  // Start webcam feed
  const startCamera = async () => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setHasCamera(true);
      }
    } catch (err) {
      console.warn("Webcam access failed or denied: ", err);
      setHasCamera(false);
    }
  };

  // Stop webcam feed
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  // Handle the biometric scan simulation
  useEffect(() => {
    if (status !== 'scanning') return;

    setScanProgress(0);
    setConfidence(0);
    setScanStep('Initializing biometric sensor...');

    const duration = 3000; // 3 seconds scan
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      setScanProgress(Math.round(progress));

      // Simulate confidence value scaling
      const baseConfidence = 90 + Math.random() * 9;
      setConfidence(parseFloat(baseConfidence.toFixed(1)));

      // Update descriptive text steps
      if (progress < 25) {
        setScanStep('Detecting face geometry...');
      } else if (progress < 55) {
        setScanStep('Mapping 68 facial coordinate keypoints...');
      } else if (progress < 85) {
        setScanStep('Generating unique biometric token hash...');
      } else {
        setScanStep('Authenticating signature...');
      }

      if (progress >= 100) {
        clearInterval(interval);
        
        // Generate a mock capture screenshot (from canvas if camera works, or standard avatar code)
        let capturedImage = '';
        if (hasCamera && videoRef.current) {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth || 640;
            canvas.height = videoRef.current.videoHeight || 480;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
              capturedImage = canvas.toDataURL('image/jpeg');
            }
          } catch (e) {
            console.error("Failed to capture frame: ", e);
          }
        }
        
        // Finalize state
        setStatus('success');
        setScanStep('Biometric capture verified');
        onCapture(`whooppe_biometric_id_${Math.random().toString(36).substring(2, 11)}`, capturedImage);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [status]);

  const handleStartScan = () => {
    if (status === 'success') return;
    setStatus('scanning');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      {/* Scanner Visual Frame */}
      <div className={`scan-container ${status}`}>
        {/* Live Camera View */}
        {hasCamera !== false ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scaleX(-1)' // Mirror effect
            }}
          />
        ) : (
          /* Mock Visual Loop if webcam is absent/denied */
          <div 
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, #1e1b4b 0%, #030712 100%)',
              color: 'var(--text-muted)',
              position: 'relative'
            }}
          >
            {/* Visual head silhouette */}
            <svg viewBox="0 0 100 100" width="140" height="140" style={{ fill: 'none', stroke: 'rgba(255,255,255,0.06)', strokeWidth: '1.5' }}>
              <path d="M50 15 A18 18 0 0 1 50 51 A32 32 0 0 1 82 85 H18 A32 32 0 0 1 50 51 Z" />
              <ellipse cx="50" cy="33" rx="14" ry="18" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            </svg>
            
            <div style={{ zIndex: 10, position: 'absolute', bottom: '24px', textAlign: 'center', padding: '0 16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                [WEBCAM OFFLINE - RUNNING DIAGNOSTIC SIMULATOR]
              </span>
            </div>
          </div>
        )}

        {/* Mesh Scanning Laser Line */}
        {status === 'scanning' && (
          <div className={`scan-laser-line ${pinkLaser ? 'pink' : ''}`} />
        )}

        {/* Holographic grid scan overlay */}
        {(status === 'scanning' || status === 'success') && (
          <div className="scan-mesh-overlay" />
        )}

        {/* Face Silhouette Box Boundary */}
        <div className="scan-target-box" />

        {/* Simulated Facial coordinate nodes */}
        {mockKeypoints.map((pt, idx) => (
          <div
            key={idx}
            className="scan-dot"
            style={{
              top: pt.top,
              left: pt.left,
              animationDelay: `${idx * 0.1}s`,
              backgroundColor: status === 'success' ? '#10b981' : pinkLaser ? 'var(--accent-secondary)' : 'var(--accent-cyber)',
              boxShadow: status === 'success' 
                ? '0 0 6px #10b981' 
                : pinkLaser 
                  ? '0 0 6px var(--accent-secondary)' 
                  : '0 0 6px var(--accent-cyber)'
            }}
          />
        ))}

        {/* Corner alignment bracket markings */}
        <div style={{ position: 'absolute', top: 16, left: 16, width: 16, height: 16, borderTop: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', top: 16, right: 16, width: 16, height: 16, borderTop: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', bottom: 16, left: 16, width: 16, height: 16, borderBottom: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)' }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: 16, height: 16, borderBottom: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)' }} />
      </div>

      {/* Control Console Readout panel */}
      <div 
        className="glass" 
        style={{ 
          padding: '16px', 
          fontSize: '13px', 
          fontFamily: 'var(--font-mono)', 
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px' }}>
          <span style={{ color: 'var(--text-muted)' }}>BIOMETRIC SCANNER STATUS</span>
          <span style={{ 
            color: status === 'success' ? '#10b981' : status === 'scanning' ? 'var(--accent-cyber)' : status === 'failed' ? '#ef4444' : '#fff',
            fontWeight: 700
          }}>
            {status.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Feedback:</span>
            <span style={{ color: '#fff' }}>{scanStep}</span>
          </div>

          {status === 'scanning' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Scan Progress:</span>
                <span style={{ color: 'var(--accent-cyber)' }}>{scanProgress}%</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${scanProgress}%`, height: '100%', background: 'var(--accent-cyber)', transition: 'width 0.05s linear' }} />
              </div>
            </>
          )}

          {status === 'success' && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
              <span>Match Confidence:</span>
              <span>{confidence}% (HIGHLY SECURE)</span>
            </div>
          )}
        </div>

        {status === 'idle' && (
          <button
            onClick={handleStartScan}
            style={{
              marginTop: '6px',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid var(--accent-cyber)',
              background: 'rgba(6, 182, 212, 0.1)',
              color: 'var(--accent-cyber)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
            }}
          >
            <Camera size={16} />
            Initialize Face Detection
          </button>
        )}

        {(status === 'success' || status === 'failed') && (
          <button
            onClick={() => {
              setStatus('idle');
              setScanProgress(0);
              setScanStep('Align face to begin');
            }}
            style={{
              marginTop: '6px',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255, 255, 255, 0.02)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            }}
          >
            <RefreshCw size={14} />
            Recapture Biometrics
          </button>
        )}
      </div>
    </div>
  );
};
