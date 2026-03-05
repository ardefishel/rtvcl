"use client";

import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    id: "01",
    name: "LaughTrack",
    status: "In Development",
    summary:
      "A material manager for standup comedians. Organize premises, bits, and setlists. Track what works, refine what doesn't.",
    stack: ["Expo", "React Native", "WatermelonDB"],
    features: ["Material Organization", "Set List Builder", "Performance Tracking"],
  },
  {
    id: "02",
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
  ["Studio", "RTVCL"],
  ["Experience", "6 Years — Product Management"],
  ["Domains", "Fintech · SaaS · E-Commerce"],
  ["Focus", "Comedy × Technology"],
  ["Approach", "Ship small. Iterate fast. Stay independent."],
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function InvertedSwissBrutalist() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = dark
    ? {
        bg: "bg-[#0a0a0a]",
        text: "text-white",
        selection: "selection:bg-white selection:text-black",
        muted: "text-white/40",
        faint: "text-white/20",
        ghost: "text-white/15",
        subtle: "text-white/25",
        body: "text-white/45",
        mid: "text-white/50",
        bright: "text-white/60",
        strong: "text-white/70",
        border: "border-white/10",
        borderMid: "border-white/15",
        borderFaint: "border-white/5",
        rule: "bg-white/20",
        ruleThin: "bg-white/10",
        dot: "bg-white",
        tagBorder: "border-white/15",
        tagText: "text-white/40",
        tagHoverBg: "hover:bg-white",
        tagHoverText: "hover:text-black",
        stackBg: "bg-white",
        stackText: "text-black",
        specHeaderBg: "bg-white",
        specHeaderText: "text-black",
        specHeaderMuted: "text-black/30",
        ctaBg: "bg-white",
        ctaText: "text-black",
        ctaHoverBg: "hover:bg-transparent",
        ctaHoverText: "hover:text-white",
        ctaBorder: "border-white",
        linkHover: "hover:text-white",
        grain: "grain grain-heavy",
      }
    : {
        bg: "bg-white",
        text: "text-black",
        selection: "selection:bg-black selection:text-white",
        muted: "text-black/40",
        faint: "text-black/20",
        ghost: "text-black/15",
        subtle: "text-black/25",
        body: "text-black/50",
        mid: "text-black/50",
        bright: "text-black/60",
        strong: "text-black/70",
        border: "border-black/10",
        borderMid: "border-black/15",
        borderFaint: "border-black/5",
        rule: "bg-black/20",
        ruleThin: "bg-black/10",
        dot: "bg-black",
        tagBorder: "border-black/15",
        tagText: "text-black/40",
        tagHoverBg: "hover:bg-black",
        tagHoverText: "hover:text-white",
        stackBg: "bg-black",
        stackText: "text-white",
        specHeaderBg: "bg-black",
        specHeaderText: "text-white",
        specHeaderMuted: "text-white/30",
        ctaBg: "bg-black",
        ctaText: "text-white",
        ctaHoverBg: "hover:bg-transparent",
        ctaHoverText: "hover:text-black",
        ctaBorder: "border-black",
        linkHover: "hover:text-black",
        grain: "grain",
      };

  return (
    <main
      className={`min-h-screen ${t.bg} ${t.text} font-sans ${t.selection} transition-colors duration-500`}
    >
      <div className={t.grain} />

      {/* ═══ TOP RULE ═══ */}
      <div className={`w-full h-[3px] ${t.rule}`} />

      {/* ═══ NAV ═══ */}
      <nav
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-5 grid grid-cols-12 gap-4 items-center border-b ${t.border}`}
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}
      >
        <div className="col-span-3 md:col-span-2">
          <span className="font-sans font-black text-base tracking-[-0.02em] uppercase">
            RTVCL
          </span>
        </div>
        <div
          className={`col-span-9 md:col-span-10 flex justify-end items-center gap-5 md:gap-10 font-mono text-[10px] tracking-[0.25em] uppercase ${t.muted}`}
        >
          <a href="#products" className={`${t.linkHover} transition-colors duration-200`}>
            Products
          </a>
          <a href="#about" className={`${t.linkHover} transition-colors duration-200`}>
            About
          </a>
          <a href="#contact" className={`${t.linkHover} transition-colors duration-200`}>
            Contact
          </a>

          {/* Toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className={`ml-2 w-9 h-9 flex items-center justify-center border ${t.border} ${t.linkHover} transition-all duration-300`}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="text-sm leading-none">
              {dark ? "☀" : "☾"}
            </span>
          </button>
        </div>
      </nav>

      {/* ═══ 01 — HERO ═══ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1 flex items-start pt-2">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] ${t.faint} uppercase`}
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 0.3s",
              }}
            >
              01
            </span>
          </div>

          <div className="col-span-12 md:col-span-11">
            <h1
              className="font-sans font-black uppercase leading-[0.80] tracking-[-0.06em]"
              style={{
                fontSize: "clamp(5rem, 18vw, 20rem)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(60px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              RTVCL
            </h1>

            <div
              className={`border-t ${t.borderMid} mt-6 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
              }}
            >
              <div>
                <p
                  className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.subtle} mb-3`}
                >
                  Tagline
                </p>
                <p className="text-lg md:text-xl font-light leading-snug tracking-[-0.01em]">
                  Building products at the intersection of comedy &amp;
                  technology.
                </p>
              </div>
              <div>
                <p
                  className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.subtle} mb-3`}
                >
                  Type
                </p>
                <p className={`text-sm ${t.mid} leading-relaxed`}>
                  Solo indie development studio. Focused, well-crafted tools for
                  underserved creative communities.
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p
                    className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.subtle} mb-3`}
                  >
                    Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full ${t.dot} animate-pulse`}
                    />
                    <span
                      className={`font-mono text-[10px] tracking-[0.15em] uppercase ${t.mid}`}
                    >
                      Active — Building
                    </span>
                  </div>
                </div>
                <span
                  className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.ghost} mt-4`}
                >
                  Est. 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal rule */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`w-full h-px ${t.ruleThin}`} />
      </div>

      {/* ═══ 02 — PRODUCTS ═══ */}
      <section
        id="products"
        className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32"
      >
        <RevealSection className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-1">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] ${t.faint} uppercase`}
            >
              02
            </span>
          </div>
          <div className="col-span-12 md:col-span-11 flex items-baseline justify-between">
            <h2
              className="font-sans font-black uppercase tracking-[-0.04em] leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Products
            </h2>
            <span
              className={`hidden md:block font-mono text-[10px] tracking-[0.2em] ${t.faint} uppercase`}
            >
              What we&apos;re building
            </span>
          </div>
        </RevealSection>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1" />
          <div className="col-span-12 md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PRODUCTS.map((product, idx) => (
              <RevealSection key={product.id} delay={idx * 0.15}>
                <div
                  className={`border ${t.border} h-full flex flex-col transition-colors duration-500`}
                >
                  <div
                    className={`flex items-center justify-between px-5 py-3 border-b ${t.border}`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.3em] ${t.subtle} uppercase`}
                    >
                      {product.id}
                    </span>
                    <span
                      className={`font-mono text-[9px] tracking-[0.2em] uppercase border ${t.border} px-2.5 py-1 ${t.muted}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="px-5 py-6 flex-1 flex flex-col">
                    <h3
                      className="font-sans font-black uppercase tracking-[-0.03em] leading-none mb-5"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                    >
                      {product.name}
                    </h3>
                    <p className={`text-sm leading-relaxed ${t.body} mb-6 flex-1`}>
                      {product.summary}
                    </p>

                    <div
                      className={`space-y-0 border-t ${t.border} pt-4`}
                    >
                      {product.features.map((f) => (
                        <p
                          key={f}
                          className={`font-mono text-[10px] tracking-[0.15em] ${t.subtle} uppercase py-2 border-b ${t.borderFaint}`}
                        >
                          {f}
                        </p>
                      ))}
                    </div>

                    {product.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {product.stack.map((s) => (
                          <span
                            key={s}
                            className={`font-mono text-[9px] uppercase tracking-[0.15em] ${t.stackBg} ${t.stackText} px-2 py-0.5 transition-colors duration-500`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal rule */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`w-full h-px ${t.ruleThin}`} />
      </div>

      {/* ═══ 03 — ABOUT ═══ */}
      <section
        id="about"
        className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1">
            <RevealSection>
              <span
                className={`font-mono text-[10px] tracking-[0.2em] ${t.faint} uppercase`}
              >
                03
              </span>
            </RevealSection>
          </div>

          <div className="col-span-12 md:col-span-5">
            <RevealSection>
              <h2
                className="font-sans font-black uppercase tracking-[-0.04em] leading-none mb-12 md:mb-20"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                About
              </h2>
            </RevealSection>

            <RevealSection delay={0.1}>
              <p
                className="font-sans font-black uppercase leading-[0.85] tracking-[-0.05em] mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Wira
              </p>
              <p
                className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.subtle} mb-6`}
              >
                Developer · Product Person · Maker
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <p className={`text-sm leading-[1.8] ${t.body} max-w-md mb-10`}>
                From product management in fintech and SaaS to building indie
                software for comedians. RTVCL exists to make focused,
                well-crafted tools for underserved creative communities.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Fintech", "SaaS", "E-Commerce", "Product", "Indie Dev"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] border ${t.tagBorder} px-3 py-1.5 ${t.tagText} ${t.tagHoverBg} ${t.tagHoverText} transition-colors duration-200`}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </RevealSection>
          </div>

          {/* Spec table */}
          <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
            <RevealSection delay={0.15}>
              <div className={`border ${t.border} transition-colors duration-500`}>
                <div
                  className={`${t.specHeaderBg} ${t.specHeaderText} px-5 py-2.5 font-mono text-[10px] tracking-[0.3em] uppercase flex justify-between items-center transition-colors duration-500`}
                >
                  <span>Specification</span>
                  <span className={t.specHeaderMuted}>v1.0</span>
                </div>
                <div>
                  {SPEC_ROWS.map(([label, value], idx) => (
                    <div
                      key={label}
                      className={`grid grid-cols-5 gap-0 ${
                        idx < SPEC_ROWS.length - 1
                          ? `border-b ${t.borderFaint}`
                          : ""
                      }`}
                    >
                      <div
                        className={`col-span-2 px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase ${t.subtle} border-r ${t.borderFaint}`}
                      >
                        {label}
                      </div>
                      <div
                        className={`col-span-3 px-5 py-3.5 font-mono text-xs ${t.bright}`}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Horizontal rule */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`w-full h-px ${t.ruleThin}`} />
      </div>

      {/* ═══ 04 — CTA ═══ */}
      <section
        id="contact"
        className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-1">
            <RevealSection>
              <span
                className={`font-mono text-[10px] tracking-[0.2em] ${t.faint} uppercase`}
              >
                04
              </span>
            </RevealSection>
          </div>

          <div className="col-span-12 md:col-span-7">
            <RevealSection>
              <p
                className={`font-mono text-[10px] tracking-[0.3em] uppercase ${t.subtle} mb-8`}
              >
                Let&apos;s work together
              </p>
              <h2
                className="font-sans font-black uppercase leading-[0.85] tracking-[-0.05em] mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Got an idea?
              </h2>
              <p
                className={`font-light leading-snug tracking-[-0.01em] ${t.strong} mb-10`}
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
              >
                Whether it&apos;s a mobile app, a web product, or something
                weird and wonderful — I&apos;m interested.
              </p>
            </RevealSection>

            <RevealSection delay={0.1}>
              <a
                href="mailto:hello@rtvcl.com"
                className={`group inline-flex items-center gap-4 ${t.ctaBg} ${t.ctaText} px-8 py-4 font-sans font-black uppercase text-lg md:text-xl tracking-[-0.02em] ${t.ctaHoverBg} ${t.ctaHoverText} border-2 ${t.ctaBorder} transition-all duration-200`}
              >
                Get in Touch
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </RevealSection>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col justify-end mt-8 md:mt-0">
            <RevealSection delay={0.2}>
              <div className={`border-t ${t.border} pt-5 space-y-3`}>
                {[
                  "Open to collaboration",
                  "Freelance inquiries",
                  "Product partnerships",
                  "Just saying hello",
                ].map((item) => (
                  <p
                    key={item}
                    className={`font-mono text-[10px] tracking-[0.15em] uppercase ${t.subtle}`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className={`border-t ${t.border}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-3">
            <span className="font-sans font-black text-base uppercase tracking-[-0.02em]">
              RTVCL
            </span>
          </div>
          <div
            className={`col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.2em] uppercase ${t.ghost}`}
          >
            © {new Date().getFullYear()}
          </div>
          <div
            className={`col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.2em] uppercase ${t.ghost}`}
          >
            Indie Dev Studio
          </div>
          <div
            className={`col-span-12 md:col-span-3 flex md:justify-end gap-6 font-mono text-[10px] tracking-[0.2em] uppercase ${t.subtle}`}
          >
            <a
              href="https://github.com/rtvcl"
              target="_blank"
              rel="noopener noreferrer"
              className={`${t.linkHover} transition-colors`}
            >
              GitHub
            </a>
            <a
              href="https://x.com/rtvcl"
              target="_blank"
              rel="noopener noreferrer"
              className={`${t.linkHover} transition-colors`}
            >
              X
            </a>
          </div>
        </div>
        <div className={`w-full h-px ${t.ruleThin}`} />
      </footer>
    </main>
  );
}
