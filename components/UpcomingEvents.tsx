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
        id: 'coming-soon',
        title: 'More Events Coming Soon',
        subtitle: 'Stay Tuned',
        date: '',
        dateDisplay: 'TBD',
        description: 'We are currently planning our next opportunities to bring athletes together for a cause. Check back soon for updates!',
        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop',
        imageFallback: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop',
        isFeatured: true
    }
];

interface UpcomingEventsProps {
    bgClass?: string;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ bgClass = 'bg-white' }) => {
    const featuredEvent = UPCOMING_EVENTS.find(e => e.isFeatured);
    const otherEvents = UPCOMING_EVENTS.filter(e => !e.isFeatured);
    const isLight = bgClass === 'bg-white' || bgClass === 'bg-cream';

    return (
        <section id="upcoming-events" className={`relative py-24 md:py-28 ${bgClass}`} data-navbar-theme={isLight ? "light" : "dark"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header — no split color */}
                <div className="text-center mb-12 md:mb-14">
                    <h2 className={`font-sans font-bold text-3xl md:text-4xl tracking-tight ${isLight ? 'text-charcoal' : 'text-white'}`}>
                        Upcoming Events
                    </h2>
                    <p className={`${isLight ? 'text-charcoal-light' : 'text-white/60'} text-base mt-3 max-w-xl mx-auto`}>
                        Join us at our next event and be part of the movement.
                    </p>
                </div>

                {/* Events */}
                <div className="space-y-6">
                    {featuredEvent && (
                        <div className={`${isLight ? 'bg-white border-gray-100' : 'bg-white/5 border-white/10'} rounded border p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-colors duration-200 hover:border-gray-200 group gap-6 md:gap-10`}>
                            <div className={`w-full md:w-1/2 aspect-video rounded overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                                <img
                                    src={featuredEvent.image}
                                    alt={featuredEvent.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = featuredEvent.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-left">
                                <span className="text-xs font-medium text-coral bg-coral/8 px-3 py-1 rounded mb-4">
                                    {featuredEvent.dateDisplay}
                                </span>
                                <h4 className="font-sans font-semibold text-xl md:text-2xl text-charcoal mb-3">
                                    {featuredEvent.title}
                                </h4>
                                <p className={`${isLight ? 'text-charcoal-light' : 'text-white/60'} text-base leading-relaxed mb-6`}>
                                    {featuredEvent.description}
                                </p>
                                {featuredEvent.volunteerFormUrl && (
                                    <a
                                        href={featuredEvent.volunteerFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-2.5 rounded text-sm hover:bg-charcoal transition-colors"
                                    >
                                        Volunteer Now
                                        <span>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {otherEvents.map((event) => (
                        <div key={event.id} className={`${isLight ? 'bg-white border-gray-100' : 'bg-white/5 border-white/10'} rounded border p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left transition-colors duration-200 hover:border-gray-200 group gap-6 md:gap-10`}>
                            <div className={`w-full md:w-5/12 aspect-video rounded overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-white/5'} relative`}>
                                <img
                                    src={event.image || event.imageFallback}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                    onLoad={(e) => e.currentTarget.parentElement?.classList.remove('bg-white/5')}
                                    onError={(e) => {
                                        e.currentTarget.src = event.imageFallback;
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                <div className="absolute top-3 left-3 bg-coral text-white font-medium px-3 py-1 text-xs rounded">Coming Soon</div>
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-left">
                                <span className="text-xs font-medium text-coral bg-coral/8 px-3 py-1 rounded mb-4">
                                    {event.dateDisplay}
                                </span>
                                <h4 className="font-sans font-semibold text-xl md:text-2xl text-charcoal mb-3">
                                    {event.title}
                                </h4>
                                <p className={`${isLight ? 'text-charcoal-light' : 'text-white/60'} text-base leading-relaxed`}>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-8 text-center">
                    <Link
                        to="/events"
                        className={`inline-flex items-center gap-1.5 ${isLight ? 'text-charcoal-light' : 'text-white/40'} hover:text-coral transition-colors font-medium text-sm`}
                    >
                        View All Events
                        <span className="text-coral">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
