import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/images/gallery-giveback-1.jpg',
  '/images/event-pickleball.jpg',
  '/images/event-guest.jpg',
  '/images/speaker-hero.jpeg',
  '/images/hero-bg.jpg',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black-cortex" data-navbar-theme="dark">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-55' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black-cortex -z-10" />
      <div className="absolute inset-0 bg-black-cortex/50 z-10" />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-24 md:pt-0">
        <p className="section-eyebrow text-coral mb-6">
          Student-run nonprofit · Prosper, Texas
        </p>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 max-w-5xl mx-auto">
          Play sports.{' '}
          <span className="text-coral">Save lives.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/75 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          PowerPlay unites young athletes through sports, raising funds for underprivileged youth and their families.{' '}
          <span className="text-white/90 font-medium">Every dollar goes to the community.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/35 text-white font-semibold text-base hover:bg-white hover:text-charcoal transition-all duration-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Our story
          </Link>
          <button
            onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-coral text-white font-semibold text-base hover:bg-white hover:text-charcoal transition-all duration-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Donate now
          </button>
        </div>
      </div>
    </section>
  );
};
