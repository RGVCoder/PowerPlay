import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black-cortex font-sans text-white">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-black-cortex overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-coral-cortex/10 border border-coral-cortex/20 mb-8 mx-auto">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cortex opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral-cortex"></span>
                            </span>
                            <span className="text-[10px] font-extrabold text-coral-cortex tracking-widest uppercase">Our Story</span>
                        </div>
                        <h1 className="font-sans font-black text-5xl md:text-7xl text-white mb-6 tracking-tight">
                            Play <span className="text-coral-cortex">for Good.</span>
                        </h1>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            A student-led initiative dedicated to making a tangible impact through sports, community engagement, and purposeful action.
                        </p>
                    </div>
                </section>

                {/* Unified Mission Statement & Why We Do This */}
                <ScrollReveal data-navbar-theme="light">
                    <section className="relative py-16 md:py-24 bg-cream">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div>
                                {/* Section Header */}
                                <div className="text-center mb-10">
                                    <h2 className="font-sans font-black text-3xl md:text-5xl text-black-cortex tracking-tight mb-6 uppercase">
                                        Our <span className="text-coral-cortex">Mission</span>
                                    </h2>
                                    <p className="text-black-cortex/80 text-lg md:text-xl leading-relaxed font-medium mb-6">
                                        PowerPlay exists to unite young athletes through the power of sports, raising critical funds for children and families battling pediatric illness.
                                    </p>
                                    <p className="text-black-cortex/60 text-base md:text-lg leading-relaxed font-light mb-12">
                                        No child should have to choose between getting better and getting to play. We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters. By creating these events, we're not just raising money, we're building a community that shows young people everywhere they can make a difference. Every single dollar raised goes directly to those who need it most.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Key Impact Points (Separated) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 pb-4">
                                <div className="text-center p-8 bg-white rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)]">
                                    <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                        $5K<span className="text-black-cortex">+</span>
                                    </div>
                                    <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Raised for Families</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)]">
                                    <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                        500<span className="text-black-cortex">+</span>
                                    </div>
                                    <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Athletes United</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-[48px] border-[1.5px] border-coral-cortex/20 shadow-[0_4px_20px_-4px_rgba(255,127,80,0.1)]">
                                    <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                        100<span className="text-black-cortex">%</span>
                                    </div>
                                    <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Goes to Families</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Quote / Call to Action */}
                <ScrollReveal delay={0.2} data-navbar-theme="light">
                    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                            <blockquote className="text-3xl md:text-5xl text-black-cortex font-black mb-8 leading-tight italic">
                                "Every kid deserves the chance to grow up and <span className="text-coral-cortex underline decoration-4 underline-offset-8">play.</span>"
                            </blockquote>
                            <div className="inline-block py-2 px-6 bg-coral-cortex text-white font-bold rounded-full uppercase tracking-widest text-[10px]">
                                The PowerPlay Team
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
