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

// Home page component - Streamlined for visual impact
const HomePage: React.FC = () => (
  <div className="min-h-screen bg-cream font-sans">
    <main>
      {/* 1. Hero: Hook with rotating images + donation form */}
      <Hero />

      {/* 2. Pillars: 3 visual cards showing what we do */}
      <Pillars />

      {/* 3. Upcoming Events: What's coming up */}
      <UpcomingEvents />

      {/* 4. Our Impact: Stats section */}
      <OurImpact />



      {/* 6. Gallery Teaser: Featured images with link to full gallery */}
      <GalleryTeaser />

      {/* 7. Partners: Simple logo strip */}
      <Partners />

      {/* 8. Testimonials: Athlete stories */}
      <Testimonials />
    </main>
  </div >
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