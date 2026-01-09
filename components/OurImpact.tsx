import React from 'react';

export const OurImpact: React.FC = () => {
    return (
        <section className="relative bg-charcoal py-24 overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral/5 blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 blur-[100px]"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
                        Our Impact
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    <div className="text-center group">
                        <div className="font-display font-bold text-6xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            $5K<span className="text-coral">+</span>
                        </div>
                        <div className="w-12 h-1 bg-coral mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Raised for Pediatric Care
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="font-display font-bold text-6xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            500<span className="text-coral">+</span>
                        </div>
                        <div className="w-12 h-1 bg-teal mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Athletes United
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="font-display font-bold text-6xl md:text-7xl text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                            100<span className="text-coral">%</span>
                        </div>
                        <div className="w-12 h-1 bg-coral mx-auto mb-4"></div>
                        <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                            Goes to Families in Need
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
