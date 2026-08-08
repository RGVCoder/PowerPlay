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

const PAST_MEMBERS = [
    'Rochit Gupta',
    'Vedhas Samudrala',
    'Aryan Gokul',
    'Sriram Kandalai',
];

export const TeamMembers: React.FC = () => {
    return (
        <section id="team" className="py-24 md:py-28 bg-gray-50 overflow-hidden" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
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
                            <div
                                key={member.id}
                                className="group bg-white rounded-lg p-5 flex items-center gap-5 border border-stone-150 transition-colors duration-200 hover:border-gray-300"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-stone-150 flex-shrink-0">
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
                                <div className="min-w-0 text-left">
                                    <h3 className="font-display font-semibold text-lg text-charcoal mb-2 leading-tight">{member.name}</h3>
                                    <p className="text-charcoal-light text-sm leading-snug">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                <div className="mt-16 pt-10 border-t border-stone-150">
                    <div className="text-center mb-6">
                        <h2 className="font-display font-semibold text-lg text-charcoal tracking-tight mb-2">
                            Past Members
                        </h2>
                        <p className="text-charcoal-light text-sm max-w-2xl mx-auto">
                            Recognizing the members who helped shape and grow PowerPlay.
                        </p>
                    </div>

                    <ScrollReveal>
                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                            {PAST_MEMBERS.map((name) => (
                                <li
                                    key={name}
                                    className="text-sm text-charcoal-light"
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
