import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieSlider from '../components/MovieSlider';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieSlider />
    </>
  );
};

export default Home;
