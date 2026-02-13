import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-warm pt-16 pb-8 border-t border-charcoal/10 relative overflow-hidden" data-navbar-theme="light">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="font-display font-bold text-3xl tracking-tighter text-charcoal mb-6 block">
              POWER<span className="text-coral">PLAY</span>
            </Link>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-charcoal-light text-sm">
              <li><Link to="/about" className="hover:text-coral transition-colors">Our Story</Link></li>
              <li><Link to="/events" className="hover:text-coral transition-colors">Events & Tournaments</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact Us</Link></li>
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

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-light/60">
          <p>© 2025 PowerPlay NPO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};