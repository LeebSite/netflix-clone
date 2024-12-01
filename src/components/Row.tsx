import React from 'react';
import Card from './Card';

interface RowProps {
    title: string;
    movies: { image: string, title: string }[];
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
    return (
        <div className="row ml-5 text-white">
            <h2 className="text-2xl">{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll p-5 space-x-5">
                {movies.map((movie, index) => (
                    <Card key={index} image={movie.image} title={movie.title} />
                ))}
            </div>
        </div>
    );
};

export default Row;
