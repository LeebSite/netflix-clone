import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Discover Unlimited Movies</h1>
      <p className="hero-description">Stream your favorite movies and TV shows now!</p>
      <button className="hero-button">Watch Now</button>
    </div>
  );
};

export default Hero;
