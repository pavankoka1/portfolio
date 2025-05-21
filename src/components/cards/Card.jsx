'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const cardVariants = {
    initial: {
        rotateY: 0,
        scale: 1,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    },
    hover: {
        rotateY: 180,
        scale: 1.1,
        boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1)',
    },
};

const contentVariants = {
    initial: {
        opacity: 1,
    },
    hover: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const backVariants = {
    initial: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export default function Card({ order, logo, title, code, color = 'bg-white', textColor = 'text-gray-900' }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-full h-full perspective-1000 cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className={`relative w-full h-full rounded-xl ${color} ${textColor} preserve-3d`}
                variants={cardVariants}
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                }}
            >
                {/* Front of card */}
                <motion.div className="absolute inset-0 p-6 backface-hidden" variants={contentVariants}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110">
                            {logo}
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    </div>
                </motion.div>

                {/* Back of card */}
                <motion.div className="absolute inset-0 p-0 backface-hidden rotate-y-180" variants={backVariants}>
                    <div className="flex flex-col h-full">
                        <pre className="flex-1 p-2 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 rounded-lg overflow-auto backdrop-blur-sm shadow-inner leading-[8px]">
                            <code className="text-[6px]">{code}</code>
                        </pre>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
