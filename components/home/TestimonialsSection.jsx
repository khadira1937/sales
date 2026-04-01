"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { siteAssets, testimonialsSection } from "@/content/home-page";

function getSlidesPerView(width) {
  if (width <= 767) {
    return 1;
  }

  if (width <= 1024) {
    return 2;
  }

  return 4;
}

function clampIndex(index, maxIndex) {
  return Math.max(0, Math.min(index, maxIndex));
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(337);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const trackRef = useRef(null);
  const dragStartXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const maxIndex = useMemo(
    () => Math.max(0, testimonialsSection.items.length - slidesPerView),
    [slidesPerView]
  );

  useEffect(() => {
    const updateLayout = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));

      const firstCard = trackRef.current?.querySelector(".testimonial-card");
      setSlideWidth(firstCard ? firstCard.offsetWidth + 47 : 337);
    };

    let resizeTimer;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateLayout, 200);
    };

    updateLayout();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((previousIndex) => clampIndex(previousIndex, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex >= maxIndex ? 0 : previousIndex + 1));
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, maxIndex]);

  useEffect(() => {
    const endDrag = (pageX) => {
      if (!isDraggingRef.current) {
        return;
      }

      isDraggingRef.current = false;
      const difference = dragStartXRef.current - pageX;

      if (Math.abs(difference) > 50) {
        setCurrentIndex((previousIndex) =>
          clampIndex(previousIndex + (difference > 0 ? 1 : -1), maxIndex)
        );
      }

      setIsPaused(false);
    };

    const handleMouseUp = (event) => {
      endDrag(event.pageX);
    };

    const handleTouchEnd = (event) => {
      const touchPoint = event.changedTouches?.[0]?.pageX ?? dragStartXRef.current;
      endDrag(touchPoint);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [maxIndex]);

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-bg-overlay"></div>
      <div className="section-container">
        <div className="stars-rating">
          <img
            src={siteAssets.testimonialStars.src}
            alt={siteAssets.testimonialStars.alt}
            width={siteAssets.testimonialStars.width}
            height={siteAssets.testimonialStars.height}
            loading="lazy"
          />
        </div>
        <h2 className="section-title white">{testimonialsSection.title}</h2>
        <p className="testimonials-subtitle">{testimonialsSection.subtitle}</p>

        <div className="testimonials-slider" id="testimonials-slider">
          <div
            ref={trackRef}
            className="testimonials-track"
            id="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
            onMouseDown={(event) => {
              isDraggingRef.current = true;
              dragStartXRef.current = event.pageX;
              setIsPaused(true);
            }}
            onTouchStart={(event) => {
              isDraggingRef.current = true;
              dragStartXRef.current = event.touches[0].pageX;
              setIsPaused(true);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonialsSection.items.map((testimonial) => (
              <div key={testimonial.author} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i key={`${testimonial.author}-${index}`} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots" id="slider-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-dot${index === currentIndex ? " active" : ""}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
