'use client';

import React from 'react';
import Logo from './Logo';

const Header = ({ color }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[5] flex justify-center items-center py-4 pointer-events-none">
            <div className="transform hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <Logo color={color} />
            </div>
        </header>
    );
};

export default Header;
