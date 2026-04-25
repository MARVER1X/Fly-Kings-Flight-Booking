import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger matrix entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`outer ${isLoaded ? 'loaded' : ''}`}>
      <div 
        className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className="nav">
        <ul className={`nav-ul ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item li1 shadow-left"><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li className="nav-item li2 shadow-left"><a href="#book" onClick={() => setIsMenuOpen(false)}>Book</a></li>
          <li className="nav-item li3 shadow-left"><a href="#destinations" onClick={() => setIsMenuOpen(false)}>Routes</a></li>
          <li className="nav-item li4 shadow-left"><a href="#deals" onClick={() => setIsMenuOpen(false)}>Deals</a></li>
          <li className="nav-item li5 shadow-right"><a href="#fleet" onClick={() => setIsMenuOpen(false)}>Fleet</a></li>
          <li className="nav-item li6 shadow-right"><a href="#info" onClick={() => setIsMenuOpen(false)}>Info</a></li>
          <li className="nav-item li7 shadow-right"><a href="#login" onClick={() => setIsMenuOpen(false)}>Log In</a></li>  
          <li className="nav-item li8 shadow-right"><a href="#signup" onClick={() => setIsMenuOpen(false)}>Sign Up</a></li>            
        </ul>
      </nav>
      
      <div className="nav-3d-back">
        <div className="D3-rings-border"></div>
        <div className="D3-rings">
          <div className="d3-rings-3d">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <div className="ring ring-4"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
