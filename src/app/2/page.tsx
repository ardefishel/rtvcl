"use client";

export default function GrainNoir() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes widthReveal {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes letterReveal {
          from { letter-spacing: 1em; opacity: 0; }
          to { letter-spacing: 0.4em; opacity: 1; }
        }
        @keyframes flickerIn {
          0% { opacity: 0; }
          10% { opacity: 0.1; }
          20% { opacity: 0; }
          40% { opacity: 0.15; }
          50% { opacity: 0; }
          70% { opacity: 0.3; }
          80% { opacity: 0.1; }
          100% { opacity: 1; }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .anim-fade-in {
          animation: fadeIn 1.8s ease-out forwards;
          opacity: 0;
        }
        .anim-slide-up {
          animation: slideUp 1.4s ease-out forwards;
          opacity: 0;
        }
        .anim-letter-reveal {
          animation: letterReveal 2.5s ease-out forwards;
          opacity: 0;
        }
        .anim-flicker {
          animation: flickerIn 2s ease-out forwards;
          opacity: 0;
        }
        .anim-width-reveal {
          animation: widthReveal 2s ease-out forwards;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1800 { animation-delay: 1.8s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-2300 { animation-delay: 2.3s; }
        .delay-2500 { animation-delay: 2.5s; }
        .delay-2800 { animation-delay: 2.8s; }
        .delay-3000 { animation-delay: 3s; }
        .delay-3300 { animation-delay: 3.3s; }
        .delay-3500 { animation-delay: 3.5s; }

        .rule-reveal {
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          width: 0;
          animation: widthReveal 2s ease-out forwards;
        }

        .product-card {
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: border-color 0.6s ease, background-color 0.6s ease;
        }
        .product-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.02);
        }

        .cta-link {
          position: relative;
          display: inline-block;
        }
        .cta-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.5s ease;
        }
        .cta-link:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
        <div className="grain grain-heavy" />

        {/* ── Hero ── */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6">
          <p
            className="font-mono text-[11px] tracking-[0.5em] uppercase text-white/30 anim-fade-in delay-300 mb-12"
          >
            A film by
          </p>

          <h1
            className="text-[clamp(3rem,12vw,10rem)] font-extralight tracking-[0.4em] anim-letter-reveal delay-700 uppercase"
          >
            RTVCL
          </h1>

          <div className="rule-reveal delay-2000 max-w-[200px] mx-auto mt-10 mb-10" />

          <p
            className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/40 anim-fade-in delay-2300 text-center max-w-md leading-relaxed"
          >
            Solo indie dev studio — building at the intersection
            <br />
            of comedy & technology
          </p>

          <div className="absolute bottom-12 anim-fade-in delay-3500">
            <p
              className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20"
              style={{ animation: "subtlePulse 3s ease-in-out infinite" }}
            >
              Scroll
            </p>
          </div>
        </section>

        {/* ── Products ── */}
        <section className="relative px-6 py-40 max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4 anim-slide-up delay-300">
            Now Showing
          </p>
          <h2 className="text-3xl font-extralight tracking-[0.2em] uppercase mb-20 anim-slide-up delay-500">
            Productions
          </h2>

          {/* LaughTrack */}
          <div className="product-card p-8 md:p-12 mb-8 anim-slide-up delay-700">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-xl font-light tracking-[0.15em] uppercase">
                LaughTrack
              </h3>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
                In Production
              </span>
            </div>
            <div className="rule-reveal delay-1000 mb-6" />
            <p className="text-white/50 font-light leading-relaxed tracking-wide text-sm mb-6">
              A standup comedy material manager — write, tag, and track your bits
              from notebook to stage. Built for comics who want to refine their craft
              with intention.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Expo", "React Native", "WatermelonDB"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/25 border border-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roastbox */}
          <div className="product-card p-8 md:p-12 anim-slide-up delay-1000">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-xl font-light tracking-[0.15em] uppercase">
                Roastbox
              </h3>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
                In Development
              </span>
            </div>
            <div className="rule-reveal delay-1200 mb-6" />
            <p className="text-white/50 font-light leading-relaxed tracking-wide text-sm mb-6">
              A standup show review platform — Letterboxd for live comedy.
              Rate shows, discover comics, share your takes on sets that killed
              and sets that bombed.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/25 border border-white/10 px-3 py-1">
                Idea Stage
              </span>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="rule-reveal delay-300" />
        </div>

        {/* ── About / Director's Note ── */}
        <section className="relative px-6 py-40 max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4 anim-slide-up delay-300">
            Director&apos;s Note
          </p>
          <h2 className="text-3xl font-extralight tracking-[0.2em] uppercase mb-16 anim-slide-up delay-500">
            Wira
          </h2>

          <div className="space-y-6 anim-slide-up delay-700">
            <p className="text-white/50 font-light leading-loose tracking-wide text-sm">
              Four years in the trenches of product management — fintech, SaaS,
              e‑commerce — taught me how products should feel. Not just work.
              Feel.
            </p>
            <p className="text-white/40 font-light leading-loose tracking-wide text-sm">
              RTVCL is the studio where I build the things I wish existed.
              Tools for comedians. Platforms for the live comedy scene.
              Software with a point of view.
            </p>
            <p className="text-white/30 font-light leading-loose tracking-wide text-sm">
              Every product is a solo production — designed, built, and shipped
              by one person who cares too much about the details.
            </p>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="rule-reveal delay-300" />
        </div>

        {/* ── CTA ── */}
        <section className="relative px-6 py-40 max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/25 mb-4 anim-slide-up delay-300">
            Collaborate
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.15em] mb-8 anim-slide-up delay-500">
            Let&apos;s make something
            <br />
            <span className="text-white/60">worth watching.</span>
          </h2>
          <p className="text-white/40 font-light tracking-wide text-sm mb-12 anim-slide-up delay-700 max-w-md mx-auto leading-relaxed">
            Whether it&apos;s a product idea, a collaboration, or just a conversation
            about comedy and code — the line is open.
          </p>
          <a
            href="mailto:wira@rtvcl.com"
            className="cta-link font-mono text-[11px] tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors duration-500 anim-flicker delay-1000"
          >
            wira@rtvcl.com
          </a>
        </section>

        {/* ── Footer ── */}
        <footer className="px-6 py-16 max-w-3xl mx-auto">
          <div className="rule-reveal delay-300 mb-12" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/15 anim-fade-in delay-500">
              RTVCL Studio
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/15 anim-fade-in delay-700">
              © {new Date().getFullYear()}
            </p>
          </div>
          <div className="mt-8 text-center anim-fade-in delay-1000">
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/10">
              A Wira Production
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
