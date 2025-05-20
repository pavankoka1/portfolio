'use client';

import React, { useEffect, useState } from 'react';
import * as motion from 'motion/react-client';
import { generateLetterShape } from './Letters';
import { AnimatePresence } from 'framer-motion';

function Cuboid() {
    const [dots, setDots] = useState([]);
    const [currentWord, setCurrentWord] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const numDots = 600;
    const dotColor = '#111';
    const dotSize = 0.75;

    const words = {
        K: ['Kickass', 'Killer', 'Keen', 'Knight', 'Krafty', 'Kickstart', 'Kickoff', 'Kickin', 'Kickback'],
        O: [
            'Outstanding',
            'Overachiever',
            'Overdrive',
            'Overflow',
            'Overpower',
            'Overcome',
            'Overjoyed',
            'Overwhelm',
            'Overdeliver',
            'Overexcited',
        ],
        A: [
            'Amazing',
            'Awesome',
            'Adventurous',
            'Ambitious',
            'Achiever',
            'Ace',
            'Action',
            'Accelerate',
            'Accomplish',
            'Astonishing',
        ],
    };

    // Generate initial random positions
    useEffect(() => {
        const initialDots = Array.from({ length: numDots }, (_, i) => ({
            id: i,
            x: Math.random() * 300,
            y: Math.random() * 500,
            targetX: Math.random() * 300,
            targetY: Math.random() * 500,
        }));
        setDots(initialDots);
    }, []);

    const startAnimation = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentWord(''); // Clear word at start

        // Random positions with a more dramatic spread
        setDots((prev) =>
            prev.map((dot) => ({
                ...dot,
                targetX: Math.random() * 400 - 50,
                targetY: Math.random() * 600 - 50,
            })),
        );

        // Fade out current word
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentWord('');

        await new Promise((resolve) => setTimeout(resolve, 500));

        // Form first K
        setCurrentWord(words.K[Math.floor(Math.random() * words.K.length)]);
        setIsVisible(true);
        setDots((prev) =>
            prev.map((dot, i) => ({
                ...dot,
                targetX: generateLetterShape('K', false)[i % generateLetterShape('K', false).length].x,
                targetY: generateLetterShape('K', false)[i % generateLetterShape('K', false).length].y,
            })),
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Form O
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentWord(words.O[Math.floor(Math.random() * words.O.length)]);
        setIsVisible(true);
        setDots((prev) =>
            prev.map((dot, i) => ({
                ...dot,
                targetX: generateLetterShape('O')[i % generateLetterShape('O').length].x,
                targetY: generateLetterShape('O')[i % generateLetterShape('O').length].y,
            })),
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Form second K
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentWord(words.K[Math.floor(Math.random() * words.K.length)]);
        setIsVisible(true);
        setDots((prev) =>
            prev.map((dot, i) => ({
                ...dot,
                targetX: generateLetterShape('K', true)[i % generateLetterShape('K', true).length].x,
                targetY: generateLetterShape('K', true)[i % generateLetterShape('K', true).length].y,
            })),
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Form A
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentWord(words.A[Math.floor(Math.random() * words.A.length)]);
        setIsVisible(true);
        setDots((prev) =>
            prev.map((dot, i) => ({
                ...dot,
                targetX: generateLetterShape('A')[i % generateLetterShape('A').length].x,
                targetY: generateLetterShape('A')[i % generateLetterShape('A').length].y,
            })),
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Scatter dots after animation
        setDots((prev) =>
            prev.map((dot) => ({
                ...dot,
                targetX: Math.random() * 400 - 50,
                targetY: Math.random() * 600 - 50,
            })),
        );

        // Clear word after scattering
        setIsVisible(false);
        setCurrentWord('');
        setIsAnimating(false);
    };

    // Start animation once on mount
    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div className="relative w-[300px] h-[500px] overflow-hidden border border-black/20 rounded-lg backdrop-blur-sm">
            <motion.div
                className="absolute top-8 left-0 right-0 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -20,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.8 },
                }}
            >
                <motion.span
                    className="text-lg font-light tracking-wider text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {currentWord}
                </motion.span>
            </motion.div>

            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full"
                    style={{
                        left: dot.x,
                        top: dot.y,
                        width: `${dotSize}px`,
                        height: `${dotSize}px`,
                        backgroundColor: dotColor,
                        boxShadow: `0 0 2px ${dotColor}`,
                    }}
                    animate={{
                        x: dot.targetX - dot.x,
                        y: dot.targetY - dot.y,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 60,
                        damping: 20,
                        mass: 1,
                        duration: 2,
                        delay: Math.random() * 0.1,
                    }}
                />
            ))}

            <AnimatePresence>
                {!isAnimating && (
                    <motion.button
                        onClick={startAnimation}
                        className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-black/10 hover:bg-white/20 transition-colors group"
                        initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                            rotate: { duration: 0.6, ease: 'easeInOut' },
                        }}
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                rotate: [0, -360],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-stone-800"
                            >
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                            </svg>
                        </motion.div>
                        {/* Multiple ripple rings */}
                        {[...Array(5)].map((_, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0 rounded-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: index * 0.4,
                                    times: [0, 0.5, 1],
                                }}
                            >
                                <div className="w-full h-full rounded-full border border-stone-800/20" />
                            </motion.div>
                        ))}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Cuboid;
