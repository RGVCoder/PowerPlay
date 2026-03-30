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
                            Play for <span className="text-orange-cortex">Good</span>.
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            A student-led initiative dedicated to making a tangible impact through sports, community engagement, and purposeful action.
                        </p>
                    </div>
                </section>

                {/* Mission Statement */}
                <hr className="border-gray-100/30" />
                <ScrollReveal data-navbar-theme="light">
                    <section className="relative py-24 md:py-28 bg-gray-50">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-orange-cortex font-bold text-lg leading-relaxed mb-4">
                                    PowerPlay exists to unite young athletes through the power of sports, raising critical funds to provide resources and opportunities for underprivileged youth and their families.
                                </p>
                                <p className="text-charcoal-light text-base leading-relaxed">
                                    No child should have to choose between getting better and getting to play. We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters. By creating these events, we're not just raising money, we're building a community that shows young people everywhere they can make a difference. Every single dollar raised goes directly to those who need it most.
                                </p>
                            </div>

                            {/* Key Impact Points */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                                <div className="text-center p-8 bg-white rounded border border-gray-100 shadow-sm">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-orange-cortex mb-2">
                                        $5K<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium uppercase tracking-wider">Raised for Families</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded border border-gray-100 shadow-sm">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-orange-cortex mb-2">
                                        500<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium uppercase tracking-wider">Athletes United</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded border border-gray-100 shadow-sm">
                                    <div className="font-sans font-bold text-4xl md:text-5xl text-orange-cortex mb-2">
                                        100<span className="text-charcoal">%</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium uppercase tracking-wider">Goes to Community</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
