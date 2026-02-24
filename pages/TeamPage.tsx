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
        <div className="min-h-screen bg-black-cortex font-sans text-white">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-black-cortex overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-coral-cortex/10 border border-coral-cortex/20 mb-8 mx-auto">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cortex opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral-cortex"></span>
                            </span>
                            <span className="text-[10px] font-extrabold text-coral-cortex tracking-widest uppercase">The People Behind The Mission</span>
                        </div>
                        <h1 className="font-sans font-black text-5xl md:text-7xl text-white mb-6 tracking-tight">
                            Meet Our <span className="text-coral-cortex">Team.</span>
                        </h1>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            United by a passion for sports and a commitment to making a difference.
                        </p>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="py-16 md:py-24 relative bg-white" data-navbar-theme="light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Row: CEO, CFO, CTO */}
                        <ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {TEAM_MEMBERS.slice(0, 3).map((member) => (
                                    <div key={member.id} className="bg-white rounded-[30px] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5 group hover:border-coral-cortex/20 hover:-translate-y-2 flex flex-col items-center">
                                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-black/5 group-hover:border-coral-cortex transition-colors duration-300 shadow-inner">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f3f4f6/111827?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-black-cortex mb-2">{member.name}</h3>
                                        <p className="text-coral-cortex font-medium uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                                        <div className="w-8 h-1 bg-coral-cortex/20 mx-auto rounded-full group-hover:bg-coral-cortex transition-colors mt-auto"></div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Bottom Row: CMO, Ambassador (Centered) */}
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col md:flex-row justify-center gap-8">
                                {TEAM_MEMBERS.slice(3, 5).map((member) => (
                                    <div key={member.id} className="bg-white rounded-[30px] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5 group hover:border-coral-cortex/20 hover:-translate-y-2 flex flex-col items-center w-full md:w-[calc(33.333%-1.33rem)]">
                                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-black/5 group-hover:border-coral-cortex transition-colors duration-300 shadow-inner">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: member.objectPosition }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f3f4f6/111827?text=Member';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-black-cortex mb-2">{member.name}</h3>
                                        <p className="text-coral-cortex font-medium uppercase tracking-widest text-[10px] mb-4 whitespace-nowrap">{member.role}</p>
                                        <div className="w-8 h-1 bg-coral-cortex/20 mx-auto rounded-full group-hover:bg-coral-cortex transition-colors mt-auto"></div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <ScrollReveal delay={0.3} data-navbar-theme="light">
                    <section className="py-24 bg-cream relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="font-sans font-black text-3xl md:text-5xl text-black-cortex tracking-tight">
                                    Our <span className="text-coral-cortex">Chapters</span>
                                </h2>
                            </div>

                            {/* Chapters Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
                                {[
                                    { name: 'Frisco Chapter', location: 'Frisco, TX', status: 'Active' },
                                    { name: 'Chicago Chapter', location: 'Chicago, IL', status: 'Active' },
                                    { name: 'California Chapter', location: 'California', status: 'Active' }
                                ].map((chapter) => (
                                    <div key={chapter.name} className="bg-white rounded-[30px] p-8 text-center shadow-lg border border-black/5 hover:border-coral-cortex/20 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-black/5 rounded-full flex items-center justify-center text-black-cortex group-hover:bg-coral-cortex group-hover:text-white transition-colors duration-300">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-black-cortex mb-1">{chapter.name}</h3>
                                        <p className="text-coral-cortex font-medium uppercase tracking-widest text-[10px]">{chapter.location}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* CTA Box */}
                                <div className="bg-white rounded-[30px] py-16 px-10 shadow-lg border border-black/5 hover:border-coral-cortex/20 transition-all duration-300 md:col-span-3 flex items-center justify-center min-h-[300px] relative overflow-hidden group text-center md:text-left">
                                    <div className="absolute inset-0 bg-coral-cortex/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 px-4">
                                        <div className="flex-1">
                                            <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-black-cortex mb-4 uppercase tracking-tighter leading-[0.9]">Want to start a chapter?</h3>
                                            <p className="text-black-cortex/60 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed mb-6 md:mb-0 text-xl md:text-2xl">
                                                Bring PowerPlay to your school or community. We provide the playbook, you provide the passion.
                                            </p>
                                        </div>
                                        <a href="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-coral-cortex text-white font-bold hover:bg-black-cortex transition-all shadow-lg hover:shadow-coral-cortex/20 transform hover:-translate-y-1 uppercase tracking-widest text-xs whitespace-nowrap">
                                            Get Started →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
