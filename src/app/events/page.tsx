"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo.jpeg" alt="PowerPlay Logo" width={40} height={40} />
          <span>PowerPlay</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li><Link className="nav-link" href="/#home">Home</Link></li>
          <li><Link className="nav-link" href="/#about">About</Link></li>
          <li><Link className="nav-link" href="/events">Events</Link></li>
          <li><Link className="nav-link" href="/#donate">Donate</Link></li>
          <li><Link className="nav-link" href="/#team">Our Team</Link></li>
          <li><Link className="nav-link" href="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function EventsSection() {
  const cricketImages = [
    {
      src: '/images/tournament/img1.jpeg',
      alt: 'Cricket athletes celebrating a boundary during PowerPlay tournament',
    },
    {
      src: '/images/tournament/img2.jpeg',
      alt: 'Bowler in action at the PowerPlay cricket tournament',
    },
    {
      src: '/images/tournament/img3.jpeg',
      alt: 'Fielders strategizing between overs at the cricket tournament',
    },
    {
      src: '/images/tournament/img4.jpeg',
      alt: 'Team celebration after a successful match',
    },
    {
      src: '/images/tournament/img5.jpeg',
      alt: 'Players in action during the tournament',
    },
    {
      src: '/images/tournament/img6.jpeg',
      alt: 'Tournament highlights and memorable moments',
    },
  ];
  const pickleballImages = [
    {
      src: '/images/pickleballPowerplay1.jpeg',
      alt: 'Pickleball players locking in for a rally at PowerPlay event',
    },
    {
      src: '/images/pickleballPowerplay2.jpeg',
      alt: 'PowerPlay pickleball teams shaking hands after a match',
    },
    {
      src: '/images/pickleballPowerplay3.jpeg',
      alt: 'Excited crowd cheering during the pickleball finals',
    },
  ];
  const asifEventImages = [
    {
      src: '/images/interview/WhatsApp Image 2025-11-11 at 19.42.34.jpeg',
      alt: 'Asif Mujtaba speaking to the teams ahead of the final',
    },
    {
      src: '/images/interview/img2.jpeg',
      alt: 'Players listening intently to Asif Mujtaba',
    },
    {
      src: '/images/interview/img3.jpeg',
      alt: 'Teams applauding the special guest speech',
    },
    {
      src: '/images/interview/img4.jpeg',
      alt: 'Asif Mujtaba sharing insights with the teams',
    },
    {
      src: '/images/interview/img5.jpeg',
      alt: 'Players engaged during the inspiring speech',
    },
    {
      src: '/images/interview/img6.jpeg',
      alt: 'Teams gathered around Asif Mujtaba during the speech',
    },
  ];

  return (
    <section className="section section-alt" style={{ paddingTop: '120px' }}>
      <div className="section-content">
        <h2 className="section-title fade-in-up">Events & Tournaments</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join us for exciting tournaments and special events that bring together athletes from all backgrounds.
          Experience the thrill of competition while building lasting friendships.
        </p>
        <div className="events-preview-grid">
          <div className="event-preview-group fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="event-preview-title">Cricket Tournament</h3>
            <ImageCarousel
              images={cricketImages}
              imageWidth={1200}
              imageHeight={420}
              autoAdvanceInterval={5000}
              controlsAlignment="compact"
              className="event-card-carousel"
            />
            <p className="event-preview-description">
              Competitive league play that spotlights rising cricket talent, complete with pro-style officiating, community vendors, and post-match skills clinics that keep the excitement going beyond the boundary.
            </p>
            <div className="card-meta" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>January - June 2025</div>
            <Link href="/cricket" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Cricket Tournament</Link>
          </div>
          <div className="event-preview-group fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="event-preview-title">Pickleball Tournament</h3>
            <ImageCarousel
              images={pickleballImages}
              imageWidth={1200}
              imageHeight={420}
              autoAdvanceInterval={5500}
              controlsAlignment="compact"
              className="event-card-carousel"
            />
            <p className="event-preview-description">
              Fast-paced brackets designed for all skill levels, featuring morning warm-up sessions, live match commentary, and inclusive lounges where players and fans can connect between games.
            </p>
            <div className="card-meta" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>July 2025</div>
            <Link href="/pickleball" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Pickleball Tournament</Link>
          </div>
          <div className="event-preview-group fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="event-preview-title">Special Guest Event</h3>
            <ImageCarousel
              images={asifEventImages}
              imageWidth={1200}
              imageHeight={420}
              autoAdvanceInterval={6000}
              controlsAlignment="compact"
              className="event-card-carousel"
            />
            <p className="event-preview-description">
              Former Pakistan international Asif Mujtaba energized both teams with an inspiring address ahead of the championship match. Experience the atmosphere from that powerful moment.
            </p>
            <Link href="/events/asif-mujtaba" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Event Spotlight</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About PowerPlay</h3>
          <p>Empowering tomorrow&apos;s champions through sports tournaments and community building.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link href="/#about">About Us</Link>
          <Link href="/events">Events</Link>
          <Link href="/#team">Our Team</Link>
          <Link href="/#donate">Donate</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:powerplaynpo@gmail.com">powerplaynpo@gmail.com</a>
          <p>Get in touch to learn more about our tournaments and how you can get involved.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PowerPlay. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <EventsSection />
      <Footer />
    </>
  );
}

