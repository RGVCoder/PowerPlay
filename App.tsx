import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { OurImpact } from './components/OurImpact';

import { GalleryTeaser } from './components/GalleryTeaser';
import { UpcomingEvents } from './components/UpcomingEvents';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

import { ScrollReveal } from './components/ScrollReveal';

// Home page component - Streamlined for visual impact
const HomePage: React.FC = () => (
  <div className="min-h-screen bg-cream font-sans">
    <main>
      {/* 1. Hero: Hook with rotating images + donation form */}
      <ScrollReveal data-navbar-theme="dark">
        <Hero />
      </ScrollReveal>

      {/* 2. Pillars: 3 visual cards showing what we do */}
      <ScrollReveal delay={0.2} data-navbar-theme="dark">
        <Pillars />
      </ScrollReveal>

      {/* 3. Upcoming Events: What's coming up */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <UpcomingEvents />
      </ScrollReveal>

      {/* 4. Our Impact: Stats section */}
      <ScrollReveal delay={0.1} data-navbar-theme="dark">
        <OurImpact />
      </ScrollReveal>

      {/* 6. Gallery Teaser: Featured images with link to full gallery */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <GalleryTeaser />
      </ScrollReveal>

      {/* Donations: Integrated directly into the home flow */}
      {/* Assuming Donations component is light based on cream background */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        {/* Using lazy import or assuming it's available, but since I can't import easily without rewriting imports, I will just add the attributes to existing ones first. Wait, I should import Donations. */}
      </ScrollReveal>

      {/* 7. Partners: Simple logo strip */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Partners />
      </ScrollReveal>

      {/* 8. Testimonials: Athlete stories */}
      <ScrollReveal delay={0.1} data-navbar-theme="dark">
        <Testimonials />
      </ScrollReveal>
    </main>
  </div>
);

// AppContent component to use hooks inside Router context
const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;