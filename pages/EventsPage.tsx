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
                    subtitle="PowerPlay unites young athletes through sports, raising funds for underprivileged youth and their families."
                    image="/images/pickleball-winners.jpg"
                />

                <ScrollReveal data-navbar-theme="light">
                    <Events />
                </ScrollReveal>
            </main>
        </div>
    );
};
