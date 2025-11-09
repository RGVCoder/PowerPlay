'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function TeamSection() {
  useEffect(() => {
    // Elegant gold color variations for team cards
    const goldColors = [
      "#D4AF37", // Rich gold
      "#FFD966", // Bright gold
      "#B8941F", // Darker gold
      "#FFE8A3", // Light gold
      "#9A7A1A", // Deep gold
      "#C9A961"  // Antique gold
    ];
    document.querySelectorAll('.color-bar').forEach(bar => {
      const color = goldColors[Math.floor(Math.random() * goldColors.length)];
      (bar as HTMLElement).style.backgroundColor = color;
    });
  }, []);

  const teamMembers = [
    { img: '/images/raghav.png', name: 'Raghav Sridhar', role: 'Co-Founder & President' },
    { img: '/images/advik.jpeg', name: 'Advik Gupta', role: 'Vice President & CTO' },
    { img: '/images/ishaan.jpeg', name: 'Ishaan Acharya', role: 'CFO' },
    { img: '/images/sriram.png', name: 'Aryan Gokul', role: 'COO' },
    { img: '/images/vedhas.png', name: 'Vedhas', role: 'CAO' },
    { img: '/images/yuvi.png', name: 'Rochit', role: 'Marketing Director' },
  ];

  return (
    <section id="team" className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Our Team</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          We&apos;re a team of passionate leaders working together to grow the game and inspire the next generation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="color-bar h-1"></div>
                <div className="p-6">
                  <div
                    className="mx-auto mb-6"
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      backgroundColor: '#1f2937',
                      position: 'relative'
                    }}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-center">
                    <h5 className="text-2xl font-bold text-white mb-2">{member.name}</h5>
                    <p className="text-gray-300 text-lg">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground">
          Don&apos;t miss out on what we&apos;re building!
        </p>
      </div>
    </section>
  );
}
