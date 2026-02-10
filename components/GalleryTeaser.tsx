import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
    { src: '/images/gallery-pickleball.jpg', caption: 'Intense duplicate action on the court' },
    { src: '/images/event-cricket.jpg', caption: 'Cricket highlights from our tournament' },
    { src: '/images/speaker-slider2.jpeg', caption: 'Inspiring words from our guest speakers' },
    { src: '/images/speaker-slider.jpeg', caption: 'Sharing knowledge and experience' },
    { src: '/images/Photo Jul 20 2025 from raghavsridhar09.jpg', caption: 'Community coming together' },
    { src: '/images/gallery-coach.jpeg', caption: 'Mentorship in action' },
    { src: '/images/mvp.jpg', caption: 'Celebrating our tournament MVP' },
];

const GAP = 6;

export const GalleryTeaser: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [widths, setWidths] = useState<Record<number, number>>({});
    const total = galleryImages.length;

    const changeSlide = useCallback((newIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(((newIndex % total) + total) % total);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, total]);

    const goToNext = useCallback(() => changeSlide(activeIndex + 1), [activeIndex, changeSlide]);
    const goToPrev = useCallback(() => changeSlide(activeIndex - 1), [activeIndex, changeSlide]);

    useEffect(() => {
        const interval = setInterval(goToNext, 4000);
        return () => clearInterval(interval);
    }, [goToNext]);

    const handleImageLoad = (index: number, width: number) => {
        setWidths(prev => ({ ...prev, [index]: width }));
    };

    const getPosition = (offset: number): number => {
        if (offset === 0) return 0;

        let pos = 0;
        const activeW = widths[activeIndex] || 250;

        if (offset > 0) {
            pos = activeW / 2;
            for (let i = 1; i <= offset; i++) {
                const idx = ((activeIndex + i) % total + total) % total;
                const w = widths[idx] || 250;
                if (i === offset) {
                    pos += GAP + w / 2;
                } else {
                    pos += GAP + w;
                }
            }
        } else {
            pos = -activeW / 2;
            for (let i = -1; i >= offset; i--) {
                const idx = ((activeIndex + i) % total + total) % total;
                const w = widths[idx] || 250;
                if (i === offset) {
                    pos -= GAP + w / 2;
                } else {
                    pos -= GAP + w;
                }
            }
        }
        return pos;
    };



    return (
        <section className="bg-cream py-16 md:py-24 overflow-hidden relative">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
                <div className="text-center">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal mb-4">
                        Golden <span className="text-coral">Moments</span>
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
                        Highlights from our tournaments, events, and community celebrations.
                    </p>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative">
                <button onClick={goToPrev} disabled={isAnimating}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all text-xl md:text-2xl rounded-full md:rounded-none">
                    ‹
                </button>

                <div className="relative h-[250px] md:h-[380px] overflow-hidden">
                    {galleryImages.map((image, i) => {
                        // Calculate relative offset (-3 to +3) based on activeIndex
                        let offset = (i - activeIndex) % total;
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        const isActive = offset === 0;
                        const xPos = getPosition(offset);

                        // Opacity logic: Fade out edges to mask the wrap-around
                        const opacity = isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3); // Stricter fade-out

                        // Z-Index: Center is top, edges are bottom
                        const zIndex = isActive ? 10 : 5 - Math.abs(offset);

                        return (
                            <div
                                key={i} // Stable key for smooth transition
                                onClick={() => changeSlide(i)}
                                className="absolute top-0 left-1/2 h-full cursor-pointer transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1)" // Fluid ease
                                style={{
                                    transform: `translateX(calc(-50% + ${xPos}px)) scale(${isActive ? 1 : 0.9})`, // Scale non-active items slightly
                                    opacity,
                                    zIndex
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className={`h-full w-auto object-cover md:object-contain transition-all duration-500 ${isActive ? 'border-2 md:border-4 border-coral shadow-2xl scale-105 md:scale-100' : 'grayscale'}`}
                                    onLoad={(e) => handleImageLoad(i, e.currentTarget.offsetWidth)}
                                />
                            </div>
                        );
                    })}
                </div>

                <button onClick={goToNext} disabled={isAnimating}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all text-xl md:text-2xl rounded-full md:rounded-none">
                    ›
                </button>
            </div>

            {/* Caption and Thumbnails */}
            <div className="mt-8">
                <p className="text-center text-charcoal/60 text-xs md:text-sm mb-6 px-6 italic">{galleryImages[activeIndex].caption}</p>
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 px-4">
                    {galleryImages.map((image, index) => (
                        <button key={index} onClick={() => changeSlide(index)} disabled={isAnimating}
                            className={`w-9 h-9 md:w-14 md:h-14 overflow-hidden transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-coral ring-offset-2 ring-offset-charcoal opacity-100' : 'opacity-40 hover:opacity-70'
                                }`}>
                            <img src={image.src} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* View Gallery Link */}
            <div className="text-center mt-10">
                <Link to="/gallery" className="inline-flex items-center gap-2 text-coral hover:text-charcoal transition-colors text-xs md:text-sm font-medium tracking-wide group uppercase">
                    View Full Gallery
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </section>
    );
};
