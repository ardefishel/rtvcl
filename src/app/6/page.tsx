"use client";

import { useEffect, useState } from "react";

const PRODUCTS = [
  {
    id: "A",
    name: "LaughTrack",
    status: "In Development",
    summary:
      "A material manager for standup comedians. Organize premises, bits, and setlists. Track what works, refine what doesn't.",
    stack: ["Expo", "React Native", "WatermelonDB"],
    features: ["Material Organization", "Set List Builder", "Performance Tracking"],
  },
  {
    id: "B",
    name: "Roastbox",
    status: "Idea Stage",
    summary:
      "Rate, review, and discover standup shows. A Letterboxd-inspired platform for the live comedy scene.",
    stack: [],
    features: ["Show Reviews", "Comedian Profiles", "Venue Discovery"],
  },
];

const SPEC_ROWS = [
  ["Name", "Wira"],
  ["Role", "Solo Developer & Founder"],
  ["Studio", "RTVCL — Indie Dev Studio"],
  ["Experience", "4 Years — Product Management"],
  ["Domains", "Fintech, SaaS, E-Commerce"],
  ["Focus", "Comedy × Technology"],
  ["Approach", "Ship small. Iterate fast. Stay independent."],
];

export default function SwissBrutalist() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="grain" />

      {/* ═══ TOP RULE ═══ */}
      <div className="w-full h-1 bg-black" />

      {/* ═══ NAV ═══ */}
      <nav
        className="max-w-[1400px] mx-auto px-6 py-4 grid grid-cols-12 gap-4 items-center border-b-2 border-black"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}
      >
        <div className="col-span-4 md:col-span-2">
          <span className="font-sans font-black text-lg tracking-[-0.02em] uppercase">
            RTVCL
          </span>
        </div>
        <div className="col-span-8 md:col-span-10 flex justify-end gap-6 md:gap-10 font-mono text-[10px] tracking-[0.25em] uppercase">
          <a href="#products" className="hover:underline underline-offset-4 decoration-2">
            Products
          </a>
          <a href="#about" className="hover:underline underline-offset-4 decoration-2">
            About
          </a>
          <a href="#contact" className="hover:underline underline-offset-4 decoration-2">
            Contact
          </a>
        </div>
      </nav>

      {/* ═══ 01 — HERO ═══ */}
      <section className="max-w-[1400px] mx-auto px-6 border-b-4 border-black">
        <div className="grid grid-cols-12 gap-4 pt-16 md:pt-24 pb-12 md:pb-16">
          {/* Section number */}
          <div className="col-span-12 md:col-span-1 flex items-start">
            <span
              className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.3s",
              }}
            >
              01
            </span>
          </div>

          {/* Giant title */}
          <div className="col-span-12 md:col-span-11">
            <h1
              className="font-sans font-black uppercase leading-[0.82] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(5rem, 16vw, 18rem)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
              RTVCL
            </h1>
          </div>

          {/* Rule + info row */}
          <div className="col-span-12 md:col-span-1" />
          <div className="col-span-12 md:col-span-11">
            <div
              className="border-t-2 border-black mt-2 pt-6 grid grid-cols-12 gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
              }}
            >
              <div className="col-span-12 md:col-span-6">
                <p className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] leading-relaxed">
                  Building products at the
                  <br />
                  intersection of comedy
                  <br />
                  &amp; technology
                </p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FF0000] shrink-0" />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/50">
                    Indie Dev Studio
                  </span>
                </div>
                <p className="text-sm text-black/50 leading-relaxed">
                  One solo developer. No noise.
                  Focused, well-crafted tools for underserved creative communities.
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-end">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/30">
                  Est. 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-t-2 border-black overflow-hidden">
          <div
            className="flex whitespace-nowrap py-3"
            style={{ animation: "ticker 24s linear infinite" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase tracking-[0.5em] px-6 text-black/40"
              >
                DESIGN — DEVELOP — SHIP — REPEAT —
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 02 — PRODUCTS ═══ */}
      <section
        id="products"
        className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 border-b-4 border-black"
      >
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
              02
            </span>
          </div>
          <div className="col-span-12 md:col-span-11 flex items-baseline justify-between">
            <h2
              className="font-sans font-black uppercase tracking-[-0.03em] leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              Products
            </h2>
            <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
              What we&apos;re building
            </span>
          </div>
        </div>

        {/* Product entries */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1" />
          <div className="col-span-12 md:col-span-11">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className={`grid grid-cols-12 gap-4 border-t-2 border-black py-8 md:py-10 ${
                  idx === PRODUCTS.length - 1 ? "border-b-2" : ""
                }`}
              >
                {/* Left: ID + Name */}
                <div className="col-span-12 md:col-span-5">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-6xl md:text-8xl font-black leading-none text-black/10">
                      {product.id}
                    </span>
                    <div>
                      <h3
                        className="font-sans font-black uppercase tracking-[-0.02em] leading-none"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
                      >
                        {product.name}
                      </h3>
                      <span className="inline-block mt-2 font-mono text-[10px] uppercase tracking-[0.25em] border-2 border-black px-3 py-1">
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle: Description */}
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm leading-relaxed text-black/60">
                    {product.summary}
                  </p>
                  {product.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {product.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-[0.2em] bg-black text-white px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Features */}
                <div className="col-span-12 md:col-span-3">
                  <div className="space-y-2">
                    {product.features.map((f) => (
                      <p
                        key={f}
                        className="font-mono text-[10px] tracking-[0.15em] text-black/40 uppercase border-b border-black/10 pb-2"
                      >
                        {f}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 03 — ABOUT ═══ */}
      <section
        id="about"
        className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 border-b-4 border-black"
      >
        <div className="grid grid-cols-12 gap-4">
          {/* Section header row */}
          <div className="col-span-12 md:col-span-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
              03
            </span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <h2
              className="font-sans font-black uppercase tracking-[-0.03em] leading-none mb-10 md:mb-16"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              About
            </h2>

            {/* Wira name — big and bold */}
            <p
              className="font-sans font-black uppercase leading-[0.85] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              Wira
            </p>

            <p className="text-sm leading-relaxed text-black/60 max-w-md mb-8">
              From product management in fintech and SaaS to building indie
              software for comedians. RTVCL exists to make focused, well-crafted
              tools for underserved creative communities.
            </p>

            {/* Tags — brutalist style */}
            <div className="flex flex-wrap gap-2">
              {["Fintech", "SaaS", "E-Commerce", "Product", "Indie Dev"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] border-2 border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors duration-150"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Spec sheet — Swiss style */}
          <div className="col-span-12 md:col-span-6 mt-8 md:mt-0">
            <div className="border-2 border-black">
              <div className="bg-black text-white px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
                Specification
              </div>
              <div className="divide-y divide-black/15">
                {SPEC_ROWS.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-5 gap-0">
                    <div className="col-span-2 px-4 py-3 font-mono text-[10px] tracking-[0.15em] uppercase text-black/40 border-r border-black/15">
                      {label}
                    </div>
                    <div className="col-span-3 px-4 py-3 font-mono text-xs">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 04 — CTA ═══ */}
      <section
        id="contact"
        className="max-w-[1400px] mx-auto px-6 py-20 md:py-28"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 uppercase">
              04
            </span>
          </div>

          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/40 mb-6">
              Let&apos;s work together
            </p>
            <h2
              className="font-sans font-black uppercase leading-[0.85] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Got an idea
              <br />
              that needs
              <br />
              building
              <span className="inline-block w-3 h-3 rounded-full bg-[#FF0000] ml-1 relative -top-1" />
            </h2>
            <p className="text-sm text-black/50 leading-relaxed max-w-md mb-10">
              Whether it&apos;s a mobile app, a web product, or something weird
              and wonderful — I&apos;m interested. Especially if it involves
              comedy.
            </p>
            <a
              href="mailto:hello@rtvcl.com"
              className="inline-block font-sans font-black uppercase text-xl md:text-2xl tracking-[-0.02em] bg-black text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black transition-colors duration-150"
            >
              Get in Touch →
            </a>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
            <div className="border-t-2 border-black pt-4 space-y-3 font-mono text-[10px] tracking-[0.15em] uppercase text-black/40">
              <p>Open to collaboration</p>
              <p>Freelance inquiries</p>
              <p>Product partnerships</p>
              <p>Just saying hello</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t-4 border-black">
        <div className="max-w-[1400px] mx-auto px-6 py-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <span className="font-sans font-black text-lg uppercase tracking-[-0.02em]">
              RTVCL
            </span>
          </div>
          <div className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black/30">
            © {new Date().getFullYear()} — All Rights Reserved
          </div>
          <div className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black/30">
            Indie Dev Studio
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">
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
        <div className="w-full h-1 bg-black" />
      </footer>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
