import React from 'react';
import { SectionHeader } from './SectionHeader';

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
    role: "Parent & Supporter",
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

export const Testimonials: React.FC<TestimonialsProps> = ({ bgClass = 'bg-sideline' }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const isLight = bgClass === 'bg-court' || bgClass === 'bg-white' || bgClass === 'bg-sideline' || bgClass === 'bg-gray-50';

  return (
    <section className={`py-24 md:py-28 ${bgClass} relative overflow-hidden`} data-navbar-theme={isLight ? "light" : "dark"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Community voices"
          title="What People Say"
          subtitle="From athletes, parents, and partners who have been part of our events."
          isLight={isLight}
        />

        <div className="text-center max-w-3xl mx-auto bg-white rounded-lg border border-stone-150 px-8 py-10 md:px-12 md:py-12">
          <blockquote className={`${isLight ? 'text-charcoal/85' : 'text-white/85'} text-xl md:text-2xl leading-relaxed mb-8 font-normal`}>
            &ldquo;{currentTestimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className={`w-10 h-10 rounded-full ${isLight ? 'bg-coral/15 text-coral' : 'bg-coral text-white'} flex items-center justify-center font-semibold text-sm`}>
              {currentTestimonial.initials}
            </div>
            <div className="text-left">
              <p className={`${isLight ? 'text-charcoal' : 'text-white'} font-semibold text-base`}>{currentTestimonial.name}</p>
              <p className={`${isLight ? 'text-charcoal-light' : 'text-white/50'} text-sm`}>{currentTestimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coral ${
                index === currentIndex
                  ? 'bg-coral w-8'
                  : `${isLight ? 'bg-charcoal/15 hover:bg-charcoal/30' : 'bg-white/20 hover:bg-white/40'} w-1.5`
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
