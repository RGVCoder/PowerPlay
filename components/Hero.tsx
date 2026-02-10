import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Real photos only - curated selection
const heroImages = [
  '/images/event-pickleball.jpg',
  '/images/event-guest.jpg',
  '/images/speaker-hero.jpeg',
  '/images/hero-bg.jpg',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle images every 6 seconds for better pace
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-utr-black">
      {/* Background Images with Zoom Effect */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
            }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Fallback background if images fail to load or js disabled */}
      <div className="absolute inset-0 bg-utr-black -z-10" />

      {/* Dark Gradient Overlay for Readability - UTR Style */}
      <div className="absolute inset-0 bg-gradient-to-b from-utr-black/60 via-utr-black/30 to-utr-black/90 z-10" />

      {/* Content Container - Centered */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral"></span>
          </span>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">Student-Run 501(c)(3)</span>
        </div>

        {/* Main Headline - Massive & Bold */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl text-white leading-tight mb-6 tracking-tight drop-shadow-lg max-w-4xl mx-auto">
          PLAY FOR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-coral-light">
            A CURE
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Uniting athletes through sports tournaments to raise critical funds for pediatric illness.
          <span className="font-semibold text-white"> 100% of donations go to families.</span>
        </p>

        {/* CTA Buttons - UTR Style (Side by Side) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center">
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-utr-black transition-all duration-300 min-w-[200px]"
          >
            Our Story
          </Link>
          <button
            onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-coral border-2 border-coral text-white font-bold text-lg hover:bg-coral-dark hover:border-coral-dark transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-coral/30"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};