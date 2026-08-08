import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { EventBox } from './EventBox';

interface UpcomingEvent {
    id: string;
    title: string;
    dateDisplay: string;
    description: React.ReactNode;
    image: string;
    imageFallback: string;
    registrationUrl?: string;
}

const UPCOMING_EVENTS: UpcomingEvent[] = [
    {
        id: 'pickleball-tournament-august-2026',
        title: 'PowerPlay x Heart to Heart Pickleball Tournament',
        dateDisplay: 'Postponed',
        description: (
            <>
                Men&apos;s, women&apos;s, and mixed doubles at <strong>Pickleball Kingdom Plano</strong>,
                1301 Custer Rd, Suite 200. Registration is $20 per team, with $100 for first place
                and $50 for second place.
            </>
        ),
        image: '/images/pickleball-kingdom-plano.png',
        imageFallback: '/images/gallery-pickleball.jpg',
        registrationUrl: 'https://bit.ly/powerplaypickleball',
    }
];

interface UpcomingEventsProps {
    bgClass?: string;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ bgClass = 'bg-court' }) => {
    const isLight = bgClass === 'bg-court' || bgClass === 'bg-white' || bgClass === 'bg-cream';

    return (
        <section id="upcoming-events" className={`relative py-24 md:py-28 ${bgClass}`} data-navbar-theme={isLight ? "light" : "dark"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    eyebrow="On the court"
                    title="Upcoming Events"
                    subtitle="Join us at our next tournament and be part of the movement."
                    isLight={isLight}
                />

                <div className="space-y-5">
                    {UPCOMING_EVENTS.map((event) => (
                        <EventBox
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            image={event.image}
                            imageFallback={event.imageFallback}
                            dateLabel={event.dateDisplay}
                            footer={
                                event.registrationUrl ? (
                                    <a
                                        href={event.registrationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-charcoal transition-colors"
                                    >
                                        Register now
                                        <span>↗</span>
                                    </a>
                                ) : undefined
                            }
                        />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/events"
                        className={`inline-flex items-center gap-1.5 ${isLight ? 'text-charcoal-light' : 'text-white/40'} hover:text-coral transition-colors font-medium text-sm`}
                    >
                        View all events
                        <span className="text-coral">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
