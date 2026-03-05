"use client";

import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Typing hook
// ---------------------------------------------------------------------------
function useTyping(text: string, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const start = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, delay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayed, done };
}

// ---------------------------------------------------------------------------
// Scroll‑reveal wrapper
// ---------------------------------------------------------------------------
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Typing line component (scroll‑triggered)
// ---------------------------------------------------------------------------
function TypingLine({
  text,
  speed = 30,
  delay = 0,
  prefix = "",
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const { displayed, done } = useTyping(started ? text : "", speed, delay);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {prefix && <span className="text-white/30">{prefix} </span>}
      <span>{displayed}</span>
      {!done && <span className="cursor">▌</span>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ASCII logo
// ---------------------------------------------------------------------------
const ASCII_LOGO = `
██████╗ ████████╗██╗   ██╗ ██████╗██╗     
██╔══██╗╚══██╔══╝██║   ██║██╔════╝██║     
██████╔╝   ██║   ██║   ██║██║     ██║     
██╔══██╗   ██║   ╚██╗ ██╔╝██║     ██║     
██║  ██║   ██║    ╚████╔╝ ╚██████╗███████╗
╚═╝  ╚═╝   ╚═╝     ╚═══╝   ╚═════╝╚══════╝`.trim();

// ---------------------------------------------------------------------------
// Products data
// ---------------------------------------------------------------------------
const products = [
  {
    name: "laughtrack",
    permissions: "drwxr-xr-x",
    status: "in-dev",
    size: "expo+rn+watermelondb",
    desc: "Standup comedy material manager. Write, tag, and track your bits.",
  },
  {
    name: "roastbox",
    permissions: "drwx------",
    status: "idea",
    size: "tbd",
    desc: "Standup show review app. Letterboxd, but for live comedy.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function TerminalPage() {
  const heroTyping = useTyping("Solo indie dev studio. Building at the intersection of comedy × code.", 35, 1200);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .cursor {
          animation: blink 1s step-end infinite;
          color: #ededed;
        }
        .scanline {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255,255,255,0.03);
          z-index: 9998;
          animation: scanline 8s linear infinite;
          pointer-events: none;
        }
        .terminal-border {
          border: 1px solid rgba(255,255,255,0.12);
        }
        .terminal-border-dashed {
          border: 1px dashed rgba(255,255,255,0.1);
        }
        .prompt { color: rgba(255,255,255,0.35); }
        .comment { color: rgba(255,255,255,0.25); }
        .accent { color: #b0b0b0; }
        .accent-green { color: rgba(100,200,130,0.7); }
        .accent-amber { color: rgba(220,180,80,0.6); }
        .link-hover:hover { 
          background: rgba(255,255,255,0.04);
        }
      `}</style>

      <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-mono selection:bg-white/10">
        <div className="grain" />
        <div className="scanline" />

        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

          {/* ============================================================= */}
          {/* HERO — Boot sequence                                          */}
          {/* ============================================================= */}
          <section className="space-y-8">
            {/* Terminal window chrome */}
            <div className="terminal-border rounded-sm overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-3 text-[10px] text-white/20 tracking-wider uppercase">
                  rtvcl — bash — 80×24
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 sm:p-8 space-y-4 text-sm leading-relaxed">
                {/* Boot lines */}
                <div
                  className="space-y-1 text-white/25 text-xs"
                  style={{
                    opacity: bootDone ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <p>[boot] loading rtvcl kernel v2.0.26 ...</p>
                  <p>[boot] mounting creative modules ...</p>
                  <p>[boot] initializing design subsystem ... <span className="accent-green">ok</span></p>
                  <p>[boot] ready.</p>
                </div>

                {/* ASCII Logo */}
                <pre
                  className="text-[9px] sm:text-xs leading-[1.15] text-white/70 mt-6"
                  style={{
                    opacity: bootDone ? 1 : 0,
                    transition: "opacity 0.8s ease 0.3s",
                  }}
                >
                  {ASCII_LOGO}
                </pre>

                {/* Tagline typing */}
                <div className="mt-4 text-sm sm:text-base text-white/80">
                  <span className="prompt">$ </span>
                  <span>{heroTyping.displayed}</span>
                  {!heroTyping.done && <span className="cursor">▌</span>}
                </div>

                <p
                  className="text-xs text-white/20 mt-2"
                  style={{
                    opacity: heroTyping.done ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  // by Wira — PM turned builder — fintech · saas · e-commerce
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* PRODUCTS — ls -la products/                                    */}
          {/* ============================================================= */}
          <Reveal>
            <section className="space-y-6">
              <TypingLine
                text="ls -la products/"
                prefix="$"
                speed={50}
                className="text-sm text-white/60"
              />

              <div className="terminal-border rounded-sm p-5 sm:p-8 space-y-5 text-sm">
                {/* Header row */}
                <div className="text-[11px] text-white/20 tracking-wider hidden sm:grid grid-cols-[140px_70px_1fr] gap-2">
                  <span>PERMISSIONS</span>
                  <span>STATUS</span>
                  <span>NAME</span>
                </div>
                <div className="hidden sm:block border-t border-dashed border-white/8" />

                {products.map((p, i) => (
                  <Reveal key={p.name} delay={i * 150}>
                    <div className="group space-y-2 link-hover rounded-sm p-3 -mx-3 transition-colors">
                      <div className="sm:grid grid-cols-[140px_70px_1fr] gap-2 items-baseline">
                        <span className="text-white/20 text-xs hidden sm:inline">{p.permissions}</span>
                        <span
                          className={`text-xs ${
                            p.status === "in-dev" ? "accent-green" : "accent-amber"
                          }`}
                        >
                          [{p.status}]
                        </span>
                        <span className="text-white/80 font-medium">
                          {p.name}/
                        </span>
                      </div>
                      <div className="sm:ml-[210px] text-xs text-white/35 leading-relaxed">
                        <span className="comment">// </span>{p.desc}
                      </div>
                      <div className="sm:ml-[210px] text-[11px] text-white/15">
                        stack: {p.size}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ============================================================= */}
          {/* ABOUT — cat README.md                                         */}
          {/* ============================================================= */}
          <Reveal delay={100}>
            <section className="space-y-6">
              <TypingLine
                text="cat README.md"
                prefix="$"
                speed={50}
                className="text-sm text-white/60"
              />

              <div className="terminal-border-dashed rounded-sm p-5 sm:p-8 space-y-6 text-sm leading-relaxed">
                <div className="space-y-1">
                  <p className="text-white/50 text-xs">{"# about"}</p>
                  <p className="text-white/70">
                    Wira builds things that sit at the weird, fun overlap of
                    comedy and technology. After 4 years managing products across
                    fintech, SaaS, and e-commerce — he decided to stop writing
                    specs and start writing code.
                  </p>
                </div>

                <div className="border-t border-dashed border-white/8" />

                <div className="space-y-3 text-xs">
                  <p className="text-white/50">{"# config"}</p>
                  <div className="space-y-1.5 text-white/40">
                    <p>
                      <span className="text-white/20">role:</span>{" "}
                      <span className="text-white/60">solo indie developer</span>
                    </p>
                    <p>
                      <span className="text-white/20">prev:</span>{" "}
                      <span className="text-white/60">product manager × 4 years</span>
                    </p>
                    <p>
                      <span className="text-white/20">domains:</span>{" "}
                      <span className="text-white/60">fintech, saas, e-commerce</span>
                    </p>
                    <p>
                      <span className="text-white/20">stack:</span>{" "}
                      <span className="text-white/60">react native, expo, next.js, typescript</span>
                    </p>
                    <p>
                      <span className="text-white/20">focus:</span>{" "}
                      <span className="text-white/60">comedy × technology</span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-dashed border-white/8" />

                <div className="space-y-2 text-xs">
                  <p className="text-white/50">{"# philosophy"}</p>
                  <p className="text-white/45 italic">
                    &quot;Ship small. Ship often. Make people laugh along the way.&quot;
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ============================================================= */}
          {/* CTA — collaborate command                                     */}
          {/* ============================================================= */}
          <Reveal delay={100}>
            <section className="space-y-6">
              <div className="terminal-border rounded-sm p-5 sm:p-8 space-y-6">
                <TypingLine
                  text="collaborate --with wira"
                  prefix="$"
                  speed={45}
                  className="text-base sm:text-lg text-white/70"
                />

                <div className="space-y-3 text-sm text-white/40">
                  <p>
                    <span className="comment">// </span>
                    Got an idea? Want to build something together?
                  </p>
                  <p>
                    <span className="comment">// </span>
                    Reach out — let&apos;s make something great.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="mailto:wira@rtvcl.com"
                    className="terminal-border rounded-sm px-5 py-3 text-sm text-white/60 hover:text-white/90 hover:border-white/30 transition-all text-center"
                  >
                    <span className="prompt">&gt; </span>mail wira@rtvcl.com
                  </a>
                  <a
                    href="https://x.com/rtvcl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-border rounded-sm px-5 py-3 text-sm text-white/60 hover:text-white/90 hover:border-white/30 transition-all text-center"
                  >
                    <span className="prompt">&gt; </span>open x.com/rtvcl
                  </a>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ============================================================= */}
          {/* FOOTER                                                        */}
          {/* ============================================================= */}
          <Reveal delay={50}>
            <footer className="space-y-4 pt-8 border-t border-dashed border-white/6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/20">
                <div className="space-y-1">
                  <p>
                    <span className="prompt">$ </span>echo &quot;© $(date +%Y) RTVCL&quot;
                  </p>
                  <p className="text-white/30 pl-4">© 2026 RTVCL</p>
                </div>
                <div className="space-y-1 sm:text-right">
                  <p className="accent-green">Process exited with code 0</p>
                  <p>
                    <span className="prompt">$ </span>
                    <span className="cursor">▌</span>
                  </p>
                </div>
              </div>
            </footer>
          </Reveal>
        </div>
      </main>
    </>
  );
}
