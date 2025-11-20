"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageCarousel from './components/ImageCarousel';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">
          <Image src="/images/logo.jpeg" alt="PowerPlay Logo" width={40} height={40} />
          <span>PowerPlay</span>
        </a>

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
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="/events">Events</a></li>
          <li><a className="nav-link" href="#donate">Donate</a></li>
          <li><a className="nav-link" href="#team">Our Team</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-brand-watermark">P</div>
      <div className="hero-content">
        <div className="hero-content-left">
          <div className="hero-eyebrow fade-in-up">
            <span className="hero-eyebrow-line"></span>
            <span className="hero-eyebrow-text">Youth Sports Nonprofit | Cricket, Pickleball, and More</span>
          </div>
          <h1 className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero-line hero-first">Empowering Tomorrow&apos;s</span>
            <span className="hero-line solid-text">Champions</span>
            <span className="hero-angled-stripe"></span>
          </h1>
          <p className="hero-subheading fade-in-up" style={{ animationDelay: '0.2s' }}>
            Bringing student athletes together through community tournaments that raise funds for under resourced kids.
          </p>
          <div className="hero-actions fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="/events" className="btn btn-primary">View Events</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className="hero-event-card fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="hero-event-card-header">
            <span className="hero-event-badge">Upcoming Event</span>
          </div>
          <h3 className="hero-event-title">PowerPlay Basketball Tournament</h3>
          <p className="hero-event-details">Lilyana Elementary</p>
          <div className="hero-event-actions">
            <button className="btn btn-coming-soon btn-sm" disabled>Coming Soon</button>
          </div>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">About Us</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          PowerPlay is dedicated to organizing sports tournaments that foster community, talent, and positive change.
          We believe in the power of play to transform lives, nurture leadership, and build lifelong connections.
        </p>
      </div>
    </section>
  );
}

function EventsPreviewSection() {
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
    <section className="section section-alt">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Tournaments & Events</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Experience the excitement and energy of our tournaments through these highlights.
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
            <a href="/cricket" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Cricket Tournament</a>
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
            <a href="/pickleball" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Pickleball Tournament</a>
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
            <a href="/events/asif-mujtaba" className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>View Event Spotlight</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
      {
        name: "Vrishank Naveen",
        role: "PowerPlay Athlete",
        quote: "Power Play really helped me get more confident and stay motivated. The people there push you to do your best and actually care about your growth — on and off the field. Super grateful to be part of it.",
        closing: ""
      },
      {
        name: "Christopher Badr",
        role: "PowerPlay Supporter",
        quote: "Power Play has done an incredible job empowering athletes to reach their full potential. They’ve created an environment where sports and fitness feel exciting, accessible, and meaningful. Through their programs, I’ve seen so many people gain confidence both on and off the field.",
        closing: ""
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (testimonials.length <= 1) {
        return;
      }
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section">
      <div className="section-content">
               <h2 className="section-title fade-in-up">Testimonials</h2>
        <div className="testimonial-slider fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="testimonial-container">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                      <div className="testimonial-content">
                        <p className="testimonial-text">&ldquo;{testimonial.quote}&rdquo;</p>
                        {testimonial.closing && (
                          <p className="testimonial-signature">
                            {testimonial.closing.split('\n').map((line, lineIndex, lines) => (
                              <React.Fragment key={lineIndex}>
                                {line}
                                {lineIndex < lines.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        )}
                        <div className="testimonial-author">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-role">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
          </div>
                 {testimonials.length > 1 && (
                   <div className="testimonial-controls">
                     <button className="testimonial-nav-btn" onClick={goToPrevious} aria-label="Previous testimonial">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M15 18l-6-6 6-6" />
                       </svg>
                     </button>
                     <div className="testimonial-dots">
                       {testimonials.map((_, index) => (
                         <button
                           key={index}
                           className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                           onClick={() => goToSlide(index)}
                           aria-label={`Go to testimonial ${index + 1}`}
                         />
                       ))}
                     </div>
                     <button className="testimonial-nav-btn" onClick={goToNext} aria-label="Next testimonial">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M9 18l6-6-6-6" />
                       </svg>
                     </button>
                   </div>
                 )}
        </div>
      </div>
    </section>
  );
}

function DonateSection() {
  return (
    <section id="donate" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Support the Mission</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your support helps us create more opportunities for athletes and build stronger communities.
          Every contribution makes a difference in someone&apos;s life.
        </p>
        <div className="donation-embed fade-in-up" style={{ animationDelay: '0.3s' }}>
          <iframe
            src="https://hcb.hackclub.com/donations/start/powerplay"
            title="PowerPlay Donation Form"
            loading="lazy"
            allowTransparency
          />
        </div>
        <div className="button-group fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#about" className="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const teamMembers = [
    { img: '/images/raghav.png', name: 'Raghav Sridhar', role: 'Founder & President' },
    { img: '/images/biswajit.jpeg', name: 'Biswajit Vaddu', role: 'Director of Outreach' },
    { img: '/images/aryan.jpeg', name: 'Aryan Gokul', role: 'COO' },
    { img: '/images/ishaan.jpeg', name: 'Ishaan Acharya', role: 'CFO' },
    { img: '/images/vedhas.png', name: 'Vedhas', role: 'CAO' },
    { img: '/images/rochit.jpeg', name: 'Rochit', role: 'Marketing Director' },
  ];

  return (
    <section id="team" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Our Team</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Meet the passionate individuals behind PowerPlay who are dedicated to creating
          meaningful experiences through sports and community building.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface-3)',
                position: 'relative',
              }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="team-card-content">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    {
      title: 'Email Our Team',
      description: 'Reach out directly for tournament info, volunteering, or any questions. We respond within 24 hours.',
      meta: 'powerplaynpo@gmail.com',
    },
    {
      title: 'Call / Text Us',
      description: 'Prefer a quick chat? Give us a call or send a text and we’ll connect with you shortly.',
      meta: '+1 (469) 360-4088',
    },
    {
      title: 'Follow on Instagram',
      description: 'Stay up to date with tournament highlights, behind-the-scenes moments, and community updates.',
      meta: '@powerplaynpo',
    },
  ] as const;

  return (
    <section id="contact" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Contact Us</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Get in touch with us to learn more about our tournaments, volunteer opportunities,
          or how you can support our mission.
        </p>
        <div className="contact-grid fade-in-up" style={{ animationDelay: '0.4s' }}>
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-card-header">
                <h3>{contact.title}</h3>
              </div>
              <p className="contact-card-description">{contact.description}</p>
              <div className="contact-card-meta">{contact.meta}</div>
            </div>
          ))}
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
          <a href="#about">About Us</a>
          <a href="/events">Events</a>
          <a href="#team">Our Team</a>
          <a href="#donate">Donate</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:powerplaynpo@gmail.com">powerplaynpo@gmail.com</a>
          <p>Get in touch to learn more about our tournaments and how you can get involved.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PowerPlay. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span aria-hidden="true">•</span>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <EventsPreviewSection />
      <TestimonialSlider />
      <DonateSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function StatsBar() {
  const stats = [
    { value: '500+', label: 'Athletes Empowered' },
    { value: '$1K+', label: 'Funds Raised' },
    { value: '1000+', label: 'People Reached' },
  ];

  return (
    <section className="stats-bar fade-in-up" aria-label="PowerPlay impact statistics">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
