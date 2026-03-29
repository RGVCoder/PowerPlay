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
    const stats = [
        { end: 5, prefix: '$', suffix: 'K+', label: 'Raised for Pediatric Care' },
        { end: 500, suffix: '+', label: 'Athletes United' },
        { end: 100, suffix: '%', label: 'Goes to Families' },
    ];

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-white" data-navbar-theme="light">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header — no split color */}
                <div className="text-center mb-14">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
                        Our Impact
                    </h2>
                    <p className="text-charcoal-light text-base mt-3 max-w-xl mx-auto">
                        Real numbers. Real change. See the difference we're making together.
                    </p>
                </div>

                {/* Stats — simpler, no pill cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center px-6 py-10 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="font-sans font-bold text-5xl md:text-6xl text-charcoal mb-3 leading-none">
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
