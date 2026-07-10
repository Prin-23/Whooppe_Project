import React, { useEffect } from 'react';
import './BlogView.css';

const TOP_ATTRACTIONS = [
  {
    id: 1,
    title: 'Seven Wonders Park',
    description: 'A beautiful park featuring replicas of 7 wonders and musical fountain show.',
    image: '/seven-wonders.png',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Garadia Mahadev Temple',
    description: 'Perched high above the Chambal River, Garadia Mahadev is a paradise for photographers, nature lovers, and anyone seeking unforgettable panoramic views.',
    image: '/garadia-mahadev.png',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Chambal Garden',
    description: 'A family-friendly park featuring miniature replicas of world-famous landmarks like the Taj Mahal, Eiffel Tower, and Leaning Tower of Pisa.',
    image: '/chambal-garden.png',
    rating: 4.4
  },
  {
    id: 4,
    title: 'Jagmandir Palace',
    description: 'Located in the middle of Kishore Sagar Lake, this 18th-century red sandstone palace is accessible by boat and is beautiful at sunset.',
    image: '/jagmandir-palace.png',
    rating: 4.6
  },
  {
    id: 5,
    title: 'Chambal Riverfront',
    description: 'A stunning riverside attraction along the Chambal River, featuring beautifully lit ghats, elegant pacilions, and iconic landmarks-perfect for a relaxing evening walk.',
    image: '/chambal-riverfront.png',
    rating: 4.7
  },
  {
    id: 6,
    title: 'City Palace (Garh Palace)',
    description: 'A grand Rajput palace complex showcasing Kota\'s royal heritage, with a museum featuring miniature paintings, royal weapons, and historic artifacts.',
    image: '/city-palace.png',
    rating: 4.5
  }
];

const WATER_PARKS = [
  {
    id: 1,
    title: 'Aquagreens Waterpark',
    description: 'Dive into a day of thrilling water slides, refreshing pools, and family fun.',
    image: '/waterpark-1.png',
    rating: 4.2
  },
  {
    id: 2,
    title: 'Blue Kingdom Water Park',
    description: 'Splash into Rajasthan\'s biggest water adventure with thrilling slides, wave pools, and exciting rides.',
    image: '/waterpark-2.png',
    rating: 4.3
  },
  {
    id: 3,
    title: 'RiverDale WaterPark',
    description: 'Enjoy thrilling water rides, scenic riverfront views, and endless family entertainment in one destination.',
    image: '/waterpark-3.png',
    rating: 4.1
  }
];

const INFO_CARDS = [
  { iconSrc: '/icon-calendar.png', title: 'Best Time to Visit', desc: 'March to June' },
  { iconSrc: '/icon-shirt.png', title: 'What to Carry', desc: 'Swimwear, Towel, Sunscreen' },
  { iconSrc: '/icon-scan.png', title: 'Skip the Queue', desc: 'Book tickets on Whooppe & enter using face recognition' },
  { iconSrc: '/icon-pin.png', title: 'How to Reach', desc: 'Well connected by road and rail from major cities' }
];

export const BlogView: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h1>Places to Visit in Kota</h1>
          <p>
            Discover the charm of Kota through its iconic landmarks, peaceful gardens, 
            historic forts, and hidden local gems. Whether you're planning a weekend 
            getaway or exploring the city's rich culture, this guide will help you uncover 
            the best places for a memorable experience starting around every corner.
          </p>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="blog-section">
        <h2 className="section-title">Explore Kota's Top Attractions</h2>
        <div className="blog-grid">
          {TOP_ATTRACTIONS.map((attraction) => (
            <div key={attraction.id} className="blog-card">
              <div className="blog-card-image">
                <img src={attraction.image} alt={attraction.title} />
              </div>
              <div className="blog-card-content">
                <h3>{attraction.title}</h3>
                <p>{attraction.description}</p>
                <div className="blog-card-rating">
                  {attraction.rating} <span className="star-icon">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Water Parks Section */}
      <section className="blog-section bg-light">
        <h2 className="section-title">Water Parks In <span className="highlight-text">Kota</span></h2>
        <p className="section-subtitle">
          Beat the heat and make a splash at Kota's most exciting water parks. 
          Perfect for family fun, thrilling slides, and unforgettable memories.
        </p>
        <div className="blog-grid">
          {WATER_PARKS.map((park) => (
            <div key={park.id} className="blog-card">
              <div className="blog-card-image">
                <img src={park.image} alt={park.title} />
              </div>
              <div className="blog-card-content">
                <h3>{park.title}</h3>
                <p>{park.description}</p>
                <div className="blog-card-rating">
                  {park.rating} <span className="star-icon">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="blog-info-section">
        <div className="info-cards-container">
          {INFO_CARDS.map((card, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">
                <img src={card.iconSrc} alt={card.title} style={{ width: 32, height: 32, objectFit: 'contain' }} />
              </div>
              <div className="info-text">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Ticketing Banner */}
      <section className="blog-app-banner-section">
        <div className="app-banner">
          <div className="app-banner-content">
            <h2>Smart Ticketing with Whooppe</h2>
            <p>Book tickets, skip queues and enjoy seamless entry using facial recognition</p>
            <div className="app-buttons">
              <button className="store-btn play-store-btn">
                <img src="/google-play.png" alt="Get it on Google Play" className="google-play-img" />
              </button>
              <button className="store-btn app-store-btn">
                <img src="/app-store.png" alt="Download on the App Store" className="app-store-img" />
              </button>
            </div>
          </div>
          <div className="app-banner-image-container">
            <img src="/phone-mockup.png" alt="Whooppe App Face Scan UI" className="phone-mockup-img" />
          </div>
        </div>
      </section>
    </div>
  );
};
