import React from 'react';

export const ImpactVideo: React.FC = () => {
    return (
        <section className="relative bg-cream py-12 md:py-24 overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal mb-4">
                        Exclusive <span className="text-coral">Interview</span>
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
                        A conversation with a cricket legend about empowering youth through sports.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Asif's Photo & Bio */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                        <div className="relative mb-8">
                            {/* Photo with accent border */}
                            <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden shadow-2xl">
                                <img
                                    src="/images/asif-mujtaba.png"
                                    alt="Asif Mujtaba"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-coral-light -z-10"></div>
                        </div>

                        {/* Bio */}
                        <div className="text-center lg:text-left">
                            <h3 className="font-display font-bold text-2xl text-charcoal mb-2">Asif Mujtaba</h3>
                            <div className="w-12 h-1 bg-coral mb-4 mx-auto lg:mx-0"></div>
                            <p className="text-coral-light text-sm font-semibold uppercase tracking-wide mb-4">Former Pakistan International Cricketer</p>
                            <p className="text-charcoal-light text-sm leading-relaxed max-w-xs">
                                25 Tests & 66 ODIs for Pakistan. Now dedicated to empowering youth through sports.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Video */}
                    <div className="lg:col-span-8">
                        <div className="relative overflow-hidden shadow-2xl">
                            <video
                                className="w-full aspect-video object-cover"
                                controls
                                poster="/images/interview-poster.png"
                            >
                                <source src="/images/final_asif_interview.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-coral-light to-coral"></div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-charcoal-light mt-6 text-sm italic">
                            Hear how PowerPlay is making a difference in children's lives
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
