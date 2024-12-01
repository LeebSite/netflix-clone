import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
}

const MoviePage: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
            );
            setMovie(request.data);
        }
        fetchMovie();
    }, [id]);

    if (!movie) return <div className="text-white text-center">Loading...</div>;

    return (
        <div className="text-white">
            <img
                className="w-full h-[60vh] object-cover opacity-80"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
            />
            <div className="m-5">
                <h1 className="text-5xl font-bold mb-5">{movie.title}</h1>
                <p className="text-xl leading-relaxed">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MoviePage;
