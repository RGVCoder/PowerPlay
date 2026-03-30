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
import { TeamMembers } from './components/TeamMembers';
import { Chapters } from './components/Chapters';
import { Footer } from './components/Footer';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

import { ScrollReveal } from './components/ScrollReveal';

// Home page component - Streamlined for visual impact
const HomePage: React.FC = () => (
  <div className="min-h-screen font-sans">
    <main>
      {/* 1. Hero: Hook with rotating images + donation form */}
      <ScrollReveal data-navbar-theme="dark">
        <Hero />
      </ScrollReveal>

      {/* 2. Pillars: Why PowerPlay? */}
      <ScrollReveal delay={0.2} data-navbar-theme="light">
        <Pillars />
      </ScrollReveal>

      {/* 3. Our Impact: Stats section */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <OurImpact bgClass="bg-gray-50" />
      </ScrollReveal>

      {/* 4. Upcoming Events: Tournament schedule */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <UpcomingEvents bgClass="bg-white" />
      </ScrollReveal>

      {/* 5. Team: The student leadership */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <TeamMembers />
      </ScrollReveal>

      {/* 6. Chapters: Expansion */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Chapters />
      </ScrollReveal>

      {/* 7. Partners: Sponsors */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Partners bgClass="bg-gray-50" />
      </ScrollReveal>

      {/* 8. Gallery: High-impact visuals */}
      <hr className="border-gray-100/30" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <GalleryTeaser bgClass="bg-white" />
      </ScrollReveal>

      {/* 9. Testimonials: What People Say */}
      <hr className="border-gray-100" />
      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Testimonials bgClass="bg-gray-50" />
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