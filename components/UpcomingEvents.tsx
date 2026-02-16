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
    description: string | React.ReactNode;
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
        id: 'pickleball-2026',
        title: 'PICKLEBALL TOURNAMENT',
        subtitle: 'PowerPlay X HeroesForIBD',
        date: '2026-03-16',
        dateDisplay: 'March 16, 2026 • 5pm - 8pm',
        description: (
            <>
                Our next doubles pickleball competition, sponsored by <strong>Credit Union of Texas</strong>, is in the works! Compete for <strong>$150 (1st)</strong> and <strong>$50 (2nd)</strong>, plus a <strong>$50 gift card</strong> raffle, while raising funds for pediatric illnesses.
            </>
        ),
        image: '/images/pickleball-cnp.jpg',
        imageFallback: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop',
        partner: 'HeroesForIBD'
    }
];

export const UpcomingEvents: React.FC = () => {
    const featuredEvent = UPCOMING_EVENTS.find(e => e.isFeatured);
    const otherEvents = UPCOMING_EVENTS.filter(e => !e.isFeatured);

    return (
        <section id="upcoming-events" className="relative py-24 bg-white" data-navbar-theme="light">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal mb-4">
                        Upcoming <span className="text-coral">Events</span>
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
                        Join us at our next event and be part of the movement.
                    </p>
                </div>

                {/* Featured & Upcoming Events - Horizontal Style */}
                <div className="space-y-8">
                    {featuredEvent && (
                        <div className="bg-white rounded-[34px] border border-coral/20 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-all duration-300 hover:border-coral group shadow-sm hover:shadow-md gap-8 md:gap-12">
                            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-inner bg-cream-dark">
                                <img
                                    src={featuredEvent.image}
                                    alt={featuredEvent.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = featuredEvent.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                                <div className="mb-4 text-coral font-mono text-xs md:text-sm uppercase tracking-widest bg-coral/10 px-4 py-1.5 rounded-full inline-block">
                                    {featuredEvent.dateDisplay}
                                </div>
                                <h4 className="font-display font-bold text-2xl md:text-3xl text-charcoal uppercase tracking-wider mb-4">
                                    {featuredEvent.title}
                                </h4>
                                <p className="text-charcoal-light text-base md:text-lg leading-relaxed font-light mb-8">
                                    {featuredEvent.description}
                                </p>
                                {featuredEvent.volunteerFormUrl && (
                                    <a
                                        href={featuredEvent.volunteerFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-coral text-white font-bold px-8 py-3 rounded-full uppercase tracking-wider text-sm hover:bg-charcoal transition-all shadow-lg hover:shadow-coral/20"
                                    >
                                        Volunteer Now
                                        <span className="text-xl">↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {otherEvents.map((event) => (
                        <div key={event.id} className="bg-white rounded-[34px] border border-coral/20 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-all duration-300 hover:border-coral group shadow-sm hover:shadow-md gap-8 md:gap-12">
                            <div className="w-full md:w-5/12 aspect-video rounded-3xl overflow-hidden shadow-inner bg-cream-dark relative">
                                <img
                                    src={event.image || event.imageFallback}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = event.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-coral-light text-white font-bold px-3 py-1.5 text-xs rounded-lg uppercase tracking-widest shadow-lg">Coming Soon</div>
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col items-center md:items-start">
                                <div className="mb-4 text-coral font-mono text-xs md:text-sm uppercase tracking-widest bg-coral/10 px-4 py-1.5 rounded-full inline-block">
                                    {event.dateDisplay}
                                </div>
                                <h4 className="font-display font-bold text-2xl md:text-3xl text-charcoal uppercase tracking-wider mb-4">
                                    {event.title}
                                </h4>
                                <p className="text-charcoal-light text-base md:text-lg leading-relaxed font-light">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

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
