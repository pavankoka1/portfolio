'use client';

import React from 'react';
import ConstantLeft from '@/components/home/ConstantLeft';
import TimeLocation from '@/components/home/TimeLocation';
import ScrollIndicator from '@/components/home/ScrollIndicator';
import Section1 from '@/components/sections/Section1';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';
import Section4 from '@/components/sections/Section4';

export default function Home() {
    return (
        <main className="relative">
            <ConstantLeft />
            <TimeLocation />
            <ScrollIndicator />
            <div className="snap-start h-screen">
                <Section1 />
            </div>
            <div className="snap-start h-screen">
                <Section2 />
            </div>
            {/* <div className="snap-start h-screen">
                <Section3 />
            </div>
            <div className="snap-start h-screen">
                <Section4 />
            </div> */}
        </main>
    );
}
