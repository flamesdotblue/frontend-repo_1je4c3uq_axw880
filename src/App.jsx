import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>

        <section id="services" className="relative">
          <Services />
        </section>

        <section id="contact" className="relative">
          <ContactCTA />
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} AG — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
