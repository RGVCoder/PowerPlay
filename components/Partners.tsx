import React from 'react';

export const Partners: React.FC = () => {
    const partners = [
        {
            name: 'Courtside Change',
            logo: '/images/courtside.png',
        },
        {
            name: 'AA Sports',
            logo: '/images/aa_sports.png',
        },
        {
            name: 'HeroesForIBD',
            logo: '/images/heroesforibd.png',
        },
        {
            name: "Children's Health",
            logo: '/images/childrens-health.png',
        },
        {
            name: "Crohn's & Colitis Foundation",
            logo: '/images/crohns-colitis.png',
        },
        {
            name: 'Chicken N Pickle',
            logo: '/images/Chicken N Pickle Logo.png',
        }
    ];

    // Duplicate partners for seamless scrolling
    const carouselPartners = [...partners, ...partners];

    return (
        <section className="relative bg-white py-24 overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-coral-light to-coral"></div>

            <div className="w-full">
                {/* Section Header */}
                <div className="text-center mb-16 px-4">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal mb-4">
                        Our <span className="text-coral">Partners</span>
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
                        Organizations that believe in our mission and help us make a difference.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                        {carouselPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/400x400/ffffff/E76F51?text=" + partner.name.substring(0, 1);
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Masks for Fade Effect at Edges */}
                    <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                    <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Partnership CTA */}
                <div className="text-center">
                    <div className="inline-block border-t border-charcoal/20 pt-8">
                        <a
                            href="mailto:powerplay@hackclub.com"
                            className="text-charcoal-light hover:text-coral transition-colors text-sm group"
                        >
                            Interested in partnering?
                            <span className="text-coral font-semibold ml-1 group-hover:ml-2 transition-all">Get in touch →</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
