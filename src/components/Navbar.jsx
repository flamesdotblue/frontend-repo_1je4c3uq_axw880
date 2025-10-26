import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">AG</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
          >
            Start a Project
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white/90"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 text-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
