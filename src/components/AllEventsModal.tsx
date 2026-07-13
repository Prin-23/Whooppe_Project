import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { mockEvents } from '../data/mock_events';
import type { EventData } from '../data/mock_events';
import './AllEventsModal.css';

interface AllEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: EventData) => void;
}

export const AllEventsModal: React.FC<AllEventsModalProps> = ({ isOpen, onClose, onSelectEvent }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Extract unique filter options from mock events
  const categories = ['All', ...Array.from(new Set(mockEvents.map(e => e.category)))];
  const dates = ['All', ...Array.from(new Set(mockEvents.map(e => e.date)))];
  const locations = ['All', ...Array.from(new Set(mockEvents.map(e => e.location.split(', ')[1] || e.location)))];

  // For the sake of the visual layout resembling the user's uploaded image with 8 cards,
  // we will duplicate some mock events if the list is short.
  const displayEvents = mockEvents.length < 8 
    ? [...mockEvents, ...mockEvents.slice(0, 8 - mockEvents.length)] 
    : mockEvents;

  const filteredEvents = useMemo(() => {
    return displayEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            event.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      const matchesDate = selectedDate === 'All' || event.date === selectedDate;
      const eventCity = event.location.split(', ')[1] || event.location;
      const matchesLocation = selectedLocation === 'All' || eventCity === selectedLocation;
      
      return matchesSearch && matchesCategory && matchesDate && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedDate, selectedLocation, displayEvents]);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="all-events-modal-overlay"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
        >
          <div className="all-events-modal-container">
            <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>

            <header className="all-events-header">
              <h1 className="all-events-title">ALL EVENTS</h1>
              <p className="all-events-subtitle">Discover amazing live events and book your tickets instantly</p>
            </header>

            <div className="all-events-filter-bar">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search by event, venue or city" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="filter-dropdowns">
                <select 
                  className="filter-select" 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">Categories</option>
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select 
                  className="filter-select" 
                  value={selectedDate} 
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option value="All">All Dates</option>
                  {dates.filter(d => d !== 'All').map(date => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>

                <select 
                  className="filter-select" 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="All">All Locations</option>
                  {locations.filter(l => l !== 'All').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="all-events-grid">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((evt, idx) => (
                  <div 
                    key={`${evt.id}-${idx}`} 
                    className="screenshot-event-card" 
                    onClick={() => {
                      onClose();
                      onSelectEvent(evt);
                    }}
                  >
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
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                  No events found matching your filters.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
