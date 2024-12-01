import React from 'react';
import Slider from 'react-slick';
import './MovieSlider.css';

const movies = [
  { id: 1, title: 'Movie 1', image: '/path-to-image1.jpg' },
  { id: 2, title: 'Movie 2', image: '/path-to-image2.jpg' },
  { id: 3, title: 'Movie 3', image: '/path-to-image3.jpg' },
];

const MovieSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <h2>Trending Movies</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
