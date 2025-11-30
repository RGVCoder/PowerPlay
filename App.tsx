import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Partners } from './components/Partners';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Donations } from './components/Donations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black-rich font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Events />
        <Partners />
        <Testimonials />
        <Donations />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;