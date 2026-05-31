export default function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-white text-lg">
            AccelAlpha × Oracle
          </p>
          <p className="text-white/30 text-xs font-mono mt-1">
            Troubled Waters: Sailing with AI in Supply Chain
          </p>
        </div>
        <div className="text-center text-white/20 text-xs font-mono">
          <p>For delegate inquiries:</p>
          <a
            href="https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-400/50 hover:text-ocean-400 transition-colors"
          >
            cogentsolutions.ae
          </a>
        </div>
        <p className="text-white/20 text-xs font-mono">
          © 2024 Accelalpha & Oracle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
