import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TeamMembers } from '../components/TeamMembers';
import { Chapters } from '../components/Chapters';
import { PageHero } from '../components/PageHero';

export const TeamPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-court font-sans text-charcoal">
            <main className="pt-20">
                <PageHero
                    eyebrow="The people"
                    title={<>Team & <span className="text-coral">Chapters</span></>}
                    subtitle="Students united by sports and a commitment to kids helping kids."
                    image="/images/event-guest.jpg"
                />

                <ScrollReveal delay={0.1} data-navbar-theme="light">
                    <TeamMembers />
                </ScrollReveal>

                <ScrollReveal delay={0.1} data-navbar-theme="light">
                    <Chapters />
                </ScrollReveal>
            </main>
        </div>
    );
};
