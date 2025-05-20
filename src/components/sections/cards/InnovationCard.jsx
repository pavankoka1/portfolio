import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InnovationCard = ({ isSquare, number }) => {
    const compactContent = (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <p className="text-xs text-gray-300">Creative Solutions</p>
                    </div>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <p className="text-xs text-gray-300">Modern Tech</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <p className="text-sm text-gray-300">Innovative Approach</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <p className="text-sm text-gray-300">Future-Ready</p>
                </div>
            </div>
        </div>
    );

    const expandedContent = (
        <div className="space-y-3">
            <p className="text-sm text-gray-300">Pushing boundaries with creative solutions</p>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-yellow-400 text-sm font-semibold mb-1">Approach</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Creative Thinking</li>
                        <li>• Problem Solving</li>
                        <li>• User-Centric</li>
                    </ul>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-yellow-400 text-sm font-semibold mb-1">Focus</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Clean Code</li>
                        <li>• Best Practices</li>
                        <li>• Modern Tech</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <p className="text-xs text-gray-300">AI Integration</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <p className="text-xs text-gray-300">Cloud Solutions</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaLightbulb className="text-2xl text-yellow-400" />
                    <h3 className="text-xl font-ppnm text-white">Innovation</h3>
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

export default InnovationCard;
