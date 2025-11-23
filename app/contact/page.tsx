// app/contact/page.tsx
'use client';

import { FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-charcoal-grey-1 py-12 px-6 flex items-center justify-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-text-main text-center mb-10">
          Get in <span className="text-neon-red-1">Touch</span>
        </h2>
        <div className="max-w-md mx-auto p-8 rounded-lg bg-sub-panel-1 border border-charcoal-grey-2 shadow-glass-card-deep text-center relative overflow-hidden">
          {/* Neon border stroke and subtle glow */}
          <div className="absolute inset-0 rounded-lg border-2 border-neon-red-1 opacity-60 animate-glow-border-slow"></div>

          <div className="relative z-10">
            <div className="flex justify-center items-center mb-6">
              <FaEnvelope className="text-neon-red-1 text-5xl drop-shadow-neon animate-pulse-fast" />
            </div>
            <p className="text-text-dimmed text-lg mb-4">
              For inquiries and support, feel free to reach out:
            </p>
            <a
              href="mailto:bashartc13@gmail.com"
              className="text-text-main text-xl font-semibold hover:text-neon-red-2 transition-colors duration-300"
            >
              bashartc13@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
