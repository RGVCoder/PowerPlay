import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-12 md:pt-24 pb-8 md:pb-12 relative">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-teal to-coral"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">

          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <a href="#" className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-charcoal mb-4 md:mb-6 block">
              POWER<span className="text-coral">PLAY</span>
            </a>
            <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-teal font-bold mb-4 md:mb-6 uppercase text-xs tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-charcoal/70 text-sm">
              <li className="flex items-center justify-center md:justify-start hover:text-charcoal transition-colors cursor-pointer group">
                <span className="w-5 h-5 mr-3 text-teal group-hover:scale-110 transition-transform">✉</span>
                powerplaynpo@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start hover:text-charcoal transition-colors cursor-pointer group">
                <span className="w-5 h-5 mr-3 text-teal group-hover:scale-110 transition-transform">☎</span>
                +1 (469) 360-4088
              </li>
              <li className="flex items-center justify-center md:justify-start hover:text-charcoal transition-colors cursor-pointer group">
                <span className="w-5 h-5 mr-3 text-teal group-hover:scale-110 transition-transform">@</span>
                @powerplaynpo
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-coral font-bold mb-4 md:mb-6 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-charcoal/70 text-sm">
              <li><a href="#about" className="hover:text-coral transition-colors block">About Us</a></li>
              <li><a href="#events" className="hover:text-coral transition-colors block">Events</a></li>
              <li><a href="#team" className="hover:text-coral transition-colors block">Team</a></li>
              <li><a href="#" className="hover:text-coral transition-colors block">Donate</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-teal font-bold mb-4 md:mb-6 uppercase text-xs tracking-[0.2em]">Stay Updated</h4>
            <div className="flex border-2 border-charcoal/20 focus-within:border-teal transition-colors overflow-hidden max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-charcoal text-sm w-full px-4 py-2 md:py-3 focus:outline-none placeholder-charcoal/40"
              />
              <button className="bg-teal text-white font-bold px-4 hover:bg-teal-dark transition-colors uppercase text-xs tracking-wider">
                Join
              </button>
            </div>
            <p className="text-charcoal/50 text-xs mt-3">Get updates on events & impact</p>
          </div>

        </div>

        <div className="border-t border-charcoal/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-charcoal/50">
          <p>© 2025 PowerPlay NPO. All rights reserved.</p>
          <div className="flex space-x-6 md:space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};