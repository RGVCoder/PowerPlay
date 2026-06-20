import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';

export const Partners: React.FC<{ bgClass?: string }> = ({ bgClass = 'bg-court' }) => {
    const isSideline = bgClass.includes('sideline') || bgClass.includes('gray');
    const partners = [
        { name: 'Courtside Change', logo: '/images/courtside.png' },
        { name: 'AA Sports', logo: '/images/aa_sports.png' },
        { name: 'HeroesForIBD', logo: '/images/heroesforibd.png' },
        { name: "Children's Health", logo: '/images/childrens-health.png' },
        { name: "Crohn's & Colitis Foundation", logo: '/images/crohns-colitis.png' },
        { name: 'Chicken N Pickle', logo: '/images/Chicken N Pickle Logo.png' },
        { name: 'Credit Union of Texas', logo: '/images/cutx.png' }
    ];

    const carouselPartners = [...partners, ...partners];

    return (
        <section className={`relative py-20 md:py-28 overflow-hidden ${bgClass}`} data-navbar-theme="light">
            <div className="w-full">
                <div className="px-4">
                    <SectionHeader
                        eyebrow="With us"
                        title="Our Partners"
                        subtitle="Organizations that believe in our mission and help us make a difference."
                    />
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                        {carouselPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="mx-8 md:mx-14 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border border-stone-150 flex items-center justify-center overflow-hidden transition-colors hover:border-coral/30">
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

                    <div className={`absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r ${isSideline ? 'from-sideline' : 'from-court'} to-transparent pointer-events-none z-10`} />
                    <div className={`absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l ${isSideline ? 'from-sideline' : 'from-court'} to-transparent pointer-events-none z-10`} />
                </div>

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
