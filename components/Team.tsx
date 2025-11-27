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
    <section id="team" className="py-24 bg-black-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            MEET THE <span className="text-gold">TEAM</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            The passionate students driving PowerPlay forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {members.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                 {/* Rotating Border Effect */}
                 <div className="absolute inset-0 rounded-full border border-dashed border-gold/30 group-hover:rotate-180 transition-transform duration-1000"></div>
                 <div className="absolute inset-2 rounded-full border border-white/10 bg-black-lighter overflow-hidden">
                    {/* Placeholder for team headshots */}
                    <img 
                        src={`https://placehold.co/150x150/000000/D4AF37?text=${member.name.charAt(0)}`} 
                        alt={member.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{member.name}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.15em] font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};