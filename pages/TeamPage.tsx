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
        <div className="min-h-screen bg-cream font-sans">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-charcoal overflow-hidden" data-navbar-theme="dark">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-coral/20 text-coral text-xs lg:text-sm font-semibold uppercase tracking-widest mb-6 mt-8 md:mt-0">
                            The People Behind The Mission
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight">
                            Meet Our <span className="text-coral">Team</span>
                        </h1>
                        <p className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            United by a passion for sports and a commitment to making a difference.
                        </p>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="py-16 md:py-24 relative" data-navbar-theme="light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Row: CEO, CFO, CTO */}
                        <ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {TEAM_MEMBERS.slice(0, 3).map((member) => (
                                    <div key={member.id} className="bg-white rounded-[30px] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-charcoal/5 group hover:border-coral/20 hover:-translate-y-2 flex flex-col items-center">
                                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cream-dark group-hover:border-coral transition-colors duration-300 shadow-inner">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/101010/D4AF37?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-charcoal mb-2">{member.name}</h3>
                                        <p className="text-coral font-medium uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                                        <div className="w-8 h-1 bg-coral/20 mx-auto rounded-full group-hover:bg-coral transition-colors mt-auto"></div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Bottom Row: CMO, Ambassador (Centered) */}
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col md:flex-row justify-center gap-8">
                                {TEAM_MEMBERS.slice(3, 5).map((member) => (
                                    <div key={member.id} className="bg-white rounded-[30px] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-charcoal/5 group hover:border-coral/20 hover:-translate-y-2 flex flex-col items-center w-full md:w-[calc(33.333%-1.33rem)]">
                                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cream-dark group-hover:border-coral transition-colors duration-300 shadow-inner">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/101010/D4AF37?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-charcoal mb-2">{member.name}</h3>
                                        <p className="text-coral font-medium uppercase tracking-widest text-[10px] mb-4 whitespace-nowrap">{member.role}</p>
                                        <div className="w-8 h-1 bg-coral/20 mx-auto rounded-full group-hover:bg-coral transition-colors mt-auto"></div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Our Chapters Section */}
                <ScrollReveal delay={0.3} data-navbar-theme="light">
                    <section className="py-16 bg-cream-sand relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center gap-6 mb-12">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-charcoal/20"></div>
                                <h2 className="font-display font-bold text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">
                                    Our <span className="text-coral">Chapters</span>
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-charcoal/20"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* CTA Box */}
                                <div className="bg-white rounded-[30px] py-16 px-10 shadow-lg border border-charcoal/5 hover:border-coral/20 transition-all duration-300 md:col-span-3 flex items-center justify-center min-h-[300px] relative overflow-hidden group text-center md:text-left">
                                    <div className="absolute inset-0 bg-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 px-4">
                                        <div className="flex-1">
                                            <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-charcoal mb-4 uppercase tracking-tighter leading-[0.9]">Want to start a chapter?</h3>
                                            <p className="text-charcoal-light max-w-2xl mx-auto md:mx-0 font-light leading-relaxed mb-6 md:mb-0 text-xl md:text-2xl">
                                                Bring PowerPlay to your school or community. We provide the playbook, you provide the passion.
                                            </p>
                                        </div>
                                        <a href="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-coral text-white font-bold hover:bg-charcoal transition-all shadow-lg hover:shadow-coral/20 transform hover:-translate-y-1 uppercase tracking-widest text-xs whitespace-nowrap">
                                            Get Started →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Chapters Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                {[
                                    { name: 'Frisco Chapter', location: 'Frisco, TX', status: 'Active' },
                                    { name: 'Chicago Chapter', location: 'Chicago, IL', status: 'Active' },
                                    { name: 'California Chapter', location: 'California', status: 'Active' }
                                ].map((chapter) => (
                                    <div key={chapter.name} className="bg-white rounded-[30px] p-8 text-center shadow-lg border border-charcoal/5 hover:border-coral/20 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-cream-dark rounded-full flex items-center justify-center text-charcoal group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-charcoal mb-1">{chapter.name}</h3>
                                        <p className="text-coral font-medium uppercase tracking-widest text-[10px]">{chapter.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
