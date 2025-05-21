'use client';

import { useMemo } from 'react';
import { useLayoutStore } from './useLayoutStore';

// Random ranges between 50-100vh for each card
const CARD_CONFIG = [
    { order: 9, start: 360, end: 465 }, // First card starts immediately, longer range
    { order: 2, start: 120, end: 180 }, // Starts early, overlaps with first
    { order: 7, start: 150, end: 280 }, // Starts in middle of previous
    { order: 1, start: 200, end: 350 }, // Starts before previous ends
    { order: 5, start: 250, end: 400 }, // Overlaps with previous
    { order: 8, start: 300, end: 420 }, // Starts before previous ends
    { order: 3, start: 350, end: 450 }, // Overlaps with previous
    { order: 10, start: 400, end: 470 }, // Starts before previous ends
    { order: 4, start: 0, end: 120 }, // Overlaps with previous
    { order: 6, start: 450, end: 500 }, // Last card finishes at 500vh
];

export function useCardPositions() {
    const { scrollY, height } = useLayoutStore();

    return useMemo(() => {
        // Calculate positions for 10 cards
        const positions = CARD_CONFIG.map((config) => {
            const cardId = `card${config.order}`;

            // Convert scroll ranges from vh to pixels
            const startScroll = (config.start / 100) * height;
            const endScroll = (config.end / 100) * height;
            const range = endScroll - startScroll;

            // Calculate progress within this card's range
            const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / range));

            // Calculate y position
            // Start at height (below viewport) and move up to 0 (top of viewport)
            const y = height - progress * (height - 80);

            // Smoother opacity transition
            const opacity = Math.min(1, Math.max(0, progress));

            return {
                [cardId]: {
                    y,
                    opacity,
                },
            };
        }).reduce((acc, curr) => ({ ...acc, ...curr }), {});

        return positions;
    }, [scrollY, height]);
}
