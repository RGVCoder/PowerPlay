import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Gallery image component for consistent styling
const GalleryImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
    <div className={`relative group overflow-hidden border-l-4 border-coral shadow-lg ${className}`}>
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
);

export const GalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream font-sans">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section - Consistent with About/Events */}
                <section className="relative py-32 bg-charcoal overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/hero-bg.jpg"
                            alt="PowerPlay Gallery"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block px-4 py-2 bg-coral/20 text-coral text-sm font-semibold uppercase tracking-widest mb-6">
                            Photo Gallery
                        </div>
                        <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-8 tracking-tight">
                            Game Day <span className="text-coral">Memories</span>
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            Snapshots from our tournaments, events, and the community moments that make PowerPlay special.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-cream relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Expanded Bento Grid Layout with Hero Centerpiece */}
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">

                            {/* Row 1: Top surrounding images */}
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (1).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (2).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/event-cricket.jpg"
                                alt="Cricket Action"
                                className="col-span-2 aspect-[2/1]"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (3).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (4).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />

                            {/* Row 2-3: Main centerpiece row with Hero */}
                            <div className="col-span-1 md:col-span-1 grid gap-3 md:gap-4">
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025.jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                />
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 (1).jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                />
                            </div>

                            {/* HERO CENTERPIECE - Large central image */}
                            <div className="col-span-2 md:col-span-4 row-span-2 relative group overflow-hidden border-l-4 border-teal shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent group-hover:from-charcoal/20 transition-all duration-500 z-10"></div>
                                <img
                                    src="/images/hero-bg.jpg"
                                    alt="PowerPlay Sports - Our Community"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                    style={{ minHeight: '400px' }}
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/1200x800/FFF3E6/E76F51?text=PowerPlay";
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="bg-teal text-white text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-lg">Our Community</span>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-1 grid gap-3 md:gap-4">
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 from raghavsridhar09.jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                />
                                <GalleryImage
                                    src="/images/Photo Jul 20 2025 from raghavsridhar09 (1).jpg"
                                    alt="PowerPlay Event"
                                    className="aspect-square"
                                />
                            </div>

                            {/* Row 4: Bottom surrounding images */}
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (5).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 (6).jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/gallery-lineup.jpg"
                                alt="Team Lineup"
                                className="col-span-2 aspect-[2/1]"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025 from raghavsridhar09.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 23 2025.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />

                            {/* Row 5: Additional images */}
                            <GalleryImage
                                src="/images/gallery-pickleball.jpg"
                                alt="Pickleball"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/mvp.jpg"
                                alt="MVP"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/Photo Jul 20 2025 from raghavsridhar09 (2).jpg"
                                alt="PowerPlay Event"
                                className="col-span-2 aspect-[2/1]"
                            />
                            <GalleryImage
                                src="/images/Photo Jun 19 2025.jpg"
                                alt="PowerPlay Event"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/gallery-coach.jpeg"
                                alt="Coach"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/trophy-ceremony.jpg"
                                alt="Trophy Ceremony"
                                className="aspect-square"
                            />
                            <GalleryImage
                                src="/images/cricket-players.jpg"
                                alt="Cricket Players"
                                className="aspect-square"
                            />

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
