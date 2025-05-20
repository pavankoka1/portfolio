'use client';

import React, { useEffect } from 'react';
import { initLayout } from '@/hooks/useLayoutStore';
import ConstantLeft from '@/components/home/ConstantLeft';
import TimeLocation from '@/components/home/TimeLocation';
import ScrollIndicator from '@/components/home/ScrollIndicator';
import Section1 from '@/components/sections/Section1';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';
import Section4 from '@/components/sections/Section4';

export default function Home() {
    // Initialize layout listeners
    useEffect(() => {
        const cleanup = initLayout();
        return cleanup;
    }, []);

    return (
        <main className="relative">
            <ConstantLeft />
            <TimeLocation />
            <ScrollIndicator />
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
                <div className="snap-start">
                    <Section1 />
                </div>
                <div className="snap-start">
                    <Section2 />
                </div>
                <div className="snap-start">
                    <Section3 />
                </div>
                <div className="snap-start">
                    <Section4 />
                </div>
            </div>
        </main>
    );
}
