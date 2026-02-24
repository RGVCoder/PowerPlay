import React from 'react';
import { Link } from 'react-router-dom';

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
        <section className="relative bg-white py-24 overflow-hidden" data-navbar-theme="light">
            <div className="w-full">
                {/* Section Header */}
                <div className="text-center mb-16 px-4">
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-black-cortex mb-4">
                        Our <span className="text-coral-cortex">Partners</span>
                    </h2>
                    <p className="text-black-cortex/60 text-lg max-w-2xl mx-auto">
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
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-black/5 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md hover:border-coral-cortex/20 transition-all duration-300">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/400x400/ffffff/FF7F50?text=" + partner.name.substring(0, 1);
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
                    <div className="inline-block pt-8">
                        <Link
                            to="/contact"
                            className="text-black-cortex/50 hover:text-coral-cortex transition-colors text-sm group"
                        >
                            Interested in partnering?
                            <span className="text-coral-cortex font-bold ml-1 group-hover:ml-2 transition-all">Get in touch →</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
