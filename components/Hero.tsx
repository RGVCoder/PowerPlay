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
    <section id="home" className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black-cortex" data-navbar-theme="dark">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-40' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-cortex/80 via-black-cortex/40 to-black-cortex/80 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-coral-cortex/10 border border-coral-cortex/20 mb-8 animate-fade-in-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cortex opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral-cortex"></span>
            </span>
            <span className="text-[10px] font-extrabold text-coral-cortex tracking-widest uppercase">Student-Run 501(c)(3)</span>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl text-white leading-[1.05] mb-8 tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Play for a <span className="text-coral-cortex">Cure.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Uniting athletes through sports tournaments to raise critical funds for pediatric illness.
            <span className="text-white/90 font-bold block mt-2"> 100% of proceeds support medical care for those in need.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
              className="px-10 py-4 rounded-full bg-coral-cortex text-white font-black text-base hover:bg-white hover:text-coral-cortex transition-all duration-300 border-2 border-coral-cortex shadow-xl shadow-coral-cortex/20"
            >
              Get Involved →
            </button>
            <Link
              to="/about"
              className="px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Minimalist Navigation Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 transition-all duration-500 rounded-full ${index === currentImageIndex ? 'w-12 bg-coral-cortex' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
    </section >
  );
};