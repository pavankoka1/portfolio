import React from 'react';
import Cuboid from '../home/Cuboid';

const Section1 = () => {
    return (
        <section className="h-screen w-screen relative bg-gradient-to-l from-stone-50 via-amber-50 to-yellow-100">
            <div className="absolute left-[60%] top-[50%] translate-y-[-50%]">
                <Cuboid />
            </div>
        </section>
    );
};

export default Section1;
