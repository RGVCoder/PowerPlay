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
        <section className="relative py-16 md:py-24 overflow-hidden bg-white" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-black-cortex mb-4">
                        Our <span className="text-coral-cortex">Impact</span>
                    </h2>
                    <p className="text-black-cortex/60 text-lg max-w-2xl mx-auto">
                        Real numbers. Real change. See the difference we're making together.
                    </p>
                </div>

                {/* Stats Grid - Standalone Cards to match Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center group px-8 py-12 bg-cream rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(255,127,80,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="font-sans font-black text-6xl md:text-[80px] text-charcoal mb-4 group-hover:text-coral-cortex transition-colors duration-300 leading-none">
                            <AnimatedCounter end={5} prefix="$" suffix="K+" />
                        </div>
                        <div className="text-charcoal-light text-sm font-bold tracking-[0.2em] uppercase">
                            Raised for Pediatric Care
                        </div>
                    </div>
                    <div className="text-center group px-8 py-12 bg-cream rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(255,127,80,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="font-sans font-black text-6xl md:text-[80px] text-charcoal mb-4 group-hover:text-coral-cortex transition-colors duration-300 leading-none">
                            <AnimatedCounter end={500} suffix="+" />
                        </div>
                        <div className="text-charcoal-light text-sm font-bold tracking-[0.2em] uppercase">
                            Athletes United
                        </div>
                    </div>
                    <div className="text-center group px-8 py-12 bg-cream rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(255,127,80,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="font-sans font-black text-6xl md:text-[80px] text-charcoal mb-4 group-hover:text-coral-cortex transition-colors duration-300 leading-none">
                            <AnimatedCounter end={100} suffix="%" />
                        </div>
                        <div className="text-charcoal-light text-sm font-bold tracking-[0.2em] uppercase">
                            Goes to Families in Need
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
