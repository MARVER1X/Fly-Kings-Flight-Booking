import React from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import DestinationGrid from './components/DestinationGrid';
import DealsSection from './components/DealsSection';

function App() {
  return (
    <>
      <Header />
      <HeroSearch />
      <DestinationGrid />
      <DealsSection />
      
      {/* Fleet info & Footer can be dummy sections for now or expanded later */}
      <section id="fleet" className="dummy-section alt-bg" style={{ textAlign: 'center', padding: '100px 20px', minHeight: '50vh', color: 'white' }}>
        <h2>Our Fleet</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Experience the sky in our modern, fuel-efficient aircraft.</p>
      </section>
    </>
  );
}

export default App;
