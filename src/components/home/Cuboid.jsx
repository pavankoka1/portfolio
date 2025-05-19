'use client';

import React, { useEffect, useState } from 'react';
import * as motion from 'motion/react-client';
import { generateLetterShape } from './Letters';

function Cuboid() {
    const [dots, setDots] = useState([]);
    const [currentWord, setCurrentWord] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const numDots = 600;
    const dotColor = '#111';
    const dotSize = 0.75;

    const words = {
        K: ['Keen', 'Knight', 'Keystone', 'Kingpin', 'Kinetic', 'Knowledgeable', 'Kindred', 'Kalm', 'Kraft'],
        O: [
            'Outstanding',
            'Opulent',
            'Omni',
            'Optimal',
            'Outperformer',
            'Objective',
            'Observer',
            'Original',
            'Omnipotent',
            'Open-minded',
        ],
        A: [
            'Ambitious',
            'Assertive',
            'Agile',
            'Adventurous',
            'Autonomous',
            'Artistic',
            'Authentic',
            'Accelerated',
            'Adaptable',
            'Ace',
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

    // Animation sequence
    useEffect(() => {
        const sequence = async () => {
            while (true) {
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
                await new Promise((resolve) => setTimeout(resolve, 500));
                setCurrentWord('');

                await new Promise((resolve) => setTimeout(resolve, 300));

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

                await new Promise((resolve) => setTimeout(resolve, 1800));

                // Form O
                setIsVisible(false);
                await new Promise((resolve) => setTimeout(resolve, 500));
                setCurrentWord(words.O[Math.floor(Math.random() * words.O.length)]);
                setIsVisible(true);
                setDots((prev) =>
                    prev.map((dot, i) => ({
                        ...dot,
                        targetX: generateLetterShape('O')[i % generateLetterShape('O').length].x,
                        targetY: generateLetterShape('O')[i % generateLetterShape('O').length].y,
                    })),
                );

                await new Promise((resolve) => setTimeout(resolve, 1800));

                // Form second K
                setIsVisible(false);
                await new Promise((resolve) => setTimeout(resolve, 500));
                setCurrentWord(words.K[Math.floor(Math.random() * words.K.length)]);
                setIsVisible(true);
                setDots((prev) =>
                    prev.map((dot, i) => ({
                        ...dot,
                        targetX: generateLetterShape('K', true)[i % generateLetterShape('K', true).length].x,
                        targetY: generateLetterShape('K', true)[i % generateLetterShape('K', true).length].y,
                    })),
                );

                await new Promise((resolve) => setTimeout(resolve, 1800));

                // Form A
                setIsVisible(false);
                await new Promise((resolve) => setTimeout(resolve, 500));
                setCurrentWord(words.A[Math.floor(Math.random() * words.A.length)]);
                setIsVisible(true);
                setDots((prev) =>
                    prev.map((dot, i) => ({
                        ...dot,
                        targetX: generateLetterShape('A')[i % generateLetterShape('A').length].x,
                        targetY: generateLetterShape('A')[i % generateLetterShape('A').length].y,
                    })),
                );

                await new Promise((resolve) => setTimeout(resolve, 1800));
            }
        };

        sequence();
    }, []);

    return (
        <div className="relative w-[300px] h-[500px] overflow-hidden ml-52 border border-black/20 rounded-lg backdrop-blur-sm">
            <motion.div
                className="absolute top-8 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <span className="text-lg font-light tracking-wider text-gray-600">{currentWord}</span>
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
                        stiffness: 150,
                        damping: 25,
                        mass: 0.4,
                        duration: 0.6,
                        delay: Math.random() * 0.02,
                    }}
                />
            ))}
        </div>
    );
}

export default Cuboid;
