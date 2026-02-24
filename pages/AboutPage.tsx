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

                {/* Mission Statement */}
                <ScrollReveal data-navbar-theme="light">
                    <section className="relative py-16 md:py-24 bg-white">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <h2 className="font-sans font-black text-3xl md:text-5xl text-black-cortex tracking-tight mb-6 uppercase">
                                    Our <span className="text-coral-cortex">Mission</span>
                                </h2>
                                <p className="text-black-cortex/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
                                    PowerPlay exists to unite young athletes through the power of sports, raising critical funds for children and families battling pediatric illness—while ensuring every single dollar goes directly to those who need it most.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                <div className="text-center p-8 bg-cream rounded-2xl border-2 border-coral-cortex/10 hover:border-coral-cortex/40 transition-all duration-300">
                                    <div className="w-16 h-16 bg-coral-cortex/10 flex items-center justify-center mx-auto mb-6 rounded-xl">
                                        <svg className="w-8 h-8 text-coral-cortex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-sans font-black text-xl text-black-cortex mb-3 uppercase">Sports For Good</h3>
                                    <p className="text-black-cortex/60 text-sm leading-relaxed">
                                        We organize tournaments in cricket, pickleball, basketball, and more—turning games into opportunities to give back.
                                    </p>
                                </div>
                                <div className="text-center p-8 bg-cream rounded-2xl border-2 border-coral-cortex/10 hover:border-coral-cortex/40 transition-all duration-300">
                                    <div className="w-16 h-16 bg-coral-cortex/10 flex items-center justify-center mx-auto mb-6 rounded-xl">
                                        <svg className="w-8 h-8 text-coral-cortex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>
                                    </div>
                                    <h3 className="font-sans font-black text-xl text-black-cortex mb-3 uppercase">Health Education</h3>
                                    <p className="text-black-cortex/60 text-sm leading-relaxed">
                                        Real doctors. Real talks. Real impact. We pair our events with educational sessions from medical professionals.
                                    </p>
                                </div>
                                <div className="text-center p-8 bg-cream rounded-2xl border-2 border-coral-cortex/10 hover:border-coral-cortex/40 transition-all duration-300">
                                    <div className="w-16 h-16 bg-coral-cortex/10 flex items-center justify-center mx-auto mb-6 rounded-xl">
                                        <svg className="w-8 h-8 text-coral-cortex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-sans font-black text-xl text-black-cortex mb-3 uppercase">100% To Families</h3>
                                    <p className="text-black-cortex/60 text-sm leading-relaxed">
                                        Zero admin fees. Every dollar raised goes directly to children and families navigating pediatric illness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Why We Do This */}
                <ScrollReveal delay={0.2} data-navbar-theme="light">
                    <section className="relative py-16 md:py-24 bg-cream">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <h2 className="font-sans font-black text-3xl md:text-5xl text-black-cortex tracking-tight mb-6 uppercase">
                                    Why We <span className="text-coral-cortex">Do This</span>
                                </h2>
                                <p className="text-black-cortex text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto font-medium">
                                    No child should have to choose between getting better and getting to play. We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters.
                                </p>
                                <p className="text-black-cortex/60 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto font-light">
                                    As students, we know the power of community. By creating events that bring athletes together, we're not just raising money—we're raising awareness, building connections, and showing young people everywhere that they can make a difference.
                                </p>

                                {/* Key Impact Points */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 pb-4">
                                    <div className="text-center p-8 bg-white rounded-2xl border-2 border-coral-cortex/10 shadow-sm">
                                        <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                            $5K<span className="text-black-cortex">+</span>
                                        </div>
                                        <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Raised for Families</div>
                                    </div>
                                    <div className="text-center p-8 bg-white rounded-2xl border-2 border-coral-cortex/10 shadow-sm">
                                        <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                            500<span className="text-black-cortex">+</span>
                                        </div>
                                        <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Athletes United</div>
                                    </div>
                                    <div className="text-center p-8 bg-white rounded-2xl border-2 border-coral-cortex/10 shadow-sm">
                                        <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-coral-cortex mb-2">
                                            100<span className="text-black-cortex">%</span>
                                        </div>
                                        <div className="text-black-cortex/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Goes to Families</div>
                                    </div>
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
