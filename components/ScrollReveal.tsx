import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number; // Delay in seconds
    className?: string;
    threshold?: number; // 0.0 to 1.0 (percentage of element visible)
    [key: string]: any;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = '100%',
    delay = 0,
    className = '',
    threshold = 0.1,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing to keep it visible
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            style={{
                width,
                transitionDelay: `${delay}s`,
            }}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
                } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
