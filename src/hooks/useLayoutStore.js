import { create } from 'zustand';

// Create a store for layout-related state
export const useLayoutStore = create((set) => ({
    // Window dimensions
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,

    // Scroll position
    scrollY: 0,
    currentSection: 0,

    // Device details
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,

    // Browser details
    isSafari: typeof window !== 'undefined' ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false,
    isChrome: typeof window !== 'undefined' ? /Chrome/.test(navigator.userAgent) : false,
    isFirefox: typeof window !== 'undefined' ? /Firefox/.test(navigator.userAgent) : false,

    // Private setters
    _setDimensions: (width, height) =>
        set({
            width,
            height,
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024,
        }),
    _setScrollY: (scrollY) => {
        const height = useLayoutStore.getState().height;
        // Calculate the threshold (25% of section height)
        const threshold = height * 0.25;
        // Calculate which section we're in based on scroll position and threshold
        const currentSection = Math.floor((scrollY + threshold) / height);
        set({ scrollY, currentSection });
    },
}));

// Initialize layout listeners - to be called at layout level
export const initLayout = () => {
    const handleResize = () => {
        useLayoutStore.getState()._setDimensions(window.innerWidth, window.innerHeight);
    };

    // Add event listeners
    window.addEventListener('resize', handleResize, { passive: true });

    // Set initial values
    handleResize();

    // Return cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
    };
};

// Individual hooks for specific values
export const useWindowSize = () => {
    const width = useLayoutStore((state) => state.width);
    const height = useLayoutStore((state) => state.height);
    return { width, height };
};

export const useScrollPosition = () => {
    return useLayoutStore((state) => state.scrollY);
};

export const useCurrentSection = () => {
    return useLayoutStore((state) => state.currentSection);
};

export const useDeviceType = () => {
    const isMobile = useLayoutStore((state) => state.isMobile);
    const isTablet = useLayoutStore((state) => state.isTablet);
    const isDesktop = useLayoutStore((state) => state.isDesktop);
    return { isMobile, isTablet, isDesktop };
};

export const useBrowserType = () => {
    const isSafari = useLayoutStore((state) => state.isSafari);
    const isChrome = useLayoutStore((state) => state.isChrome);
    const isFirefox = useLayoutStore((state) => state.isFirefox);
    return { isSafari, isChrome, isFirefox };
};

// Hook that returns all layout state (use with caution)
export const useLayout = () => {
    const width = useLayoutStore((state) => state.width);
    const height = useLayoutStore((state) => state.height);
    const scrollY = useLayoutStore((state) => state.scrollY);
    const currentSection = useLayoutStore((state) => state.currentSection);
    const isMobile = useLayoutStore((state) => state.isMobile);
    const isTablet = useLayoutStore((state) => state.isTablet);
    const isDesktop = useLayoutStore((state) => state.isDesktop);
    const isSafari = useLayoutStore((state) => state.isSafari);
    const isChrome = useLayoutStore((state) => state.isChrome);
    const isFirefox = useLayoutStore((state) => state.isFirefox);

    return {
        width,
        height,
        scrollY,
        currentSection,
        isMobile,
        isTablet,
        isDesktop,
        isSafari,
        isChrome,
        isFirefox,
    };
};
