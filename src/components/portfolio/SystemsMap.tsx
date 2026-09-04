import { useRef, useState, type ReactElement } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

function IconInterface() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <line x1="2" y1="6" x2="14" y2="6" />
    </svg>
  );
}
function IconLogic() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="4" cy="4" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="4" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <path d="M5.2 4.6 L10.8 7.4 M5.2 11.4 L10.8 8.6" />
    </svg>
  );
}
function IconData() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <ellipse cx="8" cy="4" rx="6" ry="2" />
      <path d="M2 4 V12 C2 13.1 4.7 14 8 14 C11.3 14 14 13.1 14 12 V4" />
      <path d="M2 8 C2 9.1 4.7 10 8 10 C11.3 10 14 9.1 14 8" />
    </svg>
  );
}
function IconIntegrations() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2v4M11 2v4M4 6h8v3a4 4 0 0 1-8 0V6z" />
      <path d="M8 13v1.5" />
    </svg>
  );
}

type ConceptKey = "interface" | "logic" | "data" | "integrations";

const leftConcepts: { key: ConceptKey; label: string; icon: ReactElement }[] = [
  { key: "interface", label: "Interface", icon: <IconInterface /> },
  { key: "logic", label: "Logic", icon: <IconLogic /> },
];
const rightConcepts: { key: ConceptKey; label: string; icon: ReactElement }[] = [
  { key: "data", label: "Data", icon: <IconData /> },
  { key: "integrations", label: "Integrations", icon: <IconIntegrations /> },
];

// Placeholder copy — replace each with your own take on how the concept
// connects to how you actually work as an engineer.
const notes: Record<ConceptKey, string> = {
  interface: "— add a note: how does Interface connect to how you work as an engineer? —",
  logic: "— add a note: how does Logic connect to how you work as an engineer? —",
  data: "— add a note: how does Data connect to how you work as an engineer? —",
  integrations: "— add a note: how does Integrations connect to how you work as an engineer? —",
};

function ConceptButton({
  concept,
  dir,
  openKey,
  onToggle,
}: {
  concept: { key: ConceptKey; label: string; icon: ReactElement };
  dir: "left" | "right";
  openKey: ConceptKey | null;
  onToggle: (key: ConceptKey) => void;
}) {
  const selected = openKey === concept.key;
  return (
    <button
      type="button"
      data-concept
      data-dir={dir}
      data-selected={selected}
      aria-pressed={selected}
      onClick={() => onToggle(concept.key)}
      className={`icon-3d-wrap flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs text-ink-2 transition-colors md:px-4 md:py-2 md:text-sm ${
        selected ? "border-ink-1 bg-surface-3 text-ink-1" : "border-ink-4/40"
      }`}
    >
      <span className="icon-3d">{concept.icon}</span>
      {concept.label}
    </button>
  );
}

export function SystemsMap() {
  const root = useRef<HTMLDivElement>(null);
  const [openKey, setOpenKey] = useState<ConceptKey | null>(null);

  const toggle = (key: ConceptKey) =>
    setOpenKey((prev) => (prev === key ? null : key));

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
    <div ref={root}>
      <div className="mx-auto flex max-w-lg items-center justify-center gap-6 md:max-w-xl md:gap-9">
        <div className="flex flex-col items-end gap-4">
          {leftConcepts.map((c) => (
            <ConceptButton key={c.key} concept={c} dir="left" openKey={openKey} onToggle={toggle} />
          ))}
        </div>

        <div className="relative h-[60px] w-[72px] flex-shrink-0 text-ink-4 md:h-[94px] md:w-[112px]">
          <svg data-device className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-500" viewBox="0 0 72 60" fill="none">
            <rect x="14" y="4" width="44" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="10" r="1" fill="currentColor" />
            <path d="M6 44 L66 44 L60 52 L12 52 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <line x1="14" y1="44" x2="58" y2="44" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg data-device className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500" viewBox="0 0 72 60" fill="none">
            <rect x="19" y="7" width="34" height="46" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="13" r="1" fill="currentColor" />
            <line x1="27" y1="48" x2="45" y2="48" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg data-device className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500" viewBox="0 0 72 60" fill="none">
            <rect x="28" y="3" width="16" height="54" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="9" r="1" fill="currentColor" />
            <line x1="31" y1="51" x2="41" y2="51" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="flex flex-col items-start gap-4">
          {rightConcepts.map((c) => (
            <ConceptButton key={c.key} concept={c} dir="right" openKey={openKey} onToggle={toggle} />
          ))}
        </div>
      </div>

      <div
        className={`mx-auto grid max-w-md transition-[grid-template-rows] duration-300 ease-out ${
          openKey ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="rounded-xl border border-dashed border-ink-4/50 px-4 py-3.5 text-sm leading-relaxed text-ink-2 italic">
            {openKey ? notes[openKey] : ""}
          </p>
        </div>
      </div>
    </div>
  );
}