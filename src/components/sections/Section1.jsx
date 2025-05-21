import React, { useState } from 'react';
import MenuButton from '../MenuButton';
import BottomSheet from '../BottomSheet';
import Cuboid from '../home/Cuboid';

const Section1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="h-screen w-screen relative bg-gradient-to-l from-stone-50 via-amber-50 to-yellow-100">
            {/* Menu Button */}
            <div className="absolute top-[50%] right-8 translate-y-[-50%]">
                <MenuButton onClick={() => setIsMenuOpen(true)} />
            </div>

            {/* Bottom Sheet */}
            <BottomSheet isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <div className="absolute left-[60%] top-[50%] translate-y-[-50%]">
                <Cuboid />
            </div>
        </section>
    );
};

export default Section1;
