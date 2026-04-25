import React, { useEffect, useRef } from 'react';
import './DealsSection.css';

const DealsSection = () => {
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
    <section id="deals" className="deals-section reveal" ref={sectionRef}>
      <div className="deals-container">
        <div className="deals-content">
          <div className="badge">Limited Time</div>
          <h2>Exclusive Neon Deals</h2>
          <p>Save up to 30% on your next trip when you book today. Experience premium luxury flights across the globe at fraction of the cost.</p>
          <button className="deals-btn">View All Offers</button>
        </div>
        <div className="deals-visual">
          <div className="glass-card main-deal">
            <div className="deal-info">
              <h3>Tokyo Escape</h3>
              <p>Business Class</p>
            </div>
            <div className="deal-price">
              <span className="old-price">$2,400</span>
              <span className="new-price">$1,890</span>
            </div>
          </div>
          <div className="glass-card sub-deal">
             <div className="deal-info">
              <h3>London Direct</h3>
              <p>Premium Economy</p>
            </div>
            <div className="deal-price">
              <span className="new-price">$650</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
