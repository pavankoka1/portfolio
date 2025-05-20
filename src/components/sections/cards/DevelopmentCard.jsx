import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DevelopmentCard = ({ isSquare, number }) => {
    const compactContent = (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <p className="text-sm text-gray-300">Full Stack Development</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <p className="text-sm text-gray-300">Modern Technologies</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <p className="text-sm text-gray-300">Clean Code</p>
            </div>
        </div>
    );

    const expandedContent = (
        <div className="space-y-3">
            <p className="text-sm text-gray-300">Building robust and scalable applications</p>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-blue-400 text-sm font-semibold mb-1">Frontend</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• React & Next.js</li>
                        <li>• Vue & Nuxt</li>
                        <li>• Redux & JS</li>
                    </ul>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-blue-400 text-sm font-semibold mb-1">Backend</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Java & Spring Boot</li>
                        <li>• Node.js & Express</li>
                        <li>• Vert.x</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaCode className="text-2xl text-blue-400" />
                    <h3 className="text-xl font-ppnm text-white">Development</h3>
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

export default DevelopmentCard;
