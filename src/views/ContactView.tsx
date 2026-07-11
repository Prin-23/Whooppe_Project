import React, { useEffect, useState } from 'react';
import './ContactView.css';

export const ContactView: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does facial recognition ticketing work?",
      a: "Our facial recognition technology allows you to enter events without physical tickets. Simply purchase tickets through our app, register your face, and walk into the venue. Our secure system verifies your identity in seconds."
    },
    {
      q: "Is my facial data secure?",
      a: "Absolutely. We use bank-level encryption and never share your biometric data with third parties. Your facial data is only used for entry verification and is deleted after the event."
    },
    {
      q: "How can I list my event on Whooppe?",
      a: "Event organizers can partner with us by filling out our contact form or emailing us at partnerships@woopy.com. Our team will guide you through the onboarding process and help you leverage our technology."
    },
    {
      q: "What if facial recognition doesn't work?",
      a: "We have backup verification methods including QR codes in the app and manual verification with ID. Our system has a 99.9% success rate, but we're always prepared with alternatives."
    },
    {
      q: "Can I get a refund if I can't attend?",
      a: "Refund policies vary by event. Most events offer refunds up to 48 hours before the event date. Check the specific event page for detailed refund information."
    },
    {
      q: "Do you charge service fees?",
      a: "We charge a small service fee to cover technology costs and platform maintenance. This fee is clearly displayed during checkout before you complete your purchase."
    }
  ];

  return (
    <div className="contact-page-container">
      <div className="contact-view">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Let's start a conversation.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-card">
            <h2>HOST YOUR EVENT</h2>
            <p className="subtitle">From planning to entry, manage everything in one place.</p>

            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted!'); }}>
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input type="email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>PHONE NUMBER *</label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>ORGANIZATION NAME *</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>CITY *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>STATE *</label>
                  <select required>
                    <option value=""></option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>PARTNERSHIP TYPE *</label>
                  <select required>
                    <option value="">Select a partnership type</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="vendor">Vendor</option>
                    <option value="promoter">Promoter</option>
                  </select>
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>EVENT TYPE *</label>
                  <select required>
                    <option value=""></option>
                    <option value="concert">Concert</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>EXPERIENCE LEVEL *</label>
                  <select required>
                    <option value=""></option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>MESSAGE *</label>
                  <textarea required rows={4}></textarea>
                </div>
              </div>

              <div className="submit-row">
                <button type="submit" className="submit-btn">SUBMIT INQUIRY</button>
              </div>
            </form>
          </div>

          <div className="contact-info-card">
            <div className="info-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>OUR OFFICE</h3>
                <p>1-A-23 Mahaveer Nagar 3rd,<br/>Kota, Rajasthan 324005<br/>Bharat</p>
              </div>
            </div>

            <div className="divider" />

            <div className="info-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>EMAIL US</h3>
                <a href="mailto:support.whooppe@thrillathon.co.in">support.whooppe@thrillathon.co.in</a>
              </div>
            </div>

            <div className="divider" />

            <div className="info-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.14v-3.49c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>CALL US</h3>
                <p>+91 88242-23395<br/>Mon-Sat, 9am-9pm IST</p>
              </div>
            </div>

            <div className="divider" />

            <div className="info-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>WHATSAPP US</h3>
                <p>+91 88242-23395<br/>Available 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-header">
          <h2>FREQUENTLY ASKED QUESTION</h2>
          <p>Quick answers to common questions</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${openFaq === index ? 'open' : ''}`} 
              key={faq.q}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="faq-question-row">
                <span className="faq-text">{faq.q}</span>
                <span className="faq-plus">{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="download-section">
          <h2>Ready to Experience Events Differently?</h2>
          <p>Download the Whooppe app and discover a new way to attend<br/>live events</p>
          
          <div className="download-buttons">
            <button className="download-btn btn-google">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor" />
              </svg>
              <div className="btn-text">
                <span className="btn-small">Get It On</span>
                <span className="btn-large">Google Play</span>
              </div>
            </button>
            
            <button className="download-btn btn-apple">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13.03 4.2C13.69 3.39 14.13 2.3 14 1.2c-1.01.04-2.13.67-2.82 1.49-.6.73-1.13 1.83-1 2.9 1.13.09 2.18-.56 2.85-1.39Z" fill="currentColor" />
              </svg>
              <div className="btn-text">
                <span className="btn-small">Get It On</span>
                <span className="btn-large">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
