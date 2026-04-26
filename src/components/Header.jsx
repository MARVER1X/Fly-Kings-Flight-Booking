import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`header-nav ${isLoaded ? 'loaded' : ''}`}>
      <div 
        className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} 
        id="mobile-menu"
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-pill ${isMenuOpen ? 'active' : ''}`} id="nav-ul">
        <div className="nav-item li-1"><a href="#home" onClick={() => setIsMenuOpen(false)}>Search</a></div>
        <div className="nav-item li-2"><a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a></div>
        <div className="nav-item li-3"><a href="#fleet" onClick={() => setIsMenuOpen(false)}>Fleet</a></div>
        
        {/* 3D Orb Component centered in the pill */}
        <div className="orb-container">
          <div className="nav-3d-back">
            <div className="D3-rings-border"></div>
            <div className="D3-rings"></div>
            <div className="d3-rings-3d">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
              <div className="ring ring-4"></div>
            </div>
          </div>
        </div>

        <div className="nav-item li-5"><a href="#deals" onClick={() => setIsMenuOpen(false)}>Deals</a></div>
        <div className="nav-item li-6"><a href="#manage" onClick={() => setIsMenuOpen(false)}>Manage</a></div>
        <div className="nav-item li-7 login-btn-wrapper"><a href="#login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Sign In / Join</a></div>
      </div>
    </nav>
  );
};

export default Header;
