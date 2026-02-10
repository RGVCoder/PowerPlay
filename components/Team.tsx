import React from 'react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  { name: "Raghav Sridhar", title: "Founder & President" },
  { name: "Biswajit Vaddu", title: "Director of Outreach" },
  { name: "Aryan Gokul", title: "COO" },
  { name: "Ishaan Acharya", title: "CFO" },
  { name: "Vedhas", title: "CAO" },
  { name: "Rochit", title: "Marketing Director" }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6 tracking-tight">
            MEET THE <span className="text-coral">TEAM</span>
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto font-light">
            The passionate students driving PowerPlay forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {members.map((member, index) => {
            const isFounder = member.name === "Raghav Sridhar";
            return (
              <div key={index} className="group text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {/* Rotating Border Effect - Solid & Brighter for Founder */}
                  <div className={`absolute inset-0 rounded-full border-2 ${isFounder ? 'border-solid border-coral shadow-md' : 'border-dashed border-coral-light/40'} group-hover:rotate-180 transition-transform duration-1000`}></div>
                  <div className="absolute inset-2 rounded-full border border-charcoal/10 bg-cream-sand overflow-hidden">
                    {/* Placeholder for team headshots */}
                    <img
                      src={`https://placehold.co/150x150/FFF3E6/E76F51?text=${member.name.charAt(0)}`}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <h3 className={`font-bold text-lg mb-2 transition-colors ${isFounder ? 'text-coral' : 'text-charcoal group-hover:text-coral-light'}`}>{member.name}</h3>
                <p className={`text-xs uppercase tracking-[0.15em] font-medium ${isFounder ? 'text-charcoal-light' : 'text-charcoal-muted'}`}>{member.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};