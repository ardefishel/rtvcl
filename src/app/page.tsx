import Link from "next/link";

const variants = [
  { id: 1, name: "Brutalist Typographic", desc: "Raw oversized type, stark contrast, newspaper-grid energy" },
  { id: 2, name: "Grain Noir", desc: "Cinematic dark grain, elegant serif, film-poster atmosphere" },
  { id: 3, name: "Swiss Modernist", desc: "Clean grid, geometric precision, clinical minimalism" },
  { id: 4, name: "Kinetic Terminal", desc: "Dev-centric, monospaced, animated text reveals" },
  { id: 5, name: "Zine Collage", desc: "DIY punk aesthetic, cut-paper textures, raw energy" },
  { id: 6, name: "Swiss Brutalist", desc: "12-col grid precision meets massive typographic weight" },
  { id: 7, name: "Inverted Swiss Brutalist", desc: "Dark canvas, scroll reveals, airy spacing, refined grain" },
  { id: 8, name: "Editorial Swiss Brutalist", desc: "Magazine editorial, vertical sidebar, alternating inverted sections" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      <div className="grain" />
      <div className="max-w-xl w-full space-y-12">
        <div className="space-y-3">
          <h1 className="font-mono text-sm tracking-[0.3em] uppercase opacity-50">
            RTVCL
          </h1>
          <p className="text-2xl font-light leading-relaxed">
            Landing Page Variants
          </p>
          <p className="text-sm opacity-40 font-mono">
            5 directions — pick one
          </p>
        </div>

        <div className="space-y-4">
          {variants.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              className="group block border border-white/10 rounded-sm p-6 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs opacity-40">
                  0{v.id}
                </span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-40 transition-opacity">
                  →
                </span>
              </div>
              <h2 className="text-lg font-light mb-1">{v.name}</h2>
              <p className="text-sm opacity-40">{v.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-xs opacity-20 font-mono text-center pt-8">
          RTVCL © 2025
        </p>
      </div>
    </main>
  );
}
