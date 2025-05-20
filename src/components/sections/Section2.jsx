import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import DevelopmentCard from './cards/DevelopmentCard';
import DesignCard from './cards/DesignCard';
import PerformanceCard from './cards/PerformanceCard';
import InnovationCard from './cards/InnovationCard';

const Section2 = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [cardPosition, setCardPosition] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating((prev) => !prev);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const cardVariants = {
        square: {
            width: '320px',
            height: '280px',
            transition: {
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
                type: 'spring',
                stiffness: 100,
                damping: 15,
                mass: 1,
            },
        },
        rectangle: {
            width: '420px',
            height: '280px',
            transition: {
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
                type: 'spring',
                stiffness: 100,
                damping: 15,
                mass: 1,
            },
        },
    };

    const modalVariants = {
        hidden: {
            scale: 0.95,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            scale: 0.95,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const cards = [
        {
            id: 'development',
            number: 1,
            initialShape: 'rectangle',
            component: DevelopmentCard,
        },
        {
            id: 'design',
            number: 2,
            initialShape: 'square',
            component: DesignCard,
        },
        {
            id: 'performance',
            number: 3,
            initialShape: 'square',
            component: PerformanceCard,
        },
        {
            id: 'innovation',
            number: 4,
            initialShape: 'rectangle',
            component: InnovationCard,
        },
    ];

    const handleCardClick = (cardId, event) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        setCardPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        setActiveCard(cardId);
    };

    return (
        <section className="h-screen w-screen relative bg-gradient-to-l from-gray-900 via-gray-950 to-black overflow-hidden">
            <div className="absolute top-[52%] left-[42%] translate-y-[-50%]">
                <div className="relative" style={{ width: '800px', height: '600px' }}>
                    {cards.map((card, index) => {
                        const isSquare = isAnimating
                            ? index === 1 || index === 2 // 2 and 3 stay square
                            : index === 0 || index === 3; // 1 and 4 stay rectangle

                        const position = {
                            0: { top: 0, left: 0 },
                            1: { top: 0, right: 0 },
                            2: { bottom: 0, left: 0 },
                            3: { bottom: 0, right: 0 },
                        }[index];

                        const CardComponent = card.component;

                        return (
                            <motion.div
                                key={card.id}
                                className="absolute bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl cursor-pointer hover:shadow-blue-500/10 transition-shadow duration-300"
                                style={position}
                                variants={cardVariants}
                                animate={isSquare ? 'square' : 'rectangle'}
                                initial={card.initialShape}
                                onClick={(e) => handleCardClick(card.id, e)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <CardComponent isSquare={isSquare} number={card.number} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeCard && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveCard(null)}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-[800px] max-h-[80vh] overflow-y-auto shadow-2xl"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
                                <div className="flex items-center gap-3">
                                    {cards.find((c) => c.id === activeCard)?.icon}
                                    <h3 className="text-2xl font-ppnm text-white">
                                        {cards.find((c) => c.id === activeCard)?.title}
                                    </h3>
                                </div>
                                <button
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => setActiveCard(null)}
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>
                            <div className="text-gray-300 space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Overview</h4>
                                    {cards
                                        .find((c) => c.id === activeCard)
                                        ?.component({
                                            isSquare: true,
                                            number: cards.find((c) => c.id === activeCard)?.number,
                                        })}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Details</h4>
                                    {cards
                                        .find((c) => c.id === activeCard)
                                        ?.component({
                                            isSquare: false,
                                            number: cards.find((c) => c.id === activeCard)?.number,
                                        })}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Section2;
