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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white py-3 border-gray-200/60'
            : 'bg-white py-4 border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gray-200">
              <img src="/images/logo.png" alt="PowerPlay logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-charcoal">
              Power<span className="text-coral">Play</span>
            </span>
          </Link>

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
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-coral'
                      : 'text-charcoal/60 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
              className="hidden md:block px-5 py-2 rounded-lg font-semibold text-sm transition-all bg-coral text-white hover:bg-charcoal"
            >
              Donate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none transition-colors text-charcoal"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[55] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[60] border-r border-gray-100 flex flex-col md:hidden animate-slide-in-left">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-200">
                  <img src="/images/logo.png" alt="PowerPlay logo" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-base text-charcoal leading-none">
                    Power<span className="text-coral">Play</span>
                  </h2>
                  <p className="text-[11px] text-charcoal-light mt-0.5">Kids helping kids</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal-light hover:text-charcoal transition-colors p-1"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

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
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 w-full text-left ${
                      location.pathname === link.path
                        ? 'bg-gray-50 text-coral font-semibold'
                        : 'text-charcoal hover:bg-gray-50 font-medium'
                    }`}
                  >
                    <span className="text-sm">{link.name}</span>
                  </button>
                )
              ))}
            </div>

            <div className="p-6 border-t border-gray-100">
              <button
                onClick={() => window.open('https://hcb.hackclub.com/donations/start/powerplay', '_blank')}
                className="w-full py-3 rounded-lg bg-coral text-white font-semibold text-center hover:bg-charcoal transition-colors text-sm"
              >
                Donate now
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
