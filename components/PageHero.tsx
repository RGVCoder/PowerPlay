import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, image }) => (
  <section className="relative py-28 md:py-32 bg-black-cortex overflow-hidden" data-navbar-theme="dark">
    {image && (
      <>
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black-cortex/55" />
      </>
    )}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <p className="section-eyebrow text-coral mb-5">{eyebrow}</p>
      <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      <div className="court-line mx-auto mt-8" aria-hidden="true" />
    </div>
  </section>
);
