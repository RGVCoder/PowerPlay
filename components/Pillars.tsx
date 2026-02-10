import React from 'react';

export const Pillars: React.FC = () => {
    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
                        Why <span className="text-coral">PowerPlay?</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We're rewriting the rules of charity. No red tape, no hidden fees—just pure impact powered by youth sports.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Card 1: Sports Tournaments (Large, Spans 2 cols on Desktop) */}
                    <div className="group relative overflow-hidden rounded-[34px] bg-white shadow-xl md:col-span-2 min-h-[400px]">
                        <div className="absolute inset-0">
                            <img
                                src="/images/Photo Jul 20 2025.jpg"
                                alt="Sports Tournaments"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-utr-black/90 via-utr-black/40 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
                            <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center mb-4 text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-bold text-3xl text-white mb-2">World-Class Tournaments</h3>
                            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                                From Pickleball to Cricket, we organize professional-grade sports events that bring the community together for a cause.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Health Education (Tall vertical) */}
                    <div className="group relative overflow-hidden rounded-[34px] bg-black shadow-xl min-h-[400px] border border-white/10">
                        <div className="absolute inset-0">
                            <img
                                src="/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (5).jpeg"
                                alt="Health Education"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        </div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="font-display font-bold text-2xl text-white mb-2">Health Education</h3>
                            <p className="text-white/80 mb-6">Real doctors. Real talks. Real impact. We educate the next generation.</p>
                        </div>
                    </div>

                    {/* Card 3: 100% Impact (Full Width Highlight) */}
                    <div className="md:col-span-1 lg:col-span-3 rounded-[34px] bg-gradient-to-r from-coral to-coral-light shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-4">100% of Donations Go To Families</h3>
                            <p className="text-white/90 text-lg font-medium">
                                We are student-run. Zero salaries. Zero admin fees taken from donations. Every single dollar you give goes directly to pediatric cancer patients.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                                <span className="font-display font-black text-4xl text-white">100%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
