import React from 'react';

export const Donations: React.FC = () => {
    return (
        <section id="donations" className="py-20 md:py-28 bg-white relative overflow-hidden" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left: Story & Stats */}
                    <div className="lg:sticky lg:top-24">
                        {/* Header — no split color, no uppercase */}
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal mb-6 tracking-tight leading-tight">
                            Help a Child Fight Back
                        </h2>

                        <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                            Every dollar you give goes <strong className="text-charcoal font-medium">directly to families</strong> navigating the complexities of pediatric illness—from treatment costs to daily support.
                        </p>

                        {/* Trust Badges — simplified, no colored dots */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            <span className="text-sm px-3 py-1.5 bg-gray-50 text-charcoal-light rounded-lg border border-gray-100">
                                501(c)(3) Verified
                            </span>
                            <span className="text-sm px-3 py-1.5 bg-gray-50 text-charcoal-light rounded-lg border border-gray-100">
                                100% to Families
                            </span>
                            <span className="text-sm px-3 py-1.5 bg-gray-50 text-charcoal-light rounded-lg border border-gray-100">
                                Tax Deductible
                            </span>
                        </div>

                        {/* Impact Stats — cleaner card */}
                        <div className="bg-charcoal p-6 rounded-2xl">
                            <h3 className="text-white font-semibold text-base mb-4">Your Impact So Far</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-coral font-bold text-2xl md:text-3xl">$5K+</div>
                                    <div className="text-gray-400 text-xs mt-1">Raised</div>
                                </div>
                                <div className="text-center border-x border-white/10">
                                    <div className="text-coral font-bold text-2xl md:text-3xl">3</div>
                                    <div className="text-gray-400 text-xs mt-1">Families Helped</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-coral font-bold text-2xl md:text-3xl">0%</div>
                                    <div className="text-gray-400 text-xs mt-1">Admin Fees</div>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-8 border-l-2 border-coral pl-4">
                            <p className="text-charcoal italic">
                                "No overhead. No middlemen. Just kids helping kids."
                            </p>
                            <p className="text-charcoal-light text-sm mt-2">— The PowerPlay Team</p>
                        </div>
                    </div>

                    {/* Right: Donation Form */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="bg-coral px-6 py-4">
                            <h3 className="text-white font-semibold text-lg">Donate Now</h3>
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
