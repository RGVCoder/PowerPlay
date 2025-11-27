import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black-rich relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16 text-center tracking-tight">
          ATHLETE <span className="text-gold-gradient">STORIES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-black-card p-10 rounded-sm border border-white/5 relative group hover:border-gold/30 transition-colors duration-500">
            <div className="text-gold text-8xl absolute -top-6 -left-2 opacity-20 font-serif group-hover:opacity-40 transition-opacity">"</div>
            <p className="text-gray-300 text-lg italic mb-8 relative z-10 leading-relaxed font-light">
              Power Play really helped me get more confident in my abilities and connect with players I wouldn't have met otherwise. It's an amazing environment.
            </p>
            <div className="flex items-center border-t border-white/5 pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-700 flex items-center justify-center text-black font-bold text-sm shadow-lg">VN</div>
              <div className="ml-4">
                <p className="text-white font-bold uppercase tracking-wide text-sm">Vrishank Naveen</p>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">Athlete</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-black-card p-10 rounded-sm border border-white/5 relative group hover:border-gold/30 transition-colors duration-500">
             <div className="text-white text-8xl absolute -top-6 -left-2 opacity-5 font-serif group-hover:opacity-10 transition-opacity">"</div>
            <p className="text-gray-300 text-lg italic mb-8 relative z-10 leading-relaxed font-light">
              Power Play has done an incredible job empowering athletes. The organization is top-notch and the impact on the kids is visible immediately.
            </p>
            <div className="flex items-center border-t border-white/5 pt-6">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-sm border border-white/10">CB</div>
              <div className="ml-4">
                <p className="text-white font-bold uppercase tracking-wide text-sm">Christopher Badr</p>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">Parent / Supporter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};