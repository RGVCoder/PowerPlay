import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream font-sans">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-32 bg-charcoal overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/trio-pic.jpg"
                            alt="PowerPlay Team"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block px-4 py-2 bg-coral/20 text-coral text-sm font-semibold uppercase tracking-widest mb-6">
                            Our Story
                        </div>
                        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight w-full flex justify-center">
                            <span className="whitespace-nowrap">Sports: <span className="text-coral">An Engine for Good</span></span>
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            A student-led movement turning the love of sports into hope for children and families facing pediatric illness.
                        </p>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="relative py-24 bg-white">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-charcoal/20"></div>
                            <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">
                                Our Mission
                            </h2>
                            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-charcoal/20"></div>
                        </div>

                        <div className="text-center mb-16">
                            <p className="text-charcoal-light text-xl leading-relaxed max-w-3xl mx-auto">
                                PowerPlay exists to unite young athletes through the power of sports, raising critical funds for children and families battling pediatric illness—while ensuring every single dollar goes directly to those who need it most.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-cream-sand border-t-4 border-coral">
                                <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-xl text-charcoal mb-3 uppercase">Sports For Good</h3>
                                <p className="text-charcoal-light text-sm leading-relaxed">
                                    We organize tournaments in cricket, pickleball, basketball, and more—turning games into opportunities to give back.
                                </p>
                            </div>
                            <div className="text-center p-8 bg-cream-sand border-t-4 border-teal">
                                <div className="w-16 h-16 bg-teal/10 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-xl text-charcoal mb-3 uppercase">Health Education</h3>
                                <p className="text-charcoal-light text-sm leading-relaxed">
                                    Real doctors. Real talks. Real impact. We pair our events with educational sessions from medical professionals.
                                </p>
                            </div>
                            <div className="text-center p-8 bg-cream-sand border-t-4 border-coral">
                                <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-xl text-charcoal mb-3 uppercase">100% To Families</h3>
                                <p className="text-charcoal-light text-sm leading-relaxed">
                                    Zero admin fees. Every dollar raised goes directly to children and families navigating pediatric illness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Do This */}
                <section className="relative py-24 bg-charcoal">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral/5 blur-[100px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 blur-[100px]"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        {/* Section Header */}
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                            <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
                                Why We Do This
                            </h2>
                            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                        </div>

                        <div className="text-center">
                            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                                No child should have to choose between getting better and getting to play. We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                                As students, we know the power of community. By creating events that bring athletes together, we're not just raising money—we're raising awareness, building connections, and showing young people everywhere that they can make a difference.
                            </p>

                            {/* Key Impact Points */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="font-display font-bold text-5xl text-white mb-3">
                                        $5K<span className="text-coral">+</span>
                                    </div>
                                    <div className="w-12 h-1 bg-coral mx-auto mb-3"></div>
                                    <div className="text-white/60 text-sm uppercase tracking-wider">Raised for Families</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-display font-bold text-5xl text-white mb-3">
                                        500<span className="text-coral">+</span>
                                    </div>
                                    <div className="w-12 h-1 bg-teal mx-auto mb-3"></div>
                                    <div className="text-white/60 text-sm uppercase tracking-wider">Athletes United</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-display font-bold text-5xl text-white mb-3">
                                        100<span className="text-coral">%</span>
                                    </div>
                                    <div className="w-12 h-1 bg-coral mx-auto mb-3"></div>
                                    <div className="text-white/60 text-sm uppercase tracking-wider">Goes to Families</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote / Call to Action */}
                <section className="py-20 bg-coral relative overflow-hidden">
                    <div className="absolute top-10 left-10 text-white/10 text-[150px] font-serif select-none">"</div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <blockquote className="text-2xl md:text-4xl text-white font-display font-bold mb-6">
                            "Every kid deserves the chance to grow up and play."
                        </blockquote>
                        <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
                        <p className="text-white/80 text-sm uppercase tracking-wider">The PowerPlay Team</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
