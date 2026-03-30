import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TeamMembers } from '../components/TeamMembers';
import { Chapters } from '../components/Chapters';

export const TeamPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-charcoal">
            <main className="pt-20">
                {/* Hero Section — high impact, dark theme */}
                <section className="relative py-24 bg-black overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <p className="text-sm text-white/50 tracking-wide mb-6 font-medium uppercase">The People Behind the Mission</p>
                        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            <span className="text-orange-cortex">Team</span> & <span className="text-orange-cortex">Chapters</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            United by a passion for sports and a commitment to creating life-changing opportunities for underprivileged youth.
                        </p>
                    </div>
                    {/* Subtle background detail */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
                </section>

                {/* Team Members Section - bg-gray-50 (internal to component) */}
                <ScrollReveal delay={0.1} data-navbar-theme="light">
                    <TeamMembers />
                </ScrollReveal>

                {/* Divider */}
                <hr className="border-gray-100/30" />

                {/* Chapters Section - bg-white (internal to component) */}
                <ScrollReveal delay={0.1} data-navbar-theme="light">
                    <Chapters />
                </ScrollReveal>
            </main>
        </div>
    );
};
