import React from 'react';
import { FaPalette, FaJava, FaReact, FaVuejs, FaAngular, FaSass, FaFigma } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiJavascript,
    SiSpringboot,
    SiTypescript,
    SiTailwindcss,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const DesignCard = ({ isSquare, number }) => {
    const iconVariants = {
        animate: {
            x: [0, -600],
            transition: {
                x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                },
            },
        },
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        minWidth: '20px',
        minHeight: '20px',
    };

    const IconSet = () => (
        <>
            <div className="flex items-center justify-center" style={iconStyle}>
                <FaReact style={iconStyle} className="text-blue-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <SiNextdotjs style={iconStyle} className="text-white" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <FaVuejs style={iconStyle} className="text-green-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <SiJavascript style={iconStyle} className="text-yellow-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <FaJava style={iconStyle} className="text-red-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <SiSpringboot style={iconStyle} className="text-green-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <FaAngular style={iconStyle} className="text-red-400" />
            </div>
            <div className="flex items-center justify-center" style={iconStyle}>
                <SiTypescript style={iconStyle} className="text-blue-400" />
            </div>
        </>
    );

    const compactContent = (
        <div className="space-y-3">
            <div className="relative h-24 overflow-hidden">
                <motion.div
                    className="absolute inset-0 flex items-center gap-6 whitespace-nowrap"
                    variants={iconVariants}
                    animate="animate"
                >
                    <IconSet />
                    <IconSet />
                    <IconSet />
                    <IconSet />
                    <IconSet />
                </motion.div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <p className="text-xs text-gray-300">Modern UI/UX</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <p className="text-xs text-gray-300">Responsive</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <p className="text-xs text-gray-300">Accessible</p>
                </div>
            </div>
        </div>
    );

    const expandedContent = (
        <div className="space-y-3">
            <p className="text-sm text-gray-300">Creating beautiful user experiences</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-purple-400 text-xs font-medium mb-3 tracking-wider uppercase">
                        Frontend Tools
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex items-center justify-center">
                            <FaReact className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiNextdotjs className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaVuejs className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaAngular className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiTypescript className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiTailwindcss className="w-5 h-5 text-cyan-400" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-purple-400 text-xs font-medium mb-3 tracking-wider uppercase">Design Tools</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center justify-center">
                            <FaFigma className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiAdobexd className="w-5 h-5 text-pink-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <SiAdobephotoshop className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaSass className="w-5 h-5 text-pink-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                        <FaPalette style={{ width: '24px', height: '24px' }} className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-ppnm text-white">Design</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                    <span className="text-white font-ppnm text-lg">{number}</span>
                </div>
            </div>
            <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {isSquare ? compactContent : expandedContent}
            </motion.div>
        </div>
    );
};

export default DesignCard;
