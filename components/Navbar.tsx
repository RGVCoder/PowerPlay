import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (anchor: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    { name: 'Team', path: '/team', type: 'route' },
    { name: 'Events', path: '/events', type: 'route' },
    { name: 'Gallery', path: '/gallery', type: 'route' },
    { name: 'Contact', path: '/contact', type: 'route' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-charcoal/5'
          : 'bg-white py-5 shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-charcoal/10 group-hover:border-coral transition-colors">
              <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-charcoal transition-colors">
              POWER<span className="text-coral">PLAY</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${location.pathname === link.path
                  ? 'text-coral'
                  : 'text-charcoal hover:text-coral'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
              className="hidden md:block px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg bg-coral text-white hover:bg-coral-light"
            >
              Donate Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none transition-colors text-charcoal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-cream-warm z-[60] shadow-2xl flex flex-col md:hidden animate-slide-in-left">
            {/* Drawer Header */}
            <div className="p-6 border-b border-charcoal/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-charcoal/10">
                  <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg text-charcoal leading-none">PowerPlay</h2>
                  <p className="text-[10px] text-charcoal-light uppercase tracking-wider mt-0.5">Youth Sports Non-Profit</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal-light hover:text-coral transition-colors p-1"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === link.path
                    ? 'bg-white shadow-sm text-coral font-bold'
                    : 'text-charcoal hover:bg-white/50 hover:text-coral font-medium'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {/* Icons for each link type */}
                  <span className={`text-xl ${location.pathname === link.path ? 'text-coral' : 'text-charcoal-light'}`}>
                    {link.name === 'Home' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {link.name === 'About' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {link.name === 'Team' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {link.name === 'Events' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {link.name === 'Gallery' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {link.name === 'Contact' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-charcoal/10 bg-white/50">
              <button
                onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
                className="w-full py-3.5 rounded-xl bg-coral text-white font-bold text-center shadow-lg shadow-coral/20 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 group"
              >
                Donate Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <p className="text-center text-[10px] text-charcoal-light mt-4">
                © 2026 PowerPlay NPO
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};