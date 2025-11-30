import React from 'react';

export const Partners: React.FC = () => {
    return (
        <section className="py-20 bg-black-rich border-b border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                    PARTNERS & <span className="text-gold">COLLABORATIONS</span>
                </h2>
                <p className="text-gray-400 font-light mb-16 max-w-2xl mx-auto">
                    Proud to work with organizations that share our vision for youth sports and community impact.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {/* Partner 1: Courtside Change */}
                    <div className="group relative p-6 transition-transform duration-500 hover:scale-105">
                        {/* Inner gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-100 border border-white/5"></div>

                        {/* Subtle Gold Glow - Pulse Animation */}
                        <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-xl opacity-60 animate-pulse-slow"></div>

                        {/* Border Glow on Hover */}
                        <div className="absolute inset-0 border border-gold/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]"></div>

                        <img
                            src="/images/courtside.png"
                            alt="Courtside Change"
                            className="relative h-32 md:h-48 w-auto object-contain transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        />
                    </div>

                    {/* Partner 2: AA Sports */}
                    <div className="group relative p-6 transition-transform duration-500 hover:scale-105">
                        {/* Inner gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-100 border border-white/5"></div>

                        {/* Subtle Gold Glow - Pulse Animation */}
                        <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-xl opacity-60 animate-pulse-slow"></div>

                        {/* Border Glow on Hover */}
                        <div className="absolute inset-0 border border-gold/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]"></div>

                        <img
                            src="/images/aa_sports.png"
                            alt="AA Sports"
                            className="relative h-32 md:h-48 w-auto object-contain transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

