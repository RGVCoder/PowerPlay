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
    { name: 'Events', path: '/events', type: 'route' },
    { name: 'Gallery', path: '/gallery', type: 'route' },
    { name: 'Team', path: '/team', type: 'route' },
    { name: 'Contact', path: '/contact', type: 'route' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${scrolled
          ? 'bg-white/95 backdrop-blur-sm py-3 border-gray-200/60'
          : 'bg-white py-4 border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gray-200">
              <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-sans font-semibold text-lg tracking-tight text-charcoal">
              PowerPlay
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-7">
            {links.map((link) => (
              link.type === 'anchor' ? (
                <button
                  key={link.name}
                  onClick={() => handleAnchorClick(link.path.substring(1))}
                  className="text-sm font-medium transition-colors duration-200 text-charcoal/60 hover:text-charcoal"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.path === '/' && location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      navigate(link.path);
                    }
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-coral'
                    : 'text-charcoal/60 hover:text-charcoal'
                    }`}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
              className="hidden md:block px-5 py-2 rounded-lg font-semibold text-sm transition-all bg-coral text-white hover:bg-charcoal"
            >
              Donate
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
            className="fixed inset-0 bg-black/40 z-[55] md:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[60] shadow-xl flex flex-col md:hidden animate-slide-in-left">
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-200">
                  <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-base text-charcoal leading-none">PowerPlay</h2>
                  <p className="text-[11px] text-charcoal-light mt-0.5">Youth Sports Non-Profit</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal-light hover:text-charcoal transition-colors p-1"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {links.map((link) => (
                link.type === 'anchor' ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleAnchorClick(link.path.substring(1));
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 text-charcoal hover:bg-gray-50 font-medium w-full text-left"
                  >
                    <span className="text-charcoal-light">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </button>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.path === '/' && location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        navigate(link.path);
                      }
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 ${location.pathname === link.path
                      ? 'bg-gray-50 text-coral font-semibold'
                      : 'text-charcoal hover:bg-gray-50 font-medium'
                      }`}
                  >
                    {/* Icons for each link type */}
                    <span className={`${location.pathname === link.path ? 'text-coral' : 'text-charcoal-light'}`}>
                      {link.name === 'Home' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {link.name === 'About' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {link.name === 'Events' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.name === 'Gallery' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.name === 'Contact' && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </button>
                )
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-100">
              <button
                onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
                className="w-full py-3 rounded-lg bg-coral text-white font-semibold text-center hover:bg-charcoal transition-colors text-sm"
              >
                Donate Now
              </button>
              <p className="text-center text-[11px] text-charcoal-muted mt-4">
                © 2026 PowerPlay NPO
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};