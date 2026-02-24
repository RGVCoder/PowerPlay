import React from 'react';

export const Pillars: React.FC = () => {
    const pillars = [
        {
            title: "Elite Tournaments",
            description: "Professional-grade sports events that bring the community together for a cause."
        },
        {
            title: "Health Education",
            description: "Real doctors. Real talks. Real impact. Educating the next generation on pediatric health."
        },
        {
            title: "100% Direct Impact",
            description: "Zero salaries. Zero admin fees. Every dollar goes directly to families in need."
        },
        {
            title: "Student-Led Innovation",
            description: "Powered by the energy and passion of young leaders dedicated to social change."
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
                    <p className="text-black-cortex/60 text-lg max-w-2xl mx-auto">
                        We're rewriting the rules of charity. No red tape, no hidden fees—just pure impact powered by youth sports.
                    </p>
                </div>

                {/* Grid Layout - ClickHouse Style Cells with Coral Accents */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-coral-cortex/20">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center p-8 bg-cream border-r-2 border-b-2 border-coral-cortex/20 hover:bg-coral-cortex/[0.05] hover:border-coral-cortex/40 transition-all duration-300"
                        >
                            <h3 className="font-sans font-bold text-xl md:text-2xl text-coral-cortex mb-4 leading-snug">
                                {pillar.title}
                            </h3>
                            <p className="text-black-cortex/60 text-sm md:text-base leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
