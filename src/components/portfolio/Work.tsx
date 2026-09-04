import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { projects } from "@/lib/portfolio-data";

export function Work() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-work-item]");
      const clips = items.map((item) => item.querySelector("[data-work-clip]"));
      const inners = items.map((item) => item.querySelector("[data-work-inner]"));

      if (reduced) {
        // No pin, no scrub — every item just sits open and readable.
        gsap.set(clips, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(inners, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(clips, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set(inners, { yPercent: -18, opacity: 0.4 });

      // Pin the section, then step through items one at a time as the user
      // keeps scrolling: close the previous item, open the next, hold
      // briefly. Scrub ties this directly to scroll position, so scrolling
      // back up reverses the exact same sequence for free.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=" + items.length * 650,
          pin: true,
          scrub: 1,
        },
      });

      items.forEach((_, i) => {
        if (i > 0) {
          tl.to(inners[i - 1], { yPercent: -18, opacity: 0.4, ease: "none", duration: 0.4 }).to(
            clips[i - 1],
            { clipPath: "inset(0% 0% 100% 0%)", ease: "none", duration: 0.4 },
            "<",
          );
        }
        tl.to(clips[i], { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 0.6 })
          .to(inners[i], { yPercent: 0, opacity: 1, ease: "none", duration: 0.6 }, "<")
          .to({}, { duration: 0.5 }); // hold beat so each item is readable before advancing
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={root}
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28 md:px-10 md:py-40"
    >
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Work
      </h2>
      <ul className="mt-10 border-t border-hairline">
        {projects.map((project) => (
          <li key={project.title} data-work-item className="border-b border-hairline py-10">
            <article className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink-1 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-4">{project.year}</p>
                <span aria-hidden="true" className="mt-4 block h-px w-full bg-hairline" />
              </div>
              <div data-work-clip className="overflow-hidden">
                <div data-work-inner>
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
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
