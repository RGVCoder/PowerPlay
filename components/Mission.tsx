import React from 'react';
import { Button } from './Button';

export const Mission: React.FC = () => {
    return (
        <section id="mission" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - Matches site style */}
                <div className="mb-16">
                    <span className="text-coral text-sm font-semibold uppercase tracking-widest mb-4 block">Our Mission</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
                        How Your Support Helps
                    </h2>
                    <p className="text-charcoal-light font-light">
                        Every dollar goes directly to families. Here's what we do.
                    </p>
                </div>

                {/* Asymmetric Grid - More Natural Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">

                    {/* Large Feature Card */}
                    <div className="md:col-span-7 bg-cream border-l-4 border-coral p-6 md:p-8">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-coral font-semibold text-sm uppercase tracking-wide">What We Do</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                                We run sports tournaments for kids
                            </h3>
                            <p className="text-charcoal-light mb-6 leading-relaxed">
                                Cricket, pickleball, basketball — we organize local tournaments where student athletes compete, have fun, and raise money along the way. It's simple: play sports, help families.
                            </p>
                            <div className="mt-auto">
                                <img
                                    src="/images/event-cricket.jpg"
                                    alt="Kids playing cricket at PowerPlay tournament"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stacked Smaller Cards */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="bg-charcoal p-6 text-white flex-1 border-b-4 border-teal">
                            <span className="text-teal font-semibold text-sm uppercase tracking-wide">Health Education</span>
                            <h3 className="font-display font-bold text-xl mt-3 mb-2">
                                Real doctors. Real talks.
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                At every event, we bring in healthcare professionals to speak about pediatric health, wellness, and what these illnesses actually mean for kids.
                            </p>
                        </div>

                        <div className="bg-coral/10 border-l-4 border-coral p-6 flex-1">
                            <span className="text-coral font-semibold text-sm uppercase tracking-wide">100% Goes to Families</span>
                            <h3 className="font-display font-bold text-xl text-charcoal mt-3 mb-2">
                                No admin fees. Ever.
                            </h3>
                            <p className="text-charcoal-light text-sm leading-relaxed">
                                We're students. We don't take salaries. Every single dollar raised at our events goes directly to families dealing with childhood cancer and other pediatric conditions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote Section - More Personal */}
                <div className="border-l-4 border-coral pl-6 py-2 mb-14">
                    <blockquote className="text-xl md:text-2xl text-charcoal font-display italic mb-3">
                        "Every kid deserves the chance to grow up and play."
                    </blockquote>
                    <p className="text-charcoal-light text-sm">— The PowerPlay Team</p>
                </div>

                {/* Simple CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button
                        variant="primary"
                        onClick={() => document.getElementById('donations')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Donate Now
                    </Button>
                    <span className="text-charcoal-light text-sm">
                        or <a href="#events" className="text-coral hover:underline" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}>join our next event</a>
                    </span>
                </div>
            </div>
        </section>
    );
};
