import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 tracking-tight leading-none">
              MORE THAN<br />
              JUST <span className="text-transparent bg-clip-text bg-gold-gradient">THE GAME</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-gold to-transparent mb-10"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              PowerPlay is dedicated to organizing sports tournaments that foster community, talent, and positive change. We believe in the <strong className="text-white font-medium">power of play</strong> to transform lives, nurture leadership, and build lifelong connections.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              By bringing student athletes together, we not only celebrate athletic potential but also channel that energy into raising funds for under-resourced kids, ensuring everyone gets a chance to play.
            </p>
          </div>
          
          <div className="relative">
            {/* Collage Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3]">
                {/* Image 1: Coach Mentoring (Landscape) - Positioned Top Left */}
                <div className="absolute top-0 left-0 w-3/4 h-3/5 rounded-sm overflow-hidden border border-white/10 shadow-2xl z-10 group">
                    <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     {/* User Image: Coach Mentoring Group */}
                    <img 
                        src="/images/about-mentor.jpg" 
                        alt="Mentorship" 
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop";
                          e.currentTarget.onerror = null;
                        }}
                    />
                </div>

                {/* Image 2: Student with Medal (Portrait) - Positioned Bottom Right */}
                <div className="absolute bottom-0 right-0 w-1/2 h-3/4 rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 group">
                    <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* User Image: Student with Medal */}
                    <img 
                        src="/images/pick.jpg" 
                        alt="Champion Impact" 
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop";
                          e.currentTarget.onerror = null;
                        }}
                    />
                </div>
                
                {/* Decorative Box */}
                <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-gold/40 -z-0"></div>
                <div className="absolute top-4 right-1/3 w-24 h-24 border-t border-r border-gold/20 -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};