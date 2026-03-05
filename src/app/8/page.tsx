"use client";

import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    num: "01",
    name: "LaughTrack",
    status: "In Development",
    summary:
      "A material manager for standup comedians. Organize premises, bits, and setlists. Track what works, refine what doesn't.",
    stack: ["Expo", "React Native", "WatermelonDB"],
    details: [
      "Material Organization",
      "Set List Builder",
      "Performance Tracking",
      "Local-First Architecture",
    ],
  },
  {
    num: "02",
    name: "Roastbox",
    status: "Idea Stage",
    summary:
      "Rate, review, and discover standup shows. A Letterboxd-inspired platform for the live comedy scene.",
    stack: [],
    details: [
      "Show Reviews & Ratings",
      "Comedian Profiles",
      "Venue Discovery",
      "Social Comedy Graph",
    ],
  },
];

const ABOUT_DATA = [
  { label: "Name", value: "Wira" },
  { label: "Role", value: "Solo Developer & Founder" },
  { label: "Studio", value: "RTVCL" },
  { label: "Prior", value: "4 yrs Product Management" },
  { label: "Domains", value: "Fintech · SaaS · E-Commerce" },
  { label: "Now", value: "Comedy × Technology" },
];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const { ref, vis } = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `all 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

export default function EditorialSwissBrutalist() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-[#f5f3f0] text-black font-sans selection:bg-black selection:text-white">
      <div className="grain" />

      {/* ═══ VERTICAL SIDEBAR BRAND (desktop only) ═══ */}
      <div
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-14 border-r border-black/10 items-center justify-center z-40 bg-[#f5f3f0]"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}
      >
        <span
          className="font-sans font-black text-[10px] tracking-[0.5em] uppercase text-black/20"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
        >
          RTVCL — Indie Dev Studio — 2024
        </span>
      </div>

      <div className="lg:ml-14">
        {/* ═══ NAV ═══ */}
        <nav
          className="px-6 md:px-12 py-5 flex items-center justify-between border-b border-black/10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          <span className="font-sans font-black text-lg tracking-[-0.03em] uppercase">
            RTVCL
          </span>
          <div className="flex gap-6 md:gap-10 font-mono text-[10px] tracking-[0.2em] uppercase text-black/35">
            <a href="#products" className="hover:text-black transition-colors">
              Products
            </a>
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* ═══ 01 — HERO ═══ */}
        <section className="px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            {/* Oversized number */}
            <div
              className="col-span-12 md:col-span-2 flex items-start"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.3s",
              }}
            >
              <span className="font-sans font-black text-[8rem] md:text-[12rem] leading-none text-black/[0.04] select-none">
                01
              </span>
            </div>

            {/* Title block */}
            <div className="col-span-12 md:col-span-10 flex flex-col justify-end -mt-16 md:mt-0">
              <h1
                className="font-sans font-black uppercase leading-[0.78] tracking-[-0.06em]"
                style={{
                  fontSize: "clamp(4.5rem, 14vw, 16rem)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(50px)",
                  transition: "all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                RTVCL
              </h1>

              <div
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-black pt-8"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                <p className="text-lg md:text-xl font-light leading-snug tracking-[-0.01em] max-w-md">
                  Building products at the intersection of comedy &amp;
                  technology.
                </p>
                <div className="flex flex-col md:items-end justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">
                      Solo Indie Studio — Active
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/20">
                    Scroll to explore ↓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FULL-BLEED INVERTED STRIP ═══ */}
        <div className="bg-black text-white overflow-hidden">
          <div
            className="flex whitespace-nowrap py-3"
            style={{ animation: "ticker 28s linear infinite" }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase tracking-[0.6em] px-6 text-white/30"
              >
                Design — Develop — Ship — Repeat —
              </span>
            ))}
          </div>
        </div>

        {/* ═══ 02 — PRODUCTS ═══ */}
        <section id="products" className="px-6 md:px-12 py-20 md:py-32">
          <Reveal className="flex items-baseline justify-between mb-14 md:mb-20">
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-black/20 uppercase">
                02
              </span>
              <h2
                className="font-sans font-black uppercase tracking-[-0.04em] leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
              >
                Products
              </h2>
            </div>
            <span className="hidden md:block font-mono text-[10px] tracking-[0.15em] text-black/25 uppercase">
              {PRODUCTS.length} Projects
            </span>
          </Reveal>

          {/* Editorial product spreads */}
          <div className="space-y-0">
            {PRODUCTS.map((product, idx) => (
              <Reveal key={product.num} delay={idx * 0.1}>
                <div
                  className={`grid grid-cols-12 gap-4 md:gap-8 border-t-2 border-black py-10 md:py-14 ${
                    idx === PRODUCTS.length - 1 ? "border-b-2" : ""
                  }`}
                >
                  {/* Left column: number + name */}
                  <div className="col-span-12 md:col-span-5 lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-black/15 uppercase pt-3">
                        {product.num}
                      </span>
                      <div>
                        <h3
                          className="font-sans font-black uppercase tracking-[-0.03em] leading-none mb-3"
                          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                        >
                          {product.name}
                        </h3>
                        <span className="inline-block font-mono text-[9px] uppercase tracking-[0.25em] border-2 border-black px-3 py-1">
                          {product.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: description + stack */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-between">
                    <p className="text-sm leading-[1.8] text-black/55 mb-5">
                      {product.summary}
                    </p>
                    {product.stack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {product.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] uppercase tracking-[0.15em] bg-black text-white px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: feature list */}
                  <div className="col-span-12 md:col-span-3 lg:col-span-4">
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-black/25 mb-3">
                      Scope
                    </p>
                    <div className="space-y-0">
                      {product.details.map((d, i) => (
                        <div
                          key={d}
                          className="flex items-center gap-3 py-2 border-b border-black/8"
                        >
                          <span className="font-mono text-[9px] text-black/15 w-4 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-mono text-[10px] tracking-[0.1em] text-black/40 uppercase">
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══ FULL-BLEED INVERTED ABOUT ═══ */}
        <section id="about" className="bg-black text-white">
          <div className="grain grain-heavy" />
          <div className="px-6 md:px-12 py-20 md:py-32">
            <Reveal className="flex items-baseline gap-4 md:gap-6 mb-14 md:mb-20">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
                03
              </span>
              <h2
                className="font-sans font-black uppercase tracking-[-0.04em] leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
              >
                About
              </h2>
            </Reveal>

            <div className="grid grid-cols-12 gap-8">
              {/* Left: name + bio */}
              <div className="col-span-12 md:col-span-6 lg:col-span-5">
                <Reveal>
                  <p
                    className="font-sans font-black uppercase leading-[0.82] tracking-[-0.05em] mb-2"
                    style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                  >
                    Wira
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/25 mb-8">
                    Developer · Product Person · Builder
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-sm leading-[1.9] text-white/45 max-w-md mb-10">
                    Four years shipping products as a PM across fintech, SaaS,
                    and e-commerce. Decided to stop writing specs and start
                    writing code. Now building focused tools for the comedy
                    world — because standups deserve better software than a
                    notes app.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Fintech", "SaaS", "E-Commerce", "Product", "Indie Dev"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-white/35 hover:bg-white hover:text-black transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Right: spec sheet */}
              <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                <Reveal delay={0.15}>
                  <div className="border border-white/10">
                    <div className="bg-white text-black px-5 py-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">
                        Profile
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-black/30">
                        Rev 1.0
                      </span>
                    </div>
                    {ABOUT_DATA.map(({ label, value }, idx) => (
                      <div
                        key={label}
                        className={`grid grid-cols-5 ${
                          idx < ABOUT_DATA.length - 1
                            ? "border-b border-white/5"
                            : ""
                        }`}
                      >
                        <div className="col-span-2 px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase text-white/20 border-r border-white/5">
                          {label}
                        </div>
                        <div className="col-span-3 px-5 py-3.5 font-mono text-xs text-white/55">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 04 — CTA ═══ */}
        <section
          id="contact"
          className="px-6 md:px-12 py-24 md:py-36 bg-[#f5f3f0]"
        >
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-1">
              <Reveal>
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/20 uppercase">
                  04
                </span>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-6">
              <Reveal>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/30 mb-8">
                  Collaboration
                </p>
                <h2
                  className="font-sans font-black uppercase leading-[0.82] tracking-[-0.05em] mb-4"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
                >
                  Let&apos;s build
                </h2>
                <p
                  className="font-light leading-snug tracking-[-0.01em] text-black/60 mb-10"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  Got an idea that needs building? Mobile app, web product, or
                  something at the edge — especially if it involves comedy.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href="mailto:hello@rtvcl.com"
                  className="group inline-flex items-center gap-5 bg-black text-white px-8 py-5 font-sans font-black uppercase text-base md:text-lg tracking-[-0.02em] border-2 border-black hover:bg-[#f5f3f0] hover:text-black transition-all duration-200"
                >
                  Get in Touch
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-end mt-8 md:mt-0">
              <Reveal delay={0.2}>
                <div className="space-y-0">
                  {[
                    "Collaboration",
                    "Freelance",
                    "Partnerships",
                    "Say Hello",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 py-3 border-b border-black/8"
                    >
                      <span className="font-mono text-[9px] text-black/15 w-4 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-black/30">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="border-t-2 border-black bg-[#f5f3f0]">
          <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="font-sans font-black text-base uppercase tracking-[-0.02em]">
              RTVCL
            </span>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 font-mono text-[10px] tracking-[0.2em] uppercase text-black/25">
              <span>© {new Date().getFullYear()}</span>
              <span className="hidden md:inline text-black/10">·</span>
              <span>Indie Dev Studio</span>
              <span className="hidden md:inline text-black/10">·</span>
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
                X
              </a>
            </div>
          </div>
          <div className="w-full h-1 bg-black" />
        </footer>
      </div>

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
