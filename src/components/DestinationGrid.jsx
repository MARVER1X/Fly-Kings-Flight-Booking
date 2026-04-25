import React, { useEffect, useRef } from 'react';
import './DestinationGrid.css';

const destinations = [
  { id: 1, city: 'London', code: 'LHR', price: '$450', img: 'https://images.unsplash.com/photo-1513635269975-5969336cd8ce?auto=format&fit=crop&q=80&w=800' },
  { id: 2, city: 'Tokyo', code: 'NRT', price: '$890', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800' },
  { id: 3, city: 'New York', code: 'JFK', price: '$320', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800' },
  { id: 4, city: 'Dubai', code: 'DXB', price: '$650', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
];

const DestinationGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations" className="destinations-section reveal" ref={sectionRef}>
      <div className="section-header">
        <h2>Popular Destinations</h2>
        <p>Explore our top-rated flight routes across the globe with exclusive pricing.</p>
      </div>

      <div className="grid-container">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <div className="card-img-wrapper">
              <img src={dest.img} alt={dest.city} loading="lazy" />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>{dest.city}</h3>
                <span className="flight-code">{dest.code}</span>
              </div>
              <div className="card-footer">
                <span className="price">From {dest.price}</span>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationGrid;
