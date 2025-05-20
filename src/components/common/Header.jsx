'use client';

import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 pointer-events-none">
            <div className="transform hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <Logo />
            </div>
        </header>
    );
};

export default Header;
