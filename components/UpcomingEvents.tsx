import React from 'react';
import { Link } from 'react-router-dom';

interface UpcomingEvent {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    dateDisplay: string;
    time?: string;
    location?: string;
    address?: string;
    speaker?: string;
    speakerTitle?: string;
    description: string;
    highlights?: string[];
    image: string;
    imageFallback: string;
    badge?: string;
    isFeatured?: boolean;
    partner?: string;
    volunteerFormUrl?: string;
}

const UPCOMING_EVENTS: UpcomingEvent[] = [
    {
        id: 'guest-speaker-2026',
        title: 'GAME ON: IBD & YOUTH SPORTS',
        subtitle: 'PowerPlay X HeroesForIBD',
        date: '2026-02-08',
        dateDisplay: 'Sunday, February 8, 2026',
        time: '4:00 - 5:00 PM',
        location: 'John and Judy Gay Library JJG – Meeting Room',
        address: '6861 Eldorado Pkwy, McKinney, TX 75070',
        speaker: 'Dr. Bhaskar Gurram',
        speakerTitle: 'Pediatric Gastroenterologist',
        description: 'An educational session designed to help young athletes with pediatric illnesses thrive in sports. Discover practical strategies for staying active while managing chronic illness.',
        highlights: [
            'Strategies for handling flare-ups and fatigue on game day',
            'Training modifications that keep athletes competitive',
            'Mental and physical benefits of maintaining an active lifestyle',
            'Building supportive environments for young athletes with chronic conditions'
        ],
        image: '/images/guest-speaker-poster.png',
        imageFallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
        badge: 'Featured',
        isFeatured: true,
        partner: 'HeroesForIBD',
        volunteerFormUrl: 'https://forms.gle/pTVDUCFdMmCCY8FC6'
    },
    {
        id: 'pickleball-2026',
        title: 'PICKLEBALL TOURNAMENT',
        subtitle: 'PowerPlay X HeroesForIBD',
        date: '2026-02-TBD',
        dateDisplay: 'Late February / Early March 2026',
        description: 'Our next doubles pickleball competition is in the works! Compete with friends while raising funds and awareness for pediatric illnesses. Stay tuned for registration details.',
        image: '/images/pickleball-upcoming.png',
        imageFallback: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop',
        partner: 'HeroesForIBD'
    }
];

