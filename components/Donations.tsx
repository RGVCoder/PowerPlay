import React from 'react';

export const Donations: React.FC = () => {
    return (
        <section id="donations" className="py-24 bg-black-surface border-t border-white/5 relative overflow-hidden">
            {/* Decorative elements similar to About section */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 tracking-tight text-center">
                    SUPPORT <span className="text-transparent bg-clip-text bg-gold-gradient">OUR CAUSE</span>
                </h2>
                <div className="h-[2px] w-24 bg-gradient-to-r from-gold to-transparent mb-12"></div>

                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light text-center max-w-3xl">
                Your Donation. Their Future. We are teaming up to make a difference for children battling cancer. 100% of the funds raised on this page go directly to pediatric cancer causes. Join the PowerPlay community in making a life-changing impact—because every child deserves the chance to grow up and play. Make your play. Donate today.
                </p>

                <div className="w-full flex justify-center bg-white/5 p-4 rounded-xl backdrop-blur-sm max-w-4xl border border-white/10 shadow-2xl">
                    <iframe
                        src="https://hcb.hackclub.com/donations/start/powerplay"
                        style={{ border: 'none' }}
                        name="donateFrame"
                        scrolling="no"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        height="900px"
                        width="100%"
                        allowFullScreen
                        className="w-full bg-white rounded-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

