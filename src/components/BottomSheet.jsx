import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstantLeft from './home/ConstantLeft';

const RouteCard = ({ title, description, href, image }) => (
    <motion.a
        href={href}
        className="block group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="relative p-6">
            <h3 className="text-2xl font-ppnm text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-emerald-400 transition-all duration-500">
                {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
    </motion.a>
);

const CloseButton = ({ onClick }) => {
    const letters = 'CLOSE'.split('');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative cursor-pointer overflow-hidden h-10 px-4 py-2"
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex tracking-[0.1em]">
                {letters.map((letter, index) => (
                    <motion.span
                        key={`close-${index}`}
                        className="text-[.875rem] font-ppnm text-gray-400 uppercase font-extrabold leading-none"
                        initial={{ y: 0 }}
                        animate={
                            isHovered
                                ? {
                                      y: -20,
                                      opacity: 0,
                                      color: '#fff',
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                                : {
                                      y: 0,
                                      opacity: 1,
                                      color: '#9ca3af',
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                        }
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            <div className="absolute top-0 left-0 flex tracking-[0.1em] px-4 py-2">
                {letters.map((letter, index) => (
                    <motion.span
                        key={`close-lower-${index}`}
                        className="text-[.875rem] font-ppnm text-gray-400 uppercase font-extrabold leading-none"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            isHovered
                                ? {
                                      y: 0,
                                      opacity: 1,
                                      color: '#fff',
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                                : {
                                      y: 20,
                                      opacity: 0,
                                      color: '#9ca3af',
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                        }
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

const BottomSheet = ({ isOpen, onClose }) => {
    const routes = [
        {
            title: 'Home',
            description: 'Welcome to the main page',
            href: '/',
            image: '/home.jpg',
        },
        {
            title: 'Cards',
            description: 'Explore interactive card components',
            href: '/cards',
            image: '/cards.jpg',
        },
        {
            title: 'Scroll Section',
            description: 'Experience the scroll-based animations',
            href: '/scroll',
            image: '/scroll.jpg',
        },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="absolute inset-0 bg-black"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-full flex">
                            {/* Left side with ConstantLeft */}
                            <div className="w-1/3 p-8 border-r border-gray-800">
                                <div className="text-white">
                                    <ConstantLeft color="text-white" />
                                </div>
                            </div>

                            {/* Right side with routes */}
                            <div className="w-2/3 p-8">
                                <div className="flex justify-between items-center mb-12">
                                    <h2 className="text-3xl font-ppnm text-white">Navigation</h2>
                                    <CloseButton onClick={onClose} />
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {routes.map((route) => (
                                        <RouteCard key={route.href} {...route} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BottomSheet;
