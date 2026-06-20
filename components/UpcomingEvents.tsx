import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { EventBox } from './EventBox';

interface UpcomingEvent {
    id: string;
    title: string;
    dateDisplay: string;
    description: string;
    image: string;
    imageFallback: string;
    volunteerFormUrl?: string;
}

const UPCOMING_EVENTS: UpcomingEvent[] = [
    {
        id: 'coming-soon',
        title: 'More events coming soon',
        dateDisplay: 'TBD',
        description: 'We are planning our next tournaments. Check back for dates, or reach out if you want to volunteer at the next one.',
        image: '/images/event-pickleball.jpg',
        imageFallback: '/images/gallery-pickleball.jpg',
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
                                event.volunteerFormUrl ? (
                                    <a
                                        href={event.volunteerFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-charcoal transition-colors"
                                    >
                                        Volunteer now
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
