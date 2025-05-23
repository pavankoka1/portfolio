import React from 'react';
import * as motion from 'motion/react-client';

import Cuboid from './Cuboid';

function Background() {
    const text = "Koka's Magic";
    const letters = text.split('');

    return (
        <div className="h-screen w-screen sticky top-[0] z-[5]">
            <h3 className="font-ppnm text-[54px] top-[50%] translate-y-[-50%] absolute left-[52px] leading-[1.2] tracking-wide flex">
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        className="relative inline-block"
                        initial={{
                            opacity: 0,
                            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                            x: -10,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                            clipPath: {
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        }}
                    >
                        <motion.span
                            className="absolute inset-0"
                            initial={{
                                opacity: 0,
                                y: -12,
                                filter: 'blur(2px) drop-shadow(0 2px 3px rgba(0,0,0,0.15))',
                            }}
                            animate={{
                                opacity: 0.3,
                                y: 3,
                                filter: 'blur(1px) drop-shadow(0 2px 3px rgba(0,0,0,0.15))',
                            }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.04 + 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                        <motion.span
                            className="absolute inset-0"
                            initial={{
                                opacity: 0,
                                y: -4,
                                filter: 'blur(2px)',
                            }}
                            animate={{
                                opacity: [0, 0.2, 0],
                                y: 0,
                                filter: 'blur(0px)',
                            }}
                            transition={{
                                duration: 1,
                                delay: index * 0.04 + 0.2,
                                ease: 'easeOut',
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </h3>
            <div className="absolute left-[60%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Cuboid />
            </div>
        </div>
    );
}

export default Background;
