import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageHero } from '../components/PageHero';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-court font-sans text-charcoal">
            <main className="pt-20">
                <PageHero
                    eyebrow="Our story"
                    title={<>Play for <span className="text-coral">Good</span></>}
                    subtitle="A student-led nonprofit making impact through sports, community, and purposeful action."
                    image="/images/gallery-giveback-1.jpg"
                />

                <ScrollReveal data-navbar-theme="light">
                    <section className="relative py-24 md:py-28 bg-sideline">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
                                    Our Mission
                                </h2>
                                <div className="court-line mx-auto mb-6" aria-hidden="true" />
                                <p className="text-coral font-semibold text-lg leading-relaxed mb-4">
                                    PowerPlay unites young athletes through sports, raising funds for underprivileged youth and their families.
                                </p>
                                <p className="text-charcoal-light text-base leading-relaxed">
                                    We started PowerPlay because we saw an opportunity to bring together what we love—sports—with a cause that matters. Every dollar raised goes directly to underprivileged youth and their families.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                                <div className="text-center p-8 bg-white rounded-lg border border-stone-150">
                                    <div className="font-display font-semibold text-4xl md:text-5xl text-coral mb-2">
                                        $5K<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Raised for families</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-lg border border-stone-150">
                                    <div className="font-display font-semibold text-4xl md:text-5xl text-coral mb-2">
                                        500<span className="text-charcoal">+</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Athletes united</div>
                                </div>
                                <div className="text-center p-8 bg-white rounded-lg border border-stone-150">
                                    <div className="font-display font-semibold text-4xl md:text-5xl text-coral mb-2">
                                        100<span className="text-charcoal">%</span>
                                    </div>
                                    <div className="text-charcoal-light text-sm font-medium">Goes to community</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
