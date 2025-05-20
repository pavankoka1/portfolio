import { create } from 'zustand';

// Create a store for layout-related state
const useLayoutStore = create((set) => ({
    // Window dimensions
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,

    // Scroll position
    scrollY: 0,

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
    _setScrollY: (scrollY) => set({ scrollY }),
}));

// Initialize layout listeners - to be called at layout level
export const initLayout = () => {
    const handleResize = () => {
        useLayoutStore.getState()._setDimensions(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
        useLayoutStore.getState()._setScrollY(window.scrollY);
    };

    // Add event listeners
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set initial values
    handleResize();
    handleScroll();

    // Return cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
    };
};

// Hook that returns all layout state
export const useLayout = () => {
    return useLayoutStore((state) => ({
        width: state.width,
        height: state.height,
        scrollY: state.scrollY,
        isMobile: state.isMobile,
        isTablet: state.isTablet,
        isDesktop: state.isDesktop,
        isSafari: state.isSafari,
        isChrome: state.isChrome,
        isFirefox: state.isFirefox,
    }));
};

// Individual hooks for specific values
export const useWindowSize = () => {
    return useLayoutStore((state) => ({
        width: state.width,
        height: state.height,
    }));
};

export const useDeviceType = () => {
    return useLayoutStore((state) => ({
        isMobile: state.isMobile,
        isTablet: state.isTablet,
        isDesktop: state.isDesktop,
    }));
};

export const useBrowserType = () => {
    return useLayoutStore((state) => ({
        isSafari: state.isSafari,
        isChrome: state.isChrome,
        isFirefox: state.isFirefox,
    }));
};

export default useLayoutStore;
