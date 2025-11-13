"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  autoAdvanceInterval?: number | null;
  priorityFirst?: boolean;
  controlsAlignment?: "spread" | "compact";
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  imageWidth = 1200,
  imageHeight = 800,
  autoAdvanceInterval = 5000,
  priorityFirst = false,
  controlsAlignment = "spread",
}) => {
  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (totalSlides <= 1) {
      return;
    }
    if (!autoAdvanceInterval || autoAdvanceInterval <= 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoAdvanceInterval);

    return () => window.clearInterval(interval);
  }, [autoAdvanceInterval, totalSlides]);

  useEffect(() => {
    if (totalSlides === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= totalSlides) {
      setCurrentIndex(totalSlides - 1);
    }
  }, [currentIndex, totalSlides]);

  const ratioPercentage = useMemo(() => {
    if (!imageWidth || !imageHeight) {
      return 56.25;
    }
    return (imageHeight / imageWidth) * 100;
  }, [imageHeight, imageWidth]);

  const goToSlide = (index: number) => {
    if (totalSlides === 0) return;
    const normalizedIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(normalizedIndex);
  };

  const goToPrevious = () => goToSlide(currentIndex - 1);
  const goToNext = () => goToSlide(currentIndex + 1);

  if (totalSlides === 0) {
    return null;
  }

  const rootClassName = ["image-carousel", className].filter(Boolean).join(" ").trim();

  return (
    <div className={rootClassName}>
      <div className="image-carousel-viewport">
        <div
          className="image-carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-live={totalSlides > 1 ? "polite" : "off"}
        >
          {images.map((image, index) => (
            <div className="image-carousel-slide" key={`${image.src}-${index}`}>
              <div className="image-carousel-image-wrapper" style={{ paddingTop: `${ratioPercentage}%` }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={priorityFirst && index === 0}
                  className="image-carousel-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className={`image-carousel-controls image-carousel-controls-${controlsAlignment}`}>
          <button
            type="button"
            className="image-carousel-arrow"
            onClick={goToPrevious}
            aria-label="View previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="image-carousel-dots" role="tablist" aria-label="Carousel navigation">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`image-carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className="image-carousel-arrow"
            onClick={goToNext}
            aria-label="View next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;


