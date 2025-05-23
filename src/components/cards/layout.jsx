'use client';

import CardLayout from './CardLayout';
import ConstantLeft from '@/components/home/ConstantLeft';
import AnimatedText from './AnimatedText';

export default function CardsLayout() {
    return (
        <div className="h-[600vh] relative">
            <ConstantLeft color="text-white/60" />
            <CardLayout />
            <AnimatedText />
        </div>
    );
}
