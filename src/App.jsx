import React from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import DestinationGrid from './components/DestinationGrid';
import DealsSection from './components/DealsSection';
import FleetSection from './components/FleetSection';

function App() {
  return (
    <>
      <Header />
      <HeroSearch />
      <DestinationGrid />
      <DealsSection />
      <FleetSection />
    </>
  );
}

export default App;
