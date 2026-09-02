import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

function IconInterface() {
  // Browser window with address bar and content blocks
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" />
      <line x1="1.5" y1="5.5" x2="14.5" y2="5.5" />
      <circle cx="3.4" cy="4" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="5.2" cy="4" r="0.6" fill="currentColor" stroke="none" />
      <line x1="3.5" y1="8" x2="8.5" y2="8" />
      <line x1="3.5" y1="10.5" x2="11" y2="10.5" />
    </svg>
  );
}
function IconLogic() {
  // Flowchart: node branching into a decision diamond
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6" width="4" height="4" rx="1" />
      <path d="M9.5 4.5 L12.5 8 L9.5 11.5 L6.5 8 Z" />
      <line x1="5.5" y1="8" x2="6.5" y2="8" />
      <circle cx="14" cy="8" r="1.4" />
      <line x1="12.5" y1="8" x2="12.6" y2="8" />
    </svg>
  );
}
function IconData() {
  // Stacked database cylinder
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
      <ellipse cx="8" cy="3.5" rx="5.5" ry="2" />
      <path d="M2.5 3.5 V12.5 C2.5 13.6 5 14.5 8 14.5 C11 14.5 13.5 13.6 13.5 12.5 V3.5" />
      <path d="M2.5 8 C2.5 9.1 5 10 8 10 C11 10 13.5 9.1 13.5 8" />
    </svg>
  );
}
function IconIntegrations() {
  // Two interlocking links of a chain
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M6.5 9.5 L9.5 6.5" />
      <path d="M7.5 5.5 L9 4 A2.4 2.4 0 0 1 12.4 7.4 L11 8.9" />
      <path d="M8.5 10.5 L7 12 A2.4 2.4 0 0 1 3.6 8.6 L5 7.1" />
    </svg>
  );
}

const leftConcepts = [
  { label: "Interface", icon: <IconInterface /> },
  { label: "Logic", icon: <IconLogic /> },
];
const rightConcepts = [
  { label: "Data", icon: <IconData /> },
  { label: "Integrations", icon: <IconIntegrations /> },
];

export function SystemsMap() {
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const reduced = prefersReducedMotion();
    let deviceTimer: number | undefined;

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from("[data-concept]", {
          xPercent: (_i: number, el: Element) =>
            el.getAttribute("data-dir") === "left" ? -60 : 60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
      }
    }, root);

    // Randomly cycle the device silhouette to show the same layout adapting
    // across screen sizes, instead of a single static device.
    if (!reduced) {
      const svgs = Array.from(
        root.current?.querySelectorAll<HTMLElement>("[data-device]") ?? [],
      );
      let current = svgs[0];
      deviceTimer = window.setInterval(() => {
        let next = current;
        while (next === current) {
          next = svgs[Math.floor(Math.random() * svgs.length)] ?? current;
        }
        current?.classList.replace("opacity-100", "opacity-0");
        next?.classList.replace("opacity-0", "opacity-100");
        current = next;
      }, 2600);
    }

    return () => {
      ctx.revert();
      window.clearInterval(deviceTimer);
    };
  }, []);

  return (
    <div
      ref={root}
      className="mx-auto flex max-w-3xl items-center justify-center gap-3 pb-28 md:gap-5 md:pb-40"
    >
      <div className="flex flex-col items-end gap-3 md:gap-4">
        {leftConcepts.map((c) => (
          <span
            key={c.label}
            data-concept
            data-dir="left"
            className="flex items-center gap-1.5 rounded-full border border-ink-4/40 px-3.5 py-1.5 text-xs text-ink-2 md:px-4 md:py-2 md:text-sm"
          >
            {c.icon}
            {c.label}
          </span>
        ))}
      </div>

      <div className="relative h-24 w-28 flex-shrink-0 text-ink-4 md:h-44 md:w-56">
        {/* Laptop */}
        <svg data-device className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-500" viewBox="0 0 112 88" fill="none">
          <rect x="22" y="6" width="68" height="46" rx="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="56" cy="14" r="1.4" fill="currentColor" />
          <path d="M10 64 L102 64 L92 78 L20 78 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <line x1="22" y1="64" x2="90" y2="64" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        {/* Tablet — landscape slate with side bezels and home dot */}
        <svg data-device className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500" viewBox="0 0 112 88" fill="none">
          <rect x="18" y="10" width="76" height="58" rx="6" stroke="currentColor" strokeWidth="1.8" />
          <rect x="27" y="17" width="58" height="44" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="89.5" cy="39" r="1.6" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Phone */}
        <svg data-device className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500" viewBox="0 0 112 88" fill="none">
          <rect x="40" y="4" width="32" height="80" rx="7" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="56" cy="12" r="1.4" fill="currentColor" />
          <line x1="48" y1="74" x2="64" y2="74" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col items-start gap-3 md:gap-4">
        {rightConcepts.map((c) => (
          <span
            key={c.label}
            data-concept
            data-dir="right"
            className="flex items-center gap-1.5 rounded-full border border-ink-4/40 px-3.5 py-1.5 text-xs text-ink-2 md:px-4 md:py-2 md:text-sm"
          >
            {c.icon}
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}