export const UpcomingEvents: React.FC = () => {
    const featuredEvent = UPCOMING_EVENTS.find(e => e.isFeatured);
    const otherEvents = UPCOMING_EVENTS.filter(e => !e.isFeatured);

    return (
        <section id="upcoming-events" className="relative py-24 bg-white">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-10 md:mb-16">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-coral/20 to-coral/40"></div>
                    <div className="text-center">
                        <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal tracking-wider uppercase whitespace-nowrap">
                            Upcoming Events
                        </h2>
                        <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-coral to-teal"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-coral/20 to-coral/40"></div>
                </div>

                {/* Featured Event */}
                {featuredEvent && (
                    <div className="relative group bg-white border-l-4 border-coral p-5 md:p-8 mb-8 md:mb-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start overflow-hidden transition-all duration-500 shadow-lg">
                        <div className="absolute inset-0 bg-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Bottom accent border - underline effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="w-full md:w-5/12 relative z-10">
                            <div className="w-full bg-cream-dark overflow-hidden relative shadow-xl">
                                <img
                                    src={featuredEvent.image}
                                    alt={featuredEvent.title}
                                    className="object-contain w-full h-auto"
                                    onError={(e) => {
                                        e.currentTarget.src = featuredEvent.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                {featuredEvent.badge && (
                                    <div className="absolute top-0 left-0 bg-coral text-white font-bold px-4 py-2 text-xs uppercase tracking-widest">
                                        {featuredEvent.badge}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 relative z-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="text-coral font-mono text-xs md:text-sm uppercase tracking-wider">{featuredEvent.dateDisplay}</span>
                                {featuredEvent.time && (
                                    <>
                                        <span className="text-charcoal/30">•</span>
                                        <span className="text-charcoal font-mono text-xs md:text-sm">{featuredEvent.time}</span>
                                    </>
                                )}
                                {featuredEvent.partner && (
                                    <>
                                        <span className="text-charcoal/30">•</span>
                                        <span className="text-teal text-xs md:text-sm font-medium">{featuredEvent.partner}</span>
                                    </>
                                )}
                            </div>
                            <h3 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-2 uppercase tracking-tight">
                                {featuredEvent.title}
                            </h3>
                            <p className="text-coral mb-4 font-mono text-xs md:text-sm border-b border-charcoal/10 pb-4 inline-block">
                                {featuredEvent.subtitle}
                            </p>

                            {/* Location */}
                            {featuredEvent.location && (
                                <div className="mb-4">
                                    <p className="text-charcoal font-semibold text-sm">{featuredEvent.location}</p>
                                    {featuredEvent.address && (
                                        <p className="text-charcoal-light text-sm">{featuredEvent.address}</p>
                                    )}
                                </div>
                            )}

                            {/* Speaker */}
                            {featuredEvent.speaker && (
                                <div className="mb-4 bg-cream-sand p-3 border-l-4 border-teal inline-block">
                                    <p className="text-charcoal font-semibold">{featuredEvent.speaker}</p>
                                    {featuredEvent.speakerTitle && (
                                        <p className="text-teal text-sm">{featuredEvent.speakerTitle}</p>
                                    )}
                                </div>
                            )}

                            <p className="text-charcoal-light mb-4 leading-relaxed font-light text-sm md:text-base">
                                {featuredEvent.description}
                            </p>

                            {/* Highlights */}
                            {featuredEvent.highlights && featuredEvent.highlights.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-charcoal font-semibold text-sm mb-2">Key Takeaways:</p>
                                    <ul className="space-y-1">
                                        {featuredEvent.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-charcoal-light text-sm flex items-start gap-2">
                                                <span className="text-teal mt-1">✓</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {featuredEvent.volunteerFormUrl && (
                                <a
                                    href={featuredEvent.volunteerFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 uppercase tracking-wider text-xs md:text-sm hover:bg-teal/90 transition-colors"
                                >
                                    Volunteer Now (5 Hours)
                                    <span>↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Other Upcoming Events - Full width like featured */}
                {otherEvents.length > 0 && (
                    <div className="space-y-6 md:space-y-8">
                        {otherEvents.map((event) => (
                            <div
                                key={event.id}
                                className="relative group bg-white border-l-4 border-teal overflow-hidden transition-all duration-500 shadow-md hover:shadow-lg flex flex-col md:flex-row"
                            >
                                {/* Bottom accent border - underline effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

                                <div className="w-full md:w-1/3 h-48 md:h-64 overflow-hidden relative">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = event.imageFallback;
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                    <div className="absolute top-0 left-0 bg-teal text-white font-bold px-3 py-1.5 text-[10px] uppercase tracking-widest">Coming Soon</div>
                                </div>
                                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-coral font-mono text-xs md:text-sm uppercase tracking-wider">{event.dateDisplay}</span>
                                    </div>
                                    {event.partner && (
                                        <span className="inline-block text-teal text-[10px] md:text-xs font-medium bg-teal/10 px-2 py-1 mb-3 w-fit">{event.partner}</span>
                                    )}
                                    <h4 className="font-display font-bold text-xl md:text-3xl text-charcoal mb-3 uppercase">{event.title}</h4>
                                    <p className="text-charcoal-light text-sm mb-4 font-light leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View All Link */}
                <div className="mt-12 text-center">
                    <Link
                        to="/events"
                        className="inline-flex items-center gap-3 text-charcoal-light hover:text-coral transition-colors font-medium uppercase text-sm tracking-widest"
                    >
                        View All Events
                        <span className="text-coral">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
