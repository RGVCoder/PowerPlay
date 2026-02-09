import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Navbar />
    <main>
      {/* 1. Hero: Hook with rotating images + donation form */}
      <Hero />

      {/* 2. Upcoming Events: What's coming up */}
      <UpcomingEvents />

      {/* 3. Pillars: 3 visual cards showing what we do */}
      <Pillars />

      {/* 4. Our Impact: Stats section */}
      <OurImpact />



      {/* 6. Gallery Teaser: Featured images with link to full gallery */}
      <GalleryTeaser />

      {/* 7. Partners: Simple logo strip */}
      <Partners />

      {/* 8. Testimonials: Athlete stories */}
      <Testimonials />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;