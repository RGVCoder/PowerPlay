import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
    { src: '/images/giveback2.png', caption: 'Giveback Night at Chicken N Pickle' },
    { src: '/images/pickleball-winners.jpg', caption: 'Celebrating our tournament winners' },
    { src: '/images/pickleball-gal-2.jpg', caption: 'Tournament action' },
    { src: '/images/gallery-pickleball.jpg', caption: 'Intense duplicate action on the court' },
    { src: '/images/event-cricket.jpg', caption: 'Cricket highlights from our tournament' },
    { src: '/images/speaker-slider2.jpeg', caption: 'Inspiring words from our guest speakers' },
    { src: '/images/speaker-slider.jpeg', caption: 'Sharing knowledge and experience' },
    { src: '/images/Photo Jul 20 2025 from raghavsridhar09.jpg', caption: 'Community coming together' },
    { src: '/images/gallery-coach.jpeg', caption: 'Mentorship in action' },
    { src: '/images/mvp.jpg', caption: 'Celebrating our tournament MVP' },
];

const GAP = 6;

interface GalleryTeaserProps {
    bgClass?: string;
}

export const GalleryTeaser: React.FC<GalleryTeaserProps> = ({ bgClass = 'bg-white' }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [widths, setWidths] = useState<Record<number, number>>({});
    const total = galleryImages.length;
    const isLight = bgClass === 'bg-white' || bgClass === 'bg-cream';

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
        <section className={`relative py-20 md:py-28 overflow-hidden ${bgClass}`} data-navbar-theme={isLight ? "light" : "dark"}>
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14 relative z-10">
                <div className="text-center">
                    <h2 className={`font-display font-bold text-3xl md:text-4xl tracking-tight ${isLight ? 'text-charcoal' : 'text-white'}`}>
                        Gallery Highlights
                    </h2>
                    <p className={`${isLight ? 'text-charcoal-light' : 'text-white/60'} text-base mt-3 max-w-xl mx-auto`}>
                        Highlights from our tournaments, events, and community celebrations.
                    </p>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative">
                <button onClick={goToPrev} disabled={isAnimating}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors text-lg md:text-xl rounded-full">
                    ‹
                </button>

                <div className="relative h-[250px] md:h-[380px] overflow-hidden">
                    {galleryImages.map((image, i) => {
                        let offset = (i - activeIndex) % total;
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        const isActive = offset === 0;
                        const xPos = getPosition(offset);
                        const opacity = isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3);
                        const zIndex = isActive ? 10 : 5 - Math.abs(offset);

                        return (
                            <div
                                key={i}
                                onClick={() => changeSlide(i)}
                                className="absolute top-0 left-1/2 h-full cursor-pointer transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1)"
                                style={{
                                    transform: `translateX(calc(-50% + ${xPos}px)) scale(${isActive ? 1 : 0.9})`,
                                    opacity,
                                    zIndex
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className={`h-full w-auto object-cover md:object-contain transition-all duration-500 rounded-lg ${isActive ? 'shadow-xl' : 'opacity-70'}`}
                                    onLoad={(e) => handleImageLoad(i, e.currentTarget.offsetWidth)}
                                />
                            </div>
                        );
                    })}
                </div>

                <button onClick={goToNext} disabled={isAnimating}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors text-lg md:text-xl rounded-full">
                    ›
                </button>
            </div>

            {/* Caption and Thumbnails */}
            <div className="mt-8">
                <p className={`text-center ${isLight ? 'text-charcoal-light' : 'text-white/60'} text-xs md:text-sm mb-5 px-6`}>{galleryImages[activeIndex].caption}</p>
                <div className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 px-4">
                    {galleryImages.map((image, index) => (
                        <button key={index} onClick={() => changeSlide(index)} disabled={isAnimating}
                            className={`w-8 h-8 md:w-12 md:h-12 overflow-hidden rounded-lg transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-coral ring-offset-1 opacity-100' : 'opacity-30 hover:opacity-60'} ${index === activeIndex ? (isLight ? 'ring-offset-white' : 'ring-offset-black') : ''}`}>
                            <img src={image.src} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* View Gallery Link */}
            <div className="text-center mt-8">
                <Link to="/gallery" className={`inline-flex items-center gap-1.5 text-coral ${isLight ? 'hover:text-charcoal' : 'hover:text-white'} transition-colors text-sm font-medium group`}>
                    View Full Gallery
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
            </div>
        </section>
    );
};
