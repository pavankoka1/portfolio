import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuButton = ({ onClick }) => {
    const letters = 'MENU'.split('');
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
                        key={`menu-${index}`}
                        className="text-[.875rem] font-ppnm text-black uppercase font-extrabold leading-none"
                        initial={{ y: 0 }}
                        animate={
                            isHovered
                                ? {
                                      y: -20,
                                      opacity: 0,
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                                : {
                                      y: 0,
                                      opacity: 1,
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
                        key={`menu-lower-${index}`}
                        className="text-[.875rem] font-ppnm text-black uppercase font-extrabold leading-none"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            isHovered
                                ? {
                                      y: 0,
                                      opacity: 1,
                                      transition: {
                                          duration: 0.6,
                                          delay: index * 0.03,
                                          ease: [0.22, 1, 0.36, 1],
                                      },
                                  }
                                : {
                                      y: 20,
                                      opacity: 0,
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

export default MenuButton;
