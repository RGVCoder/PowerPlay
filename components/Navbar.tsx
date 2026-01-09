import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation for anchor links - works from any page
  const handleAnchorClick = (anchor: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll after a short delay
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home page, just scroll
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', anchor: 'home', isRoute: false },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Events', href: '/events', isRoute: true },
    { name: 'Gallery', href: '/gallery', isRoute: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b bg-white shadow-sm ${scrolled
        ? 'py-3'
        : 'py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 group">
          <Link to="/" className="group-hover:opacity-90 transition-opacity">
            <img
              src="/images/logo-full.png"
              alt="PowerPlay"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            // Determine if this link is active
            const isActive = link.isRoute
              ? location.pathname === link.href
              : location.pathname === '/' && link.anchor === 'home';

            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.href!}
                className={`font-sans text-sm font-medium transition-colors duration-300 relative group ${isActive ? 'text-charcoal' : 'text-charcoal-light hover:text-charcoal'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-teal' : 'w-0 bg-coral group-hover:w-full'
                  }`}></span>
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleAnchorClick(link.anchor!)}
                className={`font-sans text-sm font-medium transition-colors duration-300 relative group ${isActive ? 'text-charcoal' : 'text-charcoal-light hover:text-charcoal'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-teal' : 'w-0 bg-coral group-hover:w-full'
                  }`}></span>
              </button>
            );
          })}
          <Button
            variant="primary"
            className="py-2 px-5 text-xs font-bold"
            onClick={() => handleAnchorClick('home')}
          >
            Donate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-charcoal hover:text-coral focus:outline-none transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-cream/98 backdrop-blur-xl border-b border-charcoal/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href!}
                className="block px-3 py-3 text-base font-medium text-charcoal-light hover:text-coral hover:bg-coral/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                className="block w-full text-left px-3 py-3 text-base font-medium text-charcoal-light hover:text-coral hover:bg-coral/5 transition-all"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAnchorClick(link.anchor!);
                }}
              >
                {link.name}
              </button>
            )
          ))}
          <div className="mt-6 px-3">
            <Button
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                handleAnchorClick('home');
              }}
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};