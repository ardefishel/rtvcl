"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "LAUGHTRACK",
    status: "IN DEVELOPMENT",
    description:
      "A STANDUP COMEDY MATERIAL MANAGER. WRITE, TAG, RATE, AND TRACK YOUR BITS. BUILT WITH EXPO + REACT NATIVE + WATERMELONDB.",
    number: "001",
  },
  {
    name: "ROASTBOX",
    status: "IDEA STAGE",
    description:
      "STANDUP SHOW REVIEWS — LETTERBOXD FOR LIVE COMEDY. RATE SHOWS, FOLLOW COMICS, BUILD YOUR COMEDY TASTE PROFILE.",
    number: "002",
  },
];

export default function BrutalistPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white text-black selection:bg-black selection:text-white">
      <div className="grain" />

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex flex-col justify-between border-b-4 border-black overflow-hidden">
        {/* Top bar */}
        <div
          className="flex justify-between items-center border-b-2 border-black px-4 py-2 font-mono text-xs uppercase tracking-[0.3em]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <span>SOLO INDIE DEV STUDIO</span>
          <span>EST. 2024</span>
        </div>

        {/* Main title */}
        <div className="flex-1 flex flex-col justify-center px-4">
          <h1
            className="font-sans font-black uppercase leading-[0.85] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(5rem, 22vw, 28rem)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(60px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            RTVCL
          </h1>
          <div
            className="border-t-2 border-black mt-2 pt-4 flex flex-col md:flex-row md:justify-between md:items-end gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.2em] max-w-xl leading-tight">
              BUILDING PRODUCTS AT THE
              <br />
              INTERSECTION OF COMEDY
              <br />
              &amp; TECHNOLOGY
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.3em]">
              SCROLL ↓
            </p>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="border-t-2 border-black overflow-hidden">
          <div
            className="flex whitespace-nowrap py-3"
            style={{
              animation: "ticker 20s linear infinite",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.5em] px-8"
              >
                DESIGN — DEVELOP — SHIP — REPEAT —
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PRODUCTS ━━━ */}
      <section className="border-b-4 border-black">
        <div className="border-b-2 border-black px-4 py-3">
          <h2
            className="font-sans font-black uppercase tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
          >
            PRODUCTS
          </h2>
        </div>

        {PRODUCTS.map((product, index) => (
          <div
            key={product.number}
            className={`grid grid-cols-1 md:grid-cols-[120px_1fr] ${
              index < PRODUCTS.length - 1 ? "border-b-2 border-black" : ""
            }`}
          >
            {/* Number column */}
            <div className="border-b-2 md:border-b-0 md:border-r-2 border-black px-4 py-4 flex items-start">
              <span className="font-mono text-6xl md:text-8xl font-black leading-none">
                {product.number}
              </span>
            </div>

            {/* Content */}
            <div className="px-4 py-6 md:py-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 mb-4">
                <h3
                  className="font-sans font-black uppercase tracking-[-0.02em] leading-none"
                  style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
                >
                  {product.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.3em] border-2 border-black px-3 py-1 inline-block self-start whitespace-nowrap">
                  {product.status}
                </span>
              </div>
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ━━━ ABOUT ━━━ */}
      <section className="border-b-4 border-black">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
          {/* Left: Label */}
          <div className="border-b-2 md:border-b-0 md:border-r-2 border-black px-4 py-6 md:py-12 flex items-start">
            <h2
              className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.85]"
              style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
            >
              ABOUT
            </h2>
          </div>

          {/* Right: Content */}
          <div className="px-4 py-6 md:py-12 flex flex-col justify-center gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3">
                THE PERSON BEHIND RTVCL
              </p>
              <p
                className="font-sans font-black uppercase leading-[0.9] tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                WIRA
              </p>
              <div className="space-y-4 font-mono text-xs md:text-sm uppercase tracking-[0.1em] leading-relaxed max-w-lg">
                <p>
                  4 YEARS AS A PRODUCT MANAGER ACROSS FINTECH, SAAS, AND
                  E-COMMERCE. DECIDED TO STOP WRITING SPECS AND START SHIPPING
                  CODE.
                </p>
                <p>
                  NOW BUILDING TOOLS FOR THE COMEDY WORLD — BECAUSE STANDUPS
                  DESERVE BETTER SOFTWARE THAN A NOTES APP.
                </p>
              </div>
            </div>

            {/* Experience tags */}
            <div className="flex flex-wrap gap-2">
              {["FINTECH", "SAAS", "E-COMMERCE", "PRODUCT", "INDIE DEV"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-[0.2em] border-2 border-black px-3 py-1"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="border-b-4 border-black px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6">
            LET&apos;S WORK TOGETHER
          </p>
          <h2
            className="font-sans font-black uppercase leading-[0.85] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            GOT AN IDEA
            <br />
            THAT NEEDS
            <br />
            BUILDING?
          </h2>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.1em] leading-relaxed max-w-xl mb-10">
            WHETHER IT&apos;S A MOBILE APP, A WEB PRODUCT, OR SOMETHING WEIRD
            AND WONDERFUL — I&apos;M INTERESTED. ESPECIALLY IF IT INVOLVES
            COMEDY.
          </p>
          <Link
            href="mailto:hello@rtvcl.com"
            className="inline-block font-sans font-black uppercase text-2xl md:text-4xl tracking-[-0.02em] bg-black text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black transition-colors duration-150"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-sans font-black text-2xl uppercase tracking-[-0.02em]">
            RTVCL
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </div>
        </div>
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
