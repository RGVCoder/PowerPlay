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
import { TeamPage } from './pages/TeamPage';

import { ScrollReveal } from './components/ScrollReveal';

// Home page component - Streamlined for visual impact
const HomePage: React.FC = () => (
  <div className="min-h-screen font-sans">
    <main>
      {/* 1. Hero: Hook with rotating images + donation form */}
      <ScrollReveal data-navbar-theme="dark">
        <Hero />
      </ScrollReveal>

      {/* 2. Pillars: 3 visual cards showing what we do */}
      <ScrollReveal delay={0.2} data-navbar-theme="light">
        <Pillars />
      </ScrollReveal>

      {/* 3. Upcoming Events: What's coming up */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <UpcomingEvents bgClass="bg-cream" />
      </ScrollReveal>

      {/* 4. Our Impact: Stats section */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <OurImpact />
      </ScrollReveal>

      {/* 6. Gallery Teaser: Featured images with link to full gallery */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <GalleryTeaser bgClass="bg-cream" />
      </ScrollReveal>

      {/* Donations: Integrated directly into the home flow */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        {/* Donations would go here */}
      </ScrollReveal>

      {/* 7. Partners: Simple logo strip */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Partners />
      </ScrollReveal>

      {/* 8. Testimonials: Athlete stories */}
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Testimonials bgClass="bg-cream" />
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
          <Route path="/team" element={<TeamPage />} />
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