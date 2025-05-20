'use client';

import React, { useEffect, useRef } from 'react';
import { initLayout, useLayoutStore } from '@/hooks/useLayoutStore';
import { initScroll } from '@/hooks/useScrollStore';
import ConstantLeft from '@/components/home/ConstantLeft';
import TimeLocation from '@/components/home/TimeLocation';
import ScrollIndicator from '@/components/home/ScrollIndicator';
import Section1 from '@/components/sections/Section1';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';
import Section4 from '@/components/sections/Section4';

export default function Home() {
    const scrollContainerRef = useRef(null);

    // Initialize layout and scroll listeners
    useEffect(() => {
        const layoutCleanup = initLayout();
        const scrollCleanup = initScroll();

        // Custom scroll handler for the container
        const handleContainerScroll = () => {
            if (scrollContainerRef.current) {
                const scrollY = scrollContainerRef.current.scrollTop;
                useLayoutStore.getState()._setScrollY(scrollY);
            }
        };

        // Add scroll listener to the container
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleContainerScroll, { passive: true });
        }

        // Return combined cleanup function
        return () => {
            layoutCleanup();
            scrollCleanup();
            if (container) {
                container.removeEventListener('scroll', handleContainerScroll);
            }
        };
    }, []);

    return (
        <main className="relative">
            <ConstantLeft />
            <TimeLocation />
            <ScrollIndicator />
            <div ref={scrollContainerRef} className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
                <div className="snap-start h-screen">
                    <Section1 />
                </div>
                <div className="snap-start h-screen">
                    <Section2 />
                </div>
                <div className="snap-start h-screen">
                    <Section3 />
                </div>
                <div className="snap-start h-screen">
                    <Section4 />
                </div>
            </div>
        </main>
    );
}
