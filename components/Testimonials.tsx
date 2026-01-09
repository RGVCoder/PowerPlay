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
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-coral/10 text-[200px] font-serif select-none">"</div>
      <div className="absolute bottom-20 right-10 text-coral/10 text-[200px] font-serif select-none rotate-180">"</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider uppercase whitespace-nowrap">
            Athlete Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Quote Card */}
        <div className="text-center">
          {/* Quote Text */}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-3xl mx-auto">
            "{currentTestimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-5">
            {/* Square avatar with initials */}
            <div className="w-14 h-14 bg-coral flex items-center justify-center text-white font-bold text-lg">
              {currentTestimonial.initials}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">{currentTestimonial.name}</p>
              <p className="text-white/50 text-sm">{currentTestimonial.role}</p>
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