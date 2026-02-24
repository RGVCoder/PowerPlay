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

                {/* Stats Grid - ClickHouse Style with Coral Accents */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-coral-cortex/20">
                    <div className="text-center group p-12 border-r-2 border-b-2 border-coral-cortex/20 bg-cream hover:bg-coral-cortex/[0.05] transition-all duration-300">
                        <div className="font-sans font-bold text-5xl md:text-7xl text-coral-cortex mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={5} prefix="$" suffix="K+" />
                        </div>
                        <div className="text-black-cortex/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                            Raised for Pediatric Care
                        </div>
                    </div>
                    <div className="text-center group p-12 border-r-2 border-b-2 border-coral-cortex/20 bg-cream hover:bg-coral-cortex/[0.05] transition-all duration-300">
                        <div className="font-sans font-bold text-5xl md:text-7xl text-coral-cortex mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={500} suffix="+" />
                        </div>
                        <div className="text-black-cortex/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                            Athletes United
                        </div>
                    </div>
                    <div className="text-center group p-12 border-r-2 border-b-2 border-coral-cortex/20 bg-cream hover:bg-coral-cortex/[0.05] transition-all duration-300">
                        <div className="font-sans font-bold text-5xl md:text-7xl text-coral-cortex mb-4 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter end={100} suffix="%" />
                        </div>
                        <div className="text-black-cortex/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                            Goes to Families in Need
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
