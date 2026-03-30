import React from 'react';
import { Link } from 'react-router-dom';

export const Partners: React.FC<{ bgClass?: string }> = ({ bgClass = 'bg-white' }) => {
    const isGray = bgClass.includes('gray') || bgClass.includes('cream');
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
        },
        {
            name: 'Credit Union of Texas',
            logo: '/images/cutx.png',
        }
    ];

    // Duplicate partners for seamless scrolling
    const carouselPartners = [...partners, ...partners];

    return (
        <section className={`relative py-20 md:py-28 overflow-hidden ${bgClass}`} data-navbar-theme="light">
            <div className="w-full">
                {/* Section Header — no split color */}
                <div className="text-center mb-14 px-4">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
                        Our Partners
                    </h2>
                    <p className="text-charcoal-light text-base mt-3 max-w-xl mx-auto">
                        Organizations that believe in our mission and help us make a difference.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                        {carouselPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="mx-8 md:mx-14 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
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
                    <div className={`absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r ${isGray ? 'from-gray-50' : 'from-white'} to-transparent pointer-events-none z-10`}></div>
                    <div className={`absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l ${isGray ? 'from-gray-50' : 'from-white'} to-transparent pointer-events-none z-10`}></div>
                </div>

                {/* Partnership CTA */}
                <div className="text-center">
                    <div className="inline-block pt-8">
                        <Link
                            to="/contact"
                            className="text-charcoal-light hover:text-coral transition-colors text-sm"
                        >
                            Interested in partnering?{' '}
                            <span className="text-coral font-medium ml-0.5 hover:ml-1.5 transition-all">Get in touch →</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
