import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { projects } from "@/lib/portfolio-data";

export function Work() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-work-item]").forEach((item) => {
        const clip = item.querySelector("[data-work-clip]");
        const inner = item.querySelector("[data-work-inner]");
        const heading = item.querySelector("[data-work-heading]");
        const rule = item.querySelector("[data-work-rule]");

        // Scroll-expand: the detail block opens as the item enters view and
        // collapses again on scroll back up. Transform/clip only — no layout
        // animation, so Cumulative Layout Shift stays at zero.
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 50%",
              scrub: 0.5,
            },
          })
          .fromTo(
            heading,
            { yPercent: 40, opacity: 0.2 },
            { yPercent: 0, opacity: 1, ease: "none" },
            0,
          )
          .fromTo(
            rule,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, ease: "none" },
            0,
          )
          .fromTo(
            clip,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", ease: "none" },
            0.1,
          )
          .fromTo(
            inner,
            { yPercent: -18, opacity: 0.4 },
            { yPercent: 0, opacity: 1, ease: "none" },
            0.1,
          );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={root}
      className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40"
    >
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Work
      </h2>
      <ul className="mt-10 border-t border-hairline">
        {projects.map((project) => (
          <li
            key={project.title}
            data-work-item
            className="border-b border-hairline py-10"
          >
            <article className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <div className="overflow-hidden">
                  <h3
                    data-work-heading
                    className="font-display text-3xl font-semibold tracking-tight text-ink-1 md:text-4xl"
                  >
                    {project.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-ink-4">{project.year}</p>
                <span
                  aria-hidden="true"
                  data-work-rule
                  className="mt-4 block h-px w-full bg-hairline"
                />
              </div>
              <div data-work-clip className="overflow-hidden">
                <div data-work-inner>
                  <p className="max-w-xl text-lg leading-relaxed text-ink-2">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-sm text-ink-3">
                    {project.stack.join(" · ")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="border-b border-ink-4 pb-0.5 text-sm text-ink-1 transition-colors hover:border-ink-1"
                    >
                      Live demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="border-b border-hairline pb-0.5 text-sm text-ink-3 transition-colors hover:border-ink-2 hover:text-ink-1"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
