"use client";

import { useState, FormEvent } from "react";
import { InvitationResult } from "@/app/page";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

interface Props {
  onResult: (result: InvitationResult) => void;
}

export default function RegistrationForm({ onResult }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !focus.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/match-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, focus }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Something went wrong.");
      }

      const data: InvitationResult = await res.json();
      onResult(data);
    } catch (err: any) {
      setError(
        err.message || "Failed to connect to the backend. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-widest text-gold-400 uppercase mb-4">
            — AI-Powered Personalization —
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Invitation
          </h2>
          <p className="text-white/40 leading-relaxed">
            Tell us about your professional challenges. Our AI will match you to
            the most relevant session and draft a personalized invitation — just
            for you.
          </p>
        </div>

        {/* Form card */}
        <div className="glass-card p-8 md:p-10">
          {/* How it works */}
          <div className="flex gap-6 mb-8 p-4 rounded-xl bg-ocean-400/5 border border-ocean-400/10">
            {[
              { step: "1", label: "Share your focus" },
              { step: "2", label: "AI matches your session" },
              { step: "3", label: "Get your invite" },
            ].map(({ step, label }) => (
              <div key={step} className="flex-1 text-center">
                <div className="w-8 h-8 rounded-full bg-ocean-400/20 text-ocean-400 font-mono text-xs flex items-center justify-center mx-auto mb-1">
                  {step}
                </div>
                <p className="text-white/40 text-xs">{label}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Al-Mansoori"
                className="form-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@company.ae"
                className="form-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Professional Focus / Career Challenges
              </label>
              <textarea
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                placeholder="e.g. We're struggling with warehouse visibility and reducing last-mile delivery costs. Looking for AI-driven solutions to predict demand..."
                rows={4}
                className="form-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm resize-none"
              />
              <p className="text-white/25 text-xs mt-1">
                The more specific, the better your session match.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 rounded-xl bg-gradient-to-r from-ocean-400 to-blue-500 text-navy-950 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg
                    className="spinner w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Matching your session...
                </>
              ) : (
                <>✦ Generate My Personalized Invitation</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
