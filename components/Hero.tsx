import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black-rich pt-20">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        {/* User Image: Wide Team Lineup */}
        <img 
          src="/images/hero-bg.jpg" 
          alt="PowerPlay Team" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2000&auto=format&fit=crop";
            e.currentTarget.onerror = null; // Prevent infinite loop
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-black-rich/70 to-black-rich z-10"></div>
        <div className="absolute inset-0 bg-hero-glow z-10 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 hover:border-gold/30 transition-colors cursor-default animate-fade-in-up shadow-lg">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide">Welcome to PowerPlay</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
          Empowering Tomorrow's <br />
          <span className="text-gold-gradient">Champions</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light mx-auto drop-shadow-lg">
          Bringing student athletes together through community tournaments that raise funds for under-resourced kids.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
          <Button variant="primary" onClick={() => document.getElementById('events')?.scrollIntoView({behavior: 'smooth'})} className="rounded-full px-10">
            View Events
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="rounded-full px-10">
            Learn More
          </Button>
        </div>
      </div>

      {/* Impact Stats Bar - Floating Card Style */}
      <div className="relative z-20 w-full mt-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="p-8 text-center bg-black-surface/60 hover:bg-black-surface/80 transition-colors">
            <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">500<span className="text-gold">+</span></div>
            <div className="text-gray-400 text-sm font-medium tracking-wider">Athletes Empowered</div>
          </div>
          <div className="p-8 text-center bg-black-surface/60 hover:bg-black-surface/80 transition-colors">
            <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">$1K<span className="text-gold">+</span></div>
            <div className="text-gray-400 text-sm font-medium tracking-wider">Funds Raised</div>
          </div>
          <div className="p-8 text-center bg-black-surface/60 hover:bg-black-surface/80 transition-colors">
            <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">1000<span className="text-gold">+</span></div>
            <div className="text-gray-400 text-sm font-medium tracking-wider">People Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};