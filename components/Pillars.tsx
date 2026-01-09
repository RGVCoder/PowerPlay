import React from 'react';

const pillars = [
    {
        title: 'Sports Tournaments',
        description: 'Cricket, pickleball, basketball — play sports, save lives.',
        image: '/images/trophy-ceremony.jpg',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Health Education',
        description: 'Real doctors. Real talks. Real impact.',
        image: '/images/about-mentor.jpg',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        title: '100% To Families',
        description: 'Zero admin fees. Every dollar goes directly to those in need.',
        image: '/images/gallery-lineup.jpg',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
];

export const Pillars: React.FC = () => {
    return (
        <section className="relative bg-cream py-24">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-charcoal/20"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">
                        What We Do
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-charcoal/20"></div>
                </div>

                {/* Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
                        >
                            {/* Background Image */}
                            <div className="aspect-[4/5] relative">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-coral flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {pillar.icon}
                                </div>

                                {/* Text */}
                                <h3 className="font-display font-bold text-2xl mb-3">{pillar.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
                            </div>

                            {/* Bottom accent border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
