import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import MeetChefs from "../pages/Meetchefs"

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <MeetChefs />
      <Footer />
    </>
  );
}

export default Home;