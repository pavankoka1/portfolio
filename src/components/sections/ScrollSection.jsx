import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import DevelopmentCard from './cards/DevelopmentCard';
import DesignCard from './cards/DesignCard';
import PerformanceCard from './cards/PerformanceCard';
import InnovationCard from './cards/InnovationCard';

const ScrollSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to control card animations
    const card1Progress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const card2Progress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const card3Progress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const card4Progress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const card5Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const card6Progress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const card7Progress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const card8Progress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    const cardVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (progress) => ({
            y: 0,
            opacity: progress,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const cards = [
        {
            id: 'development',
            number: 1,
            component: DevelopmentCard,
            progress: card1Progress,
        },
        {
            id: 'design',
            number: 2,
            component: DesignCard,
            progress: card2Progress,
        },
        {
            id: 'performance',
            number: 3,
            component: PerformanceCard,
            progress: card3Progress,
        },
        {
            id: 'innovation',
            number: 4,
            component: InnovationCard,
            progress: card4Progress,
        },
        {
            id: 'development2',
            number: 5,
            component: DevelopmentCard,
            progress: card5Progress,
        },
        {
            id: 'design2',
            number: 6,
            component: DesignCard,
            progress: card6Progress,
        },
        {
            id: 'performance2',
            number: 7,
            component: PerformanceCard,
            progress: card7Progress,
        },
        {
            id: 'innovation2',
            number: 8,
            component: InnovationCard,
            progress: card8Progress,
        },
    ];

    const handleCardClick = (cardId, event) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        setActiveCard(cardId);
    };

    return (
        <section className="h-[400vh] w-screen relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen w-screen flex items-center justify-center">
                <div className="relative" style={{ width: '800px', height: '600px' }}>
                    {cards.map((card, index) => {
                        const CardComponent = card.component;
                        return (
                            <motion.div
                                key={card.id}
                                className="absolute bg-white rounded-2xl p-6 shadow-2xl cursor-pointer hover:shadow-emerald-500/20 transition-shadow duration-300"
                                style={{
                                    top: `${(index % 2) * 50}%`,
                                    left: index % 2 === 0 ? '0' : 'auto',
                                    right: index % 2 === 0 ? 'auto' : '0',
                                    width: '320px',
                                    height: '280px',
                                }}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                custom={card.progress}
                                onClick={(e) => handleCardClick(card.id, e)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <CardComponent isSquare={true} number={card.number} />
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
                            className="bg-white rounded-2xl p-8 w-[800px] max-h-[80vh] overflow-y-auto shadow-2xl"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    {cards.find((c) => c.id === activeCard)?.icon}
                                    <h3 className="text-2xl font-ppnm text-gray-800">
                                        {cards.find((c) => c.id === activeCard)?.title}
                                    </h3>
                                </div>
                                <button
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    onClick={() => setActiveCard(null)}
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>
                            <div className="text-gray-600 space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Overview</h4>
                                    {cards
                                        .find((c) => c.id === activeCard)
                                        ?.component({
                                            isSquare: true,
                                            number: cards.find((c) => c.id === activeCard)?.number,
                                        })}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Details</h4>
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

export default ScrollSection;
