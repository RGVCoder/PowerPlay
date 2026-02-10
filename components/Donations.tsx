import React from 'react';

export const Donations: React.FC = () => {
    return (
        <section id="donations" className="py-24 bg-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left: Story & Stats */}
                    <div className="lg:sticky lg:top-24">
                        {/* Header */}
                        <span className="text-coral text-sm font-semibold uppercase tracking-widest mb-4 block">Make an Impact</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6 tracking-tight leading-tight">
                            Help a Child<br />
                            <span className="text-coral">Fight Back</span>
                        </h2>

                        <p className="text-charcoal-light text-lg leading-relaxed mb-8 font-light">
                            Every dollar you give goes <strong className="text-charcoal font-medium">directly to families</strong> navigating the complexities of pediatric illness—from treatment costs to daily support.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <div className="flex items-center gap-2 bg-white border-l-2 border-coral-light px-4 py-2 text-sm">
                                <span className="w-2 h-2 bg-coral-light rounded-full"></span>
                                <span className="text-charcoal-light">501(c)(3) Verified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white border-l-2 border-coral px-4 py-2 text-sm">
                                <span className="w-2 h-2 bg-coral rounded-full"></span>
                                <span className="text-charcoal-light">100% to Families</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white border-l-2 border-blue-500 px-4 py-2 text-sm">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span className="text-charcoal-light">Tax Deductible</span>
                            </div>
                        </div>

                        {/* Impact Stats */}
                        <div className="bg-charcoal p-6 border-l-4 border-coral-light">
                            <h3 className="text-white font-display font-bold text-lg mb-4">Your Impact So Far</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-coral font-display font-bold text-2xl md:text-3xl">$5K+</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">Raised</div>
                                </div>
                                <div className="text-center border-x border-white/10">
                                    <div className="text-coral-light font-display font-bold text-2xl md:text-3xl">3</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">Families Helped</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-coral-light font-display font-bold text-2xl md:text-3xl">0%</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">Admin Fees</div>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-8 border-l-2 border-coral pl-4">
                            <p className="text-charcoal italic font-light">
                                "No overhead. No middlemen. Just kids helping kids."
                            </p>
                            <p className="text-charcoal-light text-sm mt-2">— The PowerPlay Team</p>
                        </div>
                    </div>

                    {/* Right: Donation Form */}
                    <div className="bg-white border-l-4 border-coral shadow-xl overflow-hidden">
                        <div className="bg-coral px-6 py-4">
                            <h3 className="text-white font-display font-bold text-xl">Donate Now</h3>
                        </div>
                        <div className="p-2">
                            <iframe
                                src="https://hcb.hackclub.com/donations/start/powerplay"
                                style={{ border: 'none' }}
                                name="donateFrame"
                                scrolling="yes"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                height="1200px"
                                width="100%"
                                allowFullScreen
                                className="w-full bg-white"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

