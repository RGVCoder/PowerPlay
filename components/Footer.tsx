import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-warm pt-16 pb-8 border-t border-charcoal/10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1">
            <a href="#" className="font-display font-bold text-3xl tracking-tighter text-charcoal mb-6 block">
              POWER<span className="text-coral">PLAY</span>
            </a>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
            {/* Socials */}
            <div className="flex space-x-4">
              {['instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-charcoal-light text-sm">
              <li><a href="#about" className="hover:text-coral transition-colors">Our Story</a></li>
              <li><a href="#events" className="hover:text-coral transition-colors">Events & Tournaments</a></li>
              <li><a href="#team" className="hover:text-coral transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-charcoal font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-charcoal-light text-sm">
              <li className="flex items-start gap-3">
                <span className="text-coral mt-0.5">✉</span>
                <span className="break-all">powerplaynpo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral mt-0.5">☎</span>
                <span>+1 (469) 360-4088</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral mt-0.5">📍</span>
                <span>Frisco, Texas</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-charcoal font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-charcoal-light text-xs mb-4">Subscribe for updates on our latest events.</p>
            <div className="flex border-b border-charcoal/20 pb-2 focus-within:border-coral transition-colors">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-charcoal text-sm w-full focus:outline-none placeholder-charcoal/30"
              />
              <button className="text-coral font-bold uppercase text-xs hover:text-charcoal transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-light/60">
          <p>© 2025 PowerPlay NPO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-coral transition-colors">Privacy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms</a>
            <a href="#" className="hover:text-coral transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};