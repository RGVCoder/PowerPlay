import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageHero } from '../components/PageHero';

type GalleryLayout = 'square' | 'wide' | 'feature';

interface GalleryItem {
    src: string;
    alt: string;
    layout: GalleryLayout;
    objectPosition?: string;
    label?: string;
}

interface GallerySection {
    title: string;
    eyebrow: string;
    items: GalleryItem[];
}

const GALLERY_SECTIONS: GallerySection[] = [
    {
        eyebrow: 'On the court',
        title: 'Tournament days',
        items: [
            { src: '/images/wilco-3v3-austin.jpg', alt: 'Wilco 3v3 Charity Tournament — Austin Chapter', layout: 'wide' },
            { src: '/images/pickleball-winners.jpg', alt: 'Celebrating tournament champions', layout: 'wide' },
            { src: '/images/pickleball-gal-1.jpg', alt: 'Tournament winners', layout: 'square' },
            { src: '/images/mvp.jpg', alt: 'Tournament MVP', layout: 'square' },
            { src: '/images/pickleball-gal-3.jpg', alt: 'Pickleball tournament overview', layout: 'wide' },
            { src: '/images/gallery-pickleball.jpg', alt: 'Pickleball action on court', layout: 'square' },
            { src: '/images/pickleball-gal-2.jpg', alt: 'Doubles match in progress', layout: 'square' },
            { src: '/images/pickleball-gal-4.jpg', alt: 'Competitive rally', layout: 'square' },
            { src: '/images/pickleball-gal-5.jpg', alt: 'Finalists on court', layout: 'square' },
            { src: '/images/pickleball-gal-6.jpg', alt: 'Tournament match action', layout: 'wide' },
            { src: '/images/trophy-ceremony.jpg', alt: 'Trophy ceremony', layout: 'square' },
            { src: '/images/cricket-players.jpg', alt: 'Cricket players between innings', layout: 'square' },
            { src: '/images/pickleball-gal-7.jpg', alt: 'Pickleball court atmosphere', layout: 'wide' },
            { src: '/images/event-cricket.jpg', alt: 'Cricket tournament highlights', layout: 'wide' },
            {
                src: '/images/pickleball-gal-8.jpg',
                alt: 'Full tournament view',
                layout: 'feature',
                label: 'Tournament days',
            },
        ],
    },
    {
        eyebrow: 'Together',
        title: 'Our community',
        items: [
            {
                src: '/images/hero-bg.jpg',
                alt: 'PowerPlay community gathering',
                layout: 'feature',
                label: 'Our community',
            },
            { src: '/images/gallery-lineup.jpg', alt: 'Team lineup before the match', layout: 'wide' },
            { src: '/images/Photo Jul 20 2025 from raghavsridhar09.jpg', alt: 'Athletes and families together', layout: 'square' },
            { src: '/images/Photo Jul 20 2025 from raghavsridhar09 (1).jpg', alt: 'Community on the sidelines', layout: 'square' },
            { src: '/images/Photo Jul 20 2025.jpg', alt: 'Friends at a PowerPlay event', layout: 'square' },
            { src: '/images/Photo Jul 20 2025 (1).jpg', alt: 'Event day crowd', layout: 'square' },
            { src: '/images/Photo Jul 20 2025 from raghavsridhar09 (2).jpg', alt: 'Community celebration', layout: 'wide' },
            { src: '/images/Photo Jun 23 2025.jpg', alt: 'Summer tournament gathering', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 from raghavsridhar09.jpg', alt: 'Volunteers and athletes', layout: 'square' },
            { src: '/images/Photo Jun 19 2025.jpg', alt: 'Early community event', layout: 'square' },
            { src: '/images/gallery-coach.jpeg', alt: 'Coach mentoring young athletes', layout: 'square' },
        ],
    },
    {
        eyebrow: 'Why we play',
        title: 'Purpose & speakers',
        items: [
            {
                src: '/images/game-on-ibd-live.jpg',
                alt: 'Game On: IBD & Sports speaker session',
                layout: 'feature',
                label: 'Game On: IBD & Sports',
            },
            { src: '/images/speaker-slider2.jpeg', alt: 'Guest speaker addressing athletes', layout: 'square' },
            { src: '/images/speaker-slider.jpeg', alt: 'Health education session', layout: 'square' },
            { src: '/images/speaker-hero.jpeg', alt: 'Speaker at PowerPlay event', layout: 'wide' },
        ],
    },
    {
        eyebrow: 'Giving back',
        title: 'Giveback nights',
        items: [
            { src: '/images/giveback2.png', alt: 'Giveback Night at Chicken N Pickle', layout: 'wide' },
            { src: '/images/gallery-giveback-2.jpg', alt: 'Community giveback event', layout: 'wide', objectPosition: 'top' },
            { src: '/images/gallery-giveback-3.jpg', alt: 'Families at giveback night', layout: 'wide' },
            { src: '/images/gallery-giveback-1.jpg', alt: 'Giveback night crowd', layout: 'wide' },
        ],
    },
    {
        eyebrow: 'In between',
        title: 'More moments',
        items: [
            { src: '/images/Photo Jun 23 2025 (1).jpg', alt: 'Tournament day moment', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 (2).jpg', alt: 'Athletes between matches', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 (3).jpg', alt: 'Sideline energy', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 (4).jpg', alt: 'Event day portrait', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 (5).jpg', alt: 'Community candid', layout: 'square' },
            { src: '/images/Photo Jun 23 2025 (6).jpg', alt: 'Friends at the tournament', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (10).jpeg', alt: 'Gallery moment', layout: 'wide' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (6).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (3).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (8).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (7).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.37 PM.jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (13).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (5).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (1).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.36 PM (4).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/WhatsApp Image 2026-02-09 at 3.19.37 PM (2).jpeg', alt: 'Gallery moment', layout: 'square' },
            { src: '/images/event-pickleball.jpg', alt: 'Pickleball event action', layout: 'wide' },
            { src: '/images/event-guest.jpg', alt: 'Special guest visit', layout: 'square' },
        ],
    },
];

const layoutClasses: Record<GalleryLayout, string> = {
    square: 'aspect-square col-span-1',
    wide: 'col-span-2 aspect-[16/9] md:aspect-[2/1]',
    feature: 'col-span-2 md:col-span-4 aspect-[16/9] md:aspect-[2/1]',
};

const GalleryImage: React.FC<{
    item: GalleryItem;
    delay?: number;
}> = ({ item, delay = 0 }) => {
    if (item.layout === 'feature') {
        return (
            <ScrollReveal className={layoutClasses.feature} width="100%" delay={delay}>
                <div className="relative group overflow-hidden rounded w-full h-full">
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                        style={{ objectPosition: item.objectPosition ?? 'center' }}
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/1200x800/f3f4f6/111827?text=PowerPlay';
                            e.currentTarget.onerror = null;
                        }}
                    />
                    {item.label && (
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                            <span className="bg-coral text-white text-xs font-medium px-3 py-1.5 rounded">
                                {item.label}
                            </span>
                        </div>
                    )}
                </div>
            </ScrollReveal>
        );
    }

    return (
        <ScrollReveal className={layoutClasses[item.layout]} width="100%" delay={delay}>
            <div className="relative group overflow-hidden rounded w-full h-full">
                <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    style={{ objectPosition: item.objectPosition ?? 'center' }}
                    onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x400/f3f4f6/111827?text=Photo';
                        e.currentTarget.onerror = null;
                    }}
                />
            </div>
        </ScrollReveal>
    );
};

const SectionHeader: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
    <div className="col-span-2 md:col-span-4 pt-4 md:pt-8 pb-2 md:pb-4">
        <p className="section-eyebrow mb-2">{eyebrow}</p>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal tracking-tight">{title}</h2>
        <div className="court-line mt-4" aria-hidden="true" />
    </div>
);

export const GalleryPage: React.FC = () => {
    let delayIndex = 0;

    return (
        <div className="min-h-screen bg-court font-sans text-charcoal">
            <main className="pt-20">
                <PageHero
                    eyebrow="Photo gallery"
                    title={<>Game Day <span className="text-coral">Memories</span></>}
                    subtitle="Highlights from tournaments, chapter events, and community gatherings."
                    image="/images/wilco-3v3-austin.jpg"
                />

                <section className="py-24 bg-court relative" data-navbar-theme="light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-8">
                        {GALLERY_SECTIONS.map((section) => (
                            <div
                                key={section.title}
                                className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 grid-flow-dense"
                            >
                                <SectionHeader eyebrow={section.eyebrow} title={section.title} />
                                {section.items.map((item) => {
                                    const delay = (delayIndex++ % 10) * 0.08;
                                    return <GalleryImage key={item.src} item={item} delay={delay} />;
                                })}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};
