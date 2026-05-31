"use client";

import { useState } from "react";

export default function HeroSection() {
  const images = ["/images/1.jpg", "/images/6.jpg"];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = () => setActive((s) => (s - 1 + images.length) % images.length);
  const next = () => setActive((s) => (s + 1) % images.length);
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-transparent"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background images (carousel) */}
      <div className="absolute inset-0 z-0 bg-transparent">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`hero-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              active === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Hover arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-navy-950"
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
          onClick={next}
          aria-label="Next"
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-navy-950 rotate-180"
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
          <div className="max-w-3xl text-left text-white md:pl-10 lg:pl-20 xl:pl-24">
            <div className="reveal reveal-1 mb-10">
              <p className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                EXCLUSIVE INVITATION
              </p>
            </div>

            <h1 className="reveal reveal-2 font-display font-black leading-[0.9] mb-8 text-[clamp(3.25rem,7vw,7.5rem)]">
              <span className="block">Troubled Waters:</span>
              <span className="block text-[clamp(1.75rem,3vw,3.25rem)] font-bold mt-2">
                Sailing with AI in Supply Chain
              </span>
            </h1>

            <div className="reveal reveal-3 space-y-1 text-[clamp(1.25rem,2vw,2rem)] font-bold leading-tight mb-8">
              <p>Date -13th November 2024</p>
              <p>Time -09.30AM to 01.00PM</p>
              <p>Location -Marriott Resort, The Palm</p>
            </div>

            <div className="reveal reveal-4 flex flex-wrap gap-4 pt-4">
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
