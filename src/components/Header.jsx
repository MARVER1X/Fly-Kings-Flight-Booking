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
        <div className="nav-item li-1"><a href="#home">Home</a></div>
        <div className="nav-item li-2"><a href="#destinations">Destinations</a></div>
        <div className="nav-item li-3"><a href="#fleet">Fleet</a></div>
        <div className="nav-item li-4"><a href="#book">Book</a></div>
        
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

        <div className="nav-item li-5"><a href="#deals">Deals</a></div>
        <div className="nav-item li-6"><a href="#experience">Experience</a></div>
        <div className="nav-item li-7"><a href="#rewards">Rewards</a></div>
        <div className="nav-item li-8"><a href="#contact">Contact</a></div>
      </div>
    </nav>
  );
};

export default Header;
