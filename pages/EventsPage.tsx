import React from 'react';
import { Navbar } from '../components/Navbar';
import { Events } from '../components/Events';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const EventsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black-cortex">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-black-cortex overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-coral-cortex/10 border border-coral-cortex/20 mb-8 mx-auto">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cortex opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral-cortex"></span>
                            </span>
                            <span className="text-[10px] font-extrabold text-coral-cortex tracking-widest uppercase">Our Events</span>
                        </div>
                        <h1 className="font-sans font-black text-5xl md:text-7xl text-white mb-6 tracking-tight">
                            Play Sports. <span className="text-coral-cortex">Save Lives.</span>
                        </h1>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Join us in our mission to support cancer research through competitive athletic events and community-driven initiatives.
                        </p>
                    </div>
                </section>

                {/* Events Component */}
                <ScrollReveal data-navbar-theme="light">
                    <Events />
                </ScrollReveal>
            </main>
        </div>
    );
};
