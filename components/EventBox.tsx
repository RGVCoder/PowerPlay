import React from 'react';

export interface EventBoxProps {
  title: string;
  description: React.ReactNode;
  image: string;
  imageFallback: string;
  dateLabel?: string;
  footer?: React.ReactNode;
  className?: string;
}

export const EventBox: React.FC<EventBoxProps> = ({
  title,
  description,
  image,
  imageFallback,
  dateLabel,
  footer,
  className = '',
}) => (
  <div
    className={`bg-white border border-stone-150 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 transition-colors duration-200 hover:border-coral/30 ${className}`}
  >
    <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden bg-sideline relative flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = imageFallback;
          e.currentTarget.onerror = null;
        }}
      />
    </div>

    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
      {dateLabel && (
        <span className="inline-block self-center md:self-start text-xs font-medium text-coral bg-coral/10 px-3 py-1 rounded mb-4">
          {dateLabel}
        </span>
      )}
      <h4 className="font-display font-semibold text-xl md:text-2xl text-charcoal mb-3">
        {title}
      </h4>
      <p className="text-charcoal-light text-base leading-relaxed mb-0">
        {description}
      </p>
      {footer && <div className="mt-6">{footer}</div>}
    </div>
  </div>
);
