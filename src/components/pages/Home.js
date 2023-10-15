import React from 'react';
import '../../App.css';
import Cards from '../../utilis/Cards';
import HeroSection from '../../utilis/HeroSection';
import Footer from '../../utilis/Footer';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;