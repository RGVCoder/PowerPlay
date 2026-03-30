import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Real photos only - curated selection
const heroImages = [
  '/images/pickleball-winners.jpg',
  '/images/gallery-giveback-1.jpg',
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
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black" data-navbar-theme="dark">
      {/* Background Images with Crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-50' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Fallback background */}
      <div className="absolute inset-0 bg-black -z-10" />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-24 md:pt-0">

        {/* Simple label — no pulsing dot */}


        {/* Main Headline — mixed case, less extreme weight */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-4 tracking-tight max-w-5xl mx-auto">
          Empowering Tomorrow's <span className="text-orange-cortex">Champions</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
          Uniting athletes through sports tournaments to create life-changing opportunities for underprivileged youth.{' '}
          <span className="text-white font-medium">100% of proceeds go directly to the community.</span>
        </p>

        {/* CTA Buttons — rounded rectangle, not pills */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/30 text-white font-semibold text-base hover:bg-white hover:text-black transition-all duration-300 min-w-[180px]"
          >
            Our Story
          </Link>
          <button
            onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-coral text-white font-semibold text-base hover:bg-white hover:text-black transition-all duration-300 min-w-[180px]"
          >
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};