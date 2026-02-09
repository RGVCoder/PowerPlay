import React, { useEffect, useState, useRef } from 'react';

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

            // Ease out quart
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

export const OurImpact: React.FC = () => {
    return (
        <section className="relative bg-charcoal py-12 md:py-24 overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral/5 blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 blur-[100px]"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-10 md:mb-16">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
                        Our Impact
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    <div className="text-center group">
                        <div className="font-display font-bold text-5xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={5} prefix="$" suffix="K+" />
                        </div>
                        <div className="w-12 h-1 bg-coral mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Raised for Pediatric Care
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="font-display font-bold text-5xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={500} suffix="+" />
                        </div>
                        <div className="w-12 h-1 bg-teal mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Athletes United
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="font-display font-bold text-5xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={100} suffix="%" />
                        </div>
                        <div className="w-12 h-1 bg-coral mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Goes to Families in Need
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
