import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-10 relative overflow-hidden border-t border-gray-100" data-navbar-theme="light">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="font-sans font-semibold text-xl tracking-tight text-charcoal mb-4 block">
              PowerPlay
            </Link>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal font-semibold mb-5 text-sm">Company</h4>
            <ul className="space-y-3 text-charcoal-light text-sm">
              <li><Link to="/about" className="hover:text-coral transition-colors">Our Story</Link></li>
              <li><Link to="/events" className="hover:text-coral transition-colors">Events & Tournaments</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-charcoal font-semibold mb-5 text-sm">Contact</h4>
            <ul className="space-y-3 text-charcoal-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-coral mt-0.5 text-xs">✉</span>
                <span className="break-all">powerplaynpo@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral mt-0.5 text-xs">☎</span>
                <span>+1 (469) 360-4088</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral mt-0.5 text-xs">📍</span>
                <span>Frisco, Texas</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-muted">
          <p>© 2026 PowerPlay NPO. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};