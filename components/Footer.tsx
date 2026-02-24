import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-black/5" data-navbar-theme="light">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="font-sans font-bold text-3xl tracking-tighter text-black-cortex mb-6 block uppercase">
              POWER<span className="text-coral-cortex">PLAY</span>
            </Link>
            <p className="text-black-cortex/60 text-sm leading-relaxed mb-6 font-medium">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black-cortex font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-black-cortex/60 text-sm font-medium">
              <li><Link to="/about" className="hover:text-coral-cortex transition-colors">Our Story</Link></li>
              <li><Link to="/events" className="hover:text-coral-cortex transition-colors">Events & Tournaments</Link></li>
              <li><Link to="/contact" className="hover:text-coral-cortex transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black-cortex font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-black-cortex/60 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-coral-cortex mt-0.5">✉</span>
                <span className="break-all">powerplaynpo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral-cortex mt-0.5">☎</span>
                <span>+1 (469) 360-4088</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral-cortex mt-0.5">📍</span>
                <span>Frisco, Texas</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-black-cortex/40">
          <p>© 2026 PowerPlay NPO. All rights reserved.</p>
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