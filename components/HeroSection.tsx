"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import heroOne from "../images/1.jpg";
import heroTwo from "../images/6.jpg";

const ANIM_DURATION = 700;
export default function HeroSection() {
  const images = [heroOne, heroTwo];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"up" | "down">("down");
  const [contentKey, setContentKey] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const activeRef = useRef(active);
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    // initialize last scroll position
    lastScrollY.current = window.scrollY;

    const timer = window.setInterval(() => {
      if (animating) return;
      setSlideDirection("down");
      setPrevActive(activeRef.current);
      setActive((current) => (current + 1) % images.length);
      setContentKey((current) => current + 1);
    }, 6500);

    const THRESH = 120; // pixels to consider an intentional scroll

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      // ignore tiny scroll jitter
      if (Math.abs(delta) < 6) {
        lastScrollY.current = y;
        return;
      }

      scrollAccumulator.current += delta;
      lastScrollY.current = y;

      if (scrollCooldown.current) return;

      if (scrollAccumulator.current >= THRESH) {
        // scrolled down
        scrollCooldown.current = true;
        setSlideDirection("down");
        setPrevActive(activeRef.current);
        setActive((current) => (current + 1) % images.length);
        setContentKey((c) => c + 1);
        setTimeout(() => {
          scrollCooldown.current = false;
          scrollAccumulator.current = 0;
        }, ANIM_DURATION + 300);
      } else if (scrollAccumulator.current <= -THRESH) {
        // scrolled up
        scrollCooldown.current = true;
        setSlideDirection("up");
        setPrevActive(activeRef.current);
        setActive((current) => (current - 1 + images.length) % images.length);
        setContentKey((c) => c + 1);
        setTimeout(() => {
          scrollCooldown.current = false;
          scrollAccumulator.current = 0;
        }, ANIM_DURATION + 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length, animating]);

  // keep a ref of the active index for event handlers
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setSlideDirection("up");
    setPrevActive(active);
    const nextIndex = (active - 1 + images.length) % images.length;
    setActive(nextIndex);
    setContentKey((current) => current + 1);
    setTimeout(() => {
      setPrevActive(null);
      setAnimating(false);
    }, ANIM_DURATION);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setSlideDirection("down");
    setPrevActive(active);
    const nextIndex = (active + 1) % images.length;
    setActive(nextIndex);
    setContentKey((current) => current + 1);
    setTimeout(() => {
      setPrevActive(null);
      setAnimating(false);
    }, ANIM_DURATION);
  };

  const contentMotionClass =
    slideDirection === "down" ? "animate-slide-in-down" : "animate-slide-in-up";
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-transparent"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background images (carousel) */}
      <div className="absolute inset-0 z-0 bg-transparent">
        {images.map((src, i) => {
          const isActive = i === active;
          const isPrev = prevActive === i;

          let cls = "absolute inset-0 object-cover";
          if (isActive) cls += " z-10";
          if (isPrev) cls += " z-20";
          if (!isActive && !isPrev) cls += " opacity-0 pointer-events-none";

          // apply vertical slide classes based on direction and state
          if (isActive && slideDirection === "down")
            cls += " image-in-from-top";
          if (isActive && slideDirection === "up")
            cls += " image-in-from-bottom";
          if (isPrev && slideDirection === "down")
            cls += " image-out-to-bottom";
          if (isPrev && slideDirection === "up") cls += " image-out-to-top";

          return (
            <Image
              key={src.src}
              src={src}
              alt={`hero-${i}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className={cls}
            />
          );
        })}

        {/* Hover arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-sm bg-white flex items-center justify-center shadow-md border border-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-navy-950 rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 16.293a1 1 0 010-1.414L15.586 11 12.293 7.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4 11a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-sm bg-white flex items-center justify-center shadow-md border border-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-navy-950"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 16.293a1 1 0 010-1.414L15.586 11 12.293 7.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4 11a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="relative z-10 min-h-screen flex items-start">
        <div className="w-full px-6 lg:px-12 pt-24 md:pt-28">
          <div
            key={contentKey}
            className={`max-w-3xl text-left text-white md:pl-10 lg:pl-20 xl:pl-24 ${contentMotionClass}`}
          >
            <div className="mb-10">
              <p className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                EXCLUSIVE INVITATION
              </p>
            </div>

            <h1 className="font-display font-black leading-[0.9] mb-8 text-[clamp(3.25rem,7vw,7.5rem)]">
              <span className="block">Troubled Waters:</span>
              <span className="block text-[clamp(1.75rem,3vw,3.25rem)] font-bold mt-2">
                Sailing with AI in Supply Chain
              </span>
            </h1>

            <div className="space-y-1 text-[clamp(1.25rem,2vw,2rem)] font-bold leading-tight mb-8">
              <p>Date -13th November 2024</p>
              <p>Time -09.30AM to 01.00PM</p>
              <p>Location -Marriott Resort, The Palm</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#register"
                className="px-8 py-4 rounded-full bg-white text-navy-950 font-bold text-sm tracking-wide hover:bg-white/90 transition-colors"
              >
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
