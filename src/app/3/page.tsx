export default function SwissModernist() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Top Rule */}
      <div className="w-full h-[2px] bg-black" />

      {/* Navigation Bar */}
      <nav className="max-w-[1200px] mx-auto px-6 py-4 grid grid-cols-12 gap-4 items-center border-b border-black/10">
        <span className="col-span-2 font-mono text-xs tracking-[0.3em] uppercase">
          RTVCL
        </span>
        <div className="col-span-10 flex justify-end gap-8 font-mono text-xs tracking-wider uppercase">
          <a href="#products" className="hover:underline underline-offset-4">
            Products
          </a>
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#contact" className="hover:underline underline-offset-4">
            Contact
          </a>
        </div>
      </nav>

      {/* ————————————————————————————————————————
          01 — HERO
      ———————————————————————————————————————— */}
      <section className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-1 flex items-start">
          <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
            01
          </span>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
            RTVCL
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF0000] shrink-0" />
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-black/60">
              Indie Dev Studio
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
          <p className="text-sm leading-relaxed text-black/70 max-w-[280px]">
            Building focused products at the intersection of comedy, culture,
            and technology. One solo developer. No noise.
          </p>
        </div>

        <div className="col-span-12 mt-12">
          <div className="w-full h-px bg-black" />
        </div>
      </section>

      {/* ————————————————————————————————————————
          02 — PRODUCTS
      ———————————————————————————————————————— */}
      <section
        id="products"
        className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-12 gap-4"
      >
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
            02
          </span>
        </div>

        <div className="col-span-12 md:col-span-3">
          <h2 className="text-xs font-mono tracking-[0.3em] uppercase mb-8">
            Products
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* LaughTrack */}
            <div className="border-t border-l border-black/15 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/30">
                  A
                </span>
                <span className="font-mono text-[10px] px-2 py-1 border border-black/20 tracking-wider uppercase">
                  In Development
                </span>
              </div>
              <h3 className="text-2xl font-light tracking-[-0.02em] mb-4">
                LaughTrack
              </h3>
              <p className="text-sm leading-relaxed text-black/60 mb-6">
                A material manager for standup comedians. Organize bits, track
                performance history, refine your set. Built for the craft of
                comedy writing.
              </p>
              <div className="space-y-2 font-mono text-[10px] tracking-wider text-black/40 uppercase">
                <p>Material Organization</p>
                <p>Set List Builder</p>
                <p>Performance Tracking</p>
              </div>
            </div>

            {/* Roastbox */}
            <div className="border-t border-l border-r border-black/15 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/30">
                  B
                </span>
                <span className="font-mono text-[10px] px-2 py-1 border border-black/20 tracking-wider uppercase">
                  Idea Stage
                </span>
              </div>
              <h3 className="text-2xl font-light tracking-[-0.02em] mb-4">
                Roastbox
              </h3>
              <p className="text-sm leading-relaxed text-black/60 mb-6">
                Rate, review, and discover standup shows. A Letterboxd-inspired
                platform for the live comedy scene. Log your nights out.
              </p>
              <div className="space-y-2 font-mono text-[10px] tracking-wider text-black/40 uppercase">
                <p>Show Reviews</p>
                <p>Comedian Profiles</p>
                <p>Venue Discovery</p>
              </div>
            </div>
          </div>
          <div className="border-b border-l border-r border-black/15" />
        </div>

        <div className="col-span-12 mt-12">
          <div className="w-full h-px bg-black" />
        </div>
      </section>

      {/* ————————————————————————————————————————
          03 — ABOUT
      ———————————————————————————————————————— */}
      <section
        id="about"
        className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-12 gap-4"
      >
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
            03
          </span>
        </div>

        <div className="col-span-12 md:col-span-3">
          <h2 className="text-xs font-mono tracking-[0.3em] uppercase mb-8">
            About
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-y-6 gap-x-4 font-mono text-xs">
            {/* Row 1 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Name
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              Wira
            </div>

            {/* Row 2 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Role
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              Solo Developer &amp; Founder
            </div>

            {/* Row 3 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Studio
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              RTVCL — Indie Dev Studio
            </div>

            {/* Row 4 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Experience
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              4 Years — Product Management
            </div>

            {/* Row 5 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Domains
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              Fintech, SaaS, E-Commerce
            </div>

            {/* Row 6 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Focus
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              Comedy × Technology
            </div>

            {/* Row 7 */}
            <div className="col-span-4 text-black/30 uppercase tracking-wider border-t border-black/10 pt-3">
              Approach
            </div>
            <div className="col-span-8 border-t border-black/10 pt-3">
              Ship small, iterate fast, stay independent
            </div>

            {/* Bottom border */}
            <div className="col-span-12 border-t border-black/10" />
          </div>

          <p className="mt-10 text-sm leading-relaxed text-black/60 max-w-[480px]">
            From product management in fintech and SaaS to building indie
            software for comedians. RTVCL exists to make focused, well-crafted
            tools for underserved creative communities.
          </p>
        </div>

        <div className="col-span-12 mt-12">
          <div className="w-full h-px bg-black" />
        </div>
      </section>

      {/* ————————————————————————————————————————
          04 — CTA
      ———————————————————————————————————————— */}
      <section
        id="contact"
        className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-12 gap-4"
      >
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
            04
          </span>
        </div>

        <div className="col-span-12 md:col-span-7">
          <p className="text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
            Let&rsquo;s build
            <br />
            something{" "}
            <span className="inline-flex items-center">
              useful
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF0000] ml-1 -translate-y-px" />
            </span>
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
          <div className="space-y-4">
            <p className="text-sm text-black/50 max-w-[260px]">
              Interested in collaborating, following the journey, or just want
              to say hi?
            </p>
            <a
              href="mailto:hello@rtvcl.com"
              className="inline-flex items-center gap-3 border border-black px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors duration-200"
            >
              <span>Get in Touch</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ————————————————————————————————————————
          FOOTER
      ———————————————————————————————————————— */}
      <footer className="border-t border-black">
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 font-mono text-[10px] tracking-[0.2em] uppercase text-black/30">
            © 2025 RTVCL
          </div>

          <div className="col-span-12 md:col-span-4 font-mono text-[10px] tracking-[0.2em] uppercase text-black/30 md:text-center">
            Indie Dev Studio — Jakarta
          </div>

          <div className="col-span-12 md:col-span-4 flex md:justify-end gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">
            <a
              href="https://github.com/rtvcl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/rtvcl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Rule */}
      <div className="w-full h-[2px] bg-black" />
    </main>
  );
}
