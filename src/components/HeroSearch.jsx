import React, { useState } from 'react';
import './HeroSearch.css';

const HeroSearch = () => {
  const [loadingState, setLoadingState] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    depart: '',
    returnDate: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoadingState('loading');

    // Simulate API query
    setTimeout(() => {
      setLoadingState('success');
    }, 2500);
  };

  return (
    <main className="hero-section" id="home">
      <div className="logo">
          <img className="logo-img" src="/images/flykings-logo.png" alt="FlyKings Logo" />
          <div className="logo-text"><span>Fly</span><span>Kings</span></div>
      </div>

      <div className={`search-container ${loadingState !== 'idle' ? 'querying' : ''}`} id="book">
        {loadingState === 'idle' ? (
          <>
            <h2>Find Your Next Destination</h2>
            <form id="flight-search" onSubmit={handleSearch}>
              <div className="input-group">
                <input 
                  type="text" 
                  id="origin" 
                  placeholder="From (e.g., LOS)" 
                  required 
                  value={formData.origin}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  id="destination" 
                  placeholder="To (e.g., LHR)" 
                  required 
                  value={formData.destination}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <input 
                  type="date" 
                  id="depart" 
                  required 
                  value={formData.depart}
                  onChange={handleInputChange}
                />
                <input 
                  type="date" 
                  id="returnDate" 
                  value={formData.returnDate}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="search-btn">Search Flights</button>
            </form>
          </>
        ) : (
          <div className="loading-container">
            {loadingState === 'loading' ? (
              <>
                <div className="spinner"></div>
                <p className="loading-msg">Querying Global Distribution System for {formData.origin.toUpperCase()} ➔ {formData.destination.toUpperCase()}...</p>
              </>
            ) : (
              <>
                <div className="success-icon">✓</div>
                <p className="success-msg">API Connection Established: 14 flights found for {formData.origin.toUpperCase()} ➔ {formData.destination.toUpperCase()}.</p>
                <button className="reset-btn" onClick={() => setLoadingState('idle')}>New Search</button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default HeroSearch;
