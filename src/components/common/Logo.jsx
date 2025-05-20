'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCurrentSection } from '@/hooks/useLayoutStore';

const Logo = () => {
    const currentSection = useCurrentSection();

    // Determine stroke color based on section
    const strokeColor = currentSection === 1 ? 'stroke-white' : 'stroke-black';

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            transition: {
                pathLength: {
                    duration: 3,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                    times: [0, 0.3, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 0.5,
                },
                opacity: {
                    duration: 3,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                    times: [0, 0.3, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 0.5,
                },
            },
        }),
    };

    return (
        <motion.svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            className={`${strokeColor}`}
        >
            {/* K - First letter (moved right) */}
            <motion.path d="M18 5 L18 35" strokeWidth="1.5" strokeLinecap="round" custom={0} variants={pathVariants} />
            <motion.path d="M18 20 L31 5" strokeWidth="1.5" strokeLinecap="round" custom={1} variants={pathVariants} />
            <motion.path d="M18 20 L31 35" strokeWidth="1.5" strokeLinecap="round" custom={2} variants={pathVariants} />

            {/* O - Second letter (moved left) */}
            <motion.path
                d="M37 20 C37 12.268 43.268 6 51 6 C58.732 6 65 12.268 65 20 C65 27.732 58.732 34 51 34 C43.268 34 37 27.732 37 20 Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                custom={3}
                variants={pathVariants}
            />

            {/* K - Third letter */}
            <motion.path d="M75 5 L75 35" strokeWidth="1.5" strokeLinecap="round" custom={4} variants={pathVariants} />
            <motion.path d="M75 20 L88 5" strokeWidth="1.5" strokeLinecap="round" custom={5} variants={pathVariants} />
            <motion.path d="M75 20 L88 35" strokeWidth="1.5" strokeLinecap="round" custom={6} variants={pathVariants} />

            {/* A - Fourth letter */}
            <motion.path d="M95 35 L105 5" strokeWidth="1.5" strokeLinecap="round" custom={7} variants={pathVariants} />
            <motion.path
                d="M105 5 L115 35"
                strokeWidth="1.5"
                strokeLinecap="round"
                custom={8}
                variants={pathVariants}
            />
            <motion.path
                d="M98 25 L112 25"
                strokeWidth="1.5"
                strokeLinecap="round"
                custom={9}
                variants={pathVariants}
            />
        </motion.svg>
    );
};

export default Logo;
