import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(145,64,255,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Star className="h-3.5 w-3.5 text-amber-300" />
            Cyber-futuristic design & motion
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            We craft 3D, animation, and video that drive growth.
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            AG is a next-gen creative studio. We blend real-time 3D, motion
            graphics, and cinematic storytelling to launch brands into the
            future.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
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
    </div>
  );
}
