import { MessageSquare } from 'lucide-react';

export default function ContactCTA() {
  return (
    <div className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,64,128,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <MessageSquare className="h-3.5 w-3.5" />
          Let’s talk
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
          Ready to build something extraordinary?
        </h3>
        <p className="mt-3 text-white/70">
          Tell us about your goals and we’ll propose a high-impact, fast-moving plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@ag.studio?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
          >
            Email Us
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.08] transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}
