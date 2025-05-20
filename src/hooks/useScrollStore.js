import { create } from 'zustand';
import React from 'react';

// Create a store for scroll position with only getter for scrollY
const useScrollStore = create((set) => ({
    scrollY: 0,
    // Private setter that can only be called by initScroll
    _setScrollY: (position) => set({ scrollY: position }),
}));

// Initialize scroll listener - to be called at layout level
export const initScroll = () => {
    const handleScroll = () => {
        useScrollStore.getState()._setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set initial scroll position
    handleScroll();

    // Return cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

// Hook that only returns the scrollY value
export const useScroll = () => {
    return useScrollStore((state) => state.scrollY);
};

export default useScrollStore;
