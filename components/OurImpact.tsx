import React, { useEffect, useState, useRef } from 'react';
import { SectionHeader } from './SectionHeader';

const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string; prefix?: string }> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const startValue = 0;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(startValue + (end - startValue) * easeOut));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {prefix}{count}{suffix}
        </span>
    );
};

export const OurImpact: React.FC<{ bgClass?: string }> = ({ bgClass = 'bg-court' }) => {
    const stats = [
        { end: 5, prefix: '$', suffix: 'K+', label: 'Raised for families' },
        { end: 500, suffix: '+', label: 'Athletes united' },
        { end: 100, suffix: '%', label: 'Goes to families' },
    ];

    return (
        <section className={`relative py-24 md:py-28 overflow-hidden ${bgClass}`} data-navbar-theme="light">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <SectionHeader
                    eyebrow="By the numbers"
                    title="Our Impact"
                    subtitle="Real numbers from real tournaments. Every event adds up."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center px-6 py-10 bg-white rounded-lg border border-stone-150 transition-colors duration-200 hover:border-coral/30">
                            <div className="font-display font-semibold text-5xl md:text-6xl text-coral mb-3 leading-none tracking-tight">
                                <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="text-charcoal-light text-sm font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
