import React, { useEffect, useRef } from 'react';
import './FleetSection.css';

const fleetData = [
  { id: 1, name: 'Boeing 787 Dreamliner', type: 'Long-Haul Carrier', capacity: '242-330 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=1' },
  { id: 2, name: 'Airbus A350 XWB', type: 'Ultra Long-Haul', capacity: '300-350 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=2' },
  { id: 3, name: 'Airbus A320neo', type: 'Short/Medium-Haul', capacity: '150-180 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=3' },
  { id: 4, name: 'Boeing 777X', type: 'Ultra Long-Haul', capacity: '384-426 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=4' },
  { id: 5, name: 'Airbus A380', type: 'Superjumbo', capacity: '525-853 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=5' },
  { id: 6, name: 'Boeing 737 MAX 8', type: 'Short/Medium-Haul', capacity: '162-210 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=6' },
  { id: 7, name: 'Airbus A330neo', type: 'Medium/Long-Haul', capacity: '250-310 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=7' },
  { id: 8, name: 'Boeing 747-8 Intercontinental', type: 'Superjumbo', capacity: '410-467 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=8' },
  { id: 9, name: 'Embraer E195-E2', type: 'Regional Jet', capacity: '120-146 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=9' },
  { id: 10, name: 'Airbus A220-300', type: 'Short/Medium-Haul', capacity: '120-160 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=10' },
  { id: 11, name: 'Bombardier Global 7500', type: 'Ultra-Long Range Jet', capacity: 'Up to 19 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=11' },
  { id: 12, name: 'Gulfstream G700', type: 'Luxury Private Jet', capacity: 'Up to 19 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=12' },
  { id: 13, name: 'Cessna Citation Longitude', type: 'Super Midsize Jet', capacity: 'Up to 12 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=13' },
  { id: 14, name: 'Boeing 767-300ER', type: 'Medium/Long-Haul', capacity: '218-269 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=14' },
  { id: 15, name: 'Airbus A321LR', type: 'Long-Range Narrowbody', capacity: '180-220 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=15' },
  { id: 16, name: 'Concorde (Classic Collection)', type: 'Supersonic Airliner', capacity: '92-128 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=16' },
  { id: 17, name: 'McDonnell Douglas MD-11', type: 'Wide-Body Airliner', capacity: '298-410 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=17' },
  { id: 18, name: 'ATR 72-600', type: 'Regional Turboprop', capacity: '72-78 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=18' },
  { id: 19, name: 'Dash 8 Q400', type: 'Regional Turboprop', capacity: '82-90 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=19' },
  { id: 20, name: 'Lockheed L-1011 TriStar', type: 'Classic Wide-Body', capacity: '256-400 Passengers', img: 'https://loremflickr.com/800/600/airplane,aviation?lock=20' }
];

// Duplicate the array to create a seamless infinite scrolling loop
const seamlessData = [...fleetData, ...fleetData].map((item, index) => ({
  ...item,
  uniqueKey: `seamless-${index}`
}));

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

      <div className="fleet-slider-container">
        <div className="fleet-track">
          {seamlessData.map((aircraft) => (
            <div key={aircraft.uniqueKey} className="fleet-card">
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
      </div>
    </section>
  );
};

export default FleetSection;
