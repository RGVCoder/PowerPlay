import React from 'react';

export const Mission: React.FC = () => {
    return (
        <section id="mission" className="py-20 md:py-28 bg-gray-50 relative" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header — simplified */}
                <div className="mb-14">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal mb-4 tracking-tight">
                        How Your Support Helps
                    </h2>
                    <p className="text-charcoal-light text-base">
                        Every dollar goes directly to families. Here's what we do.
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">

                    {/* Large Feature Card */}
                    <div className="md:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                        <div className="flex flex-col h-full">
                            <span className="text-coral font-medium text-sm mb-3">What We Do</span>
                            <h3 className="font-sans font-semibold text-xl text-charcoal mb-3">
                                We run sports tournaments for kids
                            </h3>
                            <p className="text-charcoal-light text-[15px] mb-6 leading-relaxed">
                                Cricket, pickleball, basketball — we organize local tournaments where student athletes compete, have fun, and raise money along the way. It's simple: play sports, help families.
                            </p>
                            <div className="mt-auto">
                                <img
                                    src="/images/event-cricket.jpg"
                                    alt="Kids playing cricket at PowerPlay tournament"
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stacked Smaller Cards */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="bg-charcoal p-6 text-white flex-1 rounded-2xl">
                            <span className="text-coral font-medium text-sm">Health Education</span>
                            <h3 className="font-sans font-semibold text-lg mt-3 mb-2">
                                Real doctors. Real talks.
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                At every event, we bring in healthcare professionals to speak about pediatric health, wellness, and what these illnesses actually mean for kids.
                            </p>
                        </div>

                        <div className="bg-coral/5 p-6 flex-1 rounded-2xl border border-coral/10">
                            <span className="text-coral font-medium text-sm">100% Goes to Families</span>
                            <h3 className="font-sans font-semibold text-lg text-charcoal mt-3 mb-2">
                                No admin fees. Ever.
                            </h3>
                            <p className="text-charcoal-light text-sm leading-relaxed">
                                We're students. We don't take salaries. Every single dollar raised at our events goes directly to families dealing with childhood cancer and other pediatric conditions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="border-l-2 border-coral pl-5 py-2 mb-12">
                    <blockquote className="text-lg md:text-xl text-charcoal italic mb-2">
                        "Every kid deserves the chance to grow up and play."
                    </blockquote>
                    <p className="text-charcoal-light text-sm">— The PowerPlay Team</p>
                </div>

                {/* Simple CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                        onClick={() => document.getElementById('donations')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 rounded-lg bg-coral text-white font-semibold text-sm hover:bg-charcoal transition-colors"
                    >
                        Donate Now
                    </button>
                    <span className="text-charcoal-light text-sm">
                        or <a href="#events" className="text-coral hover:underline" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}>join our next event</a>
                    </span>
                </div>
            </div>
        </section>
    );
};
