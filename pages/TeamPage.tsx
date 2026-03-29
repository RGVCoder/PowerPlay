import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Raghav Sridhar',
        role: 'Chief Executive Officer',
        image: '/images/team-raghav.png',
        objectPosition: 'center',
    },
    {
        id: 2,
        name: 'Biswajit Vaddu',
        role: 'Chief Financial Officer',
        image: '/images/team-biswajit.png',
        objectPosition: '50% 25%',
    },
    {
        id: 3,
        name: 'Harsha Tumu',
        role: 'Chief Technology Officer',
        image: '/images/team-harsha.png',
        objectPosition: 'center',
    },
    {
        id: 4,
        name: 'Tarun Muddasani',
        role: 'Chief Marketing Officer',
        image: '/images/team-tarun.png',
        objectPosition: 'center',
    },
    {
        id: 5,
        name: 'Yuvi Disawal',
        role: 'National Chapter Ambassador',
        image: '/images/team-yuvi.png',
        objectPosition: 'center',
    },
];

export const TeamPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-charcoal">
            <main className="pt-20">
                {/* Hero Section — clean, no pulsing badge */}
                <section className="relative py-24 bg-black overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <p className="text-sm text-white/50 tracking-wide mb-6 font-medium">The People Behind the Mission</p>
                        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            Meet Our Team
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            United by a passion for sports and a commitment to making a difference.
                        </p>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="py-16 md:py-24 relative bg-white" data-navbar-theme="light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Row: CEO, CFO, CTO */}
                        <ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                {TEAM_MEMBERS.slice(0, 3).map((member) => (
                                    <div key={member.id} className="bg-white rounded-2xl p-8 text-center border border-gray-100 transition-colors duration-200 hover:border-gray-200 flex flex-col items-center">
                                        <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f3f4f6/111827?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-sans font-semibold text-lg text-charcoal mb-1">{member.name}</h3>
                                        <p className="text-charcoal-light text-sm">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Bottom Row: CMO, Ambassador (Centered) */}
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                {TEAM_MEMBERS.slice(3, 5).map((member) => (
                                    <div key={member.id} className="bg-white rounded-2xl p-8 text-center border border-gray-100 transition-colors duration-200 hover:border-gray-200 flex flex-col items-center w-full md:w-[calc(33.333%-0.75rem)]">
                                        <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f3f4f6/111827?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-sans font-semibold text-lg text-charcoal mb-1">{member.name}</h3>
                                        <p className="text-charcoal-light text-sm">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <ScrollReveal delay={0.3} data-navbar-theme="light">
                    <section className="py-20 md:py-28 bg-gray-50 relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-14">
                                <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
                                    Our Chapters
                                </h2>
                            </div>

                            {/* Chapters Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                {[
                                    { name: 'Frisco Chapter', location: 'Frisco, TX', status: 'Active' },
                                    { name: 'Chicago Chapter', location: 'Chicago, IL', status: 'Active' },
                                    { name: 'California Chapter', location: 'California', status: 'Active' }
                                ].map((chapter) => (
                                    <div key={chapter.name} className="bg-white rounded-2xl p-8 text-center border border-gray-100 transition-colors duration-200 hover:border-gray-200">
                                        <div className="w-14 h-14 mx-auto mb-4 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-sans font-semibold text-lg text-charcoal mb-1">{chapter.name}</h3>
                                        <p className="text-charcoal-light text-sm">{chapter.location}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Box — simplified */}
                            <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <h3 className="font-sans font-bold text-2xl md:text-3xl text-charcoal mb-3">
                                            Want to start a chapter?
                                        </h3>
                                        <p className="text-charcoal-light text-base leading-relaxed">
                                            Bring PowerPlay to your school or community. We provide the playbook, you provide the passion.
                                        </p>
                                    </div>
                                    <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-coral text-white font-semibold text-sm hover:bg-charcoal transition-colors whitespace-nowrap">
                                        Get Started →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
