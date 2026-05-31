"use client";

import { InvitationResult } from "@/app/page";

interface Props {
  result: InvitationResult;
  onClose: () => void;
}

export default function ResultModal({ result, onClose }: Props) {
  const copyEmail = () => {
    navigator.clipboard.writeText(result.email_body);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/50 flex items-center justify-center text-sm transition-colors"
        >
          ✕
        </button>

        {/* Success badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-ocean-400/20 flex items-center justify-center text-ocean-400">
            ✓
          </div>
          <span className="font-mono text-xs text-ocean-400 tracking-widest uppercase">
            Session Matched
          </span>
        </div>

        <h2 className="font-display text-2xl font-bold text-white mb-6">
          Your Personalized Invitation
        </h2>

        {/* Matched session card */}
        <div className="p-5 rounded-xl bg-ocean-400/5 border border-ocean-400/20 mb-6">
          <p className="font-mono text-xs text-ocean-400 uppercase tracking-widest mb-3">
            Best Matched Session
          </p>
          <h3 className="font-display text-lg font-bold text-white mb-1">
            {result.matched_session_title}
          </h3>
          <p className="text-ocean-400 text-sm">{result.matched_speaker}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-mono text-xs text-white/30">🕐</span>
            <span className="font-mono text-xs text-white/30">
              {result.matched_session_time}
            </span>
          </div>
        </div>

        {/* Email draft */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
              Your Invitation Email
            </p>
            <button
              onClick={copyEmail}
              className="text-xs text-ocean-400 hover:text-ocean-300 font-mono transition-colors px-3 py-1 rounded-lg border border-ocean-400/20 hover:border-ocean-400/40"
            >
              Copy
            </button>
          </div>
          <div className="p-5 rounded-xl bg-navy-900 border border-white/5 text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-body">
            {result.email_body}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#register"
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-white/10 text-white/50 text-sm text-center hover:border-ocean-400/30 hover:text-ocean-400 transition-all"
          >
            ← Back
          </a>
          <button
            onClick={() => {
              const subject = encodeURIComponent(
                `Invitation: ${result.matched_session_title} — Troubled Waters Summit`
              );
              const body = encodeURIComponent(result.email_body);
              window.open(`mailto:?subject=${subject}&body=${body}`);
            }}
            className="flex-1 py-3 rounded-xl bg-ocean-400 text-navy-950 font-bold text-sm hover:bg-ocean-300 transition-colors"
          >
            Open in Mail Client →
          </button>
        </div>
      </div>
    </div>
  );
}
