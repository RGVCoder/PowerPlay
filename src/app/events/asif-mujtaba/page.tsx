"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "../../components/ImageCarousel";

const eventImages = [
  {
    src: "/images/interview/WhatsApp Image 2025-11-11 at 19.42.34.jpeg",
    alt: "Asif Mujtaba addressing players before the PowerPlay final",
  },
  {
    src: "/images/interview/img2.jpeg",
    alt: "Teams gathered around Asif Mujtaba during the speech",
  },
  {
    src: "/images/interview/img3.jpeg",
    alt: "Players listening intently to Asif Mujtaba",
  },
  {
    src: "/images/interview/img4.jpeg",
    alt: "Asif Mujtaba sharing insights with the teams",
  },
  {
    src: "/images/interview/img5.jpeg",
    alt: "Players engaged during the inspiring speech",
  },
  {
    src: "/images/interview/img6.jpeg",
    alt: "Teams applauding Asif Mujtaba after the speech",
  },
];

function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo.jpeg" alt="PowerPlay Logo" width={40} height={40} />
          PowerPlay
        </Link>
        <ul className="navbar-nav">
          <li><Link className="nav-link" href="/">Home</Link></li>
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

export default function AsifMujtabaEventPage() {
  return (
    <div className="cricket-page">
      <Navbar />

      <div className="cricket-hero">
        <div className="container">
          <h1>Asif Mujtaba Inspires PowerPlay Finals</h1>
          <p>PowerPlay Cricket Tournament • Frisco, TX</p>
        </div>
      </div>

      <div className="section section-dark">
        <div className="container">
          <div className="cricket-card">
            <h2 className="section-title section-title-light">Event Overview</h2>
            <p>
              Ahead of the championship match, former Pakistan international Asif Mujtaba delivered a heartfelt address that set the tone for the day.
              His words reminded every athlete on the field why they play the game—and sparked a surge of energy that both squads carried into the final.
            </p>
            <p>
              Mujtaba spoke about resilience, teamwork, and the power of community support, drawing from his own experiences representing Pakistan on the world stage.
              Players, coaches, and families gathered at the pavilion, listening intently as the cricket legend encouraged them to dream bigger than the boundary ropes.
            </p>
          </div>
        </div>
      </div>

      <div className="section section-alt-dark">
        <div className="container">
          <div className="cricket-card">
            <h2 className="section-title section-title-light">Moments From The Speech</h2>
            <ImageCarousel
              images={eventImages}
              imageWidth={1200}
              imageHeight={720}
              autoAdvanceInterval={6000}
              priorityFirst
            />
          </div>
        </div>
      </div>

      <div className="section section-dark">
        <div className="container">
          <div className="cricket-card">
            <h2 className="section-title section-title-light">Impact On The Final</h2>
            <p>
              The speech galvanized Rockhill and Heritage alike, transforming pre-game jitters into a shared sense of purpose.
              Coaches later credited the moment with helping players stay composed under pressure, while families noted the pride in the athletes&apos; faces as they took the field.
            </p>
            <div className="button-group">
              <Link href="/cricket" className="btn btn-outline-light">View Tournament Recap</Link>
              <a
                href="https://cricheroes.com/tournament/1200891/PowerPlay-Cricket-Tournament"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Full Tournament Stats
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-dark">
        <div className="footer-content">
          <p>&copy; 2025 PowerPlay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

