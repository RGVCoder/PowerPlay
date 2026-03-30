import React from 'react';
import { ScrollReveal } from './ScrollReveal';

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

export const TeamMembers: React.FC = () => {
    return (
        <section id="team" className="py-24 md:py-28 bg-gray-50 overflow-hidden" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-sans font-bold text-3xl md:text-5xl text-charcoal tracking-tight mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
                        United by a passion for sports and a commitment to making a difference.
                    </p>
                </div>

                {/* Team Members Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="group bg-white rounded p-8 text-center border border-gray-100 transition-all duration-200 hover:border-gray-200 hover:shadow-md">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-105">
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
                                <p className="text-charcoal-light text-sm font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
