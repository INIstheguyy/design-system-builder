import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { SystemsWireframe } from "./SystemsWireframe";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="mx-auto max-w-5xl px-6 pt-40 pb-28 md:px-10 md:pt-56 md:pb-40"
    >
      <h1
        data-hero-item
        className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-ink-1 md:text-7xl"
      >
        Inioluwa
        <br />
        Komolafe
      </h1>
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        <p
          data-hero-item
          className="max-w-md text-lg leading-relaxed text-ink-2"
        >
          Systems engineer across web and mobile. I build accessible, responsive
          interfaces — and the systems underneath them — with a bias for clean code
          and how everything connects.
        </p>
        <div data-hero-item className="max-w-sm">
          <SystemsWireframe />
        </div>
      </div>
    </section>
  );
}
