'use client';

import React, { useEffect, useRef } from 'react';
import { initLayout, useLayoutStore } from '@/hooks/useLayoutStore';
import { initScroll } from '@/hooks/useScrollStore';

export default function ScrollLayout({ children }) {
    const scrollContainerRef = useRef(null);

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
        <div ref={scrollContainerRef} className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
            {children}
        </div>
    );
}
