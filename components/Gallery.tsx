import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black-rich relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-12 flex items-center justify-between">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">MOMENTS OF <span className="text-gold">GLORY</span></h2>
            <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
         </div>

         {/* Bento Grid Layout */}
         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Large Feature Item (Left) - Cricket Action */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                {/* User Image: Cricket Batting */}
                <img 
                    src="/images/event-cricket.jpg" 
                    alt="Cricket Action" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x800/101010/D4AF37?text=Action+Shot";
                        e.currentTarget.onerror = null;
                    }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-gold text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Action</span>
                </div>
            </div>

            {/* Wide Item (Top Right) - Team Lineup */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                {/* User Image: Team Lineup */}
                <img 
                    src="/images/gallery-lineup.jpg" 
                    alt="Team Lineup" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x400/101010/D4AF37?text=Team+Lineup";
                        e.currentTarget.onerror = null;
                    }}
                />
            </div>

            {/* Small Item (Bottom Right 1) - Pickleball Pose */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                {/* User Image: Pickleball Duo */}
                <img 
                    src="/images/gallery-pickleball.jpg" 
                    alt="Pickleball Posing" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/101010/D4AF37?text=Pickleball";
                        e.currentTarget.onerror = null;
                    }}
                />
            </div>

            {/* Small Item (Bottom Right 2) - Coach Talking */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                {/* User Image: Coach Instructing */}
                <img 
                    src="/images/mvp.jpg" 
                    alt="Coach Instruction" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/101010/D4AF37?text=Coaching";
                        e.currentTarget.onerror = null;
                    }}
                />
            </div>

         </div>
       </div>
    </section>
  );
};