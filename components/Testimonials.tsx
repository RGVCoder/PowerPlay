import React from 'react';

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

interface TestimonialsProps {
  bgClass?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ bgClass = 'bg-black-cortex' }) => {
  const isLight = bgClass === 'bg-white' || bgClass === 'bg-cream';

  return (
    <section className={`py-16 md:py-24 ${bgClass} relative overflow-hidden`} data-navbar-theme={isLight ? "light" : "dark"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-display font-black text-4xl md:text-5xl mb-4 ${isLight ? 'text-black-cortex' : 'text-white'}`}>
            Athlete <span className="text-coral-cortex">Stories</span>
          </h2>
          <p className={`${isLight ? 'text-black-cortex/60' : 'text-white/60'} text-lg max-w-2xl mx-auto`}>
            Hear from the families, athletes, and partners we've had the privilege to work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${isLight ? 'bg-white border-black/5 shadow-sm' : 'bg-white/5 border-coral-cortex/20'} rounded-2xl p-8 border-2 transition-all duration-300 hover:border-coral-cortex group`}>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-coral-cortex fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className={`text-lg italic leading-relaxed mb-6 ${isLight ? 'text-black-cortex/80' : 'text-white/80'}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${isLight ? 'bg-black/5' : 'bg-coral-cortex/20'} flex items-center justify-center font-bold text-coral-cortex`}>
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className={`font-bold ${isLight ? 'text-black-cortex' : 'text-white'}`}>{testimonial.name}</div>
                  <div className="text-coral-cortex text-xs uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};