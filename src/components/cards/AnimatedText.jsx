'use client';

import { motion } from 'framer-motion';
import { useLayoutStore } from '@/hooks/useLayoutStore';
import { useEffect, useState } from 'react';

const AnimatedText = () => {
    const { height, scrollY } = useLayoutStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const text = 'Crafting Digital Experiences';

    if (!mounted) return null;

    // Check if we've hit the absolute bottom (with a small threshold for rounding)
    const isAtBottom = Math.abs(scrollY - height) < 1;

    return (
        <motion.div
            className="fixed right-20 top-1/2 -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{
                opacity: isAtBottom ? 1 : 0,
                x: isAtBottom ? 0 : 100,
                scale: isAtBottom ? 1 : 0.8,
                transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: isAtBottom ? 0.5 : 0,
                },
            }}
            style={{
                transform: `translateY(${height * 0.8}px)`,
            }}
        >
            <motion.h2 className="text-6xl font-ppnm text-gray-800 leading-tight">
                {text.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate={isAtBottom ? 'visible' : 'hidden'}
                        transition={{ delay: index * 0.05 }}
                        className="inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.h2>
            <motion.div
                className="h-1.5 w-0 bg-gradient-to-r from-[#61DAFB] via-[#00D8FF] to-[#61DAFB] mt-4"
                initial={{ width: 0 }}
                animate={{ width: isAtBottom ? '100%' : 0 }}
                transition={{ duration: 1.5, delay: isAtBottom ? 1 : 0, ease: [0.22, 1, 0.36, 1] }}
            />
        </motion.div>
    );
};

export default AnimatedText;
