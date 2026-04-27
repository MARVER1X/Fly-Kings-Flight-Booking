import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchState, setSearchState] = useState('idle'); // idle, flying, results
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const searchRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check initial width and listen for resize
    const checkMobile = () => {
      const currentlyMobile = window.innerWidth <= 768;
      setIsMobile((prevMobile) => {
        // If we crossed the breakpoint from mobile to desktop, reset menu state
        if (prevMobile && !currentlyMobile) {
          setIsMenuOpen(false);
        }
        return currentlyMobile;
      });
    };
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside the entire nav structure, close search
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchState('idle'); // reset state
        setSearchQuery('');
      }
    };
    
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setSearchState('flying');
    
    // Simulate flight time then show results
    setTimeout(() => {
      setSearchState('results');
    }, 1500); // 1.5s flight animation
  };

  // Allow user to clear and type again, resetting the plane
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (searchState !== 'idle') {
      setSearchState('idle');
    }
  };

  // Variants for the mobile liquid glass expansion
  const menuVariants = {
    mobileClosed: {
      clipPath: "circle(0px at 55px 55px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    mobileOpen: {
      clipPath: "circle(150% at 55px 55px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    desktop: {
      clipPath: "circle(150% at 50% 50%)",
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <nav className={`header-nav ${isLoaded ? 'loaded' : ''}`} ref={searchRef}>
      {/* The Extracted Orb Component - Acts as Mobile Menu Toggle */}
      <motion.div 
        key={isMobile ? 'orb-mobile' : 'orb-desktop'} // Force remount to clear sticky Framer Motion inline styles
        className="orb-container"
        onClick={isMobile ? toggleMenu : undefined}
        whileTap={isMobile ? { scale: 0.8 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
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
      </motion.div>

      <motion.div 
        className={`nav-container ${isMenuOpen ? 'active' : ''}`}
        initial={false}
        animate={isMobile ? (isMenuOpen ? "mobileOpen" : "mobileClosed") : "desktop"}
        variants={menuVariants}
      >
        {/* The Permanent Nav Pill */}
        <div className="nav-pill" id="nav-ul">
          {/* Left Side Navigation Group */}
          <div className="nav-group left-group">
            <div className="nav-item li-1">
              <a href="#search" onClick={(e) => { 
                e.preventDefault(); 
                setIsSearchOpen(!isSearchOpen); 
              }}>
                Search
              </a>
            </div>
            <div className="nav-item li-2"><a href="#bookings" onClick={() => setIsMenuOpen(false)}>Bookings</a></div>
            <div className="nav-item li-3"><a href="#flights" onClick={() => setIsMenuOpen(false)}>Flights</a></div>
          </div>
          
          {/* Spacer to hold the Orb's place visually on Desktop */}
          <div className="desktop-orb-spacer"></div>

          {/* Right Side Navigation Group */}
          <div className="nav-group right-group">
            <div className="nav-item li-4"><a href="#tickets" onClick={() => setIsMenuOpen(false)}>Tickets</a></div>
            <div className="nav-item li-5"><a href="#support" onClick={() => setIsMenuOpen(false)}>Support</a></div>
            <div className="nav-item li-6 login-btn-wrapper"><a href="#login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Sign In / Join</a></div>
          </div>
        </div>

        {/* The Dropdown Tray Search Panel */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              className="runway-search-panel"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }} 
            >
              <form className="runway-form" onSubmit={handleSearchSubmit}>
                {/* Mobile Back Button */}
                <div className="mobile-search-back" onClick={() => setIsSearchOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Back to Menu</span>
                </div>

                <div className="runway-track-container">
                  {/* The runway styling */}
                  <div className="runway-lines"></div>
                  
                  {/* The airplane SVG */}
                  <motion.div 
                    className={`airplane-icon ${searchState === 'flying' || searchState === 'results' ? 'taking-off' : ''}`}
                    initial={{ x: 0, y: 30, rotate: 90 }}
                    animate={{ 
                      x: searchState === 'flying' || searchState === 'results' ? '120vw' : 0,
                      y: 30, // Pushed down by 15px to sit on the line
                      scale: 1, 
                      rotate: 90 
                    }}
                    transition={{ duration: 2, ease: "easeIn" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                    </svg>
                  </motion.div>

                  {/* The actual input field over the runway */}
                  <input 
                    type="text" 
                    className="runway-input" 
                    placeholder="Where do you want to go?" 
                    value={searchQuery}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </div>
              </form>

              <AnimatePresence>
                {searchState === 'results' && (
                  <motion.div 
                    className="search-results-mock"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3>Search Results for "{searchQuery}"</h3>
                    <div className="mock-result-card">
                      <div className="mock-flight-info">FK-402 • Direct • 8h 20m</div>
                      <div className="mock-price">$1,250</div>
                    </div>
                    <div className="mock-result-card">
                      <div className="mock-flight-info">FK-881 • 1 Stop • 12h 05m</div>
                      <div className="mock-price">$890</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Header;
