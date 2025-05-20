'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TimeLocation() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(null);
    const [location, setLocation] = useState({ lat: 0, long: 0 });
    const prevTimeRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        setTime(new Date());

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude.toFixed(4),
                        long: position.coords.longitude.toFixed(4),
                    });
                },
                (error) => {
                    console.log('Error getting location:', error);
                },
            );
        }

        return () => clearInterval(timer);
    }, []);

    if (!mounted || !time) {
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
                <div className="font-ppnm text-lg text-stone-800 mb-4">Loading...</div>
                <div className="flex items-center space-x-2">
                    <div className="font-ppnm text-3xl text-stone-800">00:00:00</div>
                </div>
            </div>
        );
    }

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return { hours, minutes, seconds };
    };

    const currentTime = formatTime(time);
    const prevTime = prevTimeRef.current ? formatTime(prevTimeRef.current) : currentTime;
    prevTimeRef.current = time;

    const NumberTransition = ({ value, prevValue, shouldAnimate }) => {
        return (
            <div className="relative inline-block w-[1.8em] text-center">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={value}
                        initial={{
                            y: shouldAnimate ? 20 : 0,
                            opacity: shouldAnimate ? 0 : 1,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: shouldAnimate ? -20 : 0,
                            opacity: shouldAnimate ? 0 : 1,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        className="font-ppnm text-3xl text-stone-800"
                    >
                        {value}
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="fixed left-[20px] top-[20px] flex flex-col items-center justify-center z-50 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.2,
                }}
                className="flex flex-col items-center"
            >
                <motion.div
                    className="font-ppnm text-lg text-stone-800 mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.4,
                    }}
                >
                    {location.lat}°N, {location.long}°E
                </motion.div>
                <div className="flex items-center">
                    <NumberTransition
                        value={currentTime.hours}
                        prevValue={prevTime.hours}
                        shouldAnimate={currentTime.hours !== prevTime.hours}
                    />
                    <span className="font-ppnm text-3xl text-stone-800 px-1 flex items-center justify-center h-[1.8em]">
                        :
                    </span>
                    <NumberTransition
                        value={currentTime.minutes}
                        prevValue={prevTime.minutes}
                        shouldAnimate={currentTime.minutes !== prevTime.minutes}
                    />
                    <span className="font-ppnm text-3xl text-stone-800 px-1 flex items-center justify-center h-[1.8em]">
                        :
                    </span>
                    <NumberTransition
                        value={currentTime.seconds}
                        prevValue={prevTime.seconds}
                        shouldAnimate={currentTime.seconds !== prevTime.seconds}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default TimeLocation;
