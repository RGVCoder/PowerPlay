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

interface UpcomingEventsProps {
    bgClass?: string;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ bgClass = 'bg-black-cortex' }) => {
    const featuredEvent = UPCOMING_EVENTS.find(e => e.isFeatured);
    const otherEvents = UPCOMING_EVENTS.filter(e => !e.isFeatured);
    const isLight = bgClass === 'bg-white' || bgClass === 'bg-cream';

    return (
        <section id="upcoming-events" className={`relative py-16 md:py-24 ${bgClass}`} data-navbar-theme={isLight ? "light" : "dark"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className={`font-sans font-black text-4xl md:text-5xl mb-4 ${isLight ? 'text-black-cortex' : 'text-white'}`}>
                        Upcoming <span className="text-orange-cortex">Events</span>
                    </h2>
                    <p className={`${isLight ? 'text-black-cortex/60' : 'text-white/60'} text-lg max-w-2xl mx-auto`}>
                        Join us at our next event and be part of the movement.
                    </p>
                </div>

                {/* Featured & Upcoming Events - Horizontal Style with Defined Borders */}
                <div className="space-y-8">
                    {featuredEvent && (
                        <div className={`${isLight ? 'bg-white border-black/5 shadow-sm' : 'bg-white/5 border-coral-cortex/20'} rounded-2xl border-2 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-all duration-300 hover:border-coral-cortex group gap-8 md:gap-12`}>
                            <div className={`w-full md:w-1/2 aspect-video rounded-xl overflow-hidden ${isLight ? 'bg-black/5 border-black/5' : 'bg-white/5 border-coral-cortex/10'} border-2`}>
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
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-left">
                                <div className="mb-4 text-coral-cortex font-mono text-xs uppercase tracking-widest bg-coral-cortex/10 px-4 py-1.5 rounded-md inline-block border-2 border-coral-cortex/20">
                                    {featuredEvent.dateDisplay}
                                </div>
                                <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-coral-cortex uppercase tracking-tight mb-4">
                                    {featuredEvent.title}
                                </h4>
                                <p className={`${isLight ? 'text-black-cortex/60' : 'text-white/60'} text-base md:text-lg leading-relaxed font-medium mb-8`}>
                                    {featuredEvent.description}
                                </p>
                                {featuredEvent.volunteerFormUrl && (
                                    <a
                                        href={featuredEvent.volunteerFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-coral-cortex text-white font-bold px-8 py-3.5 rounded-lg uppercase tracking-wider text-xs hover:bg-black-cortex transition-all hover:text-white border-2 border-coral-cortex shadow-xl shadow-coral-cortex/20"
                                    >
                                        Volunteer Now
                                        <span className="text-lg">↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {otherEvents.map((event) => (
                        <div key={event.id} className={`${isLight ? 'bg-white border-black/5 shadow-sm' : 'bg-white/5 border-coral-cortex/20'} rounded-2xl border-2 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-all duration-300 hover:border-coral-cortex group gap-8 md:gap-12`}>
                            <div className={`w-full md:w-5/12 aspect-video rounded-xl overflow-hidden ${isLight ? 'bg-black/5 border-black/5' : 'bg-white/5 border-coral-cortex/10'} border-2 relative`}>
                                <img
                                    src={event.image || event.imageFallback}
                                    alt={event.title}
                                    onLoad={(e) => e.currentTarget.parentElement?.classList.remove('bg-white/5')}
                                    onError={(e) => {
                                        e.currentTarget.src = event.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-coral-cortex text-white font-bold px-4 py-1.5 text-xs rounded uppercase tracking-widest shadow-xl">Coming Soon</div>
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-left">
                                <div className="mb-4 text-coral-cortex font-mono text-xs uppercase tracking-widest bg-coral-cortex/10 px-4 py-1.5 rounded-md inline-block border-2 border-coral-cortex/20">
                                    {event.dateDisplay}
                                </div>
                                <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-coral-cortex uppercase tracking-tight mb-4">
                                    {event.title}
                                </h4>
                                <p className={`${isLight ? 'text-black-cortex/60' : 'text-white/60'} text-base md:text-lg leading-relaxed font-medium`}>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-10 text-center">
                    <Link
                        to="/events"
                        className={`inline-flex items-center gap-2 ${isLight ? 'text-black-cortex/40' : 'text-white/40'} hover:text-coral-cortex transition-colors font-bold uppercase text-[11px] tracking-widest`}
                    >
                        View All Events
                        <span className="text-coral-cortex">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
