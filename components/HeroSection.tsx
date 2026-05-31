"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
        <div className="reveal reveal-1 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-ocean-400/30 bg-ocean-400/5 mb-8">
          <span className="font-mono text-xs text-ocean-400 tracking-widest uppercase">Accelalpha × Oracle</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-mono text-xs text-gold-400 tracking-widest uppercase">2024</span>
        </div>

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
          An exclusive executive summit for Gulf regional logistics leaders navigating AI transformation, 
          rising costs, and digital resilience.
        </p>

        {/* Event meta */}
        <div className="reveal reveal-4 flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: "📍", label: "Dubai, UAE" },
            { icon: "📅", label: "Full Day Summit" },
            { icon: "🎯", label: "Executive Delegates Only" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
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
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
