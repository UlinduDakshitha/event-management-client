"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AgendaSection from "@/components/AgendaSection";
import RegistrationForm from "@/components/RegistrationForm";
import ResultModal from "@/components/ResultModal";
import FooterSection from "@/components/FooterSection";

export interface InvitationResult {
  matched_session_title: string;
  matched_session_time: string;
  matched_speaker: string;
  email_body: string;
}

export default function Home() {
  const [result, setResult] = useState<InvitationResult | null>(null);

  return (
    <main className="noise relative">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AgendaSection />
        <RegistrationForm onResult={setResult} />
        <FooterSection />
      </div>

      {result && (
        <ResultModal result={result} onClose={() => setResult(null)} />
      )}
    </main>
  );
}
