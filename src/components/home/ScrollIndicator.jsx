import React from 'react';
import { motion } from 'framer-motion';

function ScrollIndicator() {
    return (
        <div className="fixed bottom-0 left-0 w-screen px-8 py-6 flex justify-center items-center z-50 pointer-events-none">
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="relative h-3">
                    {/* Main arrow */}
                    <motion.div
                        className="left-1/2 -translate-x-1/2"
                        animate={{
                            y: [0, 8, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-stone-800"
                        >
                            <path
                                d="M12 5V19M12 19L5 12M12 19L19 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>

                    {/* Trail dots */}
                    {/* {[...Array(2)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute left-1/2 -translate-x-1/2"
                            animate={{
                                y: [0, 8, 0],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: (index + 1) * 0.2,
                            }}
                        >
                            <div className="w-1 h-1 rounded-full bg-stone-800" />
                        </motion.div>
                    ))} */}
                </div>

                {/* Text */}
                {/* <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <div className="font-ppnm text-lg text-stone-800">Scroll to explore</div>
                </motion.div> */}
            </motion.div>
        </div>
    );
}

export default ScrollIndicator;
