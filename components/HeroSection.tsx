"use client";

import { useState } from "react";

export default function HeroSection() {
  const images = ["1.jpg", "6.jpg"];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = () => setActive((s) => (s - 1 + images.length) % images.length);
  const next = () => setActive((s) => (s + 1) % images.length);
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background images (carousel) */}
      <div className="absolute inset-0 z-0">
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
      {/* Animated ocean wave SVG */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-wave"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1260,120 1350,60 1440,80 L1440,200 L0,200 Z"
            fill="rgba(56,189,248,0.04)"
          />
          <path
            d="M0,120 C200,80 400,150 600,100 C800,50 1000,140 1200,100 C1320,80 1380,110 1440,100 L1440,200 L0,200 Z"
            fill="rgba(56,189,248,0.03)"
          />
        </svg>
      </div>

      {/* Constellation dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-ocean-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Co-brand pill */}
        

        {/* Main headline */}
        <h1 className="reveal reveal-2 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
          <span className="block text-white">Troubled</span>
          <span className="block text-gradient italic">Waters</span>
          <span className="block text-white text-3xl md:text-4xl lg:text-5xl font-light mt-2 tracking-wide">
            Sailing with AI in
          </span>
          <span className="block text-ocean-300 font-bold text-3xl md:text-4xl lg:text-5xl">
            Supply Chain
          </span>
        </h1>

        {/* Subheadline */}
        <p className="reveal reveal-3 text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          An exclusive executive summit for Gulf regional logistics leaders
          navigating AI transformation, rising costs, and digital resilience.
        </p>

        {/* Event meta */}
        <div className="reveal reveal-4 flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: "📍", label: "Dubai, UAE" },
            { icon: "📅", label: "Full Day Summit" },
            { icon: "🎯", label: "Executive Delegates Only" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <span>{icon}</span>
              <span className="font-mono tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="reveal reveal-5 flex flex-wrap justify-center gap-4">
          <a
            href="#register"
            className="btn-primary px-8 py-4 rounded-full bg-ocean-400 text-navy-950 font-semibold text-sm tracking-wide hover:bg-ocean-300 transition-colors duration-300"
          >
            Get Your Personal Invitation →
          </a>
          <a
            href="#agenda"
            className="px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm tracking-wide hover:border-ocean-400/50 hover:text-ocean-400 transition-all duration-300"
          >
            View Agenda
          </a>
        </div>

        {/* Scroll hint */}
        <div className="reveal reveal-6 mt-20 flex flex-col items-center gap-2 text-white/20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-ocean-400/40" />
          
        </div>
      </div>
    </section>
  );
}
