import React from 'react';
import { Navbar } from '../components/Navbar';
import { Events } from '../components/Events';
import { Footer } from '../components/Footer';

export const EventsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream font-sans">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 bg-charcoal overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/event-cricket.jpg"
                            alt="PowerPlay Events"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-coral/20 text-coral text-xs lg:text-sm font-semibold uppercase tracking-widest mb-6 mt-8 md:mt-0">
                            Our Events
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-7xl text-white mb-6 lg:mb-8 tracking-tight">
                            Play Sports. <span className="text-coral">Save Lives.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            Join us at our tournaments where athletes compete, communities connect, and every game makes a difference.
                        </p>
                    </div>
                </section>

                {/* Events Component */}
                <Events />
            </main>
        </div>
    );
};
