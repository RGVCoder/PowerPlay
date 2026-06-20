import React from 'react';
import { Link } from 'react-router-dom';

const ContactIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-coral mt-0.5 flex-shrink-0">{children}</span>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-16 pb-10 relative overflow-hidden" data-navbar-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="col-span-1">
            <Link to="/" className="font-display font-semibold text-xl tracking-tight text-white mb-4 block">
              PowerPlay
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              PowerPlay unites young athletes through sports, raising funds for underprivileged youth and their families. No overhead. Just kids helping kids.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Explore</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-coral transition-colors">Our story</Link></li>
              <li><Link to="/events" className="hover:text-coral transition-colors">Events & tournaments</Link></li>
              <li><Link to="/gallery" className="hover:text-coral transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-2.5">
                <ContactIcon>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </ContactIcon>
                <a href="mailto:powerplaynpo@gmail.com" className="break-all hover:text-coral transition-colors">powerplaynpo@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <ContactIcon>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </ContactIcon>
                <a href="tel:+14693604088" className="hover:text-coral transition-colors">+1 (469) 360-4088</a>
              </li>
              <li className="flex items-start gap-2.5">
                <ContactIcon>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </ContactIcon>
                <span>Prosper, Texas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2026 PowerPlay NPO. All rights reserved.</p>
          <p className="mt-3 md:mt-0">501(c)(3) nonprofit · 100% to families</p>
        </div>
      </div>
    </footer>
  );
};
