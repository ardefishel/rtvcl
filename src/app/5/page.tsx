"use client";

export default function VariantFive() {
  return (
    <div className="relative min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <div className="grain grain-heavy" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Scattered cut-out letters */}
        <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
          <span
            className="absolute font-mono font-black text-[12rem] md:text-[18rem] leading-none select-none"
            style={{ top: "5%", left: "2%", transform: "rotate(-8deg)" }}
          >
            R
          </span>
          <span
            className="absolute font-sans font-black text-[10rem] md:text-[16rem] leading-none select-none"
            style={{ top: "0%", left: "22%", transform: "rotate(4deg)" }}
          >
            T
          </span>
          <span
            className="absolute font-mono font-black text-[11rem] md:text-[17rem] leading-none select-none bg-black text-white px-2"
            style={{ top: "8%", left: "40%", transform: "rotate(-3deg)" }}
          >
            V
          </span>
          <span
            className="absolute font-sans font-black text-[10rem] md:text-[15rem] leading-none select-none"
            style={{ top: "2%", left: "60%", transform: "rotate(6deg)" }}
          >
            C
          </span>
          <span
            className="absolute font-mono font-black text-[12rem] md:text-[18rem] leading-none select-none border-4 border-black px-1"
            style={{ top: "10%", left: "76%", transform: "rotate(-5deg)" }}
          >
            L
          </span>
        </div>

        {/* Stamped tagline */}
        <div
          className="relative -mt-20 border-4 border-black px-6 py-3 bg-black text-white font-mono text-sm md:text-base uppercase tracking-[0.3em] shadow-[4px_4px_0_black]"
          style={{ transform: "rotate(-2deg)" }}
        >
          Solo Indie Dev Studio — Est. by Wira
        </div>

        {/* Tiny scattered annotations */}
        <span
          className="absolute font-mono text-[10px] uppercase tracking-widest opacity-60"
          style={{ bottom: "12%", right: "8%", transform: "rotate(90deg)" }}
        >
          scroll down ↓
        </span>
        <span
          className="absolute font-mono text-[9px] uppercase tracking-widest opacity-40"
          style={{ top: "15%", left: "5%", transform: "rotate(-90deg)" }}
        >
          issue no. 001
        </span>
      </section>

      {/* ===== PRODUCTS — ZINE ENTRIES ===== */}
      <section className="relative px-6 md:px-16 py-24">
        {/* Section header — stamped */}
        <div className="flex items-center gap-4 mb-20">
          <div
            className="border-2 border-black px-4 py-1 font-mono text-xs uppercase tracking-[0.4em]"
            style={{ transform: "rotate(1deg)" }}
          >
            Products
          </div>
          <div className="flex-1 border-t-2 border-black border-dashed" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* LaughTrack */}
          <div
            className="relative border-4 border-black p-6 md:p-8 bg-white shadow-[6px_6px_0_black]"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            {/* Torn top edge simulation */}
            <div
              className="absolute -top-3 left-4 right-4 h-3 bg-white"
              style={{
                borderTop: "3px dashed black",
              }}
            />
            {/* Status badge */}
            <div
              className="absolute -top-4 -right-3 bg-black text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 shadow-[3px_3px_0_rgba(0,0,0,0.3)]"
              style={{ transform: "rotate(3deg)" }}
            >
              In Dev
            </div>

            <h3 className="font-mono font-black text-4xl md:text-5xl mb-4 leading-none">
              Laugh
              <br />
              Track
            </h3>
            <p className="font-sans text-sm leading-relaxed mb-6 max-w-xs">
              A standup comedy material manager. Write bits, tag themes, track
              what killed and what bombed. Your comedy notebook, digitized.
            </p>
            <div className="flex flex-wrap gap-2">
              {["comedy", "writing", "mobile app"].map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-black px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tape strip */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/10 border border-black/20"
              style={{ transform: "rotate(2deg)" }}
            />
          </div>

          {/* Roastbox */}
          <div
            className="relative border-4 border-black p-6 md:p-8 bg-black text-white shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
            style={{ transform: "rotate(2deg)", marginTop: "2rem" }}
          >
            {/* Status badge */}
            <div
              className="absolute -top-4 -left-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest px-3 py-1 border-2 border-black shadow-[3px_3px_0_black]"
              style={{ transform: "rotate(-4deg)" }}
            >
              Idea Stage
            </div>

            <h3 className="font-mono font-black text-4xl md:text-5xl mb-4 leading-none">
              Roast
              <br />
              box
            </h3>
            <p className="font-sans text-sm leading-relaxed mb-6 max-w-xs opacity-80">
              Letterboxd, but for standup shows. Rate sets, review comics, build
              your comedy taste profile. Coming eventually (maybe).
            </p>
            <div className="flex flex-wrap gap-2">
              {["reviews", "comedy", "social"].map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Corner fold */}
            <div
              className="absolute bottom-0 right-0 w-8 h-8 bg-white"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>

        {/* Scattered annotation */}
        <span
          className="block mt-16 font-mono text-[10px] uppercase tracking-[0.5em] text-center opacity-40"
          style={{ transform: "rotate(0.5deg)" }}
        >
          * more projects in the pipeline — stay tuned or don&apos;t *
        </span>
      </section>

      {/* ===== ABOUT — ZINE BIO ===== */}
      <section className="relative px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Dashed divider */}
          <div className="border-t-4 border-black border-dashed mb-16" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Polaroid frame */}
            <div
              className="flex-shrink-0 border-4 border-black p-3 pb-12 bg-white shadow-[6px_6px_0_black] relative"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="w-48 h-48 bg-black flex items-center justify-center">
                <span className="font-mono text-white text-6xl font-black">
                  W
                </span>
              </div>
              <span
                className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs tracking-wider"
                style={{ fontStyle: "italic" }}
              >
                wira, 2024
              </span>
              {/* Tape on corner */}
              <div
                className="absolute -top-2 -right-2 w-12 h-4 bg-yellow-100/80 border border-black/10"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>

            {/* Bio text — varied sizes, zine feel */}
            <div className="flex-1 space-y-4">
              <div
                className="inline-block border-2 border-black px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] mb-4"
                style={{ transform: "rotate(1deg)" }}
              >
                About
              </div>

              <p className="font-sans text-3xl md:text-4xl font-black leading-tight">
                Hi, I&apos;m Wira.
              </p>
              <p
                className="font-mono text-sm leading-relaxed max-w-md"
                style={{ fontStyle: "italic" }}
              >
                4 years as a product manager across fintech, SaaS, and
                e-commerce. Now building my own things.
              </p>
              <p className="font-sans text-xs leading-relaxed max-w-sm opacity-70">
                RTVCL is my solo studio — a place to ship weird, useful,
                sometimes funny software. No investors, no roadmaps, no
                standups (ironic, given the comedy angle).
              </p>

              {/* Credential stamps */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["fintech", "saas", "e-commerce", "product mgmt"].map(
                  (cred, i) => (
                    <span
                      key={cred}
                      className="border-2 border-black bg-black text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                      style={{
                        transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                      }}
                    >
                      {cred}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA — STICKER ===== */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center">
        {/* Big sticker CTA */}
        <a
          href="mailto:hello@rtvcl.com"
          className="group relative inline-block"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div className="border-4 border-black px-10 md:px-16 py-8 md:py-12 bg-white shadow-[8px_8px_0_black] transition-all duration-200 group-hover:shadow-[4px_4px_0_black] group-hover:translate-x-1 group-hover:translate-y-1">
            <span className="block font-mono font-black text-3xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-center">
              Let&apos;s Work
              <br />
              Together
            </span>
          </div>
        </a>

        {/* Sub label */}
        <div
          className="mt-8 bg-black text-white font-mono text-xs uppercase tracking-[0.3em] px-4 py-2"
          style={{ transform: "rotate(1deg)" }}
        >
          hello@rtvcl.com
        </div>

        {/* Decorative stamps */}
        <span
          className="absolute font-mono text-[10px] uppercase tracking-widest opacity-30"
          style={{ top: "20%", left: "10%", transform: "rotate(-12deg)" }}
        >
          ★ indie ★
        </span>
        <span
          className="absolute font-mono text-[10px] uppercase tracking-widest opacity-30"
          style={{ bottom: "20%", right: "10%", transform: "rotate(8deg)" }}
        >
          ★ handmade ★
        </span>
        <span
          className="absolute font-mono text-8xl font-black opacity-[0.03] select-none"
          style={{ top: "30%", right: "5%", transform: "rotate(15deg)" }}
        >
          DIY
        </span>
      </section>

      {/* ===== FOOTER — STAMPED ===== */}
      <footer className="relative border-t-4 border-black border-dashed px-6 md:px-16 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span
              className="font-mono font-black text-2xl tracking-tight"
              style={{ transform: "rotate(-1deg)", display: "inline-block" }}
            >
              RTVCL
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mt-1 opacity-50">
              Solo indie dev studio
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
              © 2024 — Wira
            </span>
            <div
              className="border-2 border-black px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
              style={{ transform: "rotate(2deg)" }}
            >
              Made by hand
            </div>
          </div>
        </div>

        {/* Bottom stamps */}
        <div className="mt-8 flex justify-center gap-8 opacity-20">
          <span
            className="font-mono text-[9px] uppercase tracking-[0.5em]"
            style={{ transform: "rotate(-3deg)" }}
          >
            No frameworks were harmed
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.5em]"
            style={{ transform: "rotate(2deg)" }}
          >
            Photocopied with love
          </span>
        </div>
      </footer>
    </div>
  );
}
