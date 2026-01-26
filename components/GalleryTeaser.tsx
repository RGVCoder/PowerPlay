import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
    { src: '/images/Photo Jun 23 2025 (1).jpg', caption: 'Teamwork in action at PowerPlay event' },
    { src: '/images/trophy-ceremony.jpg', caption: 'Champions celebrating their victory' },
    { src: '/images/mvp.jpg', caption: 'MVP of the tournament receiving recognition' },
    { src: '/images/gallery-lineup.jpg', caption: 'Teams lining up before the big match' },
    { src: '/images/Photo Jun 23 2025 (3).jpg', caption: 'Athletes competing at tournament' },
    { src: '/images/gallery-coach.jpeg', caption: 'Coach mentoring young athletes' },
    { src: '/images/cricket-players.jpg', caption: 'Cricket players ready for action' },
    { src: '/images/Photo Jun 19 2025.jpg', caption: 'Community gathering and support' },
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

    const visibleOffsets = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

    return (
        <section className="bg-charcoal py-16 md:py-24 overflow-hidden relative">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                    <h2 className="font-display font-bold text-xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
                        Game Day Moments
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative">
                <button onClick={goToPrev} disabled={isAnimating}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all text-xl md:text-2xl rounded-full md:rounded-none">
                    ‹
                </button>

                <div className="relative h-[250px] md:h-[380px] overflow-hidden">
                    {visibleOffsets.map(offset => {
                        const idx = ((activeIndex + offset) % total + total) % total;
                        const image = galleryImages[idx];
                        const isActive = offset === 0;
                        const xPos = getPosition(offset);
                        const opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.12);

                        return (
                            <div
                                key={`${idx}-${offset}`}
                                onClick={() => changeSlide(idx)}
                                className="absolute top-0 left-1/2 h-full cursor-pointer transition-all duration-500 ease-out"
                                style={{
                                    transform: `translateX(calc(-50% + ${xPos}px))`,
                                    opacity,
                                    zIndex: isActive ? 10 : 5 - Math.abs(offset)
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className={`h-full w-auto object-cover md:object-contain transition-all duration-300 ${isActive ? 'border-2 md:border-4 border-coral shadow-2xl scale-105 md:scale-100' : 'grayscale'}`}
                                    onLoad={(e) => handleImageLoad(idx, e.currentTarget.offsetWidth)}
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
                <p className="text-center text-white/60 text-xs md:text-sm mb-6 px-6 italic">{galleryImages[activeIndex].caption}</p>
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
                <Link to="/gallery" className="inline-flex items-center gap-2 text-coral hover:text-white transition-colors text-xs md:text-sm font-medium tracking-wide group uppercase">
                    View Full Gallery
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </section>
    );
};
