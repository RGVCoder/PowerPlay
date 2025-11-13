"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <li><Link className="nav-link" href="/events/asif-mujtaba">Events</Link></li>
          <li><Link className="nav-link" href="/tournaments">Tournaments</Link></li>
          <li><Link className="nav-link" href="/#donate">Donate</Link></li>
          <li><Link className="nav-link" href="/#team">Our Team</Link></li>
          <li><Link className="nav-link" href="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function TournamentsSection() {
  return (
    <section className="section section-alt" style={{ paddingTop: '120px' }}>
      <div className="section-content">
        <h2 className="section-title fade-in-up">Tournaments</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join us for exciting tournaments that bring together athletes from all backgrounds.
          Experience the thrill of competition while building lasting friendships.
        </p>
        <div className="cards-grid">
          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="card-title">Cricket Tournament</h3>
            <p className="card-text">
              Our premier cricket tournament featuring teams from across the region.
              Experience the excitement of competitive cricket in a supportive environment.
            </p>
            <div className="card-meta">January - June 2025</div>
            <Link href="/cricket" className="btn btn-outline">View Tournament</Link>
          </div>
          <div className="card fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="card-title">Pickleball Tournament</h3>
            <p className="card-text">
              A fun and inclusive pickleball tournament for players of all skill levels.
              Perfect for both beginners and experienced players.
            </p>
            <div className="card-meta">July 2025</div>
            <Link href="/pickleball" className="btn btn-outline">View Tournament</Link>
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
          <Link href="/tournaments">Tournaments</Link>
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

export default function TournamentsPage() {
  return (
    <>
      <Navbar />
      <TournamentsSection />
      <Footer />
    </>
  );
}

