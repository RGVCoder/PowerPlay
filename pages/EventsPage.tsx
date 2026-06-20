import React from 'react';
import { Events } from '../components/Events';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageHero } from '../components/PageHero';

export const EventsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-court font-sans text-charcoal">
            <main className="pt-20">
                <PageHero
                    eyebrow="Tournaments"
                    title={<>Play Sports. <span className="text-coral">Save Lives.</span></>}
                    subtitle="Competitive events that create life-changing opportunities for families navigating pediatric illness."
                    image="/images/pickleball-winners.jpg"
                />

                <ScrollReveal data-navbar-theme="light">
                    <Events />
                </ScrollReveal>
            </main>
        </div>
    );
};
