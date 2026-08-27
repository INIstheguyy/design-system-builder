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
        const detail = item.querySelector("[data-work-detail]");
        const heading = item.querySelector("[data-work-heading]");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "top 55%",
              scrub: 0.6,
            },
          })
          .fromTo(
            heading,
            { y: 24, opacity: 0.25 },
            { y: 0, opacity: 1, ease: "none" },
            0,
          )
          .fromTo(
            detail,
            { y: 36, opacity: 0, scaleY: 0.94, transformOrigin: "top center" },
            { y: 0, opacity: 1, scaleY: 1, ease: "none" },
            0.05,
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
              <div data-work-heading>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink-1 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-4">{project.year}</p>
              </div>
              <div data-work-detail>
                <p className="max-w-xl text-lg leading-relaxed text-ink-2">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm text-ink-3">{project.stack.join(" · ")}</p>
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
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
