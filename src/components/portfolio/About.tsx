import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function About() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-about-line]",
        { opacity: 0.18 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={root}
      className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40"
    >
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        About
      </h2>
      <div className="mt-10 max-w-2xl space-y-8">
        <p
          data-about-line
          className="text-2xl leading-snug font-medium text-ink-1 md:text-3xl"
        >
          I'm a front-end engineer with a Computer Science degree and a habit of
          building clean, accessible, visually quiet web experiences.
        </p>
        <p data-about-line className="text-lg leading-relaxed text-ink-2">
          My current work centers on modern React, but I'm also moving into mobile
          development to broaden the stack and grow into full-stack engineering.
        </p>
        <p data-about-line className="text-lg leading-relaxed text-ink-2">
          Outside the editor, I'm deep in the analysis and business of football —
          tactics through to economics. I'm curious about human psychology, usually
          via podcasts, and about the documentaries that show how people and
          societies actually change.
        </p>
        <p data-about-line className="text-lg leading-relaxed text-ink-2">
          At the core: learning, problem-solving, and turning complex ideas into
          interfaces that feel obvious.
        </p>
      </div>
    </section>
  );
}
