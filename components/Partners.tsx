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
        }
    ];

    return (
        <section className="relative bg-white py-24">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-teal to-coral"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-teal/30 to-charcoal/20"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">
                        Our Partners
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-teal/30 to-charcoal/20"></div>
                </div>

                {/* Logo Strip */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-8 md:mb-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-white border-2 border-coral/30 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md hover:border-coral/50 transition-all duration-300">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
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
