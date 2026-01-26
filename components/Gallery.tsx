import React from 'react';

export const Gallery: React.FC = () => {
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

    return (
        <section id="gallery" className="py-16 md:py-24 bg-cream relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-16">
                    <span className="text-coral text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4 block">Photo Gallery</span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-charcoal mb-3 md:mb-4 tracking-tight">Game Day Memories</h2>
                    <p className="text-charcoal-light font-light text-sm md:text-base">Snapshots from our tournaments, events, and community moments.</p>
                </div>

                {/* Expanded Bento Grid Layout with Hero Centerpiece */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">

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
                        className="col-span-2 aspect-[2/1] md:aspect-auto md:row-span-1"
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
                    <div className="col-span-1 md:col-span-1 grid gap-2 md:gap-4">
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
                    <div className="col-span-2 md:col-span-4 row-span-2 relative group overflow-hidden border-l-4 border-coral shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent group-hover:from-charcoal/20 transition-all duration-500 z-10"></div>
                        <img
                            src="/images/hero-bg.jpg"
                            alt="PowerPlay Sports - Our Community"
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                            style={{ minHeight: '300px' }}
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/1200x800/FFF3E6/E76F51?text=PowerPlay";
                                e.currentTarget.onerror = null;
                            }}
                        />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                            <span className="bg-coral text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-wider shadow-lg">Our Community</span>
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
    );
};