import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="fixed top-0 w-full h-16 px-5 flex items-center justify-between bg-black bg-opacity-80 z-50">
            <img
                className="h-7"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
        </div>
    );
};

export default Navbar;
