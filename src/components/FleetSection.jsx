import React, { useEffect, useRef } from 'react';
import './FleetSection.css';

const fleetData = [
  {
    id: 1,
    name: 'Boeing 787 Dreamliner',
    type: 'Long-Haul Carrier',
    capacity: '242-330 Passengers',
    img: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Airbus A350 XWB',
    type: 'Ultra Long-Haul Carrier',
    capacity: '300-350 Passengers',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Airbus A320neo',
    type: 'Short/Medium-Haul',
    capacity: '150-180 Passengers',
    img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800'
  }
];

const FleetSection = () => {
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
    <section id="fleet" className="fleet-section reveal" ref={sectionRef}>
      <div className="section-header">
        <h2>Our Modern Fleet</h2>
        <p>Experience unparalleled comfort and safety on our fuel-efficient, state-of-the-art aircraft.</p>
      </div>

      <div className="fleet-grid">
        {fleetData.map((aircraft) => (
          <div key={aircraft.id} className="fleet-card">
            <div className="fleet-img-wrapper">
              <img src={aircraft.img} alt={aircraft.name} loading="lazy" />
              <div className="fleet-overlay"></div>
            </div>
            <div className="fleet-content">
              <h3>{aircraft.name}</h3>
              <div className="fleet-details">
                <span className="badge-tech">{aircraft.type}</span>
                <span className="badge-capacity">{aircraft.capacity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetSection;
