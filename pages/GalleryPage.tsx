import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

// Gallery image component for consistent styling
// Gallery image component for consistent styling
// Gallery image component for consistent styling
const GalleryImage: React.FC<{ src: string; alt: string; className?: string; delay?: number }> = ({ src, alt, className = '', delay = 0 }) => (
    <ScrollReveal className={`${className}`} width="100%" delay={delay}>
        <div className="relative group overflow-hidden border-l-4 border-coral shadow-lg w-full h-full">
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/FFF3E6/E76F51?text=Photo";
                    e.currentTarget.onerror = null;
                }}
            />
        </div>
    </ScrollReveal>
);

export const GalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream font-sans">
            <main className="pt-20">
                {/* Hero Section - Consistent with About/Events */}
                <section className="relative py-20 bg-charcoal overflow-hidden" data-navbar-theme="dark">
                    <div className="absolute inset-0">
                        <img
                            src="/images/hero-bg.jpg"
                            alt="PowerPlay Gallery"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-coral/20 text-coral text-xs lg:text-sm font-semibold uppercase tracking-widest mb-6 mt-8 md:mt-0">
                            Photo Gallery
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight">
                            Game Day <span className="text-coral">Memories</span>
                        </h1>
                        <p className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            Snapshots from our tournaments, events, and the community moments that make PowerPlay special.
                        </p>
                    </div>
                </section>


                <section className="py-12 md:py-24 bg-cream relative" data-navbar-theme="light">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Grid Layout - Optimized for Mobile Editorial and Desktop Bento Restoration */}
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">

                            {/* Row 1: Desktop [sq][sq][wide][sq][sq] */}
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (1).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.1}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (2).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.3}
                            />
                            <GalleryImage
                                src="/images/event-cricket.jpg"
                                alt="Cricket Action"
                                className="col-span-2 aspect-[16/9] md:aspect-[2/1] md:col-span-2 md:row-span-1"
                                delay={0.5}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (3).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.7}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (4).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.9}
                            />

                            {/* Row 2-3: Centerpiece [sq][large][sq] */}
                            {/* Left Column (Desktop) */}
                            <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025.jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                    delay={0.1}
                                />
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 (1).jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                    delay={0.3}
                                />
                            </div>

                            {/* HERO CENTERPIECE - 4x2 on Desktop. 4:2 = 2:1 aspect ratio. */}
                            <ScrollReveal className="col-span-2 md:col-span-4 md:row-span-2 md:aspect-[2/1]" width="100%" delay={0.5}>
                                <div className="relative group overflow-hidden border-l-4 border-coral-light shadow-2xl w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent group-hover:from-charcoal/20 transition-all duration-500 z-10"></div>
                                    <img
                                        src="/images/hero-bg.jpg"
                                        alt="PowerPlay Sports - Our Community"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/1200x800/FFF3E6/E76F51?text=PowerPlay";
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                                        <span className="bg-coral-light text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-wider shadow-lg">Our Community</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column (Desktop) */}
                            <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 from raghavsridhar09.jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                    delay={0.7}
                                />
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 from raghavsridhar09 (1).jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                    delay={0.9}
                                />
                            </div>

                            {/* Row 4: Desktop [wide][sq][sq][sq][sq] */}
                            <GalleryImage
                                src="/images/gallery-lineup.jpg"
                                alt="Team Lineup"
                                className="col-span-2 aspect-[21/9] md:aspect-[2/1] md:col-span-2 md:row-span-1"
                                delay={0.1}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (5).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.3}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (6).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.5}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 from raghavsridhar09.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.7}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.9}
                            />

                            {/* Row 5: Desktop [sq][sq][wide][sq][sq] */}
                            <GalleryImage
                                src="/images/gallery-pickleball.jpg"
                                alt="Pickleball"
                                className="aspect-square md:col-span-1"
                                delay={0.1}
                            />
                            <GalleryImage
                                src="/images/mvp.jpg"
                                alt="MVP"
                                className="aspect-square md:col-span-1"
                                delay={0.3}
                            />
                            <GalleryImage
                                src="/images/Photo Jul 20 2025 from raghavsridhar09 (2).jpg"
                                alt="PowerPlay Event"
                                className="col-span-2 aspect-[16/9] md:aspect-[2/1] md:col-span-2"
                                delay={0.5}
                            />
                            <GalleryImage
                                src="/images/Photo Jun 19 2025.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square md:col-span-1"
                                delay={0.7}
                            />
                            <GalleryImage
                                src="/images/gallery-coach.jpeg"
                                alt="Coach"
                                className="aspect-square md:col-span-1"
                                delay={0.9}
                            />
                            {/* Row 6: [wide][sq][sq][sq][sq] */}
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (10).jpeg"
                                alt="Gallery Moment"
                                className="col-span-2 aspect-[16/9] md:aspect-[2/1] md:col-span-2 md:row-span-1"
                                delay={0.1}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (6).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.3}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (3).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.5}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (8).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.7}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (7).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.9}
                            />

                            {/* Row 7: Feature Layout - [stack][HUGE][stack] */}
                            {/* Left Column Stack */}
                            <div className="col-span-2 md:col-span-1 md:col-start-1 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
                                <GalleryImage
                                    src="/images/WhatsApp Image 2026-02-09 at 3.19.37 PM.jpeg"
                                    alt="Gallery Moment"
                                    className="aspect-square"
                                    delay={0.1}
                                />
                                <GalleryImage
                                    src="/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (13).jpeg"
                                    alt="Gallery Moment"
                                    className="aspect-square"
                                    delay={0.3}
                                />
                            </div>

                            {/* Center Huge Image */}
                            <ScrollReveal className="col-span-2 md:col-span-4 md:col-start-2 md:aspect-[2/1]" width="100%" delay={0.5}>
                                <div className="relative group overflow-hidden border-l-4 border-coral-light shadow-2xl w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent group-hover:from-charcoal/20 transition-all duration-500 z-10"></div>
                                    <img
                                        src="/images/game-on-ibd-live.jpg"
                                        alt="Game On: IBD & Sports"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/1200x800/FFF3E6/E76F51?text=PowerPlay";
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                                        <span className="bg-coral-light text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-wider shadow-lg">Game On: IBD & Sports</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column Stack */}
                            <div className="col-span-2 md:col-span-1 md:col-start-6 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
                                <GalleryImage
                                    src="/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (5).jpeg"
                                    alt="Gallery Moment"
                                    className="aspect-square"
                                    delay={0.7}
                                />
                                <GalleryImage
                                    src="/images/speaker-slider2.jpeg"
                                    alt="Speaker Moment"
                                    className="aspect-square"
                                    delay={0.9}
                                />
                            </div>

                            {/* Row 8: Final Row - [sq][sq][sq][sq][sq][sq] */}
                            <GalleryImage
                                src="/images/trophy-ceremony.jpg"
                                alt="Trophy Ceremony"
                                className="aspect-square md:col-span-1"
                                delay={0.1}
                            />
                            <GalleryImage
                                src="/images/cricket-players.jpg"
                                alt="Cricket Players"
                                className="aspect-square md:col-span-1"
                                delay={0.3}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (1).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.5}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (4).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.7}
                            />
                            <GalleryImage
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (2).jpeg"
                                alt="Gallery Moment"
                                className="aspect-square md:col-span-1"
                                delay={0.9}
                            />
                            <GalleryImage
                                src="/images/speaker-slider.jpeg"
                                alt="Speaker Moment"
                                className="aspect-square md:col-span-1"
                                delay={1.1}
                            />

                        </div>
                    </div>
                </section>

            </main>
        </div >
    );
};
