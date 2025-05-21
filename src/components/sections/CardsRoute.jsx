'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ConstantLeft from '../home/ConstantLeft';

const Card = ({ index, title, description, color, delay }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [1000, -1000]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <motion.div
            className="sticky top-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto"
            style={{ y, opacity, scale }}
            initial={{ y: 1000, opacity: 0, scale: 0.8 }}
        >
            <div className={`p-8 rounded-2xl ${color} backdrop-blur-sm`}>
                <h3 className="text-3xl font-ppnm text-white mb-4">{title}</h3>
                <p className="text-white/80">{description}</p>
            </div>
        </motion.div>
    );
};

const cards = [
    {
        title: 'Design Systems',
        description: 'Creating cohesive and scalable design systems that maintain consistency across all platforms.',
        color: 'bg-gradient-to-br from-purple-500/90 to-purple-600/90',
        delay: 0,
    },
    {
        title: 'User Experience',
        description: 'Crafting intuitive and engaging user experiences that delight and inspire.',
        color: 'bg-gradient-to-br from-emerald-500/90 to-emerald-600/90',
        delay: 0.1,
    },
    {
        title: 'Frontend Development',
        description: 'Building modern, responsive, and performant web applications with cutting-edge technologies.',
        color: 'bg-gradient-to-br from-blue-500/90 to-blue-600/90',
        delay: 0.2,
    },
    {
        title: 'Animation & Motion',
        description: 'Creating fluid and natural animations that bring interfaces to life.',
        color: 'bg-gradient-to-br from-rose-500/90 to-rose-600/90',
        delay: 0.3,
    },
    {
        title: 'Performance',
        description: 'Optimizing applications for speed, efficiency, and the best possible user experience.',
        color: 'bg-gradient-to-br from-amber-500/90 to-amber-600/90',
        delay: 0.4,
    },
    {
        title: 'Accessibility',
        description: 'Ensuring digital products are usable by everyone, regardless of ability.',
        color: 'bg-gradient-to-br from-cyan-500/90 to-cyan-600/90',
        delay: 0.5,
    },
    {
        title: 'Responsive Design',
        description: 'Creating beautiful experiences that work seamlessly across all devices.',
        color: 'bg-gradient-to-br from-violet-500/90 to-violet-600/90',
        delay: 0.6,
    },
    {
        title: 'Innovation',
        description: 'Pushing boundaries and exploring new possibilities in digital design.',
        color: 'bg-gradient-to-br from-fuchsia-500/90 to-fuchsia-600/90',
        delay: 0.7,
    },
];

const CardsRoute = () => {
    return (
        <div className="relative min-h-[400vh]">
            <ConstantLeft color="text-white" />
            <div className="relative h-screen">
                {cards.map((card, index) => (
                    <Card key={index} index={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardsRoute;
