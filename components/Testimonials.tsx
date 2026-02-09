import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Power Play really helped me get more confident in my abilities and connect with players I wouldn't have met otherwise. It's an amazing environment.",
    name: "Vrishank Naveen",
    role: "Athlete",
    initials: "VN",
  },
  {
    quote: "Power Play has done an incredible job empowering athletes. The organization is top-notch and the impact on the kids is visible immediately.",
    name: "Christopher Badr",
    role: "Parent / Supporter",
    initials: "CB",
  },
  {
    quote: "It was a great presentation. I thought it was interesting that there are many people who have overcome it and not let it get to them, while still getting with their lives.",
    name: "Krisha Nepal",
    role: "Athlete",
    initials: "KN",
  },
  {
    quote: "Incredible initiative and impact. Love how PowerPlay is breaking barriers and ensuring kids facing medical challenges stay included and confident in sports. Truly inspiring work!",
    name: "Sriram Swaminathan",
    role: "Supporter",
    initials: "SS",
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 md:top-20 md:left-10 text-coral/10 text-[100px] md:text-[200px] font-serif select-none">"</div>
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 text-coral/10 text-[100px] md:text-[200px] font-serif select-none rotate-180">"</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <h2 className="font-display font-bold text-xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
            Athlete Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Quote Card */}
        <div className="text-center">
          {/* Quote Text */}
          <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-light mb-10 md:mb-12 max-w-3xl mx-auto italic">
            "{currentTestimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 md:gap-5">
            {/* Square avatar with initials */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-coral flex items-center justify-center text-white font-bold text-base md:text-lg">
              {currentTestimonial.initials}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-base md:text-lg">{currentTestimonial.name}</p>
              <p className="text-white/50 text-xs md:text-sm">{currentTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 ${index === currentIndex
                ? 'bg-coral w-10'
                : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};