import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-charcoal">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-black overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <p className="text-sm text-white/50 tracking-wide mb-6 font-medium">Our Story</p>
                        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            Play for Good.
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            A student-led initiative dedicated to making a tangible impact through sports, community engagement, and purposeful action.
                        </p>
                    </div>
                </section>

                {/* Mission Statement */}
                <ScrollReveal data-navbar-theme="light">
                    <section className="relative py-20 md:py-28 bg-gray-50">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div>
                                {/* Section Header */}
                                <div className="text-center mb-10">
                                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-6">
                                        Our Mission
                                    </h2>
                                    <p className="text-charcoal/80 text-lg leading-relaxed mb-4">
                                        PowerPlay exists to unite young athletes through the power of sports, raising critical funds for children and families battling pediatric illness.
                                    </p>
                                    <p className="text-charcoal-light text-base leading-relaxed">
                                        No child should have to choose between getting better and getting to play. We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters. By creating these events, we're not just raising money, we're building a community that shows young people everywhere they can make a difference. Every single dollar raised goes directly to those who need it most.
                                    </p>
                                </div>
                            </div>

                            {/* Key Impact Points */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                                <div className="text-center p-8 bg-white rounded-2xl border border-gray-100">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-coral mb-2">
                                        $5K<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Raised for Families</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-2xl border border-gray-100">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-coral mb-2">
                                        500<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Athletes United</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-2xl border border-gray-100">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-coral mb-2">
                                        100<span className="text-charcoal">%</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Goes to Families</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Quote / Call to Action */}
                <ScrollReveal delay={0.2} data-navbar-theme="light">
                    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                            <blockquote className="text-2xl md:text-4xl text-charcoal font-bold mb-6 leading-tight">
                                "Every kid deserves the chance to grow up and play."
                            </blockquote>
                            <p className="text-charcoal-light text-sm">
                                — The PowerPlay Team
                            </p>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
