import { Rocket, PenTool, Film, Cpu, Camera, Check } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Launch Strategy',
    desc: 'Positioning, creative direction, and go-to-market to accelerate brand impact.',
  },
  {
    icon: PenTool,
    title: 'Brand Design',
    desc: 'Identity systems, visual languages, and digital design with a futuristic edge.',
  },
  {
    icon: Cpu,
    title: '3D & Motion',
    desc: 'Realtime graphics, Spline scenes, and motion design for immersive experiences.',
  },
  {
    icon: Film,
    title: 'Cinematic Video',
    desc: 'High-impact edits, trailers, and content engineered for growth.',
  },
  {
    icon: Camera,
    title: 'Product Visuals',
    desc: 'Photoreal renders and interactive product demos that convert.',
  },
];

export default function Services() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-black via-black to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-white/70">
            Modular offerings to power your next launch.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-cyan-400" />
                  Expert team and agile delivery
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-cyan-400" />
                  Future-proof, scalable assets
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
