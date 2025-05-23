'use client';

import { motion } from 'framer-motion';
import { useCardPositions } from '@/hooks/useCardPositions';
import { useLayoutStore } from '@/hooks/useLayoutStore';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';
import Card8 from './Card8';
import Card9 from './Card9';
import Card10 from './Card10';

// Reordered cards for a more magical sequence
// Starting with React (4) as the main focus, then branching out to related technologies
const CARD_ORDER = [5, 3, 1, 6, 4, 8, 9, 7, 10, 2];
const CARDS = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10];

export default function CardLayout() {
    const { height } = useLayoutStore();
    const [mounted, setMounted] = useState(false);
    const positions = useCardPositions();
    const cardWidth = 'calc((100vw - 220px) / 10)';
    const cardHeight = `calc(${cardWidth} * 1.5)`;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={clsx('sticky top-[0] w-screen h-screen', 'bg-black bg-cover bg-center bg-no-repeat')}
            style={{ backgroundImage: 'url(/assets/images/milkyway-glow.jpg)' }}
        >
            <div className="flex gap-5 justify-center h-fit z-[10] relative">
                {CARD_ORDER.map((order, index) => {
                    const cardId = `card${order}`;
                    const Card = CARDS[order - 1];
                    const position = positions[cardId];
                    // Add delay based on card order for staggered animation
                    const delay = index * 0.15;

                    return (
                        <motion.div
                            key={cardId}
                            className="relative"
                            style={{
                                width: cardWidth,
                                height: cardHeight,
                            }}
                            initial={{ y: height, opacity: 0, scale: 0.8 }}
                            animate={{
                                y: position.y,
                                opacity: position.opacity,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <Card />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
