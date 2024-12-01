import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';

const movies = [
    { image: '/assets/movie1.jpeg', title: 'Ipar Adalah Maut' },
    { image: '/assets/movie2.jpg', title: 'Emily in Paris' },
    { image: '/assets/movie3.jpg', title: 'Movie 3' },
    { image: '/assets/movie4.jpg', title: 'Movie 4' },
    { image: '/assets/movie5.jpg', title: 'Movie 5' },
];

const HomePage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Banner />
            <div className="p-4">
                <Row title="Trending Now" movies={movies} />
                <Row title="Top Rated" movies={movies} />
                <Row title="Action Movies" movies={movies} />
                <Row title="Comedy Movies" movies={movies} />
                <Row title="Horror Movies" movies={movies} />
                <Row title="Romance Movies" movies={movies} />
            </div>
        </div>
    );
};

export default HomePage;
