import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { wireframeNodes } from "@/lib/portfolio-data";

export function SystemsWireframe() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context((self) => {
      const horizontal = window.matchMedia("(min-width: 768px)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: self.selector ? root.current : root.current,
          start: "top 85%",
          once: true,
        },
        onComplete: () => startPulse(horizontal),
      });

      tl.from("[data-node]", {
        opacity: 0,
        scale: 0.92,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      }).from(
        "[data-connector]",
        {
          scaleX: horizontal ? 0 : 1,
          scaleY: horizontal ? 1 : 0,
          transformOrigin: horizontal ? "left center" : "top center",
          opacity: 0,
          duration: 0.35,
          ease: "none",
          stagger: 0.12,
        },
        0.25,
      );

      function startPulse(isHorizontal: boolean) {
        const dots = gsap.utils.toArray<HTMLElement>("[data-pulse]");
        const prop = isHorizontal ? "xPercent" : "yPercent";
        gsap.set(dots, { opacity: 1 });
        gsap.fromTo(
          dots,
          { [prop]: -50 },
          {
            [prop]: 50,
            duration: 1.1,
            ease: "sine.inOut",
            stagger: { each: 0.18, repeat: -1, yoyo: true },
            repeat: -1,
            yoyo: true,
          },
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <figure
      ref={root}
      aria-label="Systems diagram: Client to Middleware to Server to Third-party"
      className="w-full"
    >
      <ul className="flex flex-col items-stretch gap-0 md:flex-row md:items-center">
        {wireframeNodes.map((node, i) => (
          <li key={node} className="flex flex-col items-center md:flex-row md:flex-1">
            <span
              data-node
              className="w-full rounded-md border border-hairline bg-surface-2 px-3 py-2 text-center text-[11px] font-medium tracking-wide text-ink-2 uppercase md:w-auto md:flex-1"
            >
              {node}
            </span>
            {i < wireframeNodes.length - 1 && (
              <span
                aria-hidden="true"
                data-connector
                className="relative my-2 h-6 w-px bg-hairline md:my-0 md:mx-3 md:h-px md:w-6"
              >
                <span
                  data-pulse
                  className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-2 opacity-0"
                />
              </span>
            )}
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-xs text-ink-4">
        Request and response, end to end.
      </figcaption>
    </figure>
  );
}
