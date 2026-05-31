"use client";

import { useState } from "react";

const sessions = [
  {
    id: 1,
    time: "09:30 – 10:00",
    title: "Registrations",
    speaker: "Event Operations Team",
    type: "logistics",
    icon: "🎫",
    description: "Morning arrival, check-in, and badge collection for registered executive delegates.",
  },
  {
    id: 2,
    time: "10:00 – 10:10",
    title: "Welcome Note",
    speaker: "Richard Buxton & Rohan Chitnis",
    speakerRole: "VP EMEA, Accelalpha · Sales Director, Oracle",
    type: "keynote",
    icon: "🚢",
    description: "Official welcome by Accelalpha & Oracle leadership outlining key themes of Gulf supply chain evolution.",
  },
  {
    id: 3,
    time: "10:10 – 10:40",
    title: "Industry Keynote",
    subtitle: "Outlook & Challenges on Digital Logistics",
    speaker: "Srivatsav Sarvepalli",
    speakerRole: "Regional Director, Supply Chain Solutions, ECEMEA, Oracle",
    type: "keynote",
    icon: "🌊",
    description: "Maps current market challenges impacting Gulf logistics — rising costs, macroeconomic shifts, and digital frameworks.",
  },
  {
    id: 4,
    time: "10:40 – 11:10",
    title: "A Practical Guide to Successful Implementation",
    speaker: "Joe Spear",
    speakerRole: "Partner, Accelalpha",
    type: "session",
    icon: "⚓",
    description: "How modern organizations deploy enterprise SCM platforms safely without interrupting live operations.",
  },
  {
    id: 5,
    time: "11:10 – 11:30",
    title: "The Resilient Supply Chain & SCM Innovations",
    speaker: "Ujjwal Kumar",
    speakerRole: "Principal Domain Lead, ECEMEA, Oracle",
    type: "session",
    icon: "🤖",
    description: "Unveiling Oracle's Gen AI SCM Platform — predictive analytics, embedded AI automation, and deep inventory tracking.",
  },
  {
    id: 6,
    time: "11:30 – 11:50",
    title: "Coffee Break",
    speaker: "Networking Team",
    type: "break",
    icon: "☕",
    description: "Short intermission for refreshments and informal peer networking.",
  },
  {
    id: 7,
    time: "11:50 – 12:10",
    title: "Insights from Digital Evolution",
    speaker: "Dr. Raman Kumar",
    speakerRole: "CEO, Al-Futtaim Logistics",
    type: "session",
    icon: "📈",
    description: "Real-world insights on navigating large-scale corporate automation and digital transformation.",
  },
  {
    id: 8,
    time: "12:10 – 12:40",
    title: "Strategies in Action: Insights from Industry Leaders",
    speaker: "David Moono & Tamer Hamed",
    speakerRole: "Global Logistics Manager, Weatherford · CIO, Dubai Cable Company",
    type: "panel",
    icon: "🎙️",
    description: "Interactive panel sharing raw case studies, resilience tactics, and sustainability strategies.",
  },
  {
    id: 9,
    time: "12:40 – 01:00",
    title: "Q&A and Closing Remarks",
    speaker: "Accelalpha Team",
    type: "session",
    icon: "❓",
    description: "Floor opened for questions, wrapped with final strategic takeaways.",
  },
  {
    id: 10,
    time: "01:00 PM →",
    title: "Lunch & Networking",
    speaker: "Event Catering Group",
    type: "logistics",
    icon: "🍽️",
    description: "Dedicated networking lunch for delegates, technology partners, and technical leads.",
  },
];

const filters = [
  { key: "all", label: "All Sessions" },
  { key: "keynote", label: "Keynotes" },
  { key: "session", label: "Talks" },
  { key: "panel", label: "Panels" },
  { key: "break", label: "Breaks" },
];

const typeColors: Record<string, string> = {
  keynote: "bg-gold-400/10 text-gold-400 border-gold-400/30",
  session: "bg-ocean-400/10 text-ocean-400 border-ocean-400/30",
  panel: "bg-purple-400/10 text-purple-300 border-purple-400/30",
  break: "bg-white/5 text-white/40 border-white/10",
  logistics: "bg-white/5 text-white/40 border-white/10",
};

export default function AgendaSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? sessions
      : sessions.filter((s) => s.type === activeFilter);

  return (
    <section id="agenda" className="py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-widest text-ocean-400 uppercase mb-4">
            — Full Day Programme —
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            The Agenda
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Carefully charted sessions for Gulf supply chain executives navigating the AI era.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === f.key
                  ? "bg-ocean-400 text-navy-950 border-ocean-400"
                  : "border-white/10 text-white/50 hover:border-ocean-400/40 hover:text-ocean-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Sessions grid */}
        <div className="space-y-3">
          {filtered.map((session, idx) => (
            <div
              key={session.id}
              className={`session-card glass-card p-5 border ${
                session.type === "break" || session.type === "logistics"
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Time + icon */}
                <div className="flex items-center gap-3 sm:w-36 shrink-0">
                  <span className="text-xl">{session.icon}</span>
                  <span className="font-mono text-xs text-white/40 leading-tight">
                    {session.time}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-2 mb-1">
                    <h3 className="font-display font-bold text-white text-base leading-tight">
                      {session.title}
                    </h3>
                    {"subtitle" in session && (
                      <span className="text-white/40 text-sm italic">
                        — {(session as any).subtitle}
                      </span>
                    )}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border font-mono ${typeColors[session.type]}`}
                    >
                      {session.type}
                    </span>
                  </div>
                  <p className="text-ocean-400 text-sm font-medium mb-1">
                    {session.speaker}
                  </p>
                  {"speakerRole" in session && (
                    <p className="text-white/30 text-xs mb-2">{(session as any).speakerRole}</p>
                  )}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
