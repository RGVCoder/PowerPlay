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
                    <div className="group relative p-4">
                        <div className="absolute inset-0 bg-gold/5 rounded-xl blur-md opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 border border-gold/20 rounded-xl opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(212,175,55,0.15)]"></div>
                        <img
                            src="/images/courtside.png"
                            alt="Courtside Change"
                            className="relative h-32 md:h-48 w-auto object-contain transition-all duration-500 rounded-lg hover:scale-105 transform drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                        />
                    </div>

                    {/* Partner 2: AA Sports */}
                    <div className="group relative p-4">
                        <div className="absolute inset-0 bg-gold/5 rounded-xl blur-md opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 border border-gold/20 rounded-xl opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(212,175,55,0.15)]"></div>
                        <img
                            src="/images/aa_sports.png"
                            alt="AA Sports"
                            className="relative h-32 md:h-48 w-auto object-contain transition-all duration-500 hover:scale-105 transform drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

