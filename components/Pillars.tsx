import React from 'react';

export const Pillars: React.FC = () => {
    const pillars = [
        {
            title: "SPORTS FOR GOOD",
            description: "We organize tournaments in cricket, pickleball, basketball, and more—turning games into opportunities to give back.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "HEALTH EDUCATION",
            description: "Real doctors. Real talks. Real impact. We pair our events with educational sessions from medical professionals.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
            )
        },
        {
            title: "100% TO FAMILIES",
            description: "Zero admin fees. Every dollar raised goes directly to children and families navigating pediatric illness.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-white" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-black-cortex mb-4 tracking-tight">
                        Why <span className="text-coral-cortex">PowerPlay?</span>
                    </h2>
                </div>

                {/* Grid Layout - 3 Standalone Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center px-8 py-12 bg-cream rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(255,127,80,0.2)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-coral-cortex/10 flex items-center justify-center text-coral-cortex mb-8 group-hover:bg-coral-cortex group-hover:text-white transition-colors duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="font-sans font-black text-xl md:text-2xl text-charcoal mb-4 uppercase">
                                {pillar.title}
                            </h3>
                            <p className="text-charcoal-light text-base leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
