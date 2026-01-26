import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Real photos only - curated selection
const heroImages = [
  '/images/event-cricket.jpg',
  '/images/event-guest.jpg',
  '/images/event-pickleball.jpg',
  '/images/gallery-batting.jpg',
  '/images/gallery-pickleball.jpg',
  '/images/hero-bg.jpg',
  '/images/Photo Jul 20 2025 from raghavsridhar09.jpg',
  '/images/trio-pic.jpg',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      {/* Base Background Image - Always visible as fallback */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Rotating Background Images with Transitions */}
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

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* Left Content - Text */}
        <div className="flex-1 text-white max-w-2xl text-center lg:text-left mt-8 lg:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md border-l-4 border-teal mb-6 lg:mb-8 mx-auto lg:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
            </span>
            <span className="text-xs lg:text-sm font-medium text-white/90">Student-Run 501(c)(3) Nonprofit</span>
          </div>

          {/* Main Headline - Bold Style (no italics) */}
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8 tracking-tight uppercase">
            Play For<br />
            <span className="text-coral">A Cure</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            PowerPlay unites local athletes through sports tournaments to raise critical funds for children and families battling pediatric illness—100% of donations go directly to those in need.
          </p>

          {/* Our Story Button */}
          <Link
            to="/about"
            className="group relative px-6 py-3 lg:px-8 lg:py-4 border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold text-base lg:text-lg transition-all duration-300 inline-flex items-center gap-3"
          >
            Our Story
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16l4-4m0 0l-4-4m4 4H8" />
            </svg>
          </Link>
        </div>

        {/* Right Content - Actual Donation Form */}
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-auto lg:min-w-[420px] lg:max-w-[450px]">
          <div className="bg-charcoal shadow-2xl overflow-hidden border-t-4 border-teal rounded-lg lg:rounded-none">
            <div className="bg-coral px-4 py-3 lg:px-6 lg:py-4">
              <h3 className="text-white font-display font-bold text-lg lg:text-xl">Donate Now</h3>
              <p className="text-white/80 text-xs lg:text-sm font-light">Secure payment via Hack Club Bank</p>
            </div>
            {/* Iframe container - clips top banner, shows form */}
            <div className="overflow-hidden h-[500px] lg:h-[600px] relative">
              <iframe
                src="https://hcb.hackclub.com/donations/start/powerplay"
                style={{
                  border: 'none',
                  marginTop: '-280px',  /* Crop to show from One-time/Monthly tabs */
                  height: '900px',      /* Full form height including submit button */
                  display: 'block'
                }}
                name="heroDonateFrame"
                scrolling="no"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                width="100%"
                allowFullScreen
                className="w-full absolute top-0 left-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-30 bg-gradient-to-r from-teal via-coral to-coral"></div>
    </section>
  );
};