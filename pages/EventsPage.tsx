import React from 'react';
import { Navbar } from '../components/Navbar';
import { Events } from '../components/Events';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const EventsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-charcoal">
            <main className="pt-20">
                {/* Hero Section — clean, no pulsing badge */}
                <section className="relative py-24 bg-black overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <p className="text-sm text-white/50 tracking-wide mb-6 font-medium">Our Events</p>
                        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            Play Sports. <span className="text-orange-cortex">Save Lives.</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Join us in our mission to create life-changing opportunities for underprivileged youth through competitive athletic events.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100/30" />

                {/* Events Component */}
                <ScrollReveal data-navbar-theme="light">
                    <Events />
                </ScrollReveal>
            </main>
        </div>
    );
};
