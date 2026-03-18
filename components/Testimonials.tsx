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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-advance testimonials
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const isLight = bgClass === 'bg-white' || bgClass === 'bg-cream';

  return (
    <section className={`py-16 md:py-24 ${bgClass} relative overflow-hidden`} data-navbar-theme={isLight ? "light" : "dark"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-sans font-black text-4xl md:text-5xl mb-4 ${isLight ? 'text-black-cortex' : 'text-white'}`}>
            Athlete <span className="text-coral-cortex">Stories</span>
          </h2>
          <p className={`${isLight ? 'text-black-cortex/60' : 'text-white/60'} text-lg max-w-2xl mx-auto font-medium`}>
            Hear from the families, athletes, and partners we've had the privilege to work with.
          </p>
        </div>

        {/* Quote Card */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative Stars */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-coral-cortex fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote Text */}
          <p className={`${isLight ? 'text-black-cortex/90' : 'text-white/90'} text-xl md:text-3xl leading-relaxed mb-10 md:mb-12 italic font-medium`}>
            "{currentTestimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 md:gap-5">
            {/* Round avatar with initials */}
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${isLight ? 'bg-coral-cortex/20 text-coral-cortex' : 'bg-coral-cortex text-white'} flex items-center justify-center font-bold text-lg md:text-xl`}>
              {currentTestimonial.initials}
            </div>
            <div className="text-left">
              <p className={`${isLight ? 'text-black-cortex' : 'text-white'} font-bold text-lg md:text-xl`}>{currentTestimonial.name}</p>
              <p className="text-coral-cortex font-bold text-xs md:text-sm uppercase tracking-widest">{currentTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-coral-cortex w-12'
                : `${isLight ? 'bg-black-cortex/20 hover:bg-black-cortex/40' : 'bg-white/30 hover:bg-white/50'} w-3`
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};