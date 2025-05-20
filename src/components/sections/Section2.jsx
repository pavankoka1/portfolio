import React from 'react';

const Section2 = () => {
    return (
        <section className="h-screen w-screen relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                <h2 className="text-5xl font-ppnm text-indigo-800 mb-6">Creative Developer</h2>
                <p className="text-xl text-indigo-600 max-w-2xl">
                    Crafting digital experiences with modern technologies and creative solutions
                </p>
            </div>
        </section>
    );
};

export default Section2;
