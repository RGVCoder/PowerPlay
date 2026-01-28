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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0 group relative z-10">
          <Link to="/" className="group-hover:opacity-90 transition-opacity">
            <img
              src="/images/logo-full.png"
              alt="PowerPlay"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        </div>

        {/* Right: Actions (Donate + Mobile Menu Button) */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden md:block">
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
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-cream shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Header: Brand Profile */}
        <div className="flex items-center gap-4 p-8 border-b border-charcoal/5">
          <div className="h-12 w-12 rounded-full bg-cream-dark flex items-center justify-center overflow-hidden border border-charcoal/10">
            <img src="/images/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-charcoal text-lg">PowerPlay</span>
            <span className="text-charcoal-light text-xs">Youth Sports Non-Profit</span>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="flex-col flex py-6 px-4 gap-2 overflow-y-auto">
          {navLinks.map((link) => {
            // Simple icon mapping based on name
            let iconPath = "";
            if (link.name === 'Home') iconPath = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
            else if (link.name === 'About') iconPath = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
            else if (link.name === 'Events') iconPath = "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z";
            else if (link.name === 'Gallery') iconPath = "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z";

            const content = (
              <div className="flex items-center gap-4 w-full">
                <svg className="h-5 w-5 text-charcoal-light group-hover:text-coral transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                </svg>
                <span className="font-sans font-medium text-charcoal group-hover:text-coral transition-colors text-base">{link.name}</span>
              </div>
            );

            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.href!}
                className="px-4 py-4 rounded-xl hover:bg-black/5 transition-all group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content}
              </Link>
            ) : (
              <button
                key={link.name}
                className="px-4 py-4 rounded-xl hover:bg-black/5 transition-all w-full text-left group"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAnchorClick(link.anchor!);
                }}
              >
                {content}
              </button>
            );
          })}
        </div>

        {/* Footer: Donate Button */}
        <div className="mt-auto p-6 border-t border-charcoal/5">
          <Button
            variant="primary"
            className="w-full py-4 text-sm font-bold tracking-widest shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
            onClick={() => {
              setMobileMenuOpen(false);
              handleAnchorClick('home');
            }}
          >
            Donate Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};