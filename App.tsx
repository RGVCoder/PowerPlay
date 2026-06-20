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
import { TeamPage } from './pages/TeamPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

import { ScrollReveal } from './components/ScrollReveal';

const HomePage: React.FC = () => (
  <div className="min-h-screen font-sans bg-court">
    <main>
      <ScrollReveal data-navbar-theme="dark">
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0.2} data-navbar-theme="light">
        <Pillars />
      </ScrollReveal>

      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <OurImpact bgClass="bg-sideline" />
      </ScrollReveal>

      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <UpcomingEvents bgClass="bg-court" />
      </ScrollReveal>

      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Partners bgClass="bg-sideline" />
      </ScrollReveal>

      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <GalleryTeaser bgClass="bg-court" />
      </ScrollReveal>

      <ScrollReveal delay={0.1} data-navbar-theme="light">
        <Testimonials bgClass="bg-sideline" />
      </ScrollReveal>
    </main>
  </div>
);

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
