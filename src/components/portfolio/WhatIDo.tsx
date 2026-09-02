import { useEffect, useRef, useState } from "react";

import { prefersReducedMotion } from "@/lib/gsap";
import { skills } from "@/lib/portfolio-data";

export function WhatIDo() {
  const [active, setActive] = useState<string | null>(null);
  const [hoverCapable, setHoverCapable] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  // Detect once whether this device has real pointer hover, so touch
  // devices get an automatic stand-in instead of an effect nobody can trigger.
  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    setHoverCapable(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setHoverCapable(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (hoverCapable || prefersReducedMotion()) {
      window.clearInterval(timerRef.current);
      return;
    }
    const tick = () => {
      setActive((prev) => {
        let next = prev;
        while (next === prev) {
          next = skills[Math.floor(Math.random() * skills.length)] ?? prev;
        }
        return next;
      });
    };
    tick();
    timerRef.current = window.setInterval(tick, 1800);
    return () => window.clearInterval(timerRef.current);
  }, [hoverCapable]);

  return (
    <section
      id="what-i-do"
      className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40"
    >
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        What I Do
      </h2>
      <ul
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
        onMouseLeave={() => hoverCapable && setActive(null)}
      >
        {skills.map((skill) => {
          const isActive = active === skill;
          const dimmed = active !== null && !isActive;
          return (
            <li
              key={skill}
              onMouseEnter={() => hoverCapable && setActive(skill)}
              onFocus={() => setActive(skill)}
              onBlur={() => hoverCapable && setActive(null)}
              tabIndex={0}
              className={`font-display text-2xl tracking-tight transition-all duration-300 outline-none md:text-4xl ${
                isActive
                  ? "font-bold text-ink-1"
                  : dimmed
                    ? "font-medium text-ink-4"
                    : "font-medium text-ink-2"
              }`}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
