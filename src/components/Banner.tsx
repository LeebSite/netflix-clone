import React from 'react';

const Banner: React.FC = () => {
    return (
        <header className="relative h-[448px] text-white bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero-background.jpg')" }}>
            <div className="ml-10 pt-36 h-48">
                <h1 className="text-5xl font-extrabold pb-2">Featured Movie</h1>
                <div className="flex space-x-3">
                    <button className="bg-gray-700 text-white px-8 py-2 font-bold">Play</button>
                    <button className="bg-gray-700 text-white px-8 py-2 font-bold">More Info</button>
                </div>
                <h1 className="w-2/5 leading-tight pt-4 text-lg">This is a description of the featured movie.</h1>
            </div>
            <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black to-transparent" />
        </header>
    );
};

export default Banner;
