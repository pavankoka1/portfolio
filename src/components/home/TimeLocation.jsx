'use client';

import React, { useState, useEffect } from 'react';
import { useCurrentSection } from '@/hooks/useLayoutStore';

function TimeLocation() {
    const currentSection = useCurrentSection();
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(null);
    const [location, setLocation] = useState({ lat: 0, long: 0 });

    // Determine text color based on section
    const textColor = currentSection === 1 ? 'text-white' : 'text-stone-800';

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
            <div className="fixed left-[20px] top-[20px] flex flex-col items-center justify-center z-50 pointer-events-none">
                <div className={`font-ppnm text-lg ${textColor} mb-4`}>Loading...</div>
                <div className="flex items-center space-x-2">
                    <div className={`font-ppnm text-3xl ${textColor}`}>00:00:00</div>
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

    return (
        <div className="fixed left-[20px] top-[20px] flex flex-col items-center justify-center z-50 pointer-events-none">
            <div className={`font-ppnm text-lg ${textColor} mb-4`}>
                {location.lat}°N, {location.long}°E
            </div>
            <div className="flex items-center">
                <span className={`font-ppnm text-3xl ${textColor}`}>{currentTime.hours}</span>
                <span className={`font-ppnm text-3xl ${textColor} px-1 flex items-center justify-center h-[1.8em]`}>
                    :
                </span>
                <span className={`font-ppnm text-3xl ${textColor}`}>{currentTime.minutes}</span>
                <span className={`font-ppnm text-3xl ${textColor} px-1 flex items-center justify-center h-[1.8em]`}>
                    :
                </span>
                <span className={`font-ppnm text-3xl ${textColor}`}>{currentTime.seconds}</span>
            </div>
        </div>
    );
}

export default TimeLocation;
