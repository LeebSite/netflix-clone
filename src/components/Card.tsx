import React from 'react';

interface CardProps {
    image: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
    return (
        <div className="card max-w-xs rounded overflow-hidden shadow-lg my-2 bg-gray-900">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
        </div>
    );
};

export default Card;
