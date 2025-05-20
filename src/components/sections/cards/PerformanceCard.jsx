import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PerformanceCard = ({ isSquare, number }) => {
    const compactContent = (
        <div className="space-y-3">
            <div className="space-y-2 mb-4">
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-red-400 to-orange-400"
                        initial={{ width: '0%' }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ width: '0%' }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <p className="text-xs text-gray-300">Speed</p>
                    </div>
                    <p className="text-xs text-green-400 mt-1">95%</p>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <p className="text-xs text-gray-300">Efficiency</p>
                    </div>
                    <p className="text-xs text-green-400 mt-1">92%</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <p className="text-sm text-gray-300">Optimized Performance</p>
            </div>
        </div>
    );

    const expandedContent = (
        <div className="space-y-3">
            <p className="text-sm text-gray-300">Optimizing for speed and efficiency</p>
            <div className="space-y-2">
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Speed</span>
                        <span className="text-green-400">95%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-red-400 to-orange-400"
                            initial={{ width: '0%' }}
                            animate={{ width: '95%' }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Efficiency</span>
                        <span className="text-green-400">92%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                            initial={{ width: '0%' }}
                            animate={{ width: '92%' }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-red-400 text-sm font-semibold mb-1">Key Focus</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Code Splitting</li>
                        <li>• Lazy Loading</li>
                    </ul>
                </div>
                <div className="bg-gray-700/30 p-2 rounded-lg">
                    <h4 className="text-red-400 text-sm font-semibold mb-1">Tools</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Lighthouse</li>
                        <li>• Webpack</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaRocket className="text-2xl text-red-400" />
                    <h3 className="text-xl font-ppnm text-white">Performance</h3>
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

export default PerformanceCard;
