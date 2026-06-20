import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  isLight?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  eyebrow,
  isLight = true,
  className = '',
}) => (
  <div className={`text-center mb-14 ${className}`}>
    {eyebrow && (
      <p className="section-eyebrow mb-4">{eyebrow}</p>
    )}
    <h2
      className={`font-display font-bold text-3xl md:text-4xl ${
        isLight ? 'text-charcoal' : 'text-white'
      }`}
    >
      {title}
    </h2>
    <div className="court-line mx-auto mt-5" aria-hidden="true" />
    {subtitle && (
      <p
        className={`text-base mt-5 max-w-xl mx-auto leading-relaxed ${
          isLight ? 'text-charcoal-light' : 'text-white/60'
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);
