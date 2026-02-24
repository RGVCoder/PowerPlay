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
    <section id="home" className="relative min-h-[60vh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-black-cortex" data-navbar-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="relative z-20 text-left flex flex-col justify-center py-4">
            <div>
              {/* Badge - Integrated */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-coral-cortex/10 border border-coral-cortex/20 mb-8 animate-fade-in-up">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cortex opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral-cortex"></span>
                </span>
                <span className="text-[10px] font-extrabold text-coral-cortex tracking-widest uppercase">Student-Run 501(c)(3)</span>
              </div>

              {/* Headline - High Contrast */}
              <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Play for a <span className="text-coral-cortex">Cure.</span>
              </h1>

              {/* Subheadline - Defined Body */}
              <p className="text-base md:text-lg text-white/70 mb-0 max-w-xl font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Uniting athletes through sports tournaments to raise critical funds for pediatric illness.
                <span className="text-white/90 font-bold"> 100% of proceeds support medical care for those in need.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
                className="px-8 py-3 rounded-lg bg-coral-cortex text-white font-bold text-sm hover:bg-white hover:text-coral-cortex transition-all duration-300 border-2 border-coral-cortex shadow-lg shadow-coral-cortex/10"
              >
                Get Involved →
              </button>
              <Link
                to="/about"
                className="px-8 py-3 rounded-lg border-2 border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Column: Slideshow */}
          <div className="relative group animate-fade-in-up lg:mt-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/5 bg-white/5 shadow-2xl shadow-black/20">
              {heroImages.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              ))}

              {/* Slideshow dots - Minimalist */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1 transition-all duration-300 rounded-full ${index === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};