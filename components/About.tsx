import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-cortex/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-cortex/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-cortex text-sm font-semibold uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight leading-tight">
              Sports Can<br />
              <span className="text-orange-cortex">Save Lives</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              At PowerPlay, we're a <strong className="text-white font-medium">student-run nonprofit</strong> that believes sports can do more than just win games—they can help save lives. By pairing local tournaments with talks from health experts and mentors, we're building a community that cares.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-orange-cortex font-medium">Every dollar we raise goes directly</strong> to supporting kids and families as they navigate the complexities of pediatric illness—from childhood cancer to chronic conditions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When you support PowerPlay, you're not just funding a tournament. You're funding hope, healing, and a future for children who deserve every chance to thrive.
            </p>
          </div>

          <div className="relative">
            {/* Collage Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3]">
              {/* Image 1: Coach Mentoring (Landscape) - Positioned Top Left */}
              <div className="absolute top-0 left-0 w-3/4 h-3/5 overflow-hidden border-l-4 border-orange-cortex shadow-xl z-10 group">
                <div className="absolute inset-0 bg-orange-cortex/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* User Image: Coach talking to athletes */}
                <img
                  src="/images/about-mentor.jpg"
                  alt="Coach mentoring athletes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>

              {/* Image 2: Student with Medal (Portrait) - Positioned Bottom Right */}
              <div className="absolute bottom-0 right-0 w-1/2 h-3/4 overflow-hidden border-l-4 border-orange-cortex shadow-2xl z-20 group">
                <div className="absolute inset-0 bg-orange-cortex/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* User Image: Child with basketball */}
                <img
                  src="/images/about-child.jpg"
                  alt="Child with hope"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>

              {/* Decorative Box */}
              <div className="absolute bottom-10 left-10 w-24 h-24 border-l-2 border-b-2 border-orange-cortex/40 -z-0"></div>
              <div className="absolute top-4 right-1/3 w-24 h-24 border-t-2 border-r-2 border-orange-cortex/40 -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};